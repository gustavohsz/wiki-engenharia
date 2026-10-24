# AGENTS.md — Guia para agentes de IA

> Leia este arquivo inteiro antes de qualquer alteração. Ele é a fonte de verdade para continuar o projeto em qualquer plataforma de IA.
> Ao terminar uma sessão de trabalho, atualize a seção **7. Estado atual** e o `ROADMAP.md`.

## 1. O projeto

Wiki de engenharia **pública**, em **português (idioma padrão) e inglês**, voltada a **engenharia elétrica com Revit e AutoCAD**. Mantida por uma única pessoa (GitHub: `gustavohsz`).

- Repositório: https://github.com/gustavohsz/wiki-engenharia
- Publicação prevista: GitHub Pages, em `https://gustavohsz.github.io/wiki-engenharia/`
- Origem: definida em conversa de planejamento em 2026-10-24. As decisões estão registradas em `decisions/`.

### Seções do site

| Seção | Pasta em `site/docs/` | Conteúdo |
|---|---|---|
| Biblioteca BIM/CAD | `biblioteca-bim-cad/` | Fichas de famílias Revit, blocos DWG, templates, com prévia, parâmetros, versão mínima do software e link de download |
| Catálogo | `catalogo/` | Fichas de produtos e componentes com especificações padronizadas, por categoria |
| Cursos | `cursos/` | Trilhas com módulos e aulas em sequência |
| Normas | `normas/` | Resumos próprios, índice por tema e links para as fontes oficiais |
| Documentação | `documentacao/` | Procedimentos, padrões internos, guias |
| Cálculos | `calculos/` | Página explicativa (teoria, premissas, norma) mais calculadora interativa |

## 2. Como colaborar com o mantenedor

- Responda em **português**.
- O mantenedor tem conhecimento básico de programação e usa o **GitHub Desktop** para commit e push. Dê passos explícitos, comandos prontos para copiar e uma frase de "porquê" para cada decisão técnica.
- Seja direto e crítico: aponte falhas, riscos e alternativas antes de concordar com uma ideia. Não elogie sem motivo concreto.
- Peça confirmação **antes** de: apagar arquivos, reescrever histórico do Git, mudar uma decisão registrada em `decisions/`, publicar conteúdo de terceiros.
- Se algo bloquear (acesso, rede, permissão), avise antes de improvisar. Não contorne bloqueios de política.

## 3. Stack

