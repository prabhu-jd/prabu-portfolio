import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import ScrambleText from './ScrambleText';
import { SectionHead } from './Sections';
import { experience } from '../data';

function BriefcaseIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      <path d="M3 12h18" />
      <path d="M10 12v2h4v-2" />
    </svg>
  );
}

function XpCard({ job, index }) {
  const side = index % 2 === 0 ? 'left' : 'right';
  return (
    <motion.li
      className={`xp__item xp__item--${side}`}
      initial="hidden"
      whileInView="shown"
      viewport={{ once: true, margin: '-80px' }}
    >
      {/* The dot animates from its row: a zero-size element never registers as in view. */}
      <motion.span
        className="xp__dot"
        aria-hidden="true"
        variants={{ hidden: { scale: 0, opacity: 0 }, shown: { scale: 1, opacity: 1 } }}
        transition={{ type: 'spring', stiffness: 260, damping: 18 }}
      />
      <motion.article
        className="xp__card"
        variants={{ hidden: { opacity: 0, x: side === 'left' ? -60 : 60 }, shown: { opacity: 1, x: 0 } }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      >
        <header className="xp__head">
          <span className="xp__icon"><BriefcaseIcon /></span>
          <div>
            {job.current && <span className="xp__current">Current role</span>}
            <ScrambleText as="h3" className="xp__role" text={job.role} />
            <p className="xp__company">{job.company}</p>
          </div>
        </header>

        <ul className="xp__points">
          {job.points.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>

        <ul className="xp__stack" aria-label="Tech stack">
          {job.stack.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>

        <footer className="xp__foot">
          <span className="xp__pill xp__pill--date">{job.period}</span>
          <span className="xp__pill xp__pill--client">{job.client}</span>
        </footer>
      </motion.article>
    </motion.li>
  );
}

export default function ExperienceTimeline() {
  const listRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: listRef, offset: ['start 75%', 'end 60%'] });
  const fill = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  return (
    <section className="section section--light" id="experience">
      <div className="container">
        <SectionHead
          watermark="RESUME"
          title="Work Experience"
          intro="Ten years, five companies and one constant: building systems that people rely on every day."
          center
        />

        <ol className="xp" ref={listRef}>
          <span className="xp__line" aria-hidden="true">
            <motion.span className="xp__line-fill" style={{ scaleY: fill }} />
          </span>
          {experience.map((job, i) => (
            <XpCard key={job.company + job.period} job={job} index={i} />
          ))}
        </ol>
      </div>
    </section>
  );
}
