import Link from 'next/link';
import GitHubLink from '@/components/GitHubLink';
import TerminalBlock from '@/components/TerminalBlock';
import SectionLabel from '@/components/SectionLabel';
import StatusBadge from '@/components/StatusBadge';
import { profile, specs, workspace, articles, focusAreas } from '@/lib/content';

export default function HomePage() {
  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="section hero">
        <div className="container">
          <p className="eyebrow">$ whoami</p>
          <h1>{profile.name}</h1>
          <p className="heroLead">
            {profile.role} focused on open-source protocol infrastructure,
            Rust developer tooling, and technical writing for the Bitcoin ecosystem.
          </p>
          <p className="heroText">
            I contribute to protocol specifications, build censorship-resistant
            developer tooling, and write technical deep-dives. No product
            marketing — just specs, code, and writing.
          </p>
          <div className="actions">
            <GitHubLink href={profile.github} variant="solid">
              github.com/{profile.handle}
            </GitHubLink>
            <Link href="/specifications" className="btn btnSecondary">
              View specifications
            </Link>
          </div>
        </div>
      </section>

      {/* ---------- Focus areas ---------- */}
      <section className="section">
        <div className="container">
          <SectionLabel index="01">focus</SectionLabel>
          <h2>Three areas of work</h2>
          <p className="sectionIntro">
            Everything I build sits in one of these three lanes. Each links to
            the underlying repositories, specs, or publications.
          </p>
          <div className="grid">
            {focusAreas.map((area) => (
              <Link key={area.key} href={`/${area.key}`} className="card">
                <div className="cardTitle">
                  <span className="cardEyebrow">{area.label}</span>
                </div>
                <p className="cardBlurb">{area.blurb}</p>
                <span className="cardCta">{area.cta}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Latest spec contribution ---------- */}
      <section className="section">
        <div className="container">
          <SectionLabel index="02">latest contribution</SectionLabel>
          <h2>{specs[0].title}</h2>
          <div className="specMeta">
            <StatusBadge status={specs[0].status} />
            <span className="specRepo">{specs[0].repo.name}</span>
          </div>
          <p className="muted">{specs[0].summary}</p>
          <TerminalBlock
            title="pontmore/protocol"
            lines={[
              { prompt: '$', content: 'git log --oneline -1 origin/main', tone: 'default' },
              { content: '3c46a24 merge: extend PIP-01 with standalone escrows (#12)', tone: 'success' },
              { prompt: '$', content: 'git diff --stat HEAD~1', tone: 'default' },
              { content: ' docs/pip-01-escrows.md | 248 ++++++++++++++++++++++', tone: 'muted' },
              { content: ' 1 file changed, 248 insertions(+)', tone: 'muted' },
            ]}
          />
          <div className="actions">
            <Link href="/specifications" className="btn btnSecondary">
              Read the spec
            </Link>
            <GitHubLink href={specs[0].repo.url}>
              {specs[0].repo.name}
            </GitHubLink>
          </div>
        </div>
      </section>

      {/* ---------- Workspace ---------- */}
      <section className="section">
        <div className="container">
          <SectionLabel index="03">workspace</SectionLabel>
          <h2>{workspace.name}</h2>
          <p className="muted">{workspace.description}</p>
          <TerminalBlock
            title="descriptor-POC"
            lines={[
              { prompt: '$', content: 'cargo build --workspace', tone: 'default' },
              { content: '   Compiling descriptor v0.1.0', tone: 'muted' },
              { content: '   Compiling client v0.1.0', tone: 'muted' },
              { content: '   Compiling poc-cli v0.1.0', tone: 'muted' },
              { content: '   Compiling mock-service v0.1.0', tone: 'muted' },
              { content: '    Finished dev [unoptimized] target(s)', tone: 'success' },
            ]}
          />
          <div className="pillWrap">
            {workspace.themes.map((theme) => (
              <span className="pill" key={theme}>{theme}</span>
            ))}
          </div>
          <div className="actions">
            <Link href="/tooling" className="btn btnSecondary">
              Explore crates
            </Link>
            <GitHubLink href={workspace.repo.url}>
              {workspace.repo.name}
            </GitHubLink>
          </div>
        </div>
      </section>

      {/* ---------- Writing ---------- */}
      <section className="section">
        <div className="container">
          <SectionLabel index="04">writing</SectionLabel>
          <h2>Technical deep-dives</h2>
          <p className="sectionIntro">
            Published with <span className="accent">DEV Community</span> and{' '}
            <span className="accent">Open Bitcoin Africa</span> on protocol
            design, service discovery, and escrow architecture.
          </p>
          <div className="list">
            {articles.map((article) => (
              <div className="articleEntry" key={article.slug}>
                <div className="articleMeta">
                  <span className="articlePub">{article.publication}</span>
                  <span>·</span>
                  <span>{article.topic}</span>
                  <span>·</span>
                  <span>{article.date}</span>
                </div>
                <h3 className="articleTitle">{article.title}</h3>
                <p className="articleSummary">{article.summary}</p>
              </div>
            ))}
          </div>
          <div className="actions">
            <Link href="/articles" className="btn btnSecondary">
              All articles
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
