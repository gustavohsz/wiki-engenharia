# 0006 — Busca local com @easyops-cn/docusaurus-search-local

- Status: Aceita
- Data: 2026-10-24

## Contexto

O site precisa de busca em português e inglês. O tema clássico do Docusaurus não tem busca embutida: ela vem de um serviço externo (Algolia) ou de um plugin da comunidade que gera o índice no build.

## Decisão

Usar o plugin **`@easyops-cn/docusaurus-search-local`** (licença MIT):

- Gera o índice de busca durante o `npm run build`, sem serviço externo nem conta.
- Indexa as páginas de docs nos dois idiomas, com regras de idioma para português e inglês (`lunr-languages`). Cada idioma busca no próprio conteúdo.
- Destaca o termo buscado na página de destino.
- Funciona offline e no GitHub Pages, porque o índice é um arquivo estático.

## Alternativas consideradas

- **Algolia DocSearch:** busca de melhor qualidade e gratuita para documentação aberta. Exige inscrição, aprovação e um robô externo que varre o site. Descartada por enquanto, porque cria dependência de terceiros para um site pequeno. Pode ser reavaliada se o conteúdo crescer muito.
- **`@cmfcmf/docusaurus-search-local`:** exige `nodejieba` (binário nativo) como dependência de pareamento e é menos atualizado.
- **`docusaurus-lunr-search`:** sem atualização desde jan/2025.

## Consequências

- Uma dependência nova em `site/package.json`, com dependências próprias: `lunr`, `lunr-languages`, `cheerio` e `@node-rs/jieba` (segmentação de chinês, carregada só se esse idioma for configurado).
- O índice cresce com o conteúdo e é baixado pelo navegador na primeira busca. Para uma wiki de algumas centenas de páginas isso é aceitável. Se ficar pesado, reavaliar o Algolia.
- A busca só funciona no site gerado (`npm run build` + `npm run serve`). No `npm start` ela avisa que o índice não existe.
