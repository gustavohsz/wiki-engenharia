---
title: Como publicar um arquivo da Biblioteca BIM/CAD
description: Passo a passo para publicar famílias Revit, blocos DWG e templates em GitHub Releases e criar a ficha.
sidebar_position: 20
---

## Objetivo

Publicar um arquivo para download (família Revit, bloco DWG, template) de forma que o link seja permanente e a versão do arquivo fique ligada à ficha. A regra vem da decisão `decisions/0003` do repositório: **arquivos para download vão para GitHub Releases, nunca para o repositório.**

## Quando usar

- **Use** para a primeira publicação de um item e para cada versão nova dele.
- **Não use** para imagens de prévia: elas ficam no repositório, em `site/static/img/biblioteca-bim-cad/`.

## Pré-requisitos

- Arquivo próprio, ou de terceiros com licença que permita redistribuição (veja a licença do conteúdo no `LICENSE-CONTENT.md`).
- Acesso ao repositório no site do GitHub, com login. O GitHub Desktop não cria releases.
- Arquivos já nomeados pela convenção:

| Tipo | Formato do nome | Exemplo |
|---|---|---|
| Revit (`.rfa`, `.rte`) | `<item>_v<versão>_r<ano do Revit>.<ext>` | `tomada-2p-t-10a_v1.0_r2022.rfa` |
| AutoCAD (`.dwg`) | `<item>_v<versão>_dwg<ano do formato>.dwg` | `quadro-distribuicao_v1.0_dwg2018.dwg` |

O identificador do item (`<item>`) usa minúsculas, sem acento, com hífens, e é o mesmo nome do arquivo da ficha. O ano do Revit é a versão em que o arquivo foi **salvo**, que também é a versão mínima para abri-lo.

## Passo a passo

1. **Prepare os arquivos.** Para cada versão do Revit que você quer oferecer, abra a família nessa versão, faça "Salvar como" e use o nome da convenção. Limpe a família antes ("Remover não utilizados") para reduzir o tamanho.
2. **Abra a página de releases.** No site do GitHub, vá ao repositório, clique em **Releases** (na coluna da direita) e depois em **Draft a new release**.
3. **Crie a tag.** Em **Choose a tag**, digite `<item>-v<versão>` (exemplo: `tomada-2p-t-10a-v1.0`) e clique em **Create new tag … on publish**. Deixe o alvo (*Target*) como `main`.
4. **Preencha título e descrição.**
   - Título: `<Nome do item> v<versão>` (exemplo: "Tomada 2P+T 10 A v1.0").
   - Descrição: uma linha sobre o item, o que mudou nesta versão e o link da ficha no site.
5. **Anexe os arquivos.** Arraste os arquivos para a área **Attach binaries by dropping them here**. Espere todos terminarem de carregar.
6. **Desmarque "Set as the latest release".** O selo "Latest" é para versões do projeto, não para itens da biblioteca.
7. **Publique.** Clique em **Publish release**.
8. **Copie os links.** Na release publicada, clique com o botão direito em cada arquivo e copie o endereço do link. O formato é `https://github.com/gustavohsz/wiki-engenharia/releases/download/<tag>/<arquivo>`.
9. **Crie ou atualize a ficha.** Use o modelo `templates/biblioteca-bim-cad-ficha.md`, coloque os links na tabela de Download e registre a versão no Histórico. Siga o procedimento [Como criar uma página nesta wiki](./como-criar-uma-pagina.md) para o espelho em inglês, o build e o push.

## Regras

- **Nunca substitua um arquivo de uma release publicada.** Para corrigir algo, crie a versão seguinte (`v1.1`) numa release nova. Assim, quem baixou ou linkou a versão antiga continua com o mesmo arquivo.
- Mude o número **maior** da versão (`v2.0`) quando a mudança quebrar projetos que já usam o item, por exemplo ao renomear ou remover parâmetros. Nos demais casos, mude o **menor**.
- Guarde os arquivos de trabalho (originais, rascunhos) no OneDrive, não no repositório.

## Verificação

- O link copiado, aberto numa janela anônima do navegador, baixa o arquivo direto.
- O arquivo baixado abre na versão do Revit indicada no nome.
- A ficha publicada mostra os links e eles funcionam.

## Problemas comuns

| Sintoma | Causa provável | Solução |
|---|---|---|
| Link dá erro 404 | Tag ou nome do arquivo digitado diferente no link | Copie o link direto da página da release em vez de montá-lo à mão |
| A família não abre no Revit do usuário | Arquivo salvo numa versão mais nova do Revit | Ofereça também um arquivo salvo na versão mais antiga suportada |
| A release aparece como "Latest" | A opção "Set as the latest release" ficou marcada | Edite a release e desmarque a opção |
| Arquivo maior que o esperado | Família não foi limpa antes de salvar | "Remover não utilizados" no Revit e salve de novo, numa versão nova |

## Veja também

- [Como criar uma página nesta wiki](./como-criar-uma-pagina.md)
- [Biblioteca BIM/CAD](../biblioteca-bim-cad/index.md)
