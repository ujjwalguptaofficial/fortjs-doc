import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Scalability',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        FortJs provides a scalable architecture for building both small and large web applications.
      </>
    ),
  },
  {
    title: 'Faster 🚀',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Fortjs delivers unparalleled speed, surpassing popular alternatives like Express and Nest by more than two times, providing a high-performance solution for web applications. Take a look at <a href="https://github.com/ujjwalguptaofficial/fortjs#benchmark">Benchmark</a>
      </>
    ),
  },
  {
    title: 'Reusable Components',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Components like walls, shields, and guards offer a modular and reusable approach to building applications.
      </>
    ),
  },
  {
    title: 'Intuitive Routing',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        FortJs simplifies routing, making it intuitive for developers to define and manage routes.
      </>
    ),
  },
  {
    title: 'Dependency Injection',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        The framework includes a robust dependency injection system, promoting clean and organized code.
      </>
    ),
  },
  {
    title: 'Unit Testable',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        FortJs is designed to be unit-testable, enabling developers to write tests for their code, ensuring stability and maintainability.
      </>
    ),
  },
  {
    title: 'Modern Development',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        FortJs is built with modern development practices in mind, providing a contemporary and efficient development experience.
      </>
    ),
  },
  {
    title: 'Flexibility',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        FortJs offers flexibility in how components are used, allowing developers to tailor the framework to their specific needs. You can configure almost everything.
      </>
    ),
  },
  {
    title: 'Fort Architecture',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        The framework follows a well-architected design architecture <a href="https://github.com/ujjwalguptaofficial/fort">Fort</a> , promoting a structured and organized development approach.
      </>
    ),
  },
  {
    title: 'Beautiful code',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        The FortJs architecture enables you to craft elegant, self-explanatory, and readable code.
      </>
    ),
  },
  {
    title: 'Free and MIT License',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Everything is free and open source with MIT License. Use it without worry.
      </>
    ),
  },
  {
    title: 'TypeScript Supported',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        With native TypeScript support, fortjs empowers developers to leverage the benefits of static typing for a more robust and error-resistant codebase.
      </>
    ),
  },
];

function Feature({ title, Svg, description, Img }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center" style={{ marginBottom: '4rem' }}>
        {/* Img!=null? <img src="Img" />: <Svg className={styles.featureSvg} role="img" /> */}
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div >
  );
}

export default function HomepageFeatures(): JSX.Element {
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
