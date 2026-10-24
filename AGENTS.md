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

Comandos (sempre dentro de `site/`):

| Comando | Para quê |
|---|---|
| `npm install` | Instalar dependências (uma vez, ou quando o `package.json` mudar) |
| `npm start` | Servidor local com recarga automática (http://localhost:3000) |
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
├── .github/workflows/   ← publicação automática (a criar)
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
- Comece cada página nova a partir do modelo correspondente em `templates/`.
- Imagens em `site/static/img/<seção>/`. Texto alternativo obrigatório.

## 6. Regras de conteúdo e legais

O repositório é **público**. Portanto:

1. **Normas técnicas pagas** (ABNT NBR, IEC, etc.): nunca copiar o texto. Apenas resumo próprio, identificação (número, ano, título) e link para a fonte oficial.
2. **Arquivos de terceiros** (famílias e blocos de fabricantes): só publicar se a licença permitir redistribuição. Registrar fonte e licença em cada ficha.
3. **Nada de dados pessoais, credenciais ou projetos de clientes** no repositório.
4. **Cálculos:** toda calculadora deve informar norma e edição de referência, premissas, unidades, limites de aplicação e o aviso de que é ferramenta de apoio e não substitui a responsabilidade técnica do profissional.
5. **Famílias Revit não abrem em versões anteriores do Revit.** Indique sempre a versão do arquivo e organize os downloads por versão.
6. **Arquivos pesados** (RVT, DWG grandes): ver `decisions/0003-armazenamento-de-arquivos-bim-cad.md`. Não commitar binários grandes no histórico do Git.

## 7. Estado atual

Atualizado em: 2026-10-24.

- [x] Repositório criado e público
- [x] Scaffold padrão do Docusaurus em `site/` (JavaScript, sem personalização)
- [x] `AGENTS.md`, `CLAUDE.md`, `ROADMAP.md`, `decisions/`, `templates/`
- [ ] Personalizar `site/docusaurus.config.js`: hoje ainda tem título "My Site", `url`/`baseUrl`/`organizationName`/`projectName` de exemplo, `i18n` só com `en`, blog e tutorial de exemplo
- [ ] Remover blog e tutorial de exemplo, criar as 6 seções em PT e EN
- [ ] Publicação no GitHub Pages
- [ ] Licença do repositório (decisão pendente)

**Atenção:** nada além do scaffold foi validado com `npm run build`. A sessão de planejamento ocorreu num ambiente sem acesso ao npm. A primeira tarefa de quem continuar é rodar `npm install` e `npm run build` em `site/` e corrigir o que aparecer.

## 8. Regras de trabalho para agentes

1. Leia `ROADMAP.md` e `decisions/` antes de propor mudanças de rumo. Não reabra decisões sem um motivo novo e concreto.
2. Mudanças pequenas e commits curtos, em português, descrevendo o "quê" e o "porquê".
3. Rode `npm run build` em `site/` antes de concluir. Se falhar, corrija ou reporte, não entregue quebrado.
4. Não adicione dependências sem justificar no commit ou em `decisions/`.
5. Ao encerrar a sessão: atualize **Estado atual** (seção 7) e marque o `ROADMAP.md`.
