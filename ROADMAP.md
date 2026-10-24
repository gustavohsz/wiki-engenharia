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
- [x] No GitHub: Settings → Pages → Source: **GitHub Actions**
- [x] Primeira publicação conferida em https://gustavohsz.github.io/wiki-engenharia/ (PT e EN) em 2026-10-24
- [x] Navbar apertada em telas médias: rótulo curto "Biblioteca"/"Library" e, entre 997 e 1199 px, só o logo e itens mais próximos (`site/src/css/custom.css`). Folga medida de ~130 px em 1000 e 1200 px
- [x] Licença decidida (`decisions/0005`): MIT para o código (`LICENSE`), CC BY 4.0 para o conteúdo (`LICENSE-CONTENT.md`), informadas no rodapé do site

## Fase 3 — Conteúdo piloto

- [x] Páginas piloto em PT e EN, usando os modelos de `templates/`:
  - Normas: resumo da ABNT NBR 5410 (`normas/abnt-nbr-5410.md`)
  - Cálculos: queda de tensão, com teoria e exemplo resolvido; a calculadora vem na Fase 4 (`calculos/queda-de-tensao.md`)
  - Catálogo: categoria Condutores e ficha genérica do cabo flexível 450/750 V PVC (`catalogo/condutores/`)
  - Cursos: "Revit para projeto elétrico", apresentação e Aula 1 (`cursos/revit-para-projeto-eletrico/`)
  - Documentação: como criar uma página nesta wiki (`documentacao/como-criar-uma-pagina.md`)
- [ ] Biblioteca BIM/CAD: primeira ficha. Depende de um arquivo próprio do mantenedor e da decisão `0003` (fica para a Fase 5)
- [x] Modelos validados na prática e ajustados (título com aspas, subpastas, fichas genéricas; ver `templates/README.md`)
- [x] Revisão técnica do mantenedor das páginas piloto (2026-10-24)

## Fase 4 — Primeira calculadora ✅

- [x] Cálculo escolhido: queda de tensão em condutores (fórmula simplificada, cobre a 70 °C, seções de 1,5 a 25 mm²)
- [x] Componente `site/src/components/QuedaDeTensao/` embutido na página PT e EN. O cálculo fica separado em `calculo.mjs`, com testes em `calculo.test.mjs` (`npm test`, que também roda no workflow antes do build)
- [x] Página explicativa com norma, premissas e limites (Fase 3), agora com a calculadora aberta no exemplo resolvido
- [x] Testado no navegador: entrada por potência e por corrente, trifásico, vírgula decimal, erro de validação, celular (375 px), modo claro e escuro
- [ ] Próximas calculadoras (sugestões): capacidade de condução com fatores de correção, fórmula completa com R e X para seções acima de 25 mm²

## Fase 5 — Biblioteca BIM/CAD

- [ ] Confirmar a decisão de armazenamento (`decisions/0003`)
- [ ] Definir convenção de nomes e de versão (Revit, AutoCAD)
- [ ] Primeiras fichas com download

## Fase 6 — Melhorias

- [ ] Busca (avaliar plugin de busca local da comunidade com suporte a PT e EN)
- [ ] Verificação automática de links externos
- [ ] Revisar o conteúdo em inglês
