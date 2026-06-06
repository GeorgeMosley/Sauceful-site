import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import ContactButton from '@/components/ContactButton';

function Device({
  scale,
  tilt,
  src,
  alt,
}: {
  scale: number;
  tilt: 'left' | 'right' | 'none';
  src: string;
  alt: string;
}) {
  const w = Math.round(360 * scale);
  const h = Math.round(740 * scale);
  const rotation = tilt === 'right' ? 2.5 : tilt === 'left' ? -2.5 : 0;
  return (
    <div
      className="device-outer"
      style={{ width: w, height: h, transform: rotation ? `rotate(${rotation}deg)` : undefined }}
    >
      <div
        className="device-bezel"
        style={{ width: 360, height: 740, transform: `scale(${scale})`, transformOrigin: 'top left' }}
      >
        <div className="device-screen">
          <img src={src} alt={alt} className="app-shot" />
        </div>
      </div>
    </div>
  );
}

export const metadata = {
  title: 'Who we are — Sauceful',
  description: 'We got tired of the 5pm panic. So we built the dinner planner we always wished existed — personalised weekly meal plans for real households.',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'Who we are — Sauceful',
    description: 'We got tired of the 5pm panic. So we built the dinner planner we always wished existed.',
    url: 'https://www.sauceful.co.uk/about',
  },
};

export default function About() {
  return (
    <>
      <Nav />
      <main>

        {/* ── ABOUT HERO ───────────────────────────────── */}
        <div className="about-hero">
          {/* Centered blob */}
          <div
            style={{
              position: 'absolute',
              width: 520,
              height: 520,
              borderRadius: '50%',
              background: 'var(--c-peach-soft)',
              opacity: 0.9,
              top: -80,
              left: '50%',
              transform: 'translateX(-50%)',
              pointerEvents: 'none',
              zIndex: 0,
            }}
          />
          <div className="about-hero-inner">
            <span className="eyebrow">★ Who we are</span>
            <h1 className="display">
              We got tired of the<br />
              <span className="marker">5pm panic.</span>
            </h1>
            <p className="lead about-lead">
              Sauceful started at our own kitchen table — long days, tired
              evenings, and a fridge that never quite added up to dinner. So we
              built the planner we always wished existed.
            </p>
          </div>
        </div>

        {/* ── STORY ────────────────────────────────────── */}
        <div className="story" data-reveal>
          <div className="story-col">
            <p>
              Every week began the same way: a vague plan, a panic shop, and half
              a trolley of good intentions we never got round to cooking. We were
              wasting food, money and patience in roughly equal measure.
            </p>
            <p>
              Sauceful is our answer. Tell it who&rsquo;s at your table, your
              budget and the foods you can&rsquo;t stand, and it builds a week of
              dinners you&rsquo;ll actually want to cook — then writes the shopping
              list so you don&rsquo;t have to. Dinners only. No lifestyle overhaul,
              no guilt.
            </p>
          </div>

          <div className="story-visual">
            <div
              className="sticker sticker-peach"
              style={{ top: -12, right: -20, transform: 'rotate(4deg)', '--bob-dur': '5s', '--bob-delay': '0s' } as React.CSSProperties}
            >
              hi, we&rsquo;re sauceful 🍊
            </div>
            <Device
              scale={0.60}
              tilt="right"
              src="/app-screens/onboard.jpg"
              alt="Sauceful app welcome screen"
            />
          </div>
        </div>

        {/* ── VALUES ───────────────────────────────────── */}
        <div className="band-peach">
          <div className="section">
            <div className="section-head" data-reveal>
              <span className="eyebrow">★ What we believe</span>
              <h2 className="h2">
                Three things we <span className="marker">won&rsquo;t</span> budge on.
              </h2>
            </div>

            <div className="values-grid" data-reveal>
              {/* Card 1 */}
              <div className="value-card pop" style={{ '--base-rot': '-2.5deg' } as React.CSSProperties} data-reveal>
                <div className="value-dot value-dot-peach">🍽</div>
                <p className="value-title">Dinners, done properly</p>
                <p className="value-body">
                  We don&rsquo;t try to fix breakfast or pack lunches (yet&hellip;).
                  We do one thing — the 5pm scramble — and we do it well.
                </p>
              </div>

              {/* Card 2 */}
              <div className="value-card pop" style={{ '--base-rot': '2.5deg' } as React.CSSProperties} data-reveal>
                <div className="value-dot value-dot-soft">🙅</div>
                <p className="value-title">Built around your tastes</p>
                <p className="value-body">
                  Your budget, your time and the foods you can&rsquo;t stand shape
                  every single plan. Less waste, fewer evenings staring into the
                  fridge.
                </p>
              </div>

              {/* Card 3 */}
              <div className="value-card pop" style={{ '--base-rot': '-2.5deg' } as React.CSSProperties} data-reveal>
                <div className="value-dot value-dot-peach">🥕</div>
                <p className="value-title">Honest about food</p>
                <p className="value-body">
                  Real ingredients, simple steps, nothing you can&rsquo;t
                  pronounce. Honest portions, never hidden nonsense.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ── CTA BAND ─────────────────────────────────── */}
        <div className="cta-band-wrap" style={{ paddingTop: 92 }}>
          <div className="cta-band">
            <div
              className="sticker sticker-white"
              style={{ top: -18, right: 60, transform: 'rotate(-3deg)', '--bob-dur': '4.8s', '--bob-delay': '0.2s' } as React.CSSProperties}
            >
              say hi 👋
            </div>
            <h2 className="cta-title">Come cook with us.</h2>
            <p className="cta-sub">
              We&rsquo;re still in the kitchen building Sauceful — and we read
              every message. We&rsquo;d love yours.
            </p>
            <ContactButton label="Say hello" btnClass="btn btn-peach" />
          </div>
        </div>

      </main>
      <Footer />
    </>
  );
}
