// Splits text into letters that drop in on load and spring up with a tilt when the mouse passes over them.
// Each letter has a static outer span (the hover target) and an inner span that moves, so the target
// never slides out from under the cursor and the hover can't flicker.
// On touch screens a finger tapping or sliding across the letters triggers the same bounce.
const TILTS = [-7, 5, -4, 8, -6, -8, 6, -5, 7, -3];
const DROP_DELAYS = [0.13, 0.07, 0.24, 0.12, 0.27, 0.33, 0.08, 0.19, 0.3, 0.1];

function bounceAt(touch) {
  const letter = document.elementFromPoint(touch.clientX, touch.clientY)?.closest('.bl__l');
  if (!letter || letter.classList.contains('is-hot')) return;
  letter.classList.add('is-hot');
  setTimeout(() => letter.classList.remove('is-hot'), 550);
}

function handleTouch(e) {
  for (const touch of e.touches) bounceAt(touch);
}

export default function BouncyLetters({ text, className = '', drop = true }) {
  let letterIndex = 0;
  return (
    <span
      className={`bl ${drop ? 'bl--drop' : ''} ${className}`}
      aria-hidden="true"
      onTouchStart={handleTouch}
      onTouchMove={handleTouch}
    >
      {text.split('').map((ch, i) => {
        if (ch === ' ') return <span key={i} className="bl__space" />;
        const n = letterIndex++;
        return (
          <span
            key={i}
            className="bl__l"
            style={{
              '--tilt': `${TILTS[n % TILTS.length]}deg`,
              '--drop-delay': `${DROP_DELAYS[n % DROP_DELAYS.length]}s`,
            }}
          >
            <span className="bl__in">{ch}</span>
          </span>
        );
      })}
    </span>
  );
}
