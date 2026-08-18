import Link from 'next/link';

type Line = {
  prompt?: string;
  content: string;
  tone?: 'default' | 'success' | 'muted' | 'accent' | 'warn';
};

export default function TerminalBlock({
  title = 'terminal',
  lines,
}: {
  title?: string;
  lines: Line[];
}) {
  return (
    <div className="terminal">
      <div className="terminalBar">
        <span className="terminalDot dotRed" />
        <span className="terminalDot dotYellow" />
        <span className="terminalDot dotGreen" />
        <span className="terminalTitle">{title}</span>
      </div>
      <pre className="terminalBody">
        {lines.map((line, i) => (
          <div key={i} className={`terminalLine tone-${line.tone ?? 'default'}`}>
            {line.prompt && <span className="terminalPrompt">{line.prompt} </span>}
            <span>{line.content}</span>
          </div>
        ))}
      </pre>
    </div>
  );
}

export function TerminalLink({ href, children }: { href: string; children: React.ReactNode }) {
  const isExternal = href.startsWith('http');
  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className="terminalCmd">
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className="terminalCmd">
      {children}
    </Link>
  );
}
