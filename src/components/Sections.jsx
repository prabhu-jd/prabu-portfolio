import { lazy, Suspense, useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import Reveal from './Reveal';
import ScrambleText from './ScrambleText';
import TypeWriter from './TypeWriter';
import BouncyLetters from './BouncyLetters';
import { Icon } from '../icons';
import { profile, summary, roles, focus, traits } from '../data';

const Scene3D = lazy(() => import('./Scene3D'));

function useIsCompact() {
  const [compact, setCompact] = useState(() => typeof window !== 'undefined' && window.innerWidth < 900);
  useEffect(() => {
    const onResize = () => setCompact(window.innerWidth < 900);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);
  return compact;
}

// Section title with a large faded word behind it.
export function SectionHead({ watermark, title, intro, center = false }) {
  return (
    <Reveal className={`section__head ${center ? 'section__head--center' : ''}`}>
      <div className="section__title-wrap">
        <span className="section__watermark" aria-hidden="true">{watermark}</span>
        <ScrambleText as="h2" className="section__title" text={title} />
      </div>
      {intro && <p className="section__intro">{intro}</p>}
    </Reveal>
  );
}

const fadeUp = (delay) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
});

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.75h4v11H3v-11zm6.5 0h3.8v1.5h.06c.53-1 1.83-2.06 3.77-2.06 4.03 0 4.77 2.65 4.77 6.1v5.46h-4v-4.84c0-1.16-.02-2.64-1.61-2.64-1.61 0-1.86 1.26-1.86 2.56v4.92h-4v-11z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

export function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero__blush" aria-hidden="true" />
      <span className="hero__ring" aria-hidden="true" />

      <div className="container hero__grid">
        <div className="hero__copy">
          <motion.p className="hero__status" {...fadeUp(0)}>
            <span className="hero__status-dot" aria-hidden="true" />
            {profile.availability}
          </motion.p>
          <h1 className="hero__name" aria-label="Prabu A">
            <BouncyLetters text="Prabu A" />
          </h1>
          <motion.p className="hero__role" {...fadeUp(0.2)}>
            <TypeWriter phrases={roles} />
          </motion.p>
          <motion.p className="hero__tagline" {...fadeUp(0.3)}>
            {profile.tagline}
          </motion.p>
          <motion.div className="hero__actions" {...fadeUp(0.4)}>
            <a className="btn btn--primary" href="#contact">Contact Me</a>
            <a className="btn btn--outline" href="#experience">View Experience</a>
          </motion.div>
          <motion.p className="hero__clients" {...fadeUp(0.55)}>
            <span>Clients I've delivered for</span> CVS Health · Fiserv · Standard Chartered · DEWA · Stryker
          </motion.p>
        </div>

        <motion.div
          className="hero__visual"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="hero__frame" aria-hidden="true" />
          <div className="hero__panel">
            <img
              className="hero__photo"
              src="/images/prabu-hero@2x.webp"
              srcSet="/images/prabu-hero.webp 564w, /images/prabu-hero@2x.webp 1128w"
              sizes="(max-width: 900px) 100vw, 46vw"
              alt="Prabu A, Lead Java Full Stack Developer"
              width="1128"
              height="1254"
              fetchpriority="high"
            />
            <span className="hero__badge">
              <strong>10+</strong> years shipping enterprise software
            </span>
          </div>
        </motion.div>
      </div>

      <aside className="social" aria-label="Social links">
        <span className="social__line" />
        <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedInIcon /></a>
        <a href={`mailto:${profile.email}`} aria-label="Email"><MailIcon /></a>
        <span className="social__line" />
      </aside>
    </section>
  );
}

// A small "Engineer.java" card summarizing the profile, in the spirit of a code editor.
function EngineerCard() {
  return (
    <div className="code-card" aria-label="Profile summary written as Java code">
      <div className="code-card__bar">
        <span />
        <span />
        <span />
        <em>Engineer.java</em>
      </div>
      <pre className="code-card__body">
        <code>
          <span className="k">var</span> engineer = <span className="k">new</span> <span className="t">Engineer</span>(
          {'\n'}    name:       <span className="s">"Prabu A"</span>,
          {'\n'}    role:       <span className="s">"Lead Java Full Stack Developer"</span>,
          {'\n'}    experience: <span className="s">"10+ years"</span>,
          {'\n'}    stack:      <span className="t">List</span>.of(<span className="s">"Java"</span>, <span className="s">"Spring Boot"</span>, <span className="s">"Angular"</span>, <span className="s">"Kafka"</span>),
          {'\n'}    cloud:      <span className="t">List</span>.of(<span className="s">"AWS"</span>, <span className="s">"GCP"</span>),
          {'\n'}    focus:      <span className="s">"Microservices + Integration"</span>,
          {'\n'}    available:  <span className="k">true</span>
          {'\n'});
        </code>
      </pre>
    </div>
  );
}

