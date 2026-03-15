import { useState, useEffect } from 'react';
import { motion, useReducedMotion, AnimatePresence } from 'framer-motion';
import {
  ChevronDown, Download, Mail, Code, Terminal, Menu, X,
  Github, Linkedin, ExternalLink, Cpu, Globe, Sparkles,
} from 'lucide-react';
import { usePortfolioData } from '../contexts/PortfolioContext';
import { personalData as fallbackData } from '../utils/data';
import { useTypewriter } from '../hooks/useTypewriter';
import ThemeToggle from './ThemeToggle';

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'skills', label: 'Skills' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
];

/* ── Fixed particle positions (avoids hydration diff) ── */
const particles = [
  { width: 4, height: 4, top: 15, left: 22, delay: 0,   dur: 4 },
  { width: 6, height: 6, top: 70, left: 10, delay: 0.8, dur: 5 },
  { width: 3, height: 3, top: 40, left: 80, delay: 1.5, dur: 3.5 },
  { width: 5, height: 5, top: 85, left: 60, delay: 2,   dur: 6 },
  { width: 4, height: 4, top: 25, left: 55, delay: 0.3, dur: 4.5 },
  { width: 7, height: 7, top: 55, left: 32, delay: 1.1, dur: 5.5 },
  { width: 3, height: 3, top: 10, left: 75, delay: 2.2, dur: 3 },
  { width: 5, height: 5, top: 65, left: 88, delay: 0.6, dur: 4 },
  { width: 4, height: 4, top: 90, left: 40, delay: 1.8, dur: 5 },
  { width: 6, height: 6, top: 30, left: 5,  delay: 0.2, dur: 6 },
];

/* ── Tech badges that orbit around the image ── */
const techBadges = ['React', 'Python', 'Node.js', 'AI/ML', 'AWS'];

/* ── Animated stat card ── */
const StatCard = ({ value, label, delay }) => (
  <motion.div
    className="text-center px-5 py-4 rounded-2xl relative overflow-hidden"
    style={{ background: 'rgba(139,94,60,0.18)', border: '1px solid rgba(196,135,90,0.35)' }}
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay, duration: 0.5, type: 'spring', stiffness: 200 }}
    whileHover={{ scale: 1.08, border: '1px solid rgba(196,135,90,0.7)' }}
  >
    {/* Shimmer */}
    <motion.div
      className="absolute inset-0 opacity-0"
      style={{ background: 'linear-gradient(105deg, transparent 40%, rgba(196,135,90,0.18) 50%, transparent 60%)' }}
      animate={{ opacity: [0, 1, 0], x: ['-100%', '100%'] }}
      transition={{ duration: 2.5, repeat: Infinity, delay: delay + 1, repeatDelay: 3 }}
    />
    <div className="text-2xl font-extrabold" style={{ color: '#c4875a' }}>{value}</div>
    <div className="text-xs mt-0.5 font-medium" style={{ color: 'rgba(234,219,200,0.6)' }}>{label}</div>
  </motion.div>
);

