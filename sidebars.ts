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
        'user-guide/github-integration',
        'user-guide/marketplace',
        'user-guide/managing-deployments',
        'user-guide/subscription-plans',
        'user-guide/subdomain-access',
        'user-guide/troubleshooting',
      ],
    },
    {
      type: 'category',
      label: 'Developer Guide',
      items: [
        'developer-guide/index',
        'developer-guide/platform-requirements',
        'developer-guide/building-mcps',
      ],
    },
  ],
};

export default sidebars;
