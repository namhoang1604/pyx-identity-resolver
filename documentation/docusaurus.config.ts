import type { Config } from '@docusaurus/types';
import { themes as prismThemes } from 'prism-react-renderer';

const url = process.env.DOCS_URL || 'http://localhost';
const baseUrl = process.env.DOCS_BASE_URL || '/';

const config: Config = {
  title: 'Identity Resolver',
  tagline:
    'The Identity Resolver is a tool that allows you to resolve the identity of a person or organization based on a set of attributes.',
  // favicon: 'img/favicon.ico',

  url,
  baseUrl,

  organizationName: '', // Replace with your GitHub org/user name
  projectName: 'idr', // Replace with your repo name

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  markdown: {
    mermaid: true,
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/pyx-industries/pyx-identity-resolver',
        },
        blog: false,
        theme: {
          customCss: [
            require.resolve('./src/css/custom.scss'),
            require.resolve('./src/css/index.scss'),
          ],
        },
      },
    ],
  ],

  plugins: ['docusaurus-plugin-sass'],

  themes: ['@docusaurus/theme-mermaid'],

  themeConfig: {
    slackLink: '',
    repoLink: 'https://github.com/pyx-industries/pyx-identity-resolver',
    colorMode: {
      disableSwitch: true,
    },
    image: 'img/un-crm-social-card.png',
    navbar: {
      items: [
        {
          type: 'docsVersionDropdown',
          position: 'right',
        },
        { to: '/docs/introduction', label: 'Introduction', position: 'right' },
        {
          to: '/docs/getting-started',
          label: 'Getting started',
          position: 'right',
        },
        {
          to: '/docs/installation',
          label: 'Installation',
          position: 'right',
        },
        {
          to: '/docs/detailed-apis',
          label: 'Detailed APIs',
          position: 'right',
        },
        {
          to: 'https://github.com/pyx-industries/pyx-identity-resolver',
          label: 'Contribute',
          position: 'right',
        },
        {
          href: 'https://github.com/pyx-industries/pyx-identity-resolver',
          html: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"> <path d="M12.04 0a12.035 12.035 0 0 0-3.731 23.479h.28c.257.012.508-.074.703-.241.237-.207.37-.508.36-.822v-1.304a.491.491 0 0 0-.19-.331.501.501 0 0 0-.41-.1c-2.699.581-3.27-1.104-3.3-1.214a4.654 4.654 0 0 0-1.736-2.197l-.15-.11a.732.732 0 0 1 .381-.07c.508.076.94.41 1.143.883a3.009 3.009 0 0 0 4.012 1.163c.151-.067.262-.2.301-.361.04-.46.24-.893.562-1.224a.501.501 0 0 0 .15-.531.491.491 0 0 0-.421-.351c-2.377-.271-4.814-1.103-4.814-5.205a4.012 4.012 0 0 1 1.063-2.789.491.491 0 0 0 .09-.521 3.57 3.57 0 0 1 .01-2.417A5.586 5.586 0 0 1 8.871 6.89c.123.085.279.107.42.06.897-.239 1.821-.36 2.749-.36a10.34 10.34 0 0 1 2.758.36.461.461 0 0 0 .411-.06c.731-.593 1.6-.99 2.527-1.153a3.55 3.55 0 0 1 0 2.387.481.481 0 0 0 .1.521 4.012 4.012 0 0 1 1.054 2.758c0 4.112-2.437 4.935-4.824 5.196a.491.491 0 0 0-.421.35c-.06.189 0 .394.15.522.449.469.672 1.11.612 1.755v3.19c-.005.315.131.616.37.822.304.23.7.302 1.064.19A12.035 12.035 0 0 0 12.04 0Z"/> </svg>',
          className: 'navbar-github-link',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Introduction',
              to: '/docs/introduction',
            },
            {
              label: 'Getting Started',
              to: '/docs/getting-started',
            },
            {
              to: '/docs/installation',
              label: 'Installation',
              position: 'right',
            },
            {
              to: '/docs/detailed-apis',
              label: 'Detailed APIs',
              position: 'right',
            },
          ],
        },
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;