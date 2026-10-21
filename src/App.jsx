import Nav from './components/Nav';
import Experience from './components/ExperienceTimeline';
import { Hero, About, Projects, Skills, Certifications, Contact, Footer } from './components/Sections';

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
