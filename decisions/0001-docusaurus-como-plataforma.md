# 0001 — Docusaurus como plataforma

- Status: Aceita
- Data: 2026-10-24

## Contexto

O mantenedor quer uma wiki de engenharia pública, versionada no GitHub, fácil para criar páginas e adicionar conteúdo, com calculadoras interativas na seção Cálculos e suporte a dois idiomas. Conhecimento básico de programação. Edita sozinho.

## Decisão

Usar **Docusaurus** (preset `classic`, JavaScript). Cada página é um arquivo Markdown em `site/docs/`. O mantenedor escolheu esta opção entre as apresentadas.

## Alternativas consideradas

- **Astro Starlight:** mais leve, comunidade menor.
- **MkDocs Material:** configuração mais simples (Python), mas calculadoras interativas são mais trabalhosas.

## Consequências

- Exige **Node.js >= 20** para rodar e buildar.
- Calculadoras interativas são componentes React embutidos via MDX.
- i18n nativo (PT/EN) com estrutura de pastas própria (ver `AGENTS.md`).
- Pontos fracos aceitos: ecossistema JavaScript mais pesado que o de Markdown puro, e atualizações de versão maior do Docusaurus podem exigir migração.
