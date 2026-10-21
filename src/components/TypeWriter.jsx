import { useEffect, useState } from 'react';

// Types each phrase out, pauses, deletes it, then moves to the next one.
export default function TypeWriter({ phrases, typeMs = 70, deleteMs = 35, holdMs = 1700 }) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);
  const [reduced] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );

  useEffect(() => {
    if (reduced) return;
    const full = phrases[index];
    let delay = deleting ? deleteMs : typeMs;
    if (!deleting && text === full) delay = holdMs;
    if (deleting && text === '') delay = 350;

    const timer = setTimeout(() => {
      if (!deleting && text === full) {
        setDeleting(true);
      } else if (deleting && text === '') {
        setDeleting(false);
        setIndex((i) => (i + 1) % phrases.length);
      } else {
        setText(full.slice(0, text.length + (deleting ? -1 : 1)));
      }
    }, delay);
    return () => clearTimeout(timer);
  }, [text, deleting, index, phrases, typeMs, deleteMs, holdMs, reduced]);

  if (reduced) return <span>{phrases[0]}</span>;

  return (
    <span className="typewriter" aria-label={phrases.join(', ')}>
      <span aria-hidden="true">{text}</span>
      <span className="typewriter__caret" aria-hidden="true" />
    </span>
  );
}
