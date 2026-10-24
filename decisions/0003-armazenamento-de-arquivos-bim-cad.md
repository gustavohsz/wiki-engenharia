# 0003 — Armazenamento dos arquivos BIM/CAD

- Status: **Proposta** (o mantenedor ainda não confirmou)
- Data: 2026-10-24

## Contexto

A Biblioteca BIM/CAD vai oferecer famílias Revit (`.rfa`), blocos DWG e templates para download. O mantenedor sugeriu guardar tudo no OneDrive. O site é público.

## Decisão proposta

- Arquivos **leves** (famílias e blocos de poucos MB): no próprio repositório, em `site/static/arquivos/`.
- Arquivos **pesados**: **GitHub Releases** (até 2 GiB por arquivo, URL estável, versionado por tag), com o link na ficha.
- **OneDrive:** apenas como backup e cópia de trabalho do acervo bruto, fora da wiki.
- Evitar Git LFS como primeira opção: a cota gratuita é limitada.

## Alternativas consideradas

- **OneDrive como armazenamento principal:** o link de compartilhamento abre uma página de visualização, não baixa o arquivo, e converter em download direto é frágil. Os arquivos ficam fora do repositório, então outra pessoa ou IA não os vê nem reproduz. Perde-se a ligação entre a versão da página e a versão do arquivo.

## Consequências

- Cada ficha da biblioteca registra versão do arquivo, versão mínima do software, fonte e licença.
- Antes de publicar qualquer arquivo de terceiros, confirmar que a licença permite redistribuição.
- Esta decisão precisa de confirmação do mantenedor antes da Fase 5 do `ROADMAP.md`.
