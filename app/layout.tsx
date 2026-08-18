import type { Metadata } from 'next';
import './globals.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { profile } from '@/lib/content';

export const metadata: Metadata = {
  title: {
    default: `${profile.name} — ${profile.role}`,
    template: `%s · ${profile.name}`,
  },
  description: profile.tagline,
  metadataBase: new URL('https://mtangedenver.me'),
  openGraph: {
    title: `${profile.name} — ${profile.role}`,
    description: profile.tagline,
    url: 'https://mtangedenver.me',
    siteName: profile.name,
    type: 'website',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="site">
          <Nav />
          <main className="main">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
