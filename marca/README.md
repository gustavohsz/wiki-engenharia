# Marca da Wiki de Engenharia

Arquivos-fonte da identidade visual. Esta pasta fica **fora do site**: o que é publicado são as cópias geradas em `site/static/img/`.

## Logo

Um raio âmbar num quadrado azul de cantos arredondados. Foi escolhido entre três conceitos (raio, cubo BIM com raio e símbolo de terra) por ser o mais legível em 16 px, no favicon.

| Arquivo | Uso |
|---|---|
| `logo.svg` | Logo para fundo claro (navbar no modo claro) |
| `logo-escuro.svg` | Logo para fundo escuro (navbar no modo escuro) |
| `favicon.svg` | Favicon em SVG, que troca de cor sozinho no modo escuro |
| `cartao-social.html` | Imagem de compartilhamento (1200×630), mostrada ao colar um link do site no WhatsApp, LinkedIn etc. |
| `gerar-imagens.mjs` | Gera os PNG e o `.ico` a partir dos arquivos acima |

## Cores

| Cor | Hex | Uso |
|---|---|---|
| Azul engenharia | `#185FA5` | Cor principal do site no modo claro, fundo do logo |
| Azul claro | `#5EA2E8` | Cor principal no modo escuro |
| Azul do logo no escuro | `#378ADD` | Fundo do logo no modo escuro |
| Azul-marinho | `#0C447C` | Fundo do logo na imagem de compartilhamento e da faixa da página inicial no modo escuro |
| Âmbar | `#EF9F27` | Raio (modo claro) |
| Âmbar claro | `#FAC775` | Raio (modo escuro) e destaque na imagem de compartilhamento |

As cores principais do site e as variações (`-dark`, `-light` etc.) ficam em `site/src/css/custom.css`. Elas passam no contraste mínimo de acessibilidade para links (WCAG AA, 4,5:1): 6,5:1 no modo claro e 6,4:1 no escuro.

## Como alterar

1. Edite os SVG ou o `cartao-social.html` desta pasta. Abra o HTML no navegador para conferir.
2. Na raiz do repositório, rode o comando abaixo para regerar as imagens:

   ```bash
   node marca/gerar-imagens.mjs
   ```

   O script usa o Chrome ou o Edge instalado, em modo sem janela, e não precisa de `npm install`. Para usar outro navegador, defina a variável `CHROME` com o caminho do executável.
3. Rode `npm run build` em `site/` e faça o commit das imagens geradas em `site/static/img/` junto com os fontes.

Se mudar a cor principal, recalcule também as variações em `custom.css` e confira o contraste.
