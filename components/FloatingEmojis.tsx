'use client';

// 16 emojis evenly distributed horizontally (~6% apart).
// Movement is driven purely by CSS @keyframes emoji-rise — no JS needed.
// The ScrollEffects rAF loop ignores these (no data-par attribute).
const FLOATERS = [
  { emoji: '🍅', left: '3%',   dur: 20, delay: 0    },
  { emoji: '🥕', left: '9%',   dur: 24, delay: 3.5  },
  { emoji: '🥦', left: '15%',  dur: 18, delay: 7    },
  { emoji: '🧄', left: '21%',  dur: 22, delay: 1.5  },
  { emoji: '🌶️', left: '27%',  dur: 26, delay: 10   },
  { emoji: '🍋', left: '33%',  dur: 19, delay: 5    },
  { emoji: '🥑', left: '39%',  dur: 23, delay: 13   },
  { emoji: '🍄', left: '45%',  dur: 21, delay: 8    },
  { emoji: '🧅', left: '51%',  dur: 25, delay: 2.5  },
  { emoji: '🥒', left: '57%',  dur: 17, delay: 15   },
  { emoji: '🫑', left: '63%',  dur: 20, delay: 6    },
  { emoji: '🍳', left: '69%',  dur: 23, delay: 11   },
  { emoji: '🫒', left: '75%',  dur: 19, delay: 4    },
  { emoji: '🌿', left: '81%',  dur: 22, delay: 9    },
  { emoji: '🫐', left: '87%',  dur: 18, delay: 14   },
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
