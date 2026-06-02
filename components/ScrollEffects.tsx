'use client';

import { useEffect } from 'react';

/**
 * Single rAF loop driving four scroll effects:
 *
 * 1. Scroll-progress bar   — thin gradient bar pinned to the very top.
 * 2. Emoji parallax        — [data-par]       fixed emojis drift up at their own speed.
 * 3. Blob parallax         — [data-par-bg]    absolute background blobs scroll slower.
 * 4. Phone parallax+tilt   — [data-phone-par] phone visuals drift + tilt vs viewport centre.
 * 5. Scroll reveal         — [data-reveal]    fade + rise + scale in on enter.
 */
export default function ScrollEffects() {
  useEffect(() => {
    // ── Progress bar ──────────────────────────────────────────────────────
    const bar = document.createElement('div');
    bar.style.cssText =
      'position:fixed;top:0;left:0;height:3px;width:0%;' +
      'background:linear-gradient(90deg,var(--c-peach-dk) 0%,var(--c-cocoa) 100%);' +
      'z-index:9999;pointer-events:none;transition:width 0.08s linear;';
    document.body.appendChild(bar);

    // ── Enable CSS reveal rules ───────────────────────────────────────────
    document.body.classList.add('js-reveal');

    // ── Collect targets ───────────────────────────────────────────────────
    const emojiEls  = Array.from(document.querySelectorAll<HTMLElement>('[data-par]'));
    const blobEls   = Array.from(document.querySelectorAll<HTMLElement>('[data-par-bg]'));
    const phoneEls  = Array.from(document.querySelectorAll<HTMLElement>('[data-phone-par]'));
    const revealEls = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));

    let frame: number;

    function tick() {
      const sy   = window.scrollY;
      const docH = document.documentElement.scrollHeight - window.innerHeight;
      const vh   = window.innerHeight;

      // 1 · Progress bar
      bar.style.width = `${Math.min(100, docH > 0 ? (sy / docH) * 100 : 0)}%`;

      // 2 · Emoji parallax (position:fixed context — drift upward as you scroll)
      for (const el of emojiEls) {
        const f = parseFloat(el.dataset.par ?? '0.2');
        el.style.transform = `translateY(${-sy * f}px)`;
      }

      // 3 · Blob parallax (position:absolute in-page — scroll slower than content)
      for (const el of blobEls) {
        const f = parseFloat(el.dataset.parBg ?? '0.2');
        el.style.transform = `translateY(${sy * f}px)`;
      }

      // 4 · Phone parallax + scroll-linked tilt
      for (const el of phoneEls) {
        const driftF = parseFloat(el.dataset.phonePar ?? '0.06');
        const rect   = el.getBoundingClientRect();
        const mid    = rect.top + rect.height / 2;
        // rel: –1 (element at viewport top) → 0 (centre) → +1 (bottom)
        const rel    = ((mid - vh / 2) / (vh / 2));
        const tilt   = Math.max(-4, Math.min(4, rel * 5)); // ±4 deg max
        el.style.transform = `translateY(${sy * driftF}px) rotate(${tilt}deg)`;
      }

      // 5 · Scroll reveal
      for (const el of revealEls) {
        if (!el.classList.contains('is-visible') &&
            el.getBoundingClientRect().top < vh * 0.9) {
          el.classList.add('is-visible');
        }
      }

      frame = requestAnimationFrame(tick);
    }

    frame = requestAnimationFrame(tick);
    const onScroll = () => { cancelAnimationFrame(frame); frame = requestAnimationFrame(tick); };
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      bar.remove();
      document.body.classList.remove('js-reveal');
    };
  }, []);

  return null;
}