const Hero = () => {
  const { portfolio } = usePortfolioData();
  const personalData = portfolio || fallbackData;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeBadge, setActiveBadge] = useState(0);
  const shouldReduce = useReducedMotion();

  const nameText    = useTypewriter(`${personalData.name || ''}`, 100);
  const roleText    = useTypewriter(`${personalData.role || ''}`, 80, 1800);
  const taglineText = useTypewriter(`${personalData.tagline || ''}`, 40, 3500);

  /* rotate through tech badges */
  useEffect(() => {
    const id = setInterval(() => setActiveBadge(p => (p + 1) % techBadges.length), 2000);
    return () => clearInterval(id);
  }, []);

  const scrollToSection = (id) => {
    setIsMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const downloadResume = () => {
    const a = document.createElement('a');
    a.href = '/HaResume.pdf';
    a.download = 'MunnaKumar_Resume.pdf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const containerV = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: shouldReduce ? 0 : 0.15, delayChildren: 0.3 } },
  };
  const itemV = {
    hidden: { opacity: 0, y: 35 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <div
      className="min-h-screen relative overflow-hidden"
      style={{ background: 'linear-gradient(140deg, #1a0f08 0%, #2a1a10 30%, #3A2D28 65%, #1a1210 100%)' }}
    >
      {/* ── Grid overlay ── */}
      <div className="absolute inset-0" style={{
        backgroundImage: `linear-gradient(rgba(196,135,90,0.06) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(196,135,90,0.06) 1px, transparent 1px)`,
        backgroundSize: '55px 55px',
      }} />

      {/* ── Floating particles ── */}
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: p.width, height: p.height,
            top: `${p.top}%`, left: `${p.left}%`,
            background: i % 3 === 0
              ? 'rgba(196,135,90,0.7)'
              : i % 3 === 1
              ? 'rgba(139,94,60,0.5)'
              : 'rgba(234,219,200,0.4)',
            borderRadius: '50%',
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.4, 1, 0.4],
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: p.dur, repeat: Infinity, delay: p.delay, ease: 'easeInOut' }}
        />
      ))}

      {/* ── Large atmospheric glows ── */}
      <motion.div
        className="absolute top-1/4 -left-40 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(139,94,60,0.25) 0%, transparent 70%)' }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-1/4 -right-40 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(196,135,90,0.20) 0%, transparent 70%)' }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.9, 0.5] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />
      {/* Centre warm ring */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{ width: 700, height: 700, border: '1px solid rgba(196,135,90,0.08)', borderRadius: '50%' }}
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{ width: 500, height: 500, border: '1px solid rgba(139,94,60,0.10)', borderRadius: '50%' }}
        animate={{ rotate: -360 }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      />

      {/* ── Navigation ── */}
      <nav
        className="relative z-50 border-b"
        style={{ background: 'rgba(26,15,8,0.85)', backdropFilter: 'blur(20px)', borderColor: 'rgba(196,135,90,0.18)' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">

            {/* Logo */}
            <motion.div
              className="flex items-center space-x-3 cursor-pointer"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
            >
              <motion.div
                className="w-9 h-9 rounded-lg flex items-center justify-center font-bold text-white text-base shadow-lg"
                style={{ background: 'linear-gradient(135deg, #8B5E3C, #c4875a)' }}
                animate={{ boxShadow: ['0 0 8px rgba(196,135,90,0.3)', '0 0 22px rgba(196,135,90,0.7)', '0 0 8px rgba(196,135,90,0.3)'] }}
                transition={{ duration: 2.5, repeat: Infinity }}
              >
                {personalData.initials}
              </motion.div>
              <span className="text-lg font-bold text-white hidden sm:block">{personalData.name}</span>
            </motion.div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-1">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="font-medium px-3 py-1.5 rounded-lg text-sm transition-colors"
                style={{ color: '#c4875a', background: 'rgba(139,94,60,0.18)' }}
              >Home</button>
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-[#EADBC8]/60 hover:text-[#EADBC8] font-medium px-3 py-1.5 rounded-lg hover:bg-white/5 text-sm transition-all"
                >
                  {item.label}
                </button>
              ))}
              <div className="ml-2"><ThemeToggle embedded /></div>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg transition-colors"
              style={{ color: '#EADBC8' }}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden border-t py-3 space-y-1"
                style={{ borderColor: 'rgba(139,94,60,0.2)' }}
              >
                {navItems.map(item => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full text-left px-4 py-2.5 rounded-lg text-sm"
                    style={{ color: '#EADBC8' }}
                  >
                    {item.label}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>

      {/* ── Main content ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-100px)]">

          {/* ── LEFT ── */}
          <motion.div
            className="space-y-7 lg:pr-6"
            variants={containerV}
            initial="hidden"
            animate="visible"
          >
            {/* Role badge */}
            <motion.div variants={itemV}>
              <motion.span
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold"
                style={{ border: '1px solid rgba(196,135,90,0.45)', background: 'rgba(139,94,60,0.22)', color: '#EADBC8' }}
                animate={{ boxShadow: ['0 0 0 rgba(196,135,90,0)', '0 0 16px rgba(196,135,90,0.35)', '0 0 0 rgba(196,135,90,0)'] }}
                transition={{ duration: 2.5, repeat: Infinity }}
              >
                <motion.span
                  className="w-2 h-2 rounded-full"
                  style={{ background: '#c4875a' }}
                  animate={{ scale: [1, 1.5, 1], opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 1.2, repeat: Infinity }}
                />
                {roleText || personalData.role}
              </motion.span>
            </motion.div>

            {/* Name */}
            <motion.div variants={itemV} className="space-y-3">
              <h1 className="text-5xl md:text-6xl lg:text-[5rem] font-extrabold leading-tight tracking-tight">
                <motion.span
                  style={{
                    background: 'linear-gradient(135deg, #EADBC8 0%, #c4875a 40%, #F5F5DC 70%, #c4875a 100%)',
                    backgroundSize: '200% 200%',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                  animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                >
                  {nameText || personalData.name}
                </motion.span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold leading-tight" style={{ color: 'rgba(234,219,200,0.85)' }}>
                Crafting Digital{' '}
                <span className="text-white font-bold">Experiences</span>
              </h2>
            </motion.div>

            {/* Tagline */}
            <motion.p
              variants={itemV}
              className="text-sm md:text-base leading-relaxed max-w-xl font-mono"
              style={{ color: 'rgba(234,219,200,0.6)' }}
            >
              <motion.span
                style={{ color: '#c4875a' }}
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >&gt; </motion.span>
              {taglineText || personalData.tagline}
              <motion.span
                style={{ color: '#c4875a' }}
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              >|</motion.span>
            </motion.p>

            {/* Stats */}
            <motion.div variants={itemV} className="flex gap-3 flex-wrap">
              <StatCard value="189+" label="LeetCode Solved" delay={0.8} />
              <StatCard value="48+"  label="GitHub Repos"    delay={1.0} />
              <StatCard value="9.55" label="CGPA"            delay={1.2} />
            </motion.div>

            {/* Tech expertise rotating tag */}
            <motion.div variants={itemV} className="flex items-center gap-3">
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'rgba(234,219,200,0.4)' }}>Expert in</span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={activeBadge}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.35 }}
                  className="px-3 py-1 rounded-full text-xs font-bold"
                  style={{ background: 'rgba(196,135,90,0.22)', color: '#c4875a', border: '1px solid rgba(196,135,90,0.4)' }}
                >
                  {techBadges[activeBadge]}
                </motion.span>
              </AnimatePresence>
            </motion.div>

            {/* CTA buttons */}
            <motion.div variants={itemV} className="flex flex-wrap gap-3 pt-1">
              <motion.button
                onClick={() => scrollToSection('projects')}
                className="flex items-center gap-2 px-7 py-3.5 text-white font-bold rounded-2xl shadow-lg transition-all duration-300 relative overflow-hidden"
                style={{ background: 'linear-gradient(135deg, #8B5E3C, #c4875a)' }}
                whileHover={{ scale: 1.06, y: -3 }}
                whileTap={{ scale: 0.97 }}
              >
                {/* Button shimmer */}
                <motion.div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.18) 50%, transparent 60%)' }}
                  animate={{ x: ['-100%', '200%'] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 1.5 }}
                />
                <span className="relative">View My Work</span>
                <ExternalLink className="w-4 h-4 relative" />
              </motion.button>

              <motion.button
                onClick={downloadResume}
                className="flex items-center gap-2 px-6 py-3.5 font-semibold rounded-2xl transition-all duration-300"
                style={{ border: '1px solid rgba(234,219,200,0.22)', color: '#EADBC8' }}
                whileHover={{ scale: 1.06, y: -3, background: 'rgba(234,219,200,0.07)', borderColor: 'rgba(234,219,200,0.4)' }}
                whileTap={{ scale: 0.97 }}
              >
                <Download className="w-4 h-4" />
                Download CV
              </motion.button>

              <motion.button
                onClick={() => scrollToSection('contact')}
                className="flex items-center gap-2 px-6 py-3.5 font-semibold rounded-2xl transition-all duration-300"
                style={{ border: '1px solid rgba(196,135,90,0.35)', color: '#c4875a' }}
                whileHover={{ scale: 1.06, y: -3, background: 'rgba(196,135,90,0.12)', borderColor: '#c4875a' }}
                whileTap={{ scale: 0.97 }}
              >
                <Mail className="w-4 h-4" />
                Hire Me
              </motion.button>
            </motion.div>

            {/* Social links */}
            <motion.div variants={itemV} className="flex items-center gap-3 pt-1">
              <span className="text-sm" style={{ color: 'rgba(234,219,200,0.35)' }}>Find me on:</span>
              {[
                { href: 'https://github.com/MunnaKumar32990', Icon: Github, label: 'GitHub' },
                { href: 'https://linkedin.com/in/MunnaKumar32990', Icon: Linkedin, label: 'LinkedIn' },
              ].map(({ href, Icon, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300"
                  style={{ background: 'rgba(234,219,200,0.05)', border: '1px solid rgba(234,219,200,0.1)', color: '#EADBC8' }}
                  whileHover={{ y: -4, scale: 1.15, background: 'rgba(196,135,90,0.2)', borderColor: 'rgba(196,135,90,0.5)' }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* ── RIGHT – Profile image ── */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.45, ease: 'easeOut' }}
          >
            <div className="relative flex items-center justify-center">

              {/* ── LARGE pulsing caramel glow (the color the user sees behind the image) ── */}
              <motion.div
                className="absolute rounded-full pointer-events-none"
                style={{
                  width: 420, height: 420,
                  background: 'radial-gradient(circle, rgba(196,135,90,0.45) 0%, rgba(139,94,60,0.25) 40%, transparent 70%)',
                }}
                animate={{ scale: [1, 1.18, 1], opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
              />
              {/* Secondary inner caramel ring */}
              <motion.div
                className="absolute rounded-full pointer-events-none"
                style={{
                  width: 350, height: 350,
                  background: 'radial-gradient(circle, rgba(234,219,200,0.12) 0%, rgba(196,135,90,0.18) 50%, transparent 70%)',
                }}
                animate={{ scale: [1.05, 0.95, 1.05], opacity: [0.5, 0.9, 0.5] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
              />

              {/* ── Slowly spinning outer dashed ring ── */}
              <motion.div
                className="absolute rounded-full pointer-events-none"
                style={{
                  width: 430, height: 430,
                  border: '1.5px dashed rgba(196,135,90,0.35)',
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
              />
              {/* Faster spinning thin ring */}
              <motion.div
                className="absolute rounded-full pointer-events-none"
                style={{
                  width: 380, height: 380,
                  border: '1px solid rgba(139,94,60,0.25)',
                }}
                animate={{ rotate: -360 }}
                transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
              />

              {/* ── Profile image container ── */}
              <div className="relative w-72 h-96 md:w-80 md:h-[26rem] lg:w-[22rem] lg:h-[30rem] group z-10">
                {/* Gradient border */}
                <motion.div
                  className="absolute inset-0 rounded-3xl p-[2.5px]"
                  style={{ background: 'linear-gradient(135deg, #8B5E3C, #c4875a, #EADBC8, #c4875a, #8B5E3C)', backgroundSize: '300% 300%' }}
                  animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <div className="w-full h-full rounded-3xl overflow-hidden" style={{ background: '#2a1f1a' }}>
                    <img
                      src={personalData.profileImage}
                      alt={personalData.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2a1f1a]/50 via-transparent to-transparent" />
                  </div>
                </motion.div>

                {/* ── Floating badge: Code icon – top right ── */}
                <motion.div
                  className="absolute -top-6 -right-6 w-14 h-14 rounded-2xl flex items-center justify-center shadow-xl z-20"
                  style={{ background: 'linear-gradient(135deg, #8B5E3C, #c4875a)' }}
                  animate={{ y: [0, -10, 0], rotate: [0, 8, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                  whileHover={{ scale: 1.2 }}
                >
                  <Code className="w-7 h-7 text-white" />
                </motion.div>

                {/* ── Floating badge: AI/ML – top left ── */}
                <motion.div
                  className="absolute -top-6 -left-6 w-14 h-14 rounded-2xl flex items-center justify-center shadow-xl z-20"
                  style={{ background: 'linear-gradient(135deg, #6e4a2e, #8B5E3C)' }}
                  animate={{ y: [0, -8, 0], rotate: [0, -6, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                  whileHover={{ scale: 1.2 }}
                >
                  <Cpu className="w-7 h-7 text-white" />
                </motion.div>

                {/* ── Floating badge: Terminal – bottom left ── */}
                <motion.div
                  className="absolute -bottom-6 -left-6 w-14 h-14 rounded-2xl flex items-center justify-center shadow-xl z-20"
                  style={{ background: 'linear-gradient(135deg, #c4875a, #EADBC8)' }}
                  animate={{ y: [0, 10, 0], rotate: [0, 5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                  whileHover={{ scale: 1.2 }}
                >
                  <Terminal className="w-7 h-7 style={{ color: '#3A2D28' }}" />
                </motion.div>

                {/* ── Floating badge: Globe – bottom right ── */}
                <motion.div
                  className="absolute -bottom-6 -right-6 w-14 h-14 rounded-2xl flex items-center justify-center shadow-xl z-20"
                  style={{ background: 'linear-gradient(135deg, #a06840, #c4875a)' }}
                  animate={{ y: [0, 9, 0], rotate: [0, -7, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
                  whileHover={{ scale: 1.2 }}
                >
                  <Globe className="w-7 h-7 text-white" />
                </motion.div>

                {/* ── MERN badge – side ── */}
                <motion.div
                  className="absolute top-1/2 -left-10 -translate-y-1/2 backdrop-blur rounded-xl px-3 py-2 text-center z-20"
                  style={{ background: 'rgba(139,94,60,0.4)', border: '1px solid rgba(196,135,90,0.5)' }}
                  animate={{ x: [0, -6, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="text-white font-bold text-sm">MERN</div>
                  <div className="text-xs" style={{ color: '#EADBC8' }}>Stack</div>
                </motion.div>

                {/* ── Sparkle badge ── */}
                <motion.div
                  className="absolute top-6 -right-10 backdrop-blur rounded-xl px-3 py-1.5 flex items-center gap-1.5 z-20"
                  style={{ background: 'rgba(196,135,90,0.35)', border: '1px solid rgba(234,219,200,0.3)' }}
                  animate={{ x: [0, 6, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
                >
                  <Sparkles className="w-3.5 h-3.5" style={{ color: '#c4875a' }} />
                  <span className="text-white text-xs font-bold">AI Dev</span>
                </motion.div>
              </div>

              {/* ── Small orbiting dots ── */}
              {[0, 60, 120, 180, 240, 300].map((deg, i) => (
                <motion.div
                  key={i}
                  className="absolute pointer-events-none"
                  style={{
                    width: i % 2 === 0 ? 6 : 4,
                    height: i % 2 === 0 ? 6 : 4,
                    borderRadius: '50%',
                    background: i % 3 === 0 ? 'rgba(196,135,90,0.9)' : 'rgba(234,219,200,0.6)',
                  }}
                  animate={{
                    x: [
                      Math.cos((deg * Math.PI) / 180) * 220,
                      Math.cos(((deg + 360) * Math.PI) / 180) * 220,
                    ],
                    y: [
                      Math.sin((deg * Math.PI) / 180) * 220,
                      Math.sin(((deg + 360) * Math.PI) / 180) * 220,
                    ],
                  }}
                  transition={{ duration: 10 + i * 1.5, repeat: Infinity, ease: 'linear' }}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* ── Scroll indicator ── */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
          onClick={() => scrollToSection('about')}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 0.8 }}
          whileHover={{ scale: 1.1 }}
        >
          <span className="text-xs tracking-widest uppercase" style={{ color: 'rgba(234,219,200,0.35)' }}>Scroll</span>
          <div className="w-5 h-9 rounded-full flex justify-center pt-1.5" style={{ border: '1px solid rgba(196,135,90,0.45)' }}>
            <motion.div
              className="w-1 h-2 rounded-full"
              style={{ background: '#c4875a' }}
              animate={{ y: [0, 14, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
          <ChevronDown className="w-4 h-4" style={{ color: 'rgba(234,219,200,0.35)' }} />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;