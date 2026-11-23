import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { usePortfolioData } from '../contexts/PortfolioContext';

const NAV_ITEMS = [
  { id: 'projects', label: 'PROJECTS' },
  { id: 'about', label: 'ABOUT' },
  { id: 'skills', label: 'SKILLS' },
  { id: 'experience', label: 'EXPERIENCE' },
  { id: 'process', label: 'PROCESS' },
  { id: 'contact', label: 'CONTACT' },
];

const Navbar = ({ activeSection = 'hero' }) => {
  const { portfolio } = usePortfolioData();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#111111]/95 backdrop-blur-md border-b border-[#262626] py-3.5'
            : 'bg-[#111111] border-b border-[#222222] py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
          {/* Brand Wordmark */}
          <button
            onClick={() => scrollTo('hero')}
            className="group flex items-center gap-2 text-left"
            aria-label="Back to top"
          >
            <span className="font-display font-bold text-sm sm:text-base tracking-widest text-white uppercase group-hover:text-[#F04444] transition-colors">
              {portfolio?.name || 'MUNNA KUMAR'}
            </span>
            <span className="text-[#F04444] text-xs transition-transform duration-300 group-hover:rotate-45">
              ✻
            </span>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`label-tiny text-[11px] tracking-widest transition-colors duration-200 relative py-1 ${
                  activeSection === item.id
                    ? 'text-[#F04444]'
                    : 'text-[#AAAAAA] hover:text-white'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="absolute -bottom-1 left-0 right-0 h-[1.5px] bg-[#F04444]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}

            {/* Quick Resume CTA */}
            <a
              href="/PortfolioResume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-3 inline-flex items-center gap-1 px-3 py-1 text-[11px] font-display font-semibold tracking-wider text-white border border-[#333333] hover:border-[#F04444] hover:text-[#F04444] transition-colors uppercase"
            >
              CV <ArrowUpRight className="w-3 h-3" />
            </a>
          </nav>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 text-white hover:text-[#F04444] transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Fullscreen Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="fixed inset-0 z-40 bg-[#111111] pt-24 px-6 pb-10 flex flex-col justify-between md:hidden"
          >
            <div className="flex flex-col gap-6">
              <span className="label-tiny text-[#777777] border-b border-[#262626] pb-3">
                [ NAVIGATION ]
              </span>
              {NAV_ITEMS.map((item, idx) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="flex items-center justify-between text-2xl font-display font-bold text-white hover:text-[#F04444] tracking-tight uppercase text-left transition-colors border-b border-[#1E1E1E] pb-3"
                >
                  <span>{item.label}</span>
                  <span className="font-mono text-xs text-[#777777]">0{idx + 1}</span>
                </button>
              ))}
            </div>

            <div className="pt-6 border-t border-[#262626] flex items-center justify-between">
              <div className="text-xs text-[#777777] font-mono">
                {portfolio?.email || 'munnakushw7@gmail.com'}
              </div>
              <a
                href="/PortfolioResume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-display font-semibold text-white border-b border-[#F04444] pb-0.5"
              >
                DOWNLOAD CV →
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
