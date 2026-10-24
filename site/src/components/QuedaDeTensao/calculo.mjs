// Cálculo de queda de tensão: funções puras, sem React, para poder testar.
// Método e premissas: site/docs/calculos/queda-de-tensao.md
// (fórmula simplificada, só resistência, cobre a 70 °C).

// Resistividade do cobre a 20 °C (Ω·mm²/m) e coeficiente de temperatura (1/°C).
const RHO_20 = 0.017241;
const ALFA = 0.00393;
const TEMPERATURA_SERVICO = 70; // °C, máximo para isolação de PVC

/** Resistividade do cobre na temperatura de serviço: ≈ 0,0206 Ω·mm²/m. */
export const RHO = RHO_20 * (1 + ALFA * (TEMPERATURA_SERVICO - 20));

/** Seções comerciais (mm²) dentro do limite de validade da fórmula simplificada. */
export const SECOES = [1.5, 2.5, 4, 6, 10, 16, 25];

/** Fator do circuito: 2 para dois condutores carregados, √3 para trifásico. */
export function fatorCircuito(tipo) {
  return tipo === 'trifasico' ? Math.sqrt(3) : 2;
}

/** Corrente de projeto (A) a partir da potência ativa (W). */
export function correnteDaPotencia({tipo, potencia, tensao, cosPhi}) {
  const k = tipo === 'trifasico' ? Math.sqrt(3) : 1;
  return potencia / (k * tensao * cosPhi);
}

/** Queda de tensão em volts. Comprimento em m, seção em mm². */
export function quedaVolts({tipo, corrente, comprimento, secao, cosPhi}) {
  return (fatorCircuito(tipo) * RHO * comprimento * corrente * cosPhi) / secao;
}

/** Comprimento máximo (m) para não passar de `percentual` % de queda. */
export function comprimentoMaximo({tipo, corrente, secao, cosPhi, tensao, percentual}) {
  return (percentual / 100) * tensao * secao / (fatorCircuito(tipo) * RHO * corrente * cosPhi);
}

/**
 * Cálculo completo. Retorna {erros} se alguma entrada for inválida,
 * ou o resultado com corrente, queda (V e %), total, folga e sugestões.
 */
export function calcular(e) {
  const erros = [];
  const positivo = (v) => Number.isFinite(v) && v > 0;
  if (!positivo(e.tensao)) erros.push('tensao');
  if (!positivo(e.comprimento)) erros.push('comprimento');
  if (!(Number.isFinite(e.cosPhi) && e.cosPhi > 0 && e.cosPhi <= 1)) erros.push('cosPhi');
  if (!SECOES.includes(e.secao)) erros.push('secao');
  if (e.modo === 'potencia' ? !positivo(e.potencia) : !positivo(e.corrente)) erros.push('carga');
  if (!(Number.isFinite(e.quedaMontante) && e.quedaMontante >= 0)) erros.push('quedaMontante');
  if (!positivo(e.limite)) erros.push('limite');
  if (erros.length) return {erros};

  const corrente = e.modo === 'potencia' ? correnteDaPotencia(e) : e.corrente;
  const base = {...e, corrente};
  const volts = quedaVolts(base);
  const percentual = (volts / e.tensao) * 100;
  const total = e.quedaMontante + percentual;
  const disponivel = e.limite - e.quedaMontante; // % que sobra para este circuito
  const atende = total <= e.limite;

  // Menor seção da lista que atende ao limite (só pela queda de tensão).
  const secaoMinima =
    SECOES.find((s) => e.quedaMontante + (quedaVolts({...base, secao: s}) / e.tensao) * 100 <= e.limite) ?? null;

  const lMax = disponivel > 0 ? comprimentoMaximo({...base, percentual: disponivel}) : 0;

  return {erros: [], corrente, volts, percentual, total, disponivel, atende, secaoMinima, comprimentoMaximo: lMax};
}
