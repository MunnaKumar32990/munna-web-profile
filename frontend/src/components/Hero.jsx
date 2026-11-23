import { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import {
  Download, ArrowRight, Github, Linkedin, Mail, Twitter,
  Sparkles, Award, Code, CheckCircle, Terminal, ArrowDown
} from 'lucide-react';
import { usePortfolioData } from '../contexts/PortfolioContext';

/* Magic UI Inspired Number Ticker Component */
const NumberTicker = ({ value, suffix = '', duration = 1.5 }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const numericTarget = parseFloat(value.replace(/[^0-9.]/g, '')) || 0;

  useEffect(() => {
    let startTimestamp = null;
    let animationFrame = null;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      const easeProgress = 1 - Math.pow(1 - progress, 3); // easeOutCubic
      setDisplayValue(Math.floor(easeProgress * numericTarget));
      if (progress < 1) {
        animationFrame = requestAnimationFrame(step);
      } else {
        setDisplayValue(numericTarget);
      }
    };

    animationFrame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrame);
  }, [numericTarget, duration]);

  const isDecimal = value.includes('.');

  return (
    <span ref={ref}>
      {isDecimal ? value : displayValue}
      {suffix}
    </span>
  );
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

const Hero = ({ onExplore }) => {
  const { portfolio, loading } = usePortfolioData();
  const personalData = portfolio || {};

  // Motion 3D tilt tracking for portrait
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 15 });
  const rotateX = useTransform(mouseY, [-0.5, 0.5], ['10deg', '-10deg']);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ['-10deg', '10deg']);

  if (loading) return null;

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseXPos = e.clientX - rect.left;
    const mouseYPos = e.clientY - rect.top;
    const xPct = mouseXPos / width - 0.5;
    const yPct = mouseYPos / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const socialLinks = personalData.socialLinks || {};
  const githubUrl = socialLinks.github || 'https://github.com/MunnaKumar32990';
  const linkedinUrl = socialLinks.linkedin || 'https://linkedin.com/in/MunnaKumar32990';
  const twitterUrl = socialLinks.twitter || 'https://twitter.com';

  const downloadResume = () => {
    const a = document.createElement('a');
    a.href = '/PortfolioResume.pdf';
    a.download = `${personalData.name?.replace(/\s+/g, '_') || 'Munna_Kumar'}_Resume.pdf`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-[92vh] pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden flex flex-col justify-center bg-slate-50 dark:bg-[#0B0C10] devx-grid-bg transition-colors duration-300">
      {/* Magic UI Ambient Glow Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.15, 0.28, 0.15],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-blue-600 via-indigo-500 to-cyan-400 rounded-full blur-[140px] pointer-events-none"
      />
      <motion.div
        animate={{
          x: [0, 20, 0],
          y: [0, -15, 0],
        }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/3 -left-32 w-[450px] h-[450px] bg-blue-500/10 rounded-full blur-[130px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Column (Hero Content) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Signature Developer X Blue Accent Bar */}
            <motion.div
              variants={itemVariants}
              className="devx-accent-bar"
            />

            {/* Magic UI Shiny Pill Badge */}
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 backdrop-blur-md mb-5 cursor-default shadow-sm"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-semibold tracking-wide text-blue-600 dark:text-blue-400 uppercase font-mono shiny-text">
                {personalData.tagline || 'Available for New Roles & Projects'}
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.1] mb-5"
            >
              Nice to meet you,
              <br />
              <span className="text-slate-900 dark:text-white">I'm </span>
              <span className="text-gradient-brand">
                {personalData.name || 'Munna Kumar'}
              </span>
            </motion.h1>

            {/* Role & Tagline */}
            <motion.div
              variants={itemVariants}
              className="text-base sm:text-lg font-semibold text-blue-600 dark:text-blue-400 font-mono mb-4 flex items-center gap-2"
            >
              <span>{personalData.role || 'FullStack Developer & AI Engineer'}</span>
              <span className="inline-block w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            </motion.div>

            {/* Bio paragraph */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed mb-8"
            >
              {personalData.heroDescription || personalData.tagline || 'I engineer scalable, production-ready web applications and intelligent AI architectures.'}
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto"
            >
              <motion.button
                onClick={() => scrollTo('portfolio')}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="btn-devx-primary text-sm sm:text-base w-full sm:w-auto shadow-lg"
              >
                Explore Portfolio
                <ArrowRight className="w-4 h-4 ml-1" />
              </motion.button>

              <motion.button
                onClick={downloadResume}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="btn-devx-secondary text-sm sm:text-base w-full sm:w-auto"
              >
                <Download className="w-4 h-4 mr-1 text-blue-600 dark:text-blue-400" />
                Download CV
              </motion.button>
            </motion.div>

            {/* Magic UI Animated Stats Row with Number Tickers */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 border-t border-slate-200 dark:border-white/[0.08] w-full"
            >
              {[
                { value: personalData.leetcodeCount || '200', suffix: '+', label: 'Problems Solved', sub: 'LeetCode & DSA' },
                { value: String((personalData.projects || []).length || '6'), suffix: '+', label: 'Projects Built', sub: 'Full Stack & AI' },
                { value: String((personalData.certifications || []).length || '8'), suffix: '+', label: 'Certifications', sub: 'AWS, Azure, Mongo' },
                { value: personalData.cgpa || '9.6', suffix: '', label: 'B.Tech CGPA', sub: personalData.university || 'KL University' },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -4 }}
                  className="flex flex-col group cursor-default"
                >
                  <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight flex items-baseline gap-0.5 group-hover:text-blue-600 transition-colors">
                    <NumberTicker value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-xs font-bold text-blue-600 dark:text-blue-400 mt-0.5">
                    {stat.label}
                  </div>
                  <div className="text-[11px] text-slate-500 font-mono">
                    {stat.sub}
                  </div>
                </motion.div>
              ))}
            </motion.div>

          </motion.div>

          {/* Right Column (Motion.dev 3D Tilt Portrait with Floating Badges) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
            className="lg:col-span-5 relative flex flex-col items-center justify-center perspective-[1000px]"
          >
            {/* Ambient Radial Blue Backlight */}
            <motion.div
              animate={{
                scale: [0.95, 1.05, 0.95],
                opacity: [0.3, 0.45, 0.3],
              }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute inset-0 bg-blue-600/30 rounded-full blur-3xl transform -z-10"
            />

            {/* Circular Portrait Frame with Magic UI border beam container */}
            <div className="relative p-3 rounded-full bg-gradient-to-b from-blue-500/30 via-slate-200 dark:via-white/[0.1] to-transparent border border-blue-500/20 shadow-2xl max-w-[340px] sm:max-w-[380px]">
              <div className="w-64 h-64 sm:w-72 sm:h-72 rounded-full overflow-hidden bg-slate-900 relative shadow-inner">
                <img
                  src={personalData.profileImage || './NewProfile.png'}
                  alt={personalData.name || 'Munna Kumar'}
                  className="w-full h-full object-cover object-center transform hover:scale-108 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Blue Circle Arrow Button */}
              <motion.button
                onClick={() => scrollTo('about')}
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
                className="absolute -left-3 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-blue-600 hover:bg-blue-500 text-white flex items-center justify-center shadow-lg cursor-pointer"
                aria-label="Scroll down to About"
              >
                <ArrowDown className="w-5 h-5 animate-bounce" />
              </motion.button>

              {/* Floating Top-Right Badge: 9.58 CGPA */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                whileHover={{ scale: 1.08 }}
                className="absolute -top-3 -right-3 px-3.5 py-2 rounded-2xl bg-white dark:bg-[#13151F] border border-slate-200 dark:border-white/[0.15] shadow-xl flex items-center gap-2.5 backdrop-blur-md cursor-default"
              >
                <div className="w-8 h-8 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900 dark:text-white">{personalData.cgpa || '9.6'} CGPA</div>
                  <div className="text-[10px] text-slate-500 font-mono">{personalData.university || 'KL University'}</div>
                </div>
              </motion.div>

              {/* Floating Bottom-Right Badge: 198+ LeetCode */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                whileHover={{ scale: 1.08 }}
                className="absolute -bottom-3 -right-2 px-3.5 py-2 rounded-2xl bg-white dark:bg-[#13151F] border border-slate-200 dark:border-white/[0.15] shadow-xl flex items-center gap-2.5 backdrop-blur-md cursor-default"
              >
                <div className="w-8 h-8 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-600 dark:text-cyan-400">
                  <Code className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900 dark:text-white">{personalData.leetcodeCount || '200+'} Solved</div>
                  <div className="text-[10px] text-slate-500 font-mono">LeetCode DSA</div>
                </div>
              </motion.div>
            </div>

            {/* Social Icons Strip */}
            <div className="flex items-center gap-3 mt-8">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-500 mr-1">
                Follow me:
              </span>
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
                  whileHover={{ y: -4, scale: 1.15 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-xl bg-white dark:bg-[#13151F] border border-slate-200 dark:border-white/[0.08] flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-white hover:border-blue-500/50 hover:shadow-md transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Hero;
