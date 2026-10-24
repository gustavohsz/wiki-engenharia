---
title: "Aula 1: Tensões e sistemas de distribuição"
description: Como configurar as definições de tensão e os sistemas de distribuição de um projeto elétrico brasileiro no Revit.
sidebar_position: 1
---

**Curso:** [Revit para projeto elétrico](./index.md) · **Módulo:** 1, Configuração do projeto · **Duração estimada:** 30 minutos

## Objetivos

Ao final desta aula você será capaz de:

1. Explicar o papel das definições de tensão e dos sistemas de distribuição no Revit.
2. Configurar os sistemas 127/220 V e 220/380 V usados no Brasil.
3. Atribuir um sistema de distribuição a um quadro e entender por que um circuito pode "não aparecer" para um equipamento.

## Pré-requisitos

- Revit 2022 ou superior, com um projeto aberto a partir de um template que tenha a disciplina elétrica (por exemplo, o template "Elétrico" que vem com o Revit).
- Noções de sistemas trifásicos: tensão de fase (entre fase e neutro) e tensão de linha (entre fases).

## Conteúdo

### Por que configurar isto primeiro

O Revit só deixa ligar um equipamento a um circuito quando três informações combinam:

1. a **tensão** do conector do equipamento (por exemplo, 127 V ou 220 V);
2. o **número de polos** do conector (1 polo para fase-neutro, 2 polos para fase-fase);
3. o **sistema de distribuição** do quadro, que diz quais tensões ele oferece.

Os templates de fábrica do Revit vêm com tensões norte-americanas (120/208 V, 277/480 V). Se você não criar as tensões brasileiras, os equipamentos não vão encontrar quadro compatível e o botão de criar circuito não aparece. Por isso esta é a primeira configuração de qualquer projeto elétrico.

### Onde fica a configuração

Na faixa de opções: **Gerenciar › Configurações de MEP › Configurações elétricas** (em inglês, *Manage › MEP Settings › Electrical Settings*). No painel da esquerda estão os dois itens desta aula: **Definições de tensão** (*Voltage Definitions*) e **Sistemas de distribuição** (*Distribution Systems*).

### Passo 1: definições de tensão

Cada definição de tensão tem um **nome**, um **valor** e uma faixa **mínima-máxima**. Um equipamento é considerado compatível quando a tensão do conector dele cai dentro da faixa. Sugestão para projetos brasileiros:

| Nome | Valor | Mínimo | Máximo |
|---|---|---|---|
| 127 V | 127 V | 115 V | 135 V |
| 220 V | 220 V | 200 V | 240 V |
| 380 V | 380 V | 360 V | 400 V |

As faixas não podem se sobrepor. Se 127 V e 220 V se cruzarem, o Revit não sabe qual definição usar.

### Passo 2: sistemas de distribuição

O sistema de distribuição descreve a alimentação de um quadro. Os campos principais, com os nomes da interface em inglês:

- **Phase** (fase): *Three* para trifásico, *Single* para monofásico.
- **Configuration** (configuração): *Wye* para estrela, *Delta* para triângulo. Só se aplica a sistemas trifásicos.
- **Wires** (fios): número de condutores, sem contar o de proteção. Trifásico com neutro = 4.
- **L-L Voltage**: tensão entre fases.
- **L-G Voltage**: tensão entre fase e neutro (ou terra).

Crie os dois sistemas mais comuns no Brasil:

| Nome | Phase | Configuration | Wires | L-L Voltage | L-G Voltage |
|---|---|---|---|---|---|
| 127/220 V 3F+N | Three | Wye | 4 | 220 V | 127 V |
| 220/380 V 3F+N | Three | Wye | 4 | 380 V | 220 V |

Use no nome do sistema o mesmo texto que vai aparecer no quadro de cargas e no diagrama unifilar. Isso evita retrabalho na documentação.

### Passo 3: atribuir o sistema ao quadro

1. Insira um quadro de distribuição (família da categoria *Electrical Equipment*).
2. Selecione o quadro e, nas **Propriedades**, defina o parâmetro **Sistema de distribuição** como "127/220 V 3F+N".
3. Selecione uma tomada de 127 V e 1 polo, crie um circuito de força e escolha o quadro. Ele aparece como opção porque a tensão e o número de polos combinam com o sistema.
4. Faça o mesmo com um equipamento de 220 V e 2 polos, como um chuveiro. No sistema 127/220 V, os 220 V vêm da ligação entre duas fases.

### Erro comum: o quadro não aparece na lista

Se, ao criar o circuito, o quadro não aparecer na lista, confira nesta ordem:

1. O quadro tem sistema de distribuição atribuído?
2. A tensão do conector do equipamento cai dentro de alguma faixa das definições de tensão?
3. O número de polos do equipamento é possível no sistema? Um equipamento de 380 V não se liga a um quadro 127/220 V.

### Salve no template

Depois de configurar, salve o projeto como **template** (.rte) do escritório. Assim os próximos projetos já começam com as tensões brasileiras.

## Exercício

1. Num projeto novo, crie as três definições de tensão e os dois sistemas de distribuição desta aula.
2. Insira dois quadros, um 127/220 V e um 220/380 V.
3. Ligue uma tomada de 127 V ao primeiro quadro e um equipamento trifásico de 380 V ao segundo.
4. Tente ligar o equipamento de 380 V ao quadro 127/220 V e observe que o Revit não permite. Explique por quê, com base nos três critérios do início da aula.

## Material

- Vídeo: ainda não disponível.
- Arquivos de apoio: ainda não disponíveis.

## Próxima aula

Aula 2: Cargas e fatores de demanda *(planejada)*.
