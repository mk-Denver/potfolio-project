import type { Metadata } from 'next';
import Link from 'next/link';
import GitHubLink from '@/components/GitHubLink';
import StatusBadge from '@/components/StatusBadge';
import TerminalBlock from '@/components/TerminalBlock';
import SectionLabel from '@/components/SectionLabel';
import { specs } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Specifications',
  description:
    'Protocol specification contributions to the Pontmore protocol — extending PIP-01 with standalone escrows.',
};

const refTagMap = {
  pr: 'PR',
  issue: 'ISSUE',
  repo: 'REPO',
  commit: 'COMMIT',
  article: 'ARTICLE',
  external: 'LINK',
} as const;

export default function SpecificationsPage() {
  return (
    <>
      <section className="pageHeader">
        <div className="container">
          <p className="breadcrumb">
            <Link href="/">~/home</Link> / specifications
          </p>
          <h1>Specifications</h1>
          <p className="muted">
            Contributions to the Pontmore protocol core repository. Specification
            work covering escrow lifecycle, funding observation, and release
            mechanisms — extended as standalone escrows layered on PIP-01.
          </p>
        </div>
      </section>

      {specs.map((spec) => (
        <section className="section" key={spec.pip}>
          <div className="container">
            <SectionLabel index={spec.pip}>specification</SectionLabel>
            <h2>{spec.title}</h2>
            <div className="specMeta">
              <StatusBadge status={spec.status} />
              <span className="specRepo">{spec.repo.name}</span>
            </div>
            <p className="muted">{spec.summary}</p>

            <TerminalBlock
              title={spec.repo.name}
              lines={[
                { prompt: '$', content: 'git log --oneline -1 origin/main', tone: 'default' },
                {
                  content: '3c46a24 merge: extend PIP-01 with standalone escrows (#12)',
                  tone: 'success',
                },
                { prompt: '$', content: 'git show --stat HEAD', tone: 'default' },
                { content: ' docs/pip-01-escrows.md | 248 ++++++++++++++++++++++', tone: 'muted' },
                { content: ' 1 file changed, 248 insertions(+)', tone: 'muted' },
                {
                  prompt: '$',
                  content: 'echo $STATUS',
                  tone: 'default',
                },
                { content: 'merged', tone: 'success' },
              ]}
            />

            <div className="list" style={{ marginTop: '2rem' }}>
              {spec.sections.map((section) => (
                <div className="specSection" key={section.heading}>
                  <h3>{section.heading}</h3>
                  <p>{section.body}</p>
                </div>
              ))}
            </div>

            <div style={{ marginTop: '2.5rem' }}>
              <SectionLabel>references</SectionLabel>
              <ul className="refList">
                {spec.links.map((link) => (
                  <li className="refItem" key={link.url}>
                    <span className={`refTag refTag-${link.kind}`}>
                      {refTagMap[link.kind]}
                    </span>
                    <a href={link.url} target="_blank" rel="noreferrer">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="actions">
              <GitHubLink href={spec.repo.url} variant="solid">
                {spec.repo.name}
              </GitHubLink>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
