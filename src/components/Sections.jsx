import { lazy, Suspense, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Reveal from './Reveal';
import { profile, stats, summary, projects, skills, certifications } from '../data';

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

function SectionHead({ eyebrow, title, intro }) {
  return (
    <Reveal className="section__head">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="section__title">{title}</h2>
      {intro && <p className="section__intro">{intro}</p>}
    </Reveal>
  );
}

export function Hero() {
  const compact = useIsCompact();
  return (
    <section className="hero" id="top">
      <div className="hero__glow" aria-hidden="true" />
      <div className="container hero__grid">
        <div className="hero__copy">
          <motion.p
            className="eyebrow"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Available for Lead &amp; Senior roles
          </motion.p>
          <motion.h1
            className="hero__name"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Prabu A
          </motion.h1>
          <motion.p
            className="hero__role"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {profile.title}
            <span className="hero__role-sub">10+ Years · AWS &amp; GCP Certified</span>
          </motion.p>
          <motion.p
            className="hero__tagline"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {profile.tagline}
          </motion.p>
          <motion.div
            className="hero__actions"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a className="btn btn--gold" href="#experience">View experience</a>
            <a className="btn btn--ghost" href="#contact">Get in touch</a>
          </motion.div>
          <motion.ul
            className="hero__clients"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <li>CVS Health</li>
            <li>Fiserv</li>
            <li>Standard Chartered</li>
            <li>DEWA</li>
            <li>Stryker</li>
          </motion.ul>
        </div>

        <div className="hero__visual" aria-hidden="true">
          <Suspense fallback={<div className="hero__fallback" />}>
            <Scene3D compact={compact} />
          </Suspense>
          <span className="hero__caption">Microservices in motion · real-time transactions across the network</span>
        </div>
      </div>

      <div className="container">
        <div className="stats">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08} className="stat">
              <span className="stat__value">{s.value}</span>
              <span className="stat__label">{s.label}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section className="section" id="about">
      <div className="container about">
        <SectionHead eyebrow="About" title="Engineering systems that move money and medicine" />
        <div className="about__body">
          {summary.map((p, i) => (
            <Reveal key={i} delay={i * 0.08} as="p" className="about__text">
              {p}
            </Reveal>
          ))}
          <Reveal delay={0.25} className="about__pillars">
            {[
              ['Architecture', 'Microservices, event-driven design, resilience patterns'],
              ['Delivery', 'GitOps, CI/CD, Kubernetes on AWS EKS and GCP GKE'],
              ['Leadership', 'Team leadership, solution design and code reviews'],
            ].map(([t, d]) => (
              <div className="pillar" key={t}>
                <h3>{t}</h3>
                <p>{d}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <SectionHead eyebrow="Selected work" title="Projects delivered for global clients" />
        <div className="projects">
          {projects.map((p, i) => (
            <Reveal key={p.name} delay={(i % 3) * 0.08} className="card project">
              <div className="project__top">
                <span className="project__index">{String(i + 1).padStart(2, '0')}</span>
                <span className="project__domain">{p.domain}</span>
              </div>
              <h3 className="project__name">{p.name}</h3>
              <p className="project__client">{p.client}</p>
              <p className="project__text">{p.text}</p>
              <ul className="chips">
                {p.tags.map((t) => (
                  <li key={t} className="chip chip--subtle">{t}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Skills() {
  return (
    <section className="section section--alt" id="skills">
      <div className="container">
        <SectionHead eyebrow="Toolkit" title="Technical skills" />
        <div className="skills">
          {skills.map((s, i) => (
            <Reveal key={s.group} delay={(i % 4) * 0.06} className="card skill">
              <h3 className="skill__group">{s.group}</h3>
              <ul className="chips">
                {s.items.map((t) => (
                  <li key={t} className="chip">{t}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Certifications() {
  return (
    <section className="section" id="certifications">
      <div className="container">
        <SectionHead eyebrow="Credentials" title="Certifications" />
        <div className="certs">
          {certifications.map((c, i) => (
            <Reveal key={c.name} delay={i * 0.08} className="card cert">
              <span className="cert__mark">{c.mark}</span>
              <div>
                <h3 className="cert__name">{c.name}</h3>
                <p className="cert__issuer">{c.issuer}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="education">
          <p className="eyebrow">Education</p>
          <p className="education__text">
            <strong>B.E., Computer Science and Engineering</strong> — Imayam College of Engineering, Trichy (Anna University), 2015
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="container">
        <Reveal className="contact__card">
          <p className="eyebrow">Contact</p>
          <h2 className="contact__title">Let&rsquo;s build something reliable together.</h2>
          <p className="contact__text">
            Open to Lead and Senior Java Full Stack roles. The quickest way to reach me is email or LinkedIn.
          </p>
          <div className="contact__actions">
            <a className="btn btn--gold" href={`mailto:${profile.email}`}>{profile.email}</a>
            <a className="btn btn--ghost" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span>© {new Date().getFullYear()} Prabu A</span>
        <span>Lead Java Full Stack Developer</span>
      </div>
    </footer>
  );
}
