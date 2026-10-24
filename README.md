# Wiki de Engenharia

Wiki pública de engenharia elétrica com foco em **Revit** e **AutoCAD**, em português e inglês.

*Public engineering wiki focused on electrical engineering with Revit and AutoCAD, in Portuguese and English.*

## Seções

Biblioteca BIM/CAD · Catálogo · Cursos · Normas · Documentação · Cálculos

## Como rodar localmente

Requer [Node.js](https://nodejs.org) 20 ou superior.

```bash
cd site
npm install
npm start
```

O site abre em http://localhost:3000/wiki-engenharia/. Publicado em https://gustavohsz.github.io/wiki-engenharia/.

## Estrutura

- `site/`: aplicação Docusaurus (conteúdo em `site/docs/`)
- `templates/`: modelos de página para cada seção
- `decisions/`: registro das decisões do projeto
- `AGENTS.md` e `ROADMAP.md`: guia de continuidade para quem (ou qual IA) assumir o trabalho

## Licença

- **Conteúdo** (textos, imagens, modelos de página, arquivos BIM/CAD próprios): [CC BY 4.0](LICENSE-CONTENT.md). Pode copiar, adaptar e usar comercialmente, citando a fonte.
- **Código** (site, calculadoras, workflows): [MIT](LICENSE).
- Arquivos de terceiros mantêm a licença original, indicada na página de cada item.

Detalhes em [`decisions/0005-licencas-mit-e-cc-by.md`](decisions/0005-licencas-mit-e-cc-by.md).
