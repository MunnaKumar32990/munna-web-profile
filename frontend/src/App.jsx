import { useState } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { PortfolioProvider } from './contexts/PortfolioContext';
import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechMarquee from './components/TechMarquee';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Certifications from './components/Certifications';
import CodingPlatforms from './components/CodingPlatforms';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <ThemeProvider>
      <PortfolioProvider>
        <div className="min-h-screen bg-slate-50 dark:bg-[#0B0C10] text-slate-800 dark:text-slate-300 selection:bg-blue-600/30 selection:text-white transition-colors duration-300">
          <ScrollProgress />
          <Navbar activeTab={activeTab} onSelectTab={setActiveTab} />
          
          <main>
            <Hero onExplore={() => setActiveTab('portfolio')} />
            <TechMarquee />
            <About />
            <Projects />
            <Skills />
            <Education />
            <Certifications />
            <CodingPlatforms />
            <Contact />
          </main>

          <Footer />
        </div>
      </PortfolioProvider>
    </ThemeProvider>
  );
}

export default App;
