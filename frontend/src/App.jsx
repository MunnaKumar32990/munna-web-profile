import React, { useState, useEffect } from 'react';
import { PortfolioProvider } from './contexts/PortfolioContext';
import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechMarquee from './components/TechMarquee';
import WorkProcess from './components/WorkProcess';
import Projects from './components/Projects';
import About from './components/About';
import Stats from './components/Stats';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Philosophy from './components/Philosophy';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const sectionIds = ['hero', 'projects', 'about', 'skills', 'experience', 'process', 'contact'];
    
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <PortfolioProvider>
      <div className="min-h-screen bg-[#111111] text-[#111111] antialiased selection:bg-[#F04444] selection:text-white">
        {/* Minimal 2px Swiss Red Scroll Indicator */}
        <ScrollProgress />

        {/* Fixed Understated Black Navigation Bar */}
        <Navbar activeSection={activeSection} />

        <main>
          {/* 01. Hero Section (Black #111111, Oversized Typography, Starburst Accent) */}
          <Hero />

          {/* Editorial Marquee */}
          <TechMarquee />

          {/* 02. Work Process / Creative Practice (01 Discover, 02 Architect, 03 Develop, 04 Deploy) */}
          <WorkProcess />

          {/* 03. Project Showcase (Asymmetrical Editorial Grid, Rectangular Imagery, 1px Borders) */}
          <Projects />

          {/* 04. About Section (Editorial White, Two-Column, Oversized Headline, Rectangular Portrait) */}
          <About />

          {/* 05. Numerical Stats & Verified Achievements (200+ LeetCode, 9.6 CGPA, 06+ Projects, 05 Certs) */}
          <Stats />

          {/* 06. Technical Expertise (Structured Editorial Rows across 6 Specializations) */}
          <Skills />

          {/* 07. Experience & Trajectory (Internships, Education, Industry Certifications) */}
          <Experience />

          {/* 08. Personal Philosophy Statement (High-Impact Black #111111, Giant Red Quotes) */}
          <Philosophy />

          {/* 09. Contact Section (Oversized Headline, Direct Email Box, Inquiry Form) */}
          <Contact />
        </main>

        {/* 10. Editorial Footer (Giant Wordmark, Quick Directory, Back to Top) */}
        <Footer />
      </div>
    </PortfolioProvider>
  );
}

export default App;