export function About() {
  return (
    <section className="section section--light" id="about">
      <div className="container">
        <SectionHead watermark="ABOUT" title="About" />
        <div className="about">
          <Reveal className="about__visual">
            <span className="about__frame" aria-hidden="true" />
            <img
              className="about__photo"
              src="/images/prabu-about@2x.webp"
              srcSet="/images/prabu-about.webp 502w, /images/prabu-about@2x.webp 1003w"
              sizes="(max-width: 900px) 100vw, 40vw"
              alt="Prabu A smiling, in a white shirt"
              width="1003"
              height="1254"
              loading="lazy"
            />
            <div className="about__badge">
              <span className="about__big">10<span className="dot">+</span></span>
              <span className="about__big-label">Years building enterprise software</span>
            </div>
          </Reveal>

          <div className="about__body">
            <Reveal as="h3" className="about__lead">
              Lead Java Full Stack Developer with 10+ years building systems for healthcare and financial{' '}
              <span className="accent">services.</span>
            </Reveal>
            {summary.map((p, i) => (
              <Reveal key={i} delay={0.05 + i * 0.06} as="p" className="about__text">
                {p}
              </Reveal>
            ))}
            <Reveal delay={0.18} className="about__meta">
              <span>{profile.location}</span>
              <span>{profile.availability}</span>
            </Reveal>
            <Reveal delay={0.22}>
              <EngineerCard />
            </Reveal>
            <Reveal delay={0.28} className="about__actions">
              <a className="btn btn--primary" href={`mailto:${profile.email}`}>Work With Me</a>
              <a className="btn btn--outline" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            </Reveal>
          </div>
        </div>

        <div className="traits">
          {traits.map(([title, text], i) => (
            <Reveal key={title} delay={i * 0.08} className="trait">
              <span className="trait__index">{String(i + 1).padStart(2, '0')}</span>
              <h4 className="trait__title">{title}</h4>
              <p className="trait__text">{text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WhatIDo() {
  return (
    <section className="section" id="focus">
      <div className="container">
        <SectionHead
          watermark="FOCUS"
          title="What I Do"
          intro="Senior engineering for systems that can't afford to go down."
          center
        />
        <div className="focus">
          {focus.map(([icon, title, text], i) => (
            <Reveal key={title} delay={i * 0.08} className="card focus__card">
              <span className="focus__icon">
                <Icon name={icon} size={26} />
              </span>
              <h3 className="focus__title">{title}</h3>
              <p className="focus__text">{text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  const compact = useIsCompact();
  const ref = useRef(null);
  // Load the 3D scene only when the visitor gets near the contact section.
  const near = useInView(ref, { once: true, margin: '400px' });

  return (
    <section className="contact" id="contact" ref={ref}>
      <div className="contact__scene" aria-hidden="true">
        {near && (
          <Suspense fallback={null}>
            <Scene3D compact={compact} />
          </Suspense>
        )}
      </div>
      <div className="container">
        <Reveal className="contact__inner">
          <p className="contact__kicker">Full-time opportunities</p>
          <ScrambleText as="h2" className="contact__title" text="Let's Build Something Reliable" />
          <p className="contact__text">
            Looking for an experienced Java engineer to lead or strengthen your team? I&rsquo;m open to Lead and Senior Java Full Stack roles, and always happy to talk microservices, cloud platforms or a tricky integration problem. Email is the fastest way to reach me; LinkedIn works too.
          </p>
          <div className="contact__cards">
            <a className="contact__card" href={`mailto:${profile.email}`}>
              <span className="contact__icon"><MailIcon /></span>
              <span>
                <strong>Email</strong>
                <span>{profile.email}</span>
              </span>
            </a>
            <a className="contact__card" href={profile.linkedin} target="_blank" rel="noreferrer">
              <span className="contact__icon"><LinkedInIcon /></span>
              <span>
                <strong>LinkedIn</strong>
                <span>linkedin.com/in/prabhu324</span>
              </span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span>© {new Date().getFullYear()} Prabu A. All rights reserved.</span>
        <span>Lead Java Full Stack Developer · {profile.availability}</span>
      </div>
      <a href="#home" className={`to-top ${showTop ? 'is-visible' : ''}`} aria-label="Back to top">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="m6 15 6-6 6 6" />
        </svg>
      </a>
    </footer>
  );
}
