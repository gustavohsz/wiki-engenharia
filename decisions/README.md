# Registro de decisões

Cada decisão importante do projeto fica em um arquivo numerado, para que qualquer pessoa ou IA entenda **por que** algo foi escolhido e não reabra a discussão sem motivo novo.

| Nº | Decisão | Status |
|---|---|---|
| 0001 | Docusaurus como plataforma | Aceita |
| 0002 | Site em subpasta `site/` | Aceita |
| 0003 | Armazenamento dos arquivos BIM/CAD | **Proposta** (aguarda confirmação do mantenedor) |
| 0004 | Idiomas: português padrão, inglês secundário | Aceita |
| 0005 | Licenças: MIT para o código, CC BY 4.0 para o conteúdo | Aceita |

## Formato

```
# NNNN — Título
- Status: Proposta | Aceita | Substituída por NNNN
- Data: AAAA-MM-DD

## Contexto
## Decisão
## Alternativas consideradas
## Consequências
```

Para mudar uma decisão aceita, crie um novo arquivo que a substitua e atualize o status da antiga. Não reescreva o histórico.
