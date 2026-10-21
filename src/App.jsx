import Nav from './components/Nav';
import TechMarquee from './components/TechMarquee';
import Experience from './components/ExperienceTimeline';
import SkillsSection from './components/SkillsSection';
import { Projects, Certifications } from './components/Showcase';
import { Hero, About, WhatIDo, Contact, Footer } from './components/Sections';

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <TechMarquee />
        <About />
        <WhatIDo />
        <Experience />
        <Projects />
        <SkillsSection />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
