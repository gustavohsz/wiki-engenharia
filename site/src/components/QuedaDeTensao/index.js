// Calculadora de queda de tensão (fórmula simplificada, cobre a 70 °C).
// O cálculo fica em calculo.mjs (testado com "npm test"); aqui só a interface.
// Uso numa página .md:  import QuedaDeTensao from '@site/src/components/QuedaDeTensao';
//                       <QuedaDeTensao />

import {useId, useMemo, useState} from 'react';
import clsx from 'clsx';
import Translate, {translate} from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {calcular, SECOES} from './calculo.mjs';
import styles from './styles.module.css';

// Valores iniciais = exemplo resolvido da página (resultado: 2,34%).
const INICIAL = {
  tipo: 'monofasico',
  tensao: '220',
  modo: 'potencia',
  potencia: '5500',
  corrente: '25',
  cosPhi: '1',
  comprimento: '20',
  secao: '4',
  quedaMontante: '1.5',
  limite: '4',
};

// Aceita vírgula ou ponto como separador decimal.
const num = (texto) => (String(texto).trim() === '' ? NaN : Number(String(texto).replace(',', '.')));

function Campo({id, rotulo, ajuda, children}) {
  return (
    <div className={styles.campo}>
      <label htmlFor={id}>{rotulo}</label>
      {children}
      {ajuda && <small id={`${id}-ajuda`}>{ajuda}</small>}
    </div>
  );
}

