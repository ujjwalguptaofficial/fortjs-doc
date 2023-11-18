import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg home-link-button"
            to="/docs/get-started">
            Get Started - 5min ⏱️
          </Link>
          <a href='https://github.com/ujjwalguptaofficial/fortjs/discussions/categories/q-a' target='_blank' className='button button--secondary button--lg'>
            Get Help
          </a>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Fortjs - A Node.js Web Framework for Powerful and Scalable Applications`}
      description="Fortjs is a feature-rich Node.js web framework designed for building powerful, scalable, and maintainable web applications. Explore its flexibility, simplicity, and extensive capabilities."
      keywords="Fort.js, Nestjs, Node.js, Web Framework, JavaScript, TypeScript, MVC, REST, HTTP, Web Development, Scalable Applications"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
