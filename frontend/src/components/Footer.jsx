import { motion } from 'framer-motion';
import { ArrowUp, Github, Linkedin, Twitter, Mail, Code2 } from 'lucide-react';
import { usePortfolioData } from '../contexts/PortfolioContext';

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

const Footer = () => {
  const { portfolio, loading } = usePortfolioData();
  const personalData = portfolio || {};

  if (loading) return null;

  const socialLinks = personalData.socialLinks || {};
  const githubUrl = socialLinks.github || 'https://github.com/MunnaKumar32990';
  const linkedinUrl = socialLinks.linkedin || 'https://linkedin.com/in/MunnaKumar32990';
  const twitterUrl = socialLinks.twitter || 'https://twitter.com';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-slate-100 dark:bg-[#08090D] border-t border-slate-200 dark:border-white/[0.08] text-slate-600 dark:text-slate-400 py-16 overflow-hidden transition-colors duration-300">
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-32 bg-blue-600/10 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-slate-200 dark:border-white/[0.06]">

          {/* Left: Brand Monogram & Name */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-sm">
              <Code2 className="w-5 h-5 stroke-[2.5]" />
            </div>
            <div>
              <div className="text-base font-bold text-slate-900 dark:text-white">
                {personalData.name || 'Munna Kumar'}
              </div>
              <div className="text-xs text-slate-500 font-mono">
                {personalData.role || 'FullStack Developer & AI Engineer'}
              </div>
            </div>
          </div>

          {/* Center: Nav Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm font-semibold">
            {navLinks.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-white transition-colors"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Right: Social Channels */}
          <div className="flex items-center gap-2.5">
            {[
              { href: githubUrl, icon: Github, label: 'GitHub' },
              { href: linkedinUrl, icon: Linkedin, label: 'LinkedIn' },
              { href: twitterUrl, icon: Twitter, label: 'Twitter' },
              { href: `mailto:${personalData.email || 'munnakushw7@gmail.com'}`, icon: Mail, label: 'Email' },
            ].map(({ href, icon: Icon, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                whileHover={{ y: -3, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-9 h-9 rounded-xl bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.08] hover:border-blue-500 hover:text-blue-600 dark:hover:text-white text-slate-600 dark:text-slate-400 flex items-center justify-center transition-all shadow-sm"
              >
                <Icon className="w-4 h-4" />
              </motion.a>
            ))}
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-xs text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} {personalData.name || 'Munna Kumar'}. All rights reserved.
          </div>

          <div className="flex items-center gap-2">
            <span>Crafted with React, Tailwind & Vite</span>
            <span>•</span>
            <motion.button
              onClick={scrollToTop}
              whileHover={{ y: -2 }}
              className="inline-flex items-center gap-1.5 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
