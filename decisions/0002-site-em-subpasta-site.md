# 0002 — Site em subpasta `site/`

- Status: Aceita
- Data: 2026-10-24

## Contexto

O repositório precisa de arquivos de projeto (`AGENTS.md`, `ROADMAP.md`, decisões, templates) que não devem aparecer no site publicado. O scaffold do Docusaurus recusa gerar o projeto numa pasta que já existe.

## Decisão

A aplicação Docusaurus fica em `site/`. Os arquivos de projeto ficam na raiz.

## Alternativas consideradas

- **Docusaurus na raiz:** menos um nível de pasta, mas mistura código do site com documentação do projeto e exigiria mover arquivos à mão.

## Consequências

- Comandos `npm` rodam dentro de `site/`.
- O workflow de publicação precisa usar `working-directory: site` e apontar o artefato para `site/build`.
- Alterações apenas em `decisions/`, `templates/` e arquivos da raiz não afetam o site.
