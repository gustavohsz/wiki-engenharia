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
