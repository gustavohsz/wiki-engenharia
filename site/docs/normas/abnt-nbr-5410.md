---
title: ABNT NBR 5410 — Instalações elétricas de baixa tensão
description: Requisitos para projeto, execução, verificação e manutenção de instalações elétricas de baixa tensão.
sidebar_position: 10
---

:::caution
Este é um **resumo próprio**, sem reprodução do texto da norma. Consulte sempre a edição vigente na fonte oficial.
:::

## Identificação

| Campo | Valor |
|---|---|
| Número | ABNT NBR 5410 |
| Título oficial | Instalações elétricas de baixa tensão |
| Edição / ano | 2004, Versão Corrigida 2008 (confirmada pela ABNT em 2014 e 2018) |
| Organismo | ABNT (Comitê Brasileiro de Eletricidade, ABNT/CB-003) |
| Status | Vigente. Está em revisão: a nova edição passou por consulta nacional e ainda não foi publicada |
| Fonte oficial | [Catálogo ABNT](https://www.abntcatalogo.com.br/) (busque por "NBR 5410") |

:::info Revisão em andamento
Quando a nova edição for publicada, esta página será revista. Até lá, projetos seguem a edição de 2004. Desconfie de arquivos que circulam como "NBR 5410:2026": a única fonte confiável é o catálogo da ABNT.
:::

## Escopo

A norma define as condições que uma instalação elétrica de baixa tensão precisa cumprir para garantir a segurança de pessoas e animais, o funcionamento adequado e a conservação dos bens.

- **Aplica-se** a instalações alimentadas em tensão nominal de até 1000 V em corrente alternada (frequência inferior a 400 Hz) ou até 1500 V em corrente contínua. Isso inclui edificações residenciais, comerciais, públicas, industriais e agropecuárias, além de locais como canteiros de obra, feiras e áreas externas.
- **Não se aplica**, entre outros casos, a redes públicas de distribuição, a sistemas de tração, a instalações de veículos, embarcações e aeronaves, e à proteção contra descargas atmosféricas, que é assunto da ABNT NBR 5419.

## Pontos principais

### Princípios e características gerais

- A instalação deve ser dividida em circuitos de acordo com a necessidade, de modo que uma falha num circuito não deixe toda a instalação sem energia.
- A norma define os **esquemas de aterramento** TN (nas variantes TN-S, TN-C e TN-C-S), TT e IT. A escolha do esquema determina como é feita a proteção contra choques. Em edificações alimentadas pela rede pública de baixa tensão, os esquemas mais comuns são o TN-C-S e o TT.

### Proteção contra choques elétricos

- A proteção combina duas medidas. A proteção **básica** impede o contato com partes vivas, por isolação, barreiras ou invólucros. A proteção **supletiva** atua em caso de falha, por meio de equipotencialização e seccionamento automático da alimentação.
- O **dispositivo diferencial-residual (DR) de alta sensibilidade** (corrente diferencial nominal de até 30 mA) é obrigatório como proteção adicional em circuitos de locais com risco maior. Isso inclui banheiros, áreas externas, cozinhas, lavanderias, áreas de serviço, garagens e outras áreas internas molhadas (seção 5.1.3.2.2).

### Proteção contra sobrecorrentes e sobretensões

- Todo circuito precisa de proteção contra **sobrecarga** e contra **curto-circuito**, coordenada com a capacidade de condução de corrente do condutor.
- A norma trata da proteção contra **sobretensões transitórias** com dispositivos de proteção contra surtos (DPS), coordenada com a ABNT NBR 5419.

### Dimensionamento de condutores

O condutor de um circuito precisa atender, ao mesmo tempo, a seis critérios: seção mínima, capacidade de condução de corrente, queda de tensão, proteção contra sobrecarga, proteção contra curto-circuito e proteção contra choques. A seção adotada é a maior entre as encontradas.

- **Capacidade de condução:** depende do material, da isolação, da maneira de instalar (métodos de referência como B1, B2, C e D), do número de condutores carregados, da temperatura ambiente e do agrupamento de circuitos. Os valores ficam nas tabelas da seção 6.2.5 e devem ser corrigidos pelos fatores de temperatura e de agrupamento.
- **Seções mínimas de cobre (seção 6.2.6):** 1,5 mm² para circuitos de iluminação e 2,5 mm² para circuitos de força, como tomadas.
- **Queda de tensão (seção 6.2.7):** o limite é de 4% a partir do ponto de entrega, quando a alimentação vem da rede pública de baixa tensão. Com transformador próprio, o limite é de 7% a partir do secundário. Em qualquer caso, os circuitos terminais não podem passar de 4%. Veja a página [Queda de tensão em condutores](../calculos/queda-de-tensao.md).

### Identificação dos condutores

- Neutro: **azul-claro**. Condutor de proteção (PE): **verde-amarelo** ou verde. Os condutores de fase não podem usar essas cores.

### Locais de habitação (seção 9.5)

- A norma traz regras específicas para residências. Elas definem a quantidade mínima de pontos de tomada por cômodo (em função do perímetro ou da área) e a potência mínima a prever para iluminação e tomadas.
- Iluminação e tomadas devem ficar em circuitos separados. Equipamentos com corrente nominal acima de 10 A, como chuveiro e forno, precisam de circuito exclusivo.

### Verificação final e manutenção

- Antes de entrar em uso, a instalação passa por **inspeção visual e ensaios**: continuidade dos condutores de proteção, resistência de isolamento, seccionamento automático e funcionamento dos DR, entre outros.
- A norma também orienta a manutenção periódica da instalação.

## Relação com outras normas

- **ABNT NBR 5419:** proteção contra descargas atmosféricas. Coordena o uso de DPS e a equipotencialização.
- **ABNT NBR 14039:** instalações elétricas de média tensão (de 1,0 kV a 36,2 kV). Começa onde a NBR 5410 termina.
- **ABNT NBR NM 247-3:** cabos isolados em PVC para até 450/750 V, muito usados em instalações prediais. Veja a ficha [Cabo flexível 450/750 V isolado em PVC](../catalogo/condutores/cabo-flexivel-450-750-v-pvc.md).
- **Normas das distribuidoras:** cada concessionária tem padrões próprios de entrada de energia, que se somam à NBR 5410.

## Aplicação em projeto

- **Revit:** os sistemas de distribuição e as tensões do projeto (127/220 V ou 220/380 V) refletem o esquema adotado. Veja a aula [Tensões e sistemas de distribuição](../cursos/revit-para-projeto-eletrico/01-tensoes-e-sistemas-de-distribuicao.md).
- **Dimensionamento:** a seção dos condutores deve passar em todos os critérios, e a queda de tensão costuma ser o critério determinante em circuitos longos.
- **Documentação:** o quadro de cargas e o diagrama unifilar devem mostrar, para cada circuito, a proteção (disjuntor e DR) e a seção dos condutores.

## Verificado em

2026-10-24
