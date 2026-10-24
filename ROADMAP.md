# ROADMAP

Legenda: `[x]` feito · `[ ]` pendente. Atualizado em 2026-10-24.

## Fase 0 — Fundação

- [x] Repositório público criado
- [x] Scaffold do Docusaurus em `site/`
- [x] Arquivos de continuidade: `AGENTS.md`, `CLAUDE.md`, `ROADMAP.md`, `decisions/`, `templates/`

## Fase 1 — Configuração (exige build local) ✅

- [x] `npm install` e `npm run build` no scaffold para validar o ambiente (o build falhou no minificador HTML do SWC no Windows; resolvido com `future.faster.swcHtmlMinimizer: false`)
- [x] `docusaurus.config.js`: título, tagline, `url: 'https://gustavohsz.github.io'`, `baseUrl: '/wiki-engenharia/'`, `organizationName: 'gustavohsz'`, `projectName: 'wiki-engenharia'`
- [x] i18n: `defaultLocale: 'pt-BR'`, `locales: ['pt-BR', 'en']`, seletor de idioma na navbar
- [x] Remover blog e `docs/tutorial-*` de exemplo; `editUrl` apontando para este repositório
- [x] Criar as 6 seções em `site/docs/` e os espelhos em `site/i18n/en/...`, cada uma com `_category_.json` e `index.md`
- [x] Navbar com as 6 seções, footer sem links de exemplo, página inicial com cartões das seções
- [x] `npm run write-translations -- --locale en` para a interface em inglês
- [x] `.gitignore` conferido na raiz e em `site/`
- [ ] Trocar logo, favicon e imagem de compartilhamento (ainda são os do Docusaurus)

## Fase 2 — Publicação

- [x] Workflow `.github/workflows/deploy.yml`: faz o build de `site/` a cada push na `main` (só se `site/` ou o workflow mudarem) e publica no GitHub Pages. Em pull requests só testa o build. Também pode ser rodado à mão pela aba Actions
- [ ] No GitHub: Settings → Pages → Source: **GitHub Actions** (ação manual do mantenedor)
- [ ] Primeira publicação conferida em https://gustavohsz.github.io/wiki-engenharia/
- [x] Licença decidida (`decisions/0005`): MIT para o código (`LICENSE`), CC BY 4.0 para o conteúdo (`LICENSE-CONTENT.md`), informadas no rodapé do site

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
