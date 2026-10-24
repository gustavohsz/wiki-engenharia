// @ts-check
// Configuração do site. Referência: https://docusaurus.io/docs/api/docusaurus-config
// Este arquivo roda no Node.js: não use código de navegador (window, JSX) aqui.

import {themes as prismThemes} from 'prism-react-renderer';

const repoUrl = 'https://github.com/gustavohsz/wiki-engenharia';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Wiki de Engenharia',
  tagline: 'Engenharia elétrica com Revit e AutoCAD',
  favicon: 'img/favicon.ico', // Imagens de marca: geradas por marca/gerar-imagens.mjs

  // Favicon em SVG (nítido e com variante para modo escuro) e ícone para iPhone/iPad.
  // Os caminhos incluem o baseUrl (/wiki-engenharia/): se ele mudar, mude aqui também.
  headTags: [
    {tagName: 'link', attributes: {rel: 'icon', type: 'image/svg+xml', href: '/wiki-engenharia/img/favicon.svg'}},
    {tagName: 'link', attributes: {rel: 'apple-touch-icon', href: '/wiki-engenharia/img/apple-touch-icon.png'}},
  ],

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

  // Busca local: índice gerado no build, sem serviço externo.
  // Ver decisions/0006-busca-local.md.
  themes: [
    [
      '@easyops-cn/docusaurus-search-local',
      /** @type {import('@easyops-cn/docusaurus-search-local').PluginOptions} */
      ({
        hashed: true, // Nome do índice muda a cada build: o navegador não usa índice velho
        language: ['pt', 'en'],
        indexBlog: false, // O site não tem blog
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Imagem mostrada ao compartilhar um link do site (WhatsApp, LinkedIn etc.).
      image: 'img/cartao-social.png',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Wiki de Engenharia',
        logo: {
          alt: 'Logo da Wiki de Engenharia',
          src: 'img/logo.svg',
          srcDark: 'img/logo-escuro.svg',
        },
        items: [
          // Links (e não type: 'doc'): com uma barra lateral única, type: 'doc' deixaria
          // o primeiro item ativo em todas as páginas. activeBasePath ativa só a seção certa.
          // "Biblioteca" é rótulo curto: a navbar fica apertada em telas médias.
          {to: '/docs/biblioteca-bim-cad', activeBasePath: '/docs/biblioteca-bim-cad', position: 'left', label: 'Biblioteca'},
          {to: '/docs/catalogo', activeBasePath: '/docs/catalogo', position: 'left', label: 'Catálogo'},
          {to: '/docs/cursos', activeBasePath: '/docs/cursos', position: 'left', label: 'Cursos'},
          {to: '/docs/normas', activeBasePath: '/docs/normas', position: 'left', label: 'Normas'},
          {to: '/docs/documentacao', activeBasePath: '/docs/documentacao', position: 'left', label: 'Documentação'},
          {to: '/docs/calculos', activeBasePath: '/docs/calculos', position: 'left', label: 'Cálculos'},
          {type: 'localeDropdown', position: 'right'},
          // GitHub como ícone (CSS .header-github-link em src/css/custom.css), para caber a busca.
          {href: repoUrl, position: 'right', className: 'header-github-link', 'aria-label': 'GitHub'},
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
