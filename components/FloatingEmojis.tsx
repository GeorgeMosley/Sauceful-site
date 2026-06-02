'use client';

// Emojis are position:fixed (via .emoji-layer) at various viewport positions.
// The ScrollEffects rAF loop reads [data-par] and applies translateY(-scrollY * factor)
// so each drifts upward at its own speed as the page scrolls — classic parallax.
const FLOATERS = [
  // ── Left edge ───────────────────────────────────
  { emoji: '🍅', left: '2.5%',  top: '12vh',  par: 0.12, size: 40 },
  { emoji: '🥕', left: '5%',    top: '32vh',  par: 0.21, size: 36 },
  { emoji: '🌶️', left: '3%',    top: '54vh',  par: 0.16, size: 34 },
  { emoji: '🥦', left: '6%',    top: '74vh',  par: 0.24, size: 38 },
  { emoji: '🧄', left: '2%',    top: '90vh',  par: 0.13, size: 30 },
  // ── Right edge ──────────────────────────────────
  { emoji: '🥑', left: '93%',   top: '8vh',   par: 0.19, size: 38 },
  { emoji: '🍋', left: '95%',   top: '28vh',  par: 0.11, size: 36 },
  { emoji: '🍄', left: '92%',   top: '50vh',  par: 0.26, size: 34 },
  { emoji: '🧅', left: '94%',   top: '70vh',  par: 0.18, size: 32 },
  { emoji: '🥒', left: '93%',   top: '88vh',  par: 0.22, size: 34 },
  // ── Inner left (visible on wider screens) ───────
  { emoji: '🫑', left: '11%',   top: '20vh',  par: 0.15, size: 32 },
  { emoji: '🫒', left: '9%',    top: '62vh',  par: 0.20, size: 28 },
  { emoji: '🌿', left: '10%',   top: '82vh',  par: 0.14, size: 26 },
  // ── Inner right ─────────────────────────────────
  { emoji: '🍳', left: '88%',   top: '40vh',  par: 0.17, size: 36 },
  { emoji: '🫐', left: '89%',   top: '76vh',  par: 0.22, size: 32 },
  { emoji: '🥘', left: '87%',   top: '18vh',  par: 0.19, size: 30 },
];

export default function FloatingEmojis() {
  return (
    <div className="emoji-layer" aria-hidden="true">
      {FLOATERS.map((f, i) => (
        <span
          key={i}
          className="emoji-float"
          data-par={f.par}
          style={{ left: f.left, top: f.top, fontSize: f.size } as React.CSSProperties}
        >
          {f.emoji}
        </span>
      ))}
    </div>
  );
}
