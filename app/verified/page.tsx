import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'Email verified — Sauceful',
  robots: { index: false, follow: false },
};

export default function Verified() {
  return (
    <>
      <Nav />
      <main>
        <div className="legal-page">
          <div className="legal-card pop" style={{ textAlign: 'center' }}>
            <div
              aria-hidden
              style={{
                width: 84,
                height: 84,
                borderRadius: '50%',
                background: 'var(--c-peach)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 24px',
                fontSize: 42,
                lineHeight: 1,
              }}
            >
              ✓
            </div>

            <span className="eyebrow">★ All done</span>
            <h1 className="h2 legal-title">Your email&rsquo;s verified.</h1>
            <p className="legal-note" style={{ maxWidth: 440, margin: '0 auto' }}>
              Nice one — your Sauceful account is confirmed. Head back to the{' '}
              <strong>Sauceful app</strong> and sign in to start planning your week.
            </p>

            <p
              className="legal-note"
              style={{ maxWidth: 440, margin: '20px auto 0', opacity: 0.7 }}
            >
              You can close this tab. Any trouble? Email us at{' '}
              <a
                href="https://mail.google.com/mail/?view=cm&to=hello@sauceful.co.uk"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'var(--c-peach-dk)' }}
              >
                hello@sauceful.co.uk
              </a>
              .
            </p>

            <Link href="/" className="legal-back">← Back to home</Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