- **Docusaurus 3.10.2** (preset `classic`), **JavaScript** (módulos ESM), **React 19**, **Node >= 20**.
- O site fica na pasta **`site/`**. Os arquivos do projeto (este guia, roadmap, decisões, templates) ficam na raiz e **não** entram no site publicado.
- `site/docusaurus.config.js` usa `onBrokenLinks: 'throw'`: link quebrado quebra o build. Isso é intencional.
- `future.faster.swcHtmlMinimizer: false` no config: o minificador HTML nativo do SWC falha no Windows do mantenedor (`ERR_SWC_NATIVE_CACHE`, por causa das permissões NTFS de `C:\` e `AppData\Local`). Não reative sem testar o build no Windows.

Comandos (sempre dentro de `site/`):

| Comando | Para quê |
|---|---|
| `npm install` | Instalar dependências (uma vez, ou quando o `package.json` mudar) |
| `npm start` | Servidor local com recarga automática (http://localhost:3000/wiki-engenharia/). Serve **um idioma por vez**: para o inglês, `npm start -- --locale en` |
| `npm run build` | Build de produção. **Rode antes de dar qualquer tarefa por concluída** |
| `npm run serve` | Servir o build gerado, para conferir como ficará publicado |
| `npm run write-translations -- --locale en` | Gerar/atualizar textos de interface em inglês |

## 4. Estrutura do repositório

```
wiki-engenharia/
├── AGENTS.md            ← este guia
├── CLAUDE.md            ← aponta para o AGENTS.md (Claude Code)
├── ROADMAP.md           ← fases e próximos passos
├── README.md            ← apresentação pública
├── decisions/           ← registro de decisões (ADRs)
├── templates/           ← modelos de página por seção (fora do site)
├── .github/workflows/   ← publicação automática (deploy.yml)
└── site/                ← aplicação Docusaurus
    ├── docusaurus.config.js
    ├── sidebars.js
    ├── docs/            ← conteúdo em português (idioma padrão)
    ├── i18n/en/docusaurus-plugin-content-docs/current/   ← conteúdo em inglês (espelha docs/)
    ├── src/             ← componentes (calculadoras) e CSS
    └── static/          ← imagens e arquivos estáticos leves
```

## 5. Convenções de conteúdo

- **Nomes de arquivo e pasta:** minúsculas, sem acento, palavras separadas por hífen (`queda-de-tensao.md`).
- **Bilíngue:** toda página em `site/docs/<caminho>` deve ter o espelho em `site/i18n/en/docusaurus-plugin-content-docs/current/<mesmo caminho>`. A versão em inglês pode começar como resumo, mas deve existir.
- **Cabeçalho (front matter) mínimo de toda página:**

```yaml
---
title: Título da página
description: Resumo de uma linha
sidebar_position: 10
---
```

- A ordem no menu vem de `sidebar_position` e de `_category_.json` em cada pasta de seção.
- **Não use `label` no `_category_.json`.** O nome da seção no menu vem do `title` do `index.md` da pasta, em cada idioma. Com `label`, o menu em inglês mostraria o texto em português.
- Textos de interface (navbar, rodapé, página inicial) ficam em `site/i18n/en/*.json`. Depois de mudar a navbar, o rodapé ou textos com `<Translate>`/`translate()`, rode `npm run write-translations -- --locale en` e traduza as chaves novas. O comando grava o texto em português como valor inicial.
- Comece cada página nova a partir do modelo correspondente em `templates/`.
- Imagens em `site/static/img/<seção>/`. Texto alternativo obrigatório.

## 6. Regras de conteúdo e legais

O repositório é **público**. Portanto:

1. **Normas técnicas pagas** (ABNT NBR, IEC, etc.): nunca copiar o texto. Apenas resumo próprio, identificação (número, ano, título) e link para a fonte oficial.
2. **Arquivos de terceiros** (famílias e blocos de fabricantes): só publicar se a licença permitir redistribuição. Registrar fonte e licença em cada ficha.
   - **Licenças do projeto** (`decisions/0005`): o código fica sob MIT (`LICENSE`) e o conteúdo, incluindo arquivos BIM/CAD próprios, sob CC BY 4.0 (`LICENSE-CONTENT.md`). Material de terceiros mantém a licença original, que prevalece. Não publique nada que não possa ser redistribuído sob essas condições.
3. **Nada de dados pessoais, credenciais ou projetos de clientes** no repositório.
4. **Cálculos:** toda calculadora deve informar norma e edição de referência, premissas, unidades, limites de aplicação e o aviso de que é ferramenta de apoio e não substitui a responsabilidade técnica do profissional.
5. **Famílias Revit não abrem em versões anteriores do Revit.** Indique sempre a versão do arquivo e organize os downloads por versão.
6. **Arquivos pesados** (RVT, DWG grandes): ver `decisions/0003-armazenamento-de-arquivos-bim-cad.md`. Não commitar binários grandes no histórico do Git.

## 7. Estado atual

Atualizado em: 2026-10-24.

- [x] Repositório criado e público
- [x] Scaffold do Docusaurus em `site/`
- [x] `AGENTS.md`, `CLAUDE.md`, `ROADMAP.md`, `decisions/`, `templates/`
- [x] **Fase 1 concluída.** `npm install` e `npm run build` validados no Windows (Node 22). Config com título, `url`/`baseUrl` do GitHub Pages e i18n `pt-BR` (padrão) + `en` com seletor de idioma. Blog e tutorial de exemplo removidos. 6 seções criadas em PT e EN (`_category_.json` + `index.md`). Navbar, rodapé e página inicial apontam para as 6 seções. Interface em inglês em `site/i18n/en/`.
- [x] Workflow de publicação `.github/workflows/deploy.yml` criado (Fase 2). Ele roda `npm ci` e `npm run build` em `site/` com Node 22 e publica `site/build` no GitHub Pages a cada push na `main` que mexa em `site/`. Em pull requests só faz o build.
- [x] **Site publicado** em https://gustavohsz.github.io/wiki-engenharia/ (inglês em `/wiki-engenharia/en/`). Pages ativado com Source: GitHub Actions. Cada push na `main` que mexa em `site/` republica o site automaticamente.
- [x] Licenças definidas (`decisions/0005`): código MIT (`LICENSE`), conteúdo CC BY 4.0 (`LICENSE-CONTENT.md`). As duas aparecem no rodapé do site.

Pendências menores:

- Logo (`static/img/logo.svg`), favicon e imagem de compartilhamento (`docusaurus-social-card.jpg`) ainda são os do Docusaurus.
- `npm install` reporta 34 vulnerabilidades em dependências do Docusaurus. Não rode `npm audit fix --force`, porque ele troca versões e quebra o site. Acompanhe as atualizações do Docusaurus.
- **Fase 3 (conteúdo piloto):** 5 das 6 seções têm uma página real em PT e EN: o resumo da NBR 5410, queda de tensão, a ficha do cabo 450/750 V, a Aula 1 do curso de Revit e "Como criar uma página". A Biblioteca BIM/CAD espera um arquivo próprio do mantenedor e a decisão 0003. As páginas foram escritas por IA e **aguardam revisão técnica do mantenedor**. Não as trate como revisadas.
- **Navbar no limite:** os rótulos curtos e o CSS de `site/src/css/custom.css` deixam cerca de 130 px de folga nas larguras mais apertadas (1000 e 1200 px). Um 7º item ou um rótulo longo pode voltar a quebrar a linha. Teste nessas larguras antes de adicionar itens.

## 8. Regras de trabalho para agentes

1. Leia `ROADMAP.md` e `decisions/` antes de propor mudanças de rumo. Não reabra decisões sem um motivo novo e concreto.
2. Mudanças pequenas e commits curtos, em português, descrevendo o "quê" e o "porquê".
3. Rode `npm run build` em `site/` antes de concluir. Se falhar, corrija ou reporte, não entregue quebrado.
4. Não adicione dependências sem justificar no commit ou em `decisions/`.
5. Ao encerrar a sessão: atualize **Estado atual** (seção 7) e marque o `ROADMAP.md`.
