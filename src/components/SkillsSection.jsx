import { useState } from 'react';
import Reveal from './Reveal';
import { SectionHead } from './Sections';
import { Icon } from '../icons';
import { skillCategories, workStack } from '../data';

function Arrow() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 12h15M14 6l6 6-6 6" />
    </svg>
  );
}

export default function SkillsSection() {
  // A clicked category stays selected; hovering another one previews it.
  const [selected, setSelected] = useState(null);
  const [hovered, setHovered] = useState(null);
  const active = hovered || selected;

  return (
    <section className="section" id="skills">
      <div className="container">
        <SectionHead watermark="SKILLS" title="My Skills" />

        <div className="sk">
          <Reveal className="sk__label sk__label--intro">
            <p className="sk__lead">I build systems that don&rsquo;t drop a transaction</p>
            <p className="sk__script">I can Design, Develop, Deploy</p>
          </Reveal>
          <Reveal delay={0.08} className="sk__text">
            <p>
              My go-to stack is <strong>Java 21 with Spring Boot</strong> for microservices, <strong>Kafka</strong> for
              event-driven workflows and <strong>Angular</strong> on the front end, shipped through Docker, Kubernetes and
              GitOps to <strong>AWS and GCP</strong>.
            </p>
            <p>
              I care about systems that stay up under load: circuit breakers, retries, observability and security scans are
              part of the design, not an afterthought.
            </p>
          </Reveal>

          <Reveal className="sk__label">
            <span className="sk__heading">Skills <Arrow /></span>
          </Reveal>
          <Reveal delay={0.08} className="sk__pills" as="div">
            {skillCategories.map((c) => (
              <button
                key={c.id}
                type="button"
                className={`sk__pill ${active === c.id ? 'is-active' : ''}`}
                aria-pressed={selected === c.id}
                onMouseEnter={() => setHovered(c.id)}
                onMouseLeave={() => setHovered(null)}
                onFocus={() => setHovered(c.id)}
                onBlur={() => setHovered(null)}
                onClick={() => setSelected((s) => (s === c.id ? null : c.id))}
              >
                {c.label}
              </button>
            ))}
          </Reveal>

          <Reveal className="sk__label">
            <span className="sk__heading">Work Stack <Arrow /></span>
          </Reveal>
          <Reveal delay={0.1} className={`sk__grid ${active ? 'has-active' : ''}`} as="ul">
            {workStack.map(([icon, label, cats]) => {
              const on = active && cats.includes(active);
              return (
                <li key={label} className={`sk__item ${on ? 'is-on' : ''}`}>
                  <Icon name={icon} size={20} className="sk__icon" />
                  <span className="sk__name">{label}</span>
                </li>
              );
            })}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
