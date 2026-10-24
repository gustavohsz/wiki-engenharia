# 0005 — Licenças: MIT para o código, CC BY 4.0 para o conteúdo

- Status: Aceita
- Data: 2026-10-24

## Contexto

O repositório é público, mas sem licença ninguém pode reutilizar legalmente o material: o padrão é "todos os direitos reservados". A wiki mistura dois tipos de obra, código (site, calculadoras) e conteúdo (textos, imagens, arquivos BIM/CAD). Licenças de software não se encaixam bem em texto, e as de conteúdo não se encaixam bem em código.

## Decisão

- **Código:** MIT, no arquivo `LICENSE` na raiz.
- **Conteúdo:** CC BY 4.0, no arquivo `LICENSE-CONTENT.md` na raiz, que também define o que é código e o que é conteúdo.
- Arquivos BIM/CAD **próprios** entram como conteúdo (CC BY 4.0).
- Arquivos de **terceiros** mantêm a licença original, registrada na ficha de cada item. Ela prevalece sobre a licença geral.
- O rodapé do site informa as duas licenças, nos dois idiomas.

## Alternativas consideradas

- **CC BY-SA 4.0 para o conteúdo:** obrigaria quem adaptar o material a usar a mesma licença. Descartada porque dificulta o reuso em projetos e documentos de empresas, que é o público da wiki.
- **CC BY-NC:** proibiria uso comercial. Descartada porque engenharia é atividade comercial por natureza e isso impediria o uso principal do material.
- **Uma licença só (MIT ou CC BY para tudo):** mais simples, mas a MIT é ruim para texto e a CC desaconselha o uso das suas licenças em software.

## Consequências

- Qualquer pessoa pode copiar, adaptar e usar comercialmente o material, desde que cite a fonte.
- Toda contribuição externa passa a ser aceita sob essas mesmas licenças.
- Fichas da Biblioteca BIM/CAD e do Catálogo precisam declarar a licença quando o item for de terceiros (os modelos em `templates/` já pedem fonte e licença).
- O logo e as imagens do Docusaurus foram substituídos por uma identidade visual própria (pasta `marca/`), sob CC BY 4.0.
