// @ts-check
// Configuração do site. Referência: https://docusaurus.io/docs/api/docusaurus-config
// Este arquivo roda no Node.js: não use código de navegador (window, JSX) aqui.

import {themes as prismThemes} from 'prism-react-renderer';

const repoUrl = 'https://github.com/gustavohsz/wiki-engenharia';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Wiki de Engenharia',
  tagline: 'Engenharia elétrica com Revit e AutoCAD',
  favicon: 'img/favicon.ico',

  future: {
    v4: true, // Antecipa o comportamento do Docusaurus v4 (inclui o modo "faster")
    faster: {
      // O minificador HTML nativo do SWC (@swc/html 1.16) recusa carregar no
      // Windows quando as permissões NTFS de C:\ ou de AppData\Local permitem
      // escrita a outros usuários (erro ERR_SWC_NATIVE_CACHE). Desligado, o
      // Docusaurus usa o minificador em JavaScript: build um pouco mais lento,
      // mesmo resultado. As demais otimizações do modo "faster" continuam ativas.
      swcHtmlMinimizer: false,
    },
  },

  // Publicação no GitHub Pages: https://gustavohsz.github.io/wiki-engenharia/
  url: 'https://gustavohsz.github.io',
  baseUrl: '/wiki-engenharia/',
  organizationName: 'gustavohsz',
  projectName: 'wiki-engenharia',
  trailingSlash: false,

  // Link quebrado quebra o build. Intencional (ver AGENTS.md).
  onBrokenLinks: 'throw',

  // Português é o idioma padrão; inglês fica em /wiki-engenharia/en/.
  // Ver decisions/0004-idiomas-pt-en.md.
  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['pt-BR', 'en'],
    localeConfigs: {
      'pt-BR': {label: 'Português', htmlLang: 'pt-BR'},
      en: {label: 'English', htmlLang: 'en'},
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Link "Editar esta página" aponta para o arquivo em português no GitHub.
          editUrl: `${repoUrl}/tree/main/site/`,
        },
        blog: false, // O site não tem blog.
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // TODO: trocar pela imagem de compartilhamento do projeto.
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Wiki de Engenharia',
        logo: {
          alt: 'Logo da Wiki de Engenharia',
          src: 'img/logo.svg',
        },
        items: [
          {type: 'doc', docId: 'biblioteca-bim-cad/index', position: 'left', label: 'Biblioteca BIM/CAD'},
          {type: 'doc', docId: 'catalogo/index', position: 'left', label: 'Catálogo'},
          {type: 'doc', docId: 'cursos/index', position: 'left', label: 'Cursos'},
          {type: 'doc', docId: 'normas/index', position: 'left', label: 'Normas'},
          {type: 'doc', docId: 'documentacao/index', position: 'left', label: 'Documentação'},
          {type: 'doc', docId: 'calculos/index', position: 'left', label: 'Cálculos'},
          {type: 'localeDropdown', position: 'right'},
          {href: repoUrl, label: 'GitHub', position: 'right'},
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Conteúdo',
            items: [
              {label: 'Biblioteca BIM/CAD', to: '/docs/biblioteca-bim-cad'},
              {label: 'Catálogo', to: '/docs/catalogo'},
              {label: 'Cursos', to: '/docs/cursos'},
            ],
          },
          {
            title: 'Referência',
            items: [
              {label: 'Normas', to: '/docs/normas'},
              {label: 'Documentação', to: '/docs/documentacao'},
              {label: 'Cálculos', to: '/docs/calculos'},
            ],
          },
          {
            title: 'Projeto',
            items: [
              {label: 'GitHub', href: repoUrl},
            ],
          },
        ],
        // Licenças: ver decisions/0005-licencas-mit-e-cc-by.md
        copyright: `Copyright © ${new Date().getFullYear()} gustavohsz. Conteúdo sob <a href="${repoUrl}/blob/main/LICENSE-CONTENT.md">CC BY 4.0</a>, código sob <a href="${repoUrl}/blob/main/LICENSE">MIT</a>. Feito com Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
