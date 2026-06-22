import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-big" aria-hidden="true">
        <span className="wm-sauce">sauce</span>
        <span className="wm-ful">ful</span>
        <span className="wm-dot">.</span>
      </div>
      <div className="footer-inner">
        <p className="footer-tag">The secret <em>sauce</em> of dinner planning</p>
        <div className="footer-right">
          <div className="footer-links">
            <Link href="/privacy" className="footer-link">Privacy Policy</Link>
            <span className="footer-dot">·</span>
            <Link href="/terms" className="footer-link">Terms &amp; Conditions</Link>
          </div>
          <p className="footer-copy">© 2026 Sauceful. Made for hungry families.</p>
        </div>
      </div>
      <p className="footer-disclaimer">
        Sauceful is a meal planning tool and is not considered to give medical, dietetic, or professional nutritional advice.
      </p>
    </footer>
  );
}
