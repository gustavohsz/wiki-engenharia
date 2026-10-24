# 0004 — Idiomas: português padrão, inglês secundário

- Status: Aceita
- Data: 2026-10-24

## Contexto

O mantenedor quer a wiki em português e em inglês. As normas de referência são principalmente brasileiras (foco inicial em engenharia elétrica com Revit e AutoCAD).

## Decisão

- `defaultLocale: 'pt-BR'`; locais: `pt-BR` e `en`.
- Conteúdo em português em `site/docs/`; inglês em `site/i18n/en/docusaurus-plugin-content-docs/current/`, no mesmo caminho relativo.
- Toda página nova nasce em português e ganha o espelho em inglês, mesmo que seja um resumo.

## Alternativas consideradas

- **Só português:** menos trabalho, mas descartado pelo mantenedor.

## Consequências

- Dobra o trabalho de manutenção do conteúdo. Páginas em inglês defasadas em relação ao português são um risco real, e a Fase 6 do `ROADMAP.md` prevê revisão periódica.
- Normas citadas continuam em seu idioma original; o resumo é traduzido.
