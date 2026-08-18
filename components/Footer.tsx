import { profile } from '@/lib/content';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footerInner">
        <div className="footerLinks">
          <a href={profile.github} target="_blank" rel="noreferrer">github</a>
          <a href={profile.x} target="_blank" rel="noreferrer">x</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">linkedin</a>
          <a href={profile.email}>email</a>
        </div>
        <p className="footerMeta">
          © {new Date().getFullYear()} {profile.name} · built with next.js ·{' '}
          <span className="accent">open source</span>
        </p>
      </div>
    </footer>
  );
}
