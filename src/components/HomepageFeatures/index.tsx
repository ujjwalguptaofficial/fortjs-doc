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
    title: 'Based on custom architecture - Fort',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Inspired by real world - <a href="https://github.com/ujjwalguptaofficial/fort">Fort</a> is an
        architecture on top of MVC
      </>
    ),
  },
  {
    title: 'Modularity',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        FortJs provides components which allows you to make apps more modular and reusable.
      </>
    ),
  },
  {
    title: 'Next Gen Code',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Use es6, es7 along with typescript or javascript.
      </>
    ),
  },
  {
    title: 'Fully Customizable',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Everything can be customized starting from your view engine, sessions - use redis etc.
      </>
    ),
  },
  {
    title: 'Beautiful code',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Fortjs architecture allows you to write beautiful code which are self explanable and readable.
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
    title: 'Strong typescript support',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        We understand the importance of typings and that's why we provide very strong typings support.
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
