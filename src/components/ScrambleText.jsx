import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

const GLYPHS = '{}[]<>/\\_#$%&*+=^~!?';

// Text that "decodes" from random glyphs into the real words the first time it scrolls into view.
export default function ScrambleText({ text, as: Tag = 'span', className, duration = 900 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const [display, setDisplay] = useState(text);

  useEffect(() => {
    if (!inView) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDisplay(text);
      return;
    }
    let frame;
    const start = performance.now();
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const revealed = Math.floor(progress * text.length);
      setDisplay(
        text
          .split('')
          .map((ch, i) => (i < revealed || ch === ' ' ? ch : GLYPHS[Math.floor(Math.random() * GLYPHS.length)]))
          .join('')
      );
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, text, duration]);

  return (
    <Tag ref={ref} className={className} aria-label={text}>
      <span aria-hidden="true">{display}</span>
    </Tag>
  );
}
