'use client';

// 16 emojis evenly distributed horizontally (~6% apart).
// Movement is driven purely by CSS @keyframes emoji-rise — no JS needed.
// The ScrollEffects rAF loop ignores these (no data-par attribute).
const FLOATERS = [
  { emoji: '🍅', left: '3%',   dur: 20, delay: 0    },
  { emoji: '🥦', left: '12%',  dur: 18, delay: 7    },
  { emoji: '🧄', left: '21%',  dur: 22, delay: 1.5  },
  { emoji: '🍋', left: '30%',  dur: 19, delay: 5    },
  { emoji: '🥑', left: '39%',  dur: 23, delay: 13   },
  { emoji: '🍄', left: '48%',  dur: 21, delay: 8    },
  { emoji: '🥒', left: '57%',  dur: 17, delay: 15   },
  { emoji: '🍳', left: '66%',  dur: 23, delay: 11   },
  { emoji: '🫒', left: '75%',  dur: 19, delay: 4    },
  { emoji: '🫐', left: '84%',  dur: 18, delay: 14   },
  { emoji: '🥘', left: '93%',  dur: 24, delay: 0.5  },
];

export default function FloatingEmojis() {
  return (
    <div className="emoji-layer" aria-hidden="true">
      {FLOATERS.map((f, i) => (
        <span
          key={i}
          className="emoji-float"
          style={{
            left: f.left,
            animationDuration: `${f.dur}s`,
            animationDelay: `${f.delay}s`,
          } as React.CSSProperties}
        >
          {f.emoji}
        </span>
      ))}
    </div>
  );
}
