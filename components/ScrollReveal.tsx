'use client';

import { useEffect } from 'react';

export default function ScrollReveal() {
  useEffect(() => {
    document.body.classList.add('js-reveal');

    const targets = Array.from(
      document.querySelectorAll<HTMLElement>('[data-reveal]')
    );

    let frame: number;

    function tick() {
      const vh = window.innerHeight;
      let pending = 0;
      for (const el of targets) {
        if (!el.classList.contains('is-visible')) {
          if (el.getBoundingClientRect().top < vh * 0.9) {
            el.classList.add('is-visible');
          } else {
            pending++;
          }
        }
      }
      if (pending > 0) {
        frame = requestAnimationFrame(tick);
      }
    }

    frame = requestAnimationFrame(tick);

    const onScroll = () => { frame = requestAnimationFrame(tick); };
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      document.body.classList.remove('js-reveal');
    };
  }, []);

  return null;
}
