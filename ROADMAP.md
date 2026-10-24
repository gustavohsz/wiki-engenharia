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
- [x] Logo, favicon e imagem de compartilhamento próprios (feito na Fase 6; ver `marca/`)

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

- [x] Decisão de armazenamento confirmada (`decisions/0003`): todos os arquivos para download em GitHub Releases; no repositório, só fichas e prévias
- [x] Convenção de nomes e de versão (Revit, AutoCAD) registrada na `decisions/0003`
- [x] Modelo da ficha ajustado e procedimento `documentacao/como-publicar-um-arquivo-bim-cad.md` (PT/EN)
- [ ] Primeiras fichas com download. **Depende do mantenedor:** escolher e preparar o primeiro arquivo próprio, nomeado pela convenção

## Fase 6 — Melhorias

- [x] Busca local em PT e EN com `@easyops-cn/docusaurus-search-local` (`decisions/0006`). Junto com ela: navbar ativa por seção, GitHub como ícone e faixa compacta da navbar até 1279 px
- [x] Identidade visual própria: logo (raio), cores azul e âmbar, favicon SVG/ICO, apple-touch-icon e imagem de compartilhamento, com fontes e gerador em `marca/`
- [x] Verificação semanal de links externos com lychee (`decisions/0007`, `.github/workflows/verificar-links.yml`): abre ou fecha a issue "Links quebrados" sozinha, sem bloquear a publicação
- [ ] Primeira execução manual do workflow de links conferida no GitHub
- [ ] Revisar o conteúdo em inglês
