// Testes do cálculo de queda de tensão. Rodar em site/: npm test
import test from 'node:test';
import assert from 'node:assert/strict';
import {calcular, RHO} from './calculo.mjs';
const near = (a, b, tol = 0.01) => assert.ok(Math.abs(a - b) <= tol, `${a} ≠ ${b}`);
const base = {tipo: 'monofasico', modo: 'potencia', potencia: 5500, tensao: 220, cosPhi: 1, comprimento: 20, secao: 4, quedaMontante: 1.5, limite: 4};

test('ρ a 70 °C', () => near(RHO, 0.02063, 0.00001));
test('exemplo resolvido da página', () => {
  const r = calcular(base);
  near(r.corrente, 25); near(r.volts, 5.16); near(r.percentual, 2.34); near(r.total, 3.84);
  assert.equal(r.atende, true); near(r.comprimentoMaximo, 21.3, 0.1);
  assert.equal(r.secaoMinima, 4); // 2,5 mm² dá 1,5 + 3,75 = 5,25% > 4%
});
test('entrada por corrente igual à por potência', () => {
  const r = calcular({...base, modo: 'corrente', corrente: 25});
  near(r.percentual, 2.34);
});
test('trifásico: I = P/(√3·V·cosφ) e fator √3', () => {
  const r = calcular({...base, tipo: 'trifasico', potencia: 10000, tensao: 380, cosPhi: 0.85, comprimento: 50, secao: 6, quedaMontante: 0});
  near(r.corrente, 10000 / (Math.sqrt(3) * 380 * 0.85));
  near(r.volts, Math.sqrt(3) * RHO * 50 * r.corrente * 0.85 / 6);
});
test('não atende e sugere seção maior', () => {
  const r = calcular({...base, comprimento: 40});
  assert.equal(r.atende, false); assert.equal(r.secaoMinima, 10); // 6 mm²: 1,5 + 3,13 = 4,63%
});
test('nenhuma seção atende', () => assert.equal(calcular({...base, comprimento: 500}).secaoMinima, null));
test('montante já acima do limite: comprimento máximo 0', () => assert.equal(calcular({...base, quedaMontante: 5}).comprimentoMaximo, 0));
test('entradas inválidas', () => {
  assert.deepEqual(calcular({...base, comprimento: 0, cosPhi: 1.2, secao: 3, potencia: NaN}).erros, ['comprimento', 'cosPhi', 'secao', 'carga']);
  assert.deepEqual(calcular({...base, quedaMontante: -1}).erros, ['quedaMontante']);
});
