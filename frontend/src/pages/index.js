import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/introduction">
            Read the Textbook - 45min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Interactive textbook for Physical AI & Humanoid Robotics">
      <HomepageHeader />
      <main>
        <section className={styles.features}>
          <div className="container">
            <div className="row">
              <div className="col col--4">
                <h3>AI-Powered Learning</h3>
                <p>Ask questions and get answers based only on textbook content through our RAG-powered chatbot.</p>
              </div>
              <div className="col col--4">
                <h3>Personalized Experience</h3>
                <p>Content adapts to your background and learning level for optimal understanding.</p>
              </div>
              <div className="col col--4">
                <h3>Global Access</h3>
                <p>Available in Urdu and other languages to support diverse learners worldwide.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}