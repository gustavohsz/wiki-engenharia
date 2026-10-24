# Templates de página

Modelos para começar cada tipo de página. Ficam fora de `site/`, então **não são publicados** nem afetam o build.

| Modelo | Use para | Destino em `site/docs/` |
|---|---|---|
| `biblioteca-bim-cad-ficha.md` | Família Revit, bloco DWG, template | `biblioteca-bim-cad/` |
| `catalogo-ficha.md` | Produto ou componente | `catalogo/` |
| `cursos-aula.md` | Aula de um módulo | `cursos/<curso>/` |
| `normas-resumo.md` | Resumo de uma norma | `normas/` |
| `documentacao-procedimento.md` | Procedimento ou padrão interno | `documentacao/` |
| `calculos-pagina.md` | Cálculo com calculadora | `calculos/` |

## Como usar

1. Copie o modelo para a pasta de destino com o nome de arquivo em minúsculas, sem acento, com hifens.
2. Substitua tudo que estiver entre `[colchetes]`.
3. Crie o espelho em inglês em `site/i18n/en/docusaurus-plugin-content-docs/current/` no mesmo caminho relativo.
4. Rode `npm run build` em `site/` para conferir.

## Cuidados aprendidos na prática

- **Dois-pontos no título:** se o `title` tiver `:` (como em "Aula 1: Tensões"), coloque o título entre aspas. Sem aspas, o cabeçalho fica inválido e o build falha.
- **Subpasta nova** (um curso, uma categoria do catálogo): crie `_category_.json` só com `position` e `link` para o `index.md`, e um `index.md` com `title`. Não use `label`: o nome no menu vem do `title`, que é traduzido no espelho em inglês. Exemplo em `site/docs/catalogo/condutores/`.
- **Prefixo numérico** no nome do arquivo (`01-tensoes-....md`) serve para ordenar e é removido do endereço da página. Os links entre páginas continuam usando o nome do arquivo com o prefixo.
- **Fórmulas:** o site ainda não renderiza LaTeX. Escreva as fórmulas em bloco de código `text`, como em `site/docs/calculos/queda-de-tensao.md`.
- **Fichas genéricas** do Catálogo (um tipo de produto, sem fabricante) são válidas: preencha "Fabricante" com "Genérico" e cite as normas de produto na Fonte.