export default function QuedaDeTensao() {
  const {i18n} = useDocusaurusContext();
  const uid = useId();
  const id = (nome) => `${uid}-${nome}`;
  // Separador decimal do exemplo conforme o idioma ("1,5" em português, "1.5" em inglês).
  const [v, setV] = useState(() => ({
    ...INICIAL,
    quedaMontante: i18n.currentLocale === 'en' ? '1.5' : '1,5',
  }));
  const muda = (nome) => (ev) => setV((ant) => ({...ant, [nome]: ev.target.value}));

  const fmt = useMemo(() => {
    const f = (casas) => new Intl.NumberFormat(i18n.currentLocale, {maximumFractionDigits: casas});
    return {c1: f(1), c2: f(2)};
  }, [i18n.currentLocale]);

  const r = calcular({
    tipo: v.tipo,
    modo: v.modo,
    tensao: num(v.tensao),
    potencia: num(v.potencia),
    corrente: num(v.corrente),
    cosPhi: num(v.cosPhi),
    comprimento: num(v.comprimento),
    secao: num(v.secao),
    quedaMontante: num(v.quedaMontante),
    limite: num(v.limite),
  });

  const mensagensErro = {
    tensao: translate({id: 'calc.qt.erro.tensao', message: 'Informe uma tensão maior que zero.'}),
    carga: translate({id: 'calc.qt.erro.carga', message: 'Informe a potência ou a corrente, maior que zero.'}),
    cosPhi: translate({id: 'calc.qt.erro.cosPhi', message: 'O fator de potência deve estar entre 0 e 1.'}),
    comprimento: translate({id: 'calc.qt.erro.comprimento', message: 'Informe um comprimento maior que zero.'}),
    secao: translate({id: 'calc.qt.erro.secao', message: 'Escolha uma seção da lista.'}),
    quedaMontante: translate({id: 'calc.qt.erro.quedaMontante', message: 'A queda a montante não pode ser negativa.'}),
    limite: translate({id: 'calc.qt.erro.limite', message: 'Informe um limite maior que zero.'}),
  };

  return (
    <section
      className={styles.raiz}
      aria-label={translate({id: 'calc.qt.aria', message: 'Calculadora de queda de tensão'})}>
      <div className={styles.calculadora}>
        <form className={styles.formulario} onSubmit={(ev) => ev.preventDefault()} noValidate>
          <fieldset>
            <legend>
              <Translate id="calc.qt.grupo.circuito">Circuito</Translate>
            </legend>
            <Campo id={id('tipo')} rotulo={translate({id: 'calc.qt.tipo', message: 'Tipo de circuito'})}>
              <select id={id('tipo')} value={v.tipo} onChange={muda('tipo')}>
                <option value="monofasico">
                  {translate({id: 'calc.qt.tipo.mono', message: '2 condutores (F-N ou F-F)'})}
                </option>
                <option value="trifasico">
                  {translate({id: 'calc.qt.tipo.tri', message: 'Trifásico (3 condutores)'})}
                </option>
              </select>
            </Campo>
            <Campo
              id={id('tensao')}
              rotulo={translate({id: 'calc.qt.tensao', message: 'Tensão nominal (V)'})}
              ajuda={translate({
                id: 'calc.qt.tensao.ajuda',
                message: 'Entre fase e neutro no circuito F-N; entre fases nos demais.',
              })}>
              <input
                id={id('tensao')}
                type="text"
                inputMode="decimal"
                list={id('tensoes')}
                value={v.tensao}
                onChange={muda('tensao')}
                aria-describedby={`${id('tensao')}-ajuda`}
              />
              <datalist id={id('tensoes')}>
                <option value="127" />
                <option value="220" />
                <option value="380" />
              </datalist>
            </Campo>
          </fieldset>

          <fieldset>
            <legend>
              <Translate id="calc.qt.grupo.carga">Carga</Translate>
            </legend>
            <div className={styles.opcoes} role="radiogroup">
              <label>
                <input type="radio" name={id('modo')} value="potencia" checked={v.modo === 'potencia'} onChange={muda('modo')} />{' '}
                <Translate id="calc.qt.modo.potencia">Potência (W)</Translate>
              </label>
              <label>
                <input type="radio" name={id('modo')} value="corrente" checked={v.modo === 'corrente'} onChange={muda('modo')} />{' '}
                <Translate id="calc.qt.modo.corrente">Corrente (A)</Translate>
              </label>
            </div>
            {v.modo === 'potencia' ? (
              <Campo id={id('potencia')} rotulo={translate({id: 'calc.qt.potencia', message: 'Potência ativa (W)'})}>
                <input id={id('potencia')} type="text" inputMode="decimal" value={v.potencia} onChange={muda('potencia')} />
              </Campo>
            ) : (
              <Campo id={id('corrente')} rotulo={translate({id: 'calc.qt.corrente', message: 'Corrente de projeto (A)'})}>
                <input id={id('corrente')} type="text" inputMode="decimal" value={v.corrente} onChange={muda('corrente')} />
              </Campo>
            )}
            <Campo id={id('cosPhi')} rotulo={translate({id: 'calc.qt.cosPhi', message: 'Fator de potência (cos φ)'})}>
              <input id={id('cosPhi')} type="text" inputMode="decimal" value={v.cosPhi} onChange={muda('cosPhi')} />
            </Campo>
          </fieldset>

          <fieldset>
            <legend>
              <Translate id="calc.qt.grupo.condutor">Condutor de cobre</Translate>
            </legend>
            <Campo
              id={id('comprimento')}
              rotulo={translate({id: 'calc.qt.comprimento', message: 'Comprimento do circuito, só ida (m)'})}>
              <input id={id('comprimento')} type="text" inputMode="decimal" value={v.comprimento} onChange={muda('comprimento')} />
            </Campo>
            <Campo id={id('secao')} rotulo={translate({id: 'calc.qt.secao', message: 'Seção (mm²)'})}>
              <select id={id('secao')} value={v.secao} onChange={muda('secao')}>
                {SECOES.map((s) => (
                  <option key={s} value={String(s)}>
                    {fmt.c1.format(s)}
                  </option>
                ))}
              </select>
            </Campo>
          </fieldset>

          <fieldset>
            <legend>
              <Translate id="calc.qt.grupo.limites">Limites</Translate>
            </legend>
            <Campo
              id={id('quedaMontante')}
              rotulo={translate({id: 'calc.qt.quedaMontante', message: 'Queda já existente a montante (%)'})}
              ajuda={translate({
                id: 'calc.qt.quedaMontante.ajuda',
                message: 'Queda do alimentador até o quadro deste circuito. Use 0 se não souber.',
              })}>
              <input
                id={id('quedaMontante')}
                type="text"
                inputMode="decimal"
                value={v.quedaMontante}
                onChange={muda('quedaMontante')}
                aria-describedby={`${id('quedaMontante')}-ajuda`}
              />
            </Campo>
            <Campo
              id={id('limite')}
              rotulo={translate({id: 'calc.qt.limite', message: 'Limite total admitido (%)'})}
              ajuda={translate({
                id: 'calc.qt.limite.ajuda',
                message: '4% com alimentação pela rede pública de BT; 7% com transformador próprio (NBR 5410, 6.2.7).',
              })}>
              <input
                id={id('limite')}
                type="text"
                inputMode="decimal"
                value={v.limite}
                onChange={muda('limite')}
                aria-describedby={`${id('limite')}-ajuda`}
              />
            </Campo>
          </fieldset>
        </form>

        <div className={styles.resultado} aria-live="polite">
          <h3 className={styles.tituloResultado}>
            <Translate id="calc.qt.resultado">Resultado</Translate>
          </h3>
          {r.erros.length > 0 ? (
            <div className="alert alert--secondary" role="status">
              <ul className={styles.listaErros}>
                {r.erros.map((e) => (
                  <li key={e}>{mensagensErro[e]}</li>
                ))}
              </ul>
            </div>
          ) : (
            <>
              <dl className={styles.valores}>
                <div>
                  <dt>
                    <Translate id="calc.qt.res.corrente">Corrente</Translate>
                  </dt>
                  <dd>{fmt.c2.format(r.corrente)} A</dd>
                </div>
                <div>
                  <dt>
                    <Translate id="calc.qt.res.volts">Queda neste circuito</Translate>
                  </dt>
                  <dd>
                    {fmt.c2.format(r.volts)} V · {fmt.c2.format(r.percentual)}%
                  </dd>
                </div>
                <div>
                  <dt>
                    <Translate id="calc.qt.res.total">Queda total</Translate>
                  </dt>
                  <dd>{fmt.c2.format(r.total)}%</dd>
                </div>
              </dl>

              <div className={clsx('alert', r.atende ? 'alert--success' : 'alert--danger')} role="status">
                {r.atende ? (
                  <Translate
                    id="calc.qt.res.atende"
                    values={{total: fmt.c2.format(r.total), limite: fmt.c2.format(num(v.limite))}}>
                    {'Atende: {total}% ≤ {limite}%.'}
                  </Translate>
                ) : (
                  <Translate
                    id="calc.qt.res.naoAtende"
                    values={{total: fmt.c2.format(r.total), limite: fmt.c2.format(num(v.limite))}}>
                    {'Não atende: {total}% > {limite}%.'}
                  </Translate>
                )}
              </div>

              <ul className={styles.sugestoes}>
                <li>
                  {r.disponivel > 0 ? (
                    <Translate
                      id="calc.qt.res.comprimentoMax"
                      values={{secao: fmt.c1.format(num(v.secao)), comprimento: fmt.c1.format(r.comprimentoMaximo)}}>
                      {'Comprimento máximo com {secao} mm²: {comprimento} m.'}
                    </Translate>
                  ) : (
                    <Translate id="calc.qt.res.semFolga">
                      A queda a montante já atinge o limite: não sobra margem para este circuito.
                    </Translate>
                  )}
                </li>
                <li>
                  {r.secaoMinima !== null ? (
                    <Translate id="calc.qt.res.secaoMinima" values={{secao: fmt.c1.format(r.secaoMinima)}}>
                      {'Menor seção que atende à queda de tensão: {secao} mm².'}
                    </Translate>
                  ) : (
                    <Translate id="calc.qt.res.semSecao">
                      Nenhuma seção até 25 mm² atende. Reduza o comprimento ou use a fórmula completa com R e X do
                      fabricante.
                    </Translate>
                  )}
                </li>
              </ul>
            </>
          )}
          <p className={styles.aviso}>
            <Translate id="calc.qt.aviso">
              Verifica só a queda de tensão. A seção final também precisa atender aos demais critérios da NBR 5410,
              como capacidade de condução, seção mínima e proteção.
            </Translate>
          </p>
        </div>
      </div>
    </section>
  );
}
