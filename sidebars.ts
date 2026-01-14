import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Getting Started',
      items: ['getting-started/index'],
    },
    {
      type: 'category',
      label: 'User Guide',
      items: [
        'user-guide/index',
        'user-guide/notion-example',
        'user-guide/uploading-code',
        'user-guide/github-integration',
        'user-guide/marketplace',
        'user-guide/managing-deployments',
        'user-guide/subscription-plans',
        'user-guide/billing',
        'user-guide/subdomain-access',
        'user-guide/authentication',
        'user-guide/environment-variables',
        'user-guide/logs',
        'user-guide/troubleshooting',
        'user-guide/best-practices',
        'user-guide/security',
        'user-guide/performance',
      ],
    },
    {
      type: 'category',
      label: 'Developer Guide',
      items: [
        'developer-guide/index',
        'developer-guide/platform-requirements',
        'developer-guide/building-mcps',
        'developer-guide/local-development',
        'developer-guide/deployment-architecture',
        'developer-guide/best-practices',
        'developer-guide/contributing',
        'developer-guide/code-of-conduct',
      ],
    },
  ],
};

export default sidebars;
