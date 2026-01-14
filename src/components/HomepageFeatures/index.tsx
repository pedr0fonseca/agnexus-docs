import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'AI-Powered Configuration',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Let AI help generate Dockerfiles and deployment configurations for your MCP servers.
        Focus on building your tools while we handle the infrastructure setup.
      </>
    ),
  },
  {
    title: 'One-Click Deployment',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Upload your code or connect your GitHub repository and deploy to production in minutes.
        No complex configuration needed—just deploy and go.
      </>
    ),
  },
  {
    title: 'GitHub Integration',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Connect your GitHub repositories for automatic deployments on every push.
        Track commits, manage branches, and deploy with confidence.
      </>
    ),
  },
  {
    title: 'Marketplace Templates',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Discover pre-built MCP server templates in our marketplace.
        Find solutions for Notion, databases, APIs, and more.
      </>
    ),
  },
  {
    title: 'Subdomain-Based Access',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Each deployed MCP server gets its own subdomain for clean, direct access.
        No path prefixes—just simple, intuitive URLs.
      </>
    ),
  },
  {
    title: 'Subscription Plans',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Choose the plan that fits your needs. From free tier to enterprise,
        scale your MCP deployments with flexible resource allocation.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
