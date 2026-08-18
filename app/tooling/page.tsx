import type { Metadata } from 'next';
import Link from 'next/link';
import GitHubLink from '@/components/GitHubLink';
import TerminalBlock from '@/components/TerminalBlock';
import SectionLabel from '@/components/SectionLabel';
import { workspace } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Developer Tooling',
  description:
    'descriptor-POC — a Rust workspace implementing descriptor parsing and validation rules across composable crates.',
};

export default function ToolingPage() {
  return (
    <>
      <section className="pageHeader">
        <div className="container">
          <p className="breadcrumb">
            <Link href="/">~/home</Link> / tooling
          </p>
          <h1>Developer Tooling</h1>
          <p className="muted">
            Rust workspace tooling built for descriptor parsing, validation
            rules, and censorship-resistant developer workflows.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionLabel index={workspace.name}>workspace</SectionLabel>
          <h2>{workspace.name}</h2>
          <p className="muted">{workspace.description}</p>

          <div className="fileTree">
            <div><span className="dir">descriptor-POC/</span></div>
            <div>  <span className="dir">descriptor/</span>        <span className="comment"># core: parsing &amp; validation rules</span></div>
            <div>  <span className="dir">client/</span>           <span className="comment"># interaction surface for consumers</span></div>
            <div>  <span className="dir">poc-cli/</span>          <span className="comment"># proof-of-concept CLI</span></div>
            <div>  <span className="dir">mock-service/</span>     <span className="comment"># testing harness / simulated backend</span></div>
            <div>  <span className="file">Cargo.toml</span>       <span className="comment"># workspace manifest</span></div>
          </div>

          <div className="pillWrap">
            {workspace.themes.map((theme) => (
              <span className="pill" key={theme}>{theme}</span>
            ))}
          </div>

          <TerminalBlock
            title={workspace.name}
            lines={[
              { prompt: '$', content: 'cargo build --workspace', tone: 'default' },
              { content: '   Compiling descriptor v0.1.0', tone: 'muted' },
              { content: '   Compiling client v0.1.0', tone: 'muted' },
              { content: '   Compiling poc-cli v0.1.0', tone: 'muted' },
              { content: '   Compiling mock-service v0.1.0', tone: 'muted' },
              { content: '    Finished dev [unoptimized] target(s)', tone: 'success' },
              { prompt: '$', content: './target/debug/poc-cli validate --help', tone: 'default' },
              { content: 'Parse and validate an output descriptor', tone: 'muted' },
              { content: 'Usage: poc-cli validate <DESCRIPTOR>', tone: 'muted' },
            ]}
          />

          <div className="crateGrid">
            {workspace.crates.map((crate) => (
              <div className="crateCard" key={crate.name}>
                <div className="crateName">{crate.name}</div>
                <div className="crateRole">{crate.role}</div>
                <p className="crateDesc">{crate.description}</p>
                <ul className="crateHighlights">
                  {crate.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="actions">
            <GitHubLink href={workspace.repo.url} variant="solid">
              {workspace.repo.name}
            </GitHubLink>
          </div>
        </div>
      </section>
    </>
  );
}
