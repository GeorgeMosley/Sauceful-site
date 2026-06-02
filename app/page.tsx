import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

/* ── Tick icon ──────────────────────────────────────────── */
function Tick({ label }: { label: string }) {
  return (
    <div className="tick">
      <div className="tick-mark">
        <svg viewBox="0 0 12 12" aria-hidden="true">
          <polyline points="1.5,6 4.5,9.5 10.5,2.5" />
        </svg>
      </div>
      <span>{label}</span>
    </div>
  );
}

/* ── Device mockup ──────────────────────────────────────── */
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
          {/* Drop your app screenshot at public/app-screens/<name>.png */}
          <img src={src} alt={alt} className="app-shot" />
        </div>
      </div>
    </div>
  );
}

/* ── Marquee row ─────────────────────────────────────────── */
const MARQUEE_PHRASES = [
  'No more 5pm panic',
  'Plan around your tastes',
  'A week sorted in 30 seconds',
  'Less waste, more dinners you love',
];

function MarqueeRow() {
  const items = [...MARQUEE_PHRASES, ...MARQUEE_PHRASES];
  return (
    <div className="marquee-wrap" aria-hidden="true">
      <div className="marquee-track">
        {items.map((phrase, i) => (
          <span className="marquee-item" key={i}>
            {phrase}
            <span className="marquee-star">✺</span>
          </span>
        ))}
      </div>
    </div>
  );
}

/* ── Home page ───────────────────────────────────────────── */
export default function Home() {
  return (
    <>
      <Nav />
      <main>

        {/* ── HERO ─────────────────────────────────────── */}
        <div className="hero-section">
          {/* Background blobs */}
          <div
            className="hero-blob"
            style={{
              width: 460, height: 460,
              background: 'var(--c-peach)',
              opacity: 0.45,
              top: -60, right: -80,
            }}
          />
          <div
            className="hero-blob"
            style={{
              width: 300, height: 300,
              background: 'var(--c-peach-soft)',
              opacity: 0.7,
              bottom: 48, left: -130,
            }}
          />

          <div className="hero">
            {/* Text */}
            <div className="hero-content">
              <span className="eyebrow">★ Dinner planning for real households</span>
              <h1 className="display hero-headline">
                The secret <em>sauce</em><br />
                of dinner planning
              </h1>
              <p className="lead hero-lead">
                Personalised weekly dinner plans, built around the food your
                household actually loves. Less waste, less faff, no more 5pm
                fridge stares.
              </p>
              <div className="hero-ctas">
                <a href="mailto:hello@sauceful.co.uk" className="btn btn-primary">
                  Coming soon — email us
                </a>
                <a href="#how" className="btn btn-ghost">
                  See how it works
                </a>
              </div>
            </div>

            {/* Visual */}
            <div className="hero-visual">
              <div
                className="sticker sticker-peach"
                style={{ top: 10, right: -10, transform: 'rotate(4deg)', '--bob-dur': '4.8s', '--bob-delay': '0s' } as React.CSSProperties}
              >
                Customised recipes
              </div>
              <div
                className="sticker sticker-cocoa"
                style={{ top: 90, left: -10, transform: 'rotate(-5deg)', '--bob-dur': '5.2s', '--bob-delay': '0.7s' } as React.CSSProperties}
              >
                30-sec plans
              </div>
              <div
                className="sticker sticker-white"
                style={{ bottom: 90, right: -20, transform: 'rotate(3deg)', '--bob-dur': '4.6s', '--bob-delay': '1.4s' } as React.CSSProperties}
              >
                zero 5pm panic
              </div>
              <Device
                scale={0.66}
                tilt="right"
                src="/app-screens/week.png"
                alt="Sauceful weekly meal planner"
              />
            </div>
          </div>
        </div>

        {/* ── MARQUEE ──────────────────────────────────── */}
        <MarqueeRow />

        {/* ── HOW IT WORKS ─────────────────────────────── */}
        <div id="how" className="band-peach">
          <div className="section">
            <div className="section-head">
              <span className="eyebrow">★ How it works</span>
              <h2 className="h2">
                Blank week to <span className="marker">sorted</span><br />
                in three steps.
              </h2>
            </div>

            <div className="steps-grid">
              {/* Step 1 */}
              <div className="step pop" style={{ transform: 'rotate(-2.5deg)' }}>
                <div className="step-num">1</div>
                <p className="step-title">Tell the app what you need.</p>
                <p className="step-body">
                  Your week, your people, your budget. Even your fussiest eater.
                </p>
              </div>

              {/* Step 2 */}
              <div className="step pop" style={{ transform: 'rotate(2.5deg)' }}>
                <div className="step-num">2</div>
                <p className="step-title">Dinner? Handled. In 30 seconds.</p>
                <p className="step-body">
                  A full week of home-cooked meals, planned before your kettle boils.
                </p>
              </div>

              {/* Step 3 */}
              <div className="step pop" style={{ transform: 'rotate(-2.5deg)' }}>
                <div className="step-num">3</div>
                <p className="step-title">The shopping does itself.</p>
                <p className="step-body">
                  Every ingredient listed, grouped by aisle, ready for your basket, in-store or online!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ── FEATURE ──────────────────────────────────── */}
        <div>
          <div className="feature">
            {/* Phone visual */}
            <div className="feature-visual">
              <div
                className="sticker sticker-cocoa"
                style={{ bottom: -10, right: -30, transform: 'rotate(3deg)', '--bob-dur': '4.9s', '--bob-delay': '0.3s' } as React.CSSProperties}
              >
                cleared plates 😙
              </div>
              <Device
                scale={0.64}
                tilt="left"
                src="/app-screens/recipe.png"
                alt="Sauceful recipe detail"
              />
            </div>

            {/* Text */}
            <div className="feature-content">
              <span className="eyebrow">★ Recipes, not roulette</span>
              <h2 className="h2 feature-headline">
                Meals everyone<br />
                <span className="marker">actually wants.</span>
              </h2>
              <p className="lead lead-sm feature-lead">
                Every plan works around the tastes and hard-nos you set, so dinner
                lands on the table without the nightly negotiation.
              </p>
              <div className="ticks">
                <Tick label="Built around the tastes you set" />
                <Tick label="Balanced, without the lecture" />
                <Tick label="Real ingredients, simple steps" />
              </div>
            </div>
          </div>
        </div>

        {/* ── CTA BAND ─────────────────────────────────── */}
        <div className="cta-band-wrap">
          <div className="cta-band">
            <div
              className="sticker sticker-white"
              style={{ top: -18, right: 60, transform: 'rotate(-3deg)', '--bob-dur': '5s', '--bob-delay': '0.5s' } as React.CSSProperties}
            >
              coming soon!
            </div>
            <h2 className="cta-title">
              Dinner, sorted.<br />
              Almost <span className="marker">here.</span>
            </h2>
            <p className="cta-sub">
              We&rsquo;re putting the finishing touches to Sauceful. Drop us a line
              and we&rsquo;ll tell you the moment it&rsquo;s ready.
            </p>
            <a href="mailto:hello@sauceful.co.uk" className="btn btn-peach">
              Coming soon — email us
            </a>
          </div>
        </div>

      </main>
      <Footer />
    </>
  );
}
