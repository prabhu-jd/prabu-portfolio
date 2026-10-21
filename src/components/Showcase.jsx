import { motion } from 'framer-motion';
import { SectionHead } from './Sections';
import Reveal from './Reveal';
import { Icon } from '../icons';
import { projects, certifications } from '../data';

function Chevron() {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m9 6 6 6-6 6" />
    </svg>
  );
}

// Sticky card: each one pins a little lower than the last, so earlier titles stay visible as tabs.
function StackCard({ index, children }) {
  return (
    <motion.article
      className="stack__card"
      style={{ '--i': index }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.article>
  );
}

function CardBody({ title, meta, text, points, chips }) {
  return (
    <div className="stack__body">
      <div className="stack__title-row">
        <h3 className="stack__title">{title}</h3>
        <span className="stack__meta">{meta}</span>
      </div>
      <div className="stack__content">
        <p className="stack__text">{text}</p>
        <ul className="stack__points">
          {points.map((p) => (
            <li key={p}>
              <Chevron />
              {p}
            </li>
          ))}
        </ul>
        <ul className="stack__chips">{chips}</ul>
      </div>
    </div>
  );
}

// Right-hand visual for a project: a small window showing how the system's pieces connect.
function FlowWindow({ project }) {
  return (
    <div className="stack__visual">
      <div className="flow">
        <div className="flow__bar">
          <span />
          <span />
          <span />
          <em>{project.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')} · architecture</em>
        </div>
        <div className="flow__body">
          <p className="flow__client">{project.client}</p>
          <ol className="flow__nodes">
            {project.flow.map((node, i) => (
              <li key={node} className={i === 1 ? 'is-core' : ''}>
                <span>{node}</span>
              </li>
            ))}
          </ol>
          <div className="flow__protocols">
            {project.protocols.map((p) => (
              <span key={p}>{p}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function CertBadge({ cert }) {
  return (
    <div className="stack__visual">
      <div className="badge">
        <span className="badge__ring">
          <Icon name={cert.icon} size={64} />
        </span>
        <span className="badge__issuer">{cert.issuer}</span>
        <span className="badge__level">{cert.level}</span>
        <span className="badge__ribbon">Certified</span>
      </div>
    </div>
  );
}

export function Projects() {
  return (
    <section className="section section--light" id="projects">
      <div className="container">
        <SectionHead
          watermark="PROJECTS"
          title="Project Showcase"
          intro="Enterprise systems delivered for global clients in healthcare, banking and government services."
          center
        />
        <div className="stack">
          {projects.map((p, i) => (
            <StackCard key={p.name} index={i}>
              <CardBody
                title={p.name}
                meta={`${p.client} · ${p.period}`}
                text={p.text}
                points={p.points}
                chips={p.tags.map(([icon, label]) => (
                  <li key={label}>
                    <Icon name={icon} size={14} />
                    {label}
                  </li>
                ))}
              />
              <FlowWindow project={p} />
            </StackCard>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Certifications() {
  return (
    <section className="section section--light" id="certifications">
      <div className="container">
        <SectionHead watermark="CERTIFIED" title="Certifications" center />
        <div className="stack">
          {certifications.map((c, i) => (
            <StackCard key={c.name} index={i}>
              <CardBody
                title={c.short}
                meta={c.issuer}
                text={c.name}
                points={[c.text, ...c.points]}
                chips={c.tags.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              />
              <CertBadge cert={c} />
            </StackCard>
          ))}
        </div>
        <Reveal className="education">
          <span className="education__label">Education</span>
          <p className="education__text">
            <strong>B.E., Computer Science and Engineering</strong> · Imayam College of Engineering, Trichy (Anna University) · 2015
          </p>
        </Reveal>
      </div>
    </section>
  );
}
