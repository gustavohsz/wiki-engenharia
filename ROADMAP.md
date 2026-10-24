# ROADMAP

Legenda: `[x]` feito · `[ ]` pendente. Atualizado em 2026-10-24.

## Fase 0 — Fundação

- [x] Repositório público criado
- [x] Scaffold do Docusaurus em `site/`
- [x] Arquivos de continuidade: `AGENTS.md`, `CLAUDE.md`, `ROADMAP.md`, `decisions/`, `templates/`

## Fase 1 — Configuração (exige build local)

- [ ] `npm install` e `npm run build` no scaffold para validar o ambiente
- [ ] `docusaurus.config.js`: título, tagline, `url: 'https://gustavohsz.github.io'`, `baseUrl: '/wiki-engenharia/'`, `organizationName: 'gustavohsz'`, `projectName: 'wiki-engenharia'`
- [ ] i18n: `defaultLocale: 'pt-BR'`, `locales: ['pt-BR', 'en']`, seletor de idioma na navbar
- [ ] Remover blog e `docs/tutorial-*` de exemplo; ajustar `editUrl` ou removê-lo
- [ ] Criar as 6 seções em `site/docs/` e os espelhos em `site/i18n/en/...`, cada uma com `_category_.json` e `index.md`
- [ ] Navbar com as 6 seções, footer sem links de exemplo
- [ ] `npx docusaurus write-translations --locale en` para a interface em inglês
- [ ] `.gitignore` conferido na raiz e em `site/`

## Fase 2 — Publicação

- [ ] Workflow em `.github/workflows/` que faz build de `site/` e publica no GitHub Pages
- [ ] No GitHub: Settings → Pages → Source: **GitHub Actions** (ação manual do mantenedor)
- [ ] Decidir a licença: código (ex.: MIT) e conteúdo (ex.: CC BY 4.0). Sem licença, ninguém pode legalmente reutilizar o material

## Fase 3 — Conteúdo piloto

- [ ] Uma página real em cada seção, usando os modelos de `templates/`, em PT e EN
- [ ] Validar se os modelos funcionam na prática e ajustá-los

## Fase 4 — Primeira calculadora

- [ ] Escolher o cálculo (sugestão: queda de tensão em condutores)
- [ ] Componente React em `site/src/components/` embutido na página via MDX
- [ ] Página explicativa com norma, premissas e limites

## Fase 5 — Biblioteca BIM/CAD

- [ ] Confirmar a decisão de armazenamento (`decisions/0003`)
- [ ] Definir convenção de nomes e de versão (Revit, AutoCAD)
- [ ] Primeiras fichas com download

## Fase 6 — Melhorias

- [ ] Busca (avaliar plugin de busca local da comunidade com suporte a PT e EN)
- [ ] Verificação automática de links externos
- [ ] Revisar o conteúdo em inglês
