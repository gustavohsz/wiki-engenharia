# 0003 — Armazenamento dos arquivos BIM/CAD

- Status: Aceita
- Data: 2026-10-24 (proposta e aceita no mesmo dia; a proposta inicial foi revista antes da aceitação)

## Contexto

A Biblioteca BIM/CAD vai oferecer famílias Revit (`.rfa`), blocos DWG e templates (`.rte`) para download. O mantenedor sugeriu guardar tudo no OneDrive. O site é público e publicado pelo GitHub Pages.

Pontos que pesam na decisão:

- Famílias Revit não abrem em versões anteriores do Revit. Cada item tende a ter um arquivo por versão do Revit, e cada atualização gera novos arquivos.
- O Git não compacta bem arquivos binários: toda versão de um `.rfa` commitado fica para sempre no histórico.
- Limites oficiais do GitHub, conferidos em 2026-10-24:
  - **Repositório:** recomendado abaixo de 1 GB; aviso acima de 50 MiB por arquivo e bloqueio acima de 100 MiB.
  - **GitHub Pages:** site publicado de até 1 GB e limite flexível de 100 GB de tráfego por mês.
  - **Releases:** até 2 GiB por arquivo e até 1000 arquivos por release, sem limite de tamanho total nem de tráfego.
  - **Git LFS (conta gratuita):** 10 GiB de armazenamento e 10 GiB de tráfego por mês, com bloqueio ao exceder.

## Decisão

- **Todos os arquivos para download** (`.rfa`, `.rte`, `.dwg` e outros) ficam em **GitHub Releases** deste repositório.
- No repositório ficam só a **ficha** (`site/docs/biblioteca-bim-cad/`) e a **imagem de prévia** (`site/static/img/biblioteca-bim-cad/`, PNG ou WebP leve).
- **OneDrive:** só backup e cópia de trabalho do acervo bruto, fora da wiki.
- **Não usar Git LFS:** o Pages não serve arquivos LFS diretamente, e downloads de visitantes consumiriam a cota mensal.

### Convenção de nomes e versões

| Elemento | Regra | Exemplo |
|---|---|---|
| Identificador do item | Minúsculas, sem acento, palavras separadas por hífen. É o mesmo nome do arquivo da ficha | `tomada-2p-t-10a` |
| Versão do item | `v<maior>.<menor>`. Muda o maior quando a mudança quebra o uso em projetos existentes (parâmetros renomeados ou removidos) e o menor nos demais casos | `v1.0`, `v1.1`, `v2.0` |
| Tag e release | Uma release por item e versão. Tag `<item>-v<versão>`, título `<Nome do item> v<versão>` | tag `tomada-2p-t-10a-v1.0` |
| Arquivo Revit | `<item>_v<versão>_r<ano da versão do Revit>.<ext>` | `tomada-2p-t-10a_v1.0_r2022.rfa` |
| Arquivo DWG | `<item>_v<versão>_dwg<ano do formato DWG>.dwg` | `quadro-distribuicao_v1.0_dwg2018.dwg` |

- O ano no nome do arquivo Revit é a versão em que o arquivo foi **salvo**, que também é a versão mínima para abri-lo.
- Uma release publicada **não é alterada**: corrigir ou atualizar um arquivo gera uma versão nova e uma release nova. Assim, links antigos continuam funcionando e apontam sempre para o mesmo arquivo.
- O link de download na ficha segue o formato `https://github.com/gustavohsz/wiki-engenharia/releases/download/<tag>/<arquivo>`.

## Alternativas consideradas

- **Proposta inicial: arquivos leves no repositório (`site/static/arquivos/`) e pesados em Releases.** Descartada porque o histórico cresce a cada atualização, os downloads consomem a cota de tráfego do Pages e duas regras obrigariam a decidir caso a caso o que é "leve". A vantagem era publicar só pelo GitHub Desktop.
- **OneDrive como armazenamento principal:** o link de compartilhamento abre uma página de visualização em vez de baixar o arquivo, e converter em download direto é frágil. Os arquivos ficariam fora do repositório, então outra pessoa ou IA não os veria nem reproduziria, e a versão da ficha perderia o vínculo com a versão do arquivo.
- **Git LFS:** ver acima.

## Consequências

- Publicar um arquivo exige um passo no **site do GitHub** (criar a release e arrastar os arquivos), porque o GitHub Desktop não cria releases. O procedimento fica em `site/docs/documentacao/`.
- Cada ficha registra a versão do item, a versão mínima do software, a fonte e a licença, e traz um link por versão do Revit.
- A página de Releases do repositório vai listar uma entrada por item e versão. Isso é aceitável, porque o ponto de entrada para quem baixa é a ficha, não essa página.
- Antes de publicar qualquer arquivo de terceiros, confirmar que a licença permite redistribuição (ver `decisions/0005`).
