import { ThemeProvider } from './contexts/ThemeContext';
import { PortfolioProvider } from './contexts/PortfolioContext';
import ScrollProgress from './components/ScrollProgress';
import ThemeToggle from './components/ThemeToggle';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import CodingPlatforms from './components/CodingPlatforms';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Education from './components/Education';

function App() {
  return (
    <ThemeProvider>
      <PortfolioProvider>
        <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
          <ScrollProgress />
          <ThemeToggle />
          <Hero />

          <About />
          <Education />
          <Projects />
          <Skills />
          <Certifications />
          <CodingPlatforms />
          <Contact />
          <Footer />
        </div>
      </PortfolioProvider>
    </ThemeProvider>
  );
}

export default App;