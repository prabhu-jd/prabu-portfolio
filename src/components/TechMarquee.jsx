import { Icon } from '../icons';
import { marquee } from '../data';

// Endless strip of tech logos. The list is rendered twice so the -50% loop is seamless.
export default function TechMarquee() {
  const items = [...marquee, ...marquee];
  return (
    <section className="marquee" aria-label="Technologies I work with">
      <div className="marquee__track">
        {items.map(([icon, label], i) => (
          <span className="marquee__item" key={i} aria-hidden={i >= marquee.length}>
            <Icon name={icon} size={26} />
            {label}
          </span>
        ))}
      </div>
    </section>
  );
}
