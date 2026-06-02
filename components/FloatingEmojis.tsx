'use client';

const FLOATERS = [
  { emoji: '🍅', left: '7%',  dur: 20, delay: 0   },
  { emoji: '🥕', left: '19%', dur: 25, delay: 4   },
  { emoji: '🥦', left: '33%', dur: 18, delay: 8   },
  { emoji: '🧄', left: '48%', dur: 27, delay: 2   },
  { emoji: '🌶️', left: '61%', dur: 22, delay: 6   },
  { emoji: '🍋', left: '74%', dur: 19, delay: 11  },
  { emoji: '🥑', left: '87%', dur: 24, delay: 3   },
  { emoji: '🍄', left: '13%', dur: 21, delay: 14  },
  { emoji: '🧅', left: '43%', dur: 23, delay: 7   },
  { emoji: '🥒', left: '69%', dur: 17, delay: 16  },
];

export default function FloatingEmojis() {
  return (
    <div className="floating-emojis" aria-hidden="true">
      {FLOATERS.map((f, i) => (
        <span
          key={i}
          className="floating-emoji"
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
