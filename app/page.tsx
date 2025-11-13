// app/page.tsx
import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Education from './components/sections/Education';
import Experience from './components/sections/Experience';
import Services from './components/sections/Services';
import Certifications from './components/sections/Certifications';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <About />
      <Education />
      <Services />
      <Experience />
      <Certifications />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}