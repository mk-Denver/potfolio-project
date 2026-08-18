'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { profile } from '@/lib/content';

const links = [
  { href: '/', label: '~/home' },
  { href: '/specifications', label: 'specifications' },
  { href: '/tooling', label: 'tooling' },
  { href: '/articles', label: 'articles' },
];

export default function Nav() {
  const pathname = usePathname();
  return (
    <header className="header">
      <div className="container nav">
        <Link href="/" className="brand">
          <span className="brandPrompt">$</span>
          <span className="brandName">{profile.handle}</span>
        </Link>
        <nav className="navLinks">
          {links.map((link) => {
            const active =
              link.href === '/' ? pathname === '/' : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={active ? 'navLink navLinkActive' : 'navLink'}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
