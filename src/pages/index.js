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
        <div style={{ marginTop: "20px", fontWeight: "bold" }}>3x 🚀 faster than nestjs and expressjs</div>
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
      <div className='hero'>
        <div style={{ margin: '0 100px' }}>
          <h1>Revolutionizing Node.js Development</h1>
          <div style={{ fontWeight: "400", fontSize: "18px" }}>
            <p>
              While Node.js is undeniably powerful, its available frameworks and ecosystem often lead developers to focus solely on building the application, neglecting considerations for long-term maintainability and code cleanliness. The resulting codebase can be challenging for new team members to grasp.
            </p>
            <p>
              In contrast, ecosystems like Java and C# offer robust frameworks that facilitate the creation of more maintainable applications. These ecosystems enable new employees to work on the product with relative ease, even without an in-depth understanding of the entire codebase.
            </p>
            <p>
              Fort.js aims to address this issue by leveraging modern JavaScript and TypeScript. It provides simple APIs and adopts the Fort architecture, which promotes modularity through components without compromising performance (reportedly 3 times faster than Express.js).
            </p>
          </div>
        </div>
      </div>
      <HomepageHeader />

      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
