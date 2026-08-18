import type { Metadata } from 'next';
import Link from 'next/link';
import SectionLabel from '@/components/SectionLabel';
import { articles } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Articles',
  description:
    'Technical deep-dives on protocol design, service discovery, and escrow architecture, published with DEV Community and Open Bitcoin Africa.',
};

export default function ArticlesPage() {
  return (
    <>
      <section className="pageHeader">
        <div className="container">
          <p className="breadcrumb">
            <Link href="/">~/home</Link> / articles
          </p>
          <h1>Technical Writing</h1>
          <p className="muted">
            Technical deep-dives authored for <span className="accent">DEV Community</span> and{' '}
            <span className="accent">Open Bitcoin Africa</span>, covering protocol
            design, service discovery, and trust-minimized escrow architecture.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionLabel index="pubs">writing</SectionLabel>
          <div className="list">
            {articles.map((article) => (
              <article className="articleEntry" key={article.slug}>
                <div className="articleMeta">
                  <span className="articlePub">{article.publication}</span>
                  <span>·</span>
                  <span>{article.topic}</span>
                  <span>·</span>
                  <span>{article.date}</span>
                </div>
                <h2 className="articleTitle">{article.title}</h2>
                <p className="articleSummary">{article.summary}</p>
                {article.url && (
                  <div className="actions">
                    <a
                      href={article.url}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btnSecondary"
                    >
                      Read article →
                    </a>
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
