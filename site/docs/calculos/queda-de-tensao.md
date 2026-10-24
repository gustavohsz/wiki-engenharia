---
title: Queda de tensão em condutores
description: Cálculo da queda de tensão em circuitos de baixa tensão e verificação dos limites da NBR 5410.
sidebar_position: 10
---

import QuedaDeTensao from '@site/src/components/QuedaDeTensao';

:::caution
Ferramenta de apoio. Não substitui a análise e a responsabilidade técnica do profissional habilitado. Confira sempre as premissas abaixo.
:::

## Objetivo

Determinar a queda de tensão num circuito de baixa tensão, ou seja, quanto da tensão da fonte se perde nos condutores até a carga, e verificar se ela fica dentro dos limites da norma. Esse costuma ser o critério que define a seção do condutor em circuitos longos. Uma queda excessiva faz motores aquecerem, lâmpadas perderem fluxo luminoso e equipamentos eletrônicos funcionarem mal.

## Norma de referência

ABNT NBR 5410:2004 (Versão Corrigida 2008), seção 6.2.7. Veja o [resumo da NBR 5410](../normas/abnt-nbr-5410.md).

| Situação | Limite de queda de tensão |
|---|---|
| Alimentação pela rede pública de baixa tensão | 4%, do ponto de entrega até a carga |
| Transformador ou geração própria | 7%, do secundário do transformador até a carga |
| Circuitos terminais, em qualquer caso | 4% |

Os limites valem para o percurso **total**, alimentador mais circuito terminal, e não para cada trecho separado.

## Premissas e limites de aplicação

- Regime permanente, com carga equilibrada nos circuitos trifásicos.
- **Condutores de cobre.** A resistividade é tomada na temperatura máxima de serviço da isolação (70 °C para PVC). É uma premissa conservadora, porque o condutor real costuma operar mais frio.
- **Fórmula simplificada:** despreza a reatância indutiva. Ela é adequada para seções de até cerca de 25 mm². Para seções maiores, use a fórmula completa, com R e X do catálogo do fabricante.
- Não vale para partida de motores, em que a corrente transitória é várias vezes a nominal e a norma admite limites próprios.
- Resultado em volts e em porcentagem da tensão nominal do circuito.

## Fórmulas

**Fórmula completa** (com resistência e reatância por quilômetro):

```text
Circuito monofásico ou bifásico (2 condutores carregados):
    ΔV = 2 · I · L · (R · cos φ + X · sen φ)

Circuito trifásico equilibrado:
    ΔV = √3 · I · L · (R · cos φ + X · sen φ)

Queda percentual:
    ΔV% = ΔV / V × 100
```

**Fórmula simplificada** (só a resistência, com seção em mm²):

```text
Monofásico ou bifásico:   ΔV = 2  · ρ · L · I · cos φ / S
Trifásico:                ΔV = √3 · ρ · L · I · cos φ / S
```

| Variável | Significado | Unidade |
|---|---|---|
| ΔV | Queda de tensão | V |
| I | Corrente de projeto do circuito | A |
| L | Comprimento do circuito (só ida) | km na fórmula completa, m na simplificada |
| R, X | Resistência e reatância do condutor | Ω/km |
| ρ | Resistividade do cobre a 70 °C ≈ 0,0206 | Ω·mm²/m |
| S | Seção do condutor | mm² |
| cos φ | Fator de potência da carga | — |
| V | Tensão nominal do circuito: entre fase e neutro no monofásico F-N, entre fases nos demais | V |

O valor de ρ vem da resistividade do cobre a 20 °C (0,017241 Ω·mm²/m) corrigida para 70 °C com o coeficiente de temperatura 0,00393 /°C: 0,017241 × (1 + 0,00393 × 50) ≈ 0,0206 Ω·mm²/m.

## Calculadora

A calculadora abre preenchida com os dados do [exemplo resolvido](#exemplo-resolvido) abaixo. Aceita vírgula ou ponto como separador decimal.

<QuedaDeTensao />

## Exemplo resolvido

**Dados:** chuveiro de 5500 W ligado entre duas fases de um sistema 127/220 V (circuito de 220 V, 2 condutores carregados), cos φ = 1, comprimento de 20 m. O condutor é o [cabo flexível 450/750 V em PVC](../catalogo/condutores/cabo-flexivel-450-750-v-pvc.md) de 4 mm², em eletroduto embutido em alvenaria (método B1).

1. Corrente de projeto: I = 5500 / 220 = **25 A**. Pela capacidade de condução, 2,5 mm² (24 A no método B1) não serve, e 4 mm² (32 A) atende.
2. Queda de tensão: ΔV = 2 × 0,02063 × 20 × 25 × 1 / 4 ≈ **5,16 V**.
3. Queda percentual: ΔV% = 5,16 / 220 × 100 ≈ **2,34%**, menor que os 4% admitidos para o circuito terminal.
4. Verificação do percurso total: se o alimentador do quadro já tem 1,5% de queda, o total é 1,5 + 2,34 = **3,84%**, ainda dentro dos 4% da alimentação em baixa tensão.

**Comprimento máximo.** Com o alimentador em 1,5%, sobram 2,5% para este circuito. Isolando L na fórmula:

```text
L máx = ΔV% × V × S / (100 × 2 × ρ × I)
      = 2,5 × 220 × 4 / (100 × 2 × 0,02063 × 25) ≈ 21,3 m
```

Acima de cerca de 21 m, este circuito precisaria de condutor de 6 mm².

## Referências

- ABNT NBR 5410:2004, Versão Corrigida 2008, seção 6.2.7 (quedas de tensão) e seção 6.2.5 (capacidade de condução de corrente).
- Catálogos técnicos dos fabricantes de cabos, para os valores de R e X por quilômetro.
