import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="section hero">
      <div className="container">
        <p className="eyebrow">$ cat /404</p>
        <h1>404</h1>
        <p className="heroLead">This route doesn&apos;t exist.</p>
        <p className="heroText">
          The page you&apos;re looking for was never published, or has been
          moved. Head back to the index.
        </p>
        <div className="actions">
          <Link href="/" className="btn btnPrimary">
            cd ~/home
          </Link>
        </div>
      </div>
    </section>
  );
}
