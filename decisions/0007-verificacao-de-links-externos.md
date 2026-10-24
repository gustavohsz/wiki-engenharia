# 0007 — Verificação semanal de links externos com lychee

- Status: Aceita
- Data: 2026-10-24

## Contexto

A wiki aponta para fontes externas: catálogo da ABNT, fabricantes, documentação de software. Esses endereços mudam ou somem com o tempo, e um link quebrado numa página de norma ou de produto tira a confiança no conteúdo. Os links **internos** já são verificados pelo build (`onBrokenLinks: 'throw'`); os **externos**, não.

## Decisão

- Workflow `.github/workflows/verificar-links.yml`, que roda o **[lychee](https://github.com/lycheeverse/lychee)** pela action oficial `lycheeverse/lychee-action`.
- Verifica só links `http`/`https` nos arquivos de conteúdo: `site/docs/**/*.md`, `site/i18n/**/*.md` e `README.md`. Links internos ficam com o build, e os modelos em `templates/` têm endereços de exemplo, por isso ficam de fora.
- Roda **toda segunda-feira** e sob demanda (aba Actions › "Verificar links externos" › Run workflow).
- **Não bloqueia a publicação.** Quando acha link quebrado, abre uma issue "Links quebrados" (rótulo `links-quebrados`) com a lista, ou atualiza a que já estiver aberta. Quando tudo volta a funcionar, comenta e fecha a issue.
- Sites que bloqueiam robôs e geram falso alarme vão para o arquivo `.lycheeignore`, na raiz, sempre com um comentário explicando o motivo.

## Alternativas consideradas

- **Verificar no workflow de publicação, bloqueando o deploy:** descartada. Sites externos caem por minutos ou limitam acessos automáticos; o site ficaria sem atualizar por um problema que não é dele.
- **Verificar o HTML gerado em vez do Markdown:** cobriria também os links do rodapé e os "Editar esta página", mas exigiria build a cada verificação e geraria centenas de acessos ao GitHub por rodada. O ganho não compensa.
- **markdown-link-check (npm):** menos mantido e mais lento que o lychee.

## Consequências

- Nenhuma dependência nova no site: o lychee roda só no GitHub Actions.
- O mantenedor recebe notificação da issue pelo GitHub (e-mail ou app), conforme as configurações de notificação da conta dele.
- Falsos positivos são possíveis (site fora do ar no momento, bloqueio de robôs). Antes de corrigir uma página, abra o link no navegador.
