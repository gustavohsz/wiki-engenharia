---
title: Como criar uma página nesta wiki
description: Passo a passo para criar uma página nova, em português e inglês, e publicá-la no site.
sidebar_position: 10
---

## Objetivo

Padronizar a criação de páginas para que toda página nova tenha o mesmo formato, exista nos dois idiomas e não quebre o site.

## Quando usar

- **Use** para qualquer página nova em qualquer seção: ficha da Biblioteca BIM/CAD, ficha do Catálogo, aula, resumo de norma, procedimento ou cálculo.
- **Não use** para mudanças no código do site (navbar, componentes, calculadoras). Essas mudanças seguem o `AGENTS.md` do repositório.

## Pré-requisitos

- Cópia local do [repositório](https://github.com/gustavohsz/wiki-engenharia), clonada pelo GitHub Desktop.
- Node.js 20 ou superior, com `npm install` já rodado dentro da pasta `site/`.
- Um editor de texto, como o VS Code.

## Passo a passo

1. **Escolha o modelo.** A pasta `templates/` (na raiz do repositório, fora do site) tem um modelo por tipo de página. Exemplos: `normas-resumo.md` para normas e `calculos-pagina.md` para cálculos.
2. **Copie o modelo para a seção.** O destino é `site/docs/<seção>/`. Dê ao arquivo um nome em minúsculas, sem acento e com hífens. Exemplo: `site/docs/normas/abnt-nbr-5419.md`.
3. **Preencha o cabeçalho.** As linhas entre `---` no topo do arquivo são o cabeçalho. Defina:
   - `title`: o título que aparece na página e no menu;
   - `description`: um resumo de uma linha;
   - `sidebar_position`: a ordem no menu, em que números menores aparecem primeiro.
4. **Escreva o conteúdo.** Substitua tudo que estiver entre `[colchetes]` e apague as seções que não se aplicam.
5. **Imagens.** Coloque os arquivos em `site/static/img/<seção>/` e use `![Descrição da imagem](/img/<seção>/arquivo.png)`. A descrição (texto alternativo) é obrigatória.
6. **Links para outras páginas.** Use o caminho do arquivo `.md`, como em `[queda de tensão](../calculos/queda-de-tensao.md)`. Assim o build avisa se o link quebrar.
7. **Crie o espelho em inglês.** Copie o arquivo para o mesmo caminho dentro de `site/i18n/en/docusaurus-plugin-content-docs/current/` e traduza. Pode começar como um resumo, mas o arquivo precisa existir.
8. **Teste o build.** No terminal, dentro de `site/`, rode o comando abaixo:

   ```bash
   npm run build
   ```

   Para ver a página enquanto escreve, rode `npm start` e abra http://localhost:3000/wiki-engenharia/. Para ver a versão em inglês, rode `npm start -- --locale en`.
9. **Publique.** No GitHub Desktop, revise os arquivos alterados, escreva uma mensagem de commit curta, faça o commit e o push. O site é republicado sozinho em 2 a 3 minutos, e o andamento aparece na aba **Actions** do repositório.

## Verificação

- O `npm run build` terminou com `[SUCCESS]` para `build` e para `build\en`.
- Depois do push, a execução mais recente na aba **Actions** está verde.
- A página aparece no site publicado, em português e em inglês (pelo seletor de idioma).

## Problemas comuns

| Sintoma | Causa provável | Solução |
|---|---|---|
| Build falha com "Broken link" | Link para uma página que não existe ou com caminho errado | Confira o caminho do `.md` no link. O build mostra qual página tem o link quebrado |
| Página em inglês aparece em português | Falta o espelho em `site/i18n/en/...` | Crie o arquivo no mesmo caminho relativo |
| Página não aparece no menu | Arquivo fora de `site/docs/` ou com extensão diferente de `.md` | Mova o arquivo para a pasta da seção |
| Seção aparece com nome de pasta no menu | Pasta nova sem `index.md` | Crie um `index.md` com `title`. Não use `label` no `_category_.json` |
| Imagem não aparece | Caminho errado ou imagem fora de `site/static/` | Use o caminho a partir de `/img/`, sem `static` |
| Job "Publicar" falha na aba Actions | Pages desativado no GitHub | Confira em Settings › Pages se a origem é "GitHub Actions" |

## Veja também

- [Resumo da ABNT NBR 5410](../normas/abnt-nbr-5410.md): exemplo de resumo de norma.
- [Queda de tensão em condutores](../calculos/queda-de-tensao.md): exemplo de página de cálculo.
