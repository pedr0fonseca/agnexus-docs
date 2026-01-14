import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'agnexus',
  tagline: 'Deploy and manage Model Context Protocol servers with ease',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://docs.agnexus.ai',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'pedr0fonseca', // Usually your GitHub org/user name.
  projectName: 'agnexus-docs', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/pedr0fonseca/agnexus-docs/tree/main/agnexus-docs/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/pedr0fonseca/agnexus-docs/tree/main/agnexus-docs/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/agnexus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'agnexus',
      logo: {
        alt: 'agnexus Logo',
        src: 'img/agnexus-logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Docs',
        },
        {to: '/blog', label: 'Announcements', position: 'left'},
        {
          href: 'https://github.com/pedr0fonseca/agnexus-docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Getting Started',
              to: '/docs/getting-started',
            },
            {
              label: 'User Guide',
              to: '/docs/user-guide',
            },
            {
              label: 'Developer Guide',
              to: '/docs/developer-guide',
            },
          ],
        },
        {
          title: 'Platform',
          items: [
            {
              label: 'Homepage',
              href: 'https://agnexus.ai',
            },
            {
              label: 'Pricing',
              href: 'https://agnexus.ai/pricing',
            },
            {
              label: 'Marketplace',
              href: 'https://agnexus.ai/marketplace',
            },
          ],
        },
        {
          title: 'Resources',
          items: [
            {
              label: 'Announcements',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/pedr0fonseca/agnexus-docs',
            },
            {
              label: 'Terms',
              href: 'https://agnexus.ai/terms',
            },
            {
              label: 'Privacy',
              href: 'https://agnexus.ai/privacy',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} agnexus. All Rights Reserved.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
