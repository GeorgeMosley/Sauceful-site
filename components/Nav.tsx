'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ContactButton from './ContactButton';

export default function Nav() {
  const pathname = usePathname();
  const isHome  = pathname === '/';
  const isAbout = pathname === '/about';

  return (
    <nav className="nav">
      <div className="nav-inner">
        <Link href="/" className="wordmark" style={{ fontSize: 25 }}>
          <span className="wm-sauce">sauce</span>
          <span className="wm-ful">ful</span>
          <span className="wm-dot">.</span>
        </Link>

        <div className="nav-links">
          <Link href="/"      className={`nav-link${isHome  ? ' nav-link-active' : ''}`}>Home</Link>
          <Link href="/about" className={`nav-link${isAbout ? ' nav-link-active' : ''}`}>Who we are</Link>
          <ContactButton label="Coming soon" btnClass="btn btn-primary nav-cta" />
        </div>
      </div>
    </nav>
  );
}
