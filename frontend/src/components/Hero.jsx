import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownRight, ArrowUpRight } from 'lucide-react';
import { usePortfolioData } from '../contexts/PortfolioContext';

const Hero = () => {
  const { portfolio } = usePortfolioData();

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen bg-[#111111] text-white pt-28 pb-16 flex flex-col justify-between overflow-hidden"
    >
      {/* Subtle Ambient Grain/Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#181818_1px,transparent_1px),linear-gradient(to_bottom,#181818_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_35%,#000_70%,transparent_100%)] opacity-40 pointer-events-none" />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 w-full relative z-10 my-auto">
        {/* Top Metadata Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center justify-between gap-4 border-b border-[#262626] pb-5 mb-10 sm:mb-14"
        >
          <div className="flex items-center gap-2">
            <span className="text-[#F04444] text-sm animate-spin-slow">✻</span>
            <span className="label-tiny text-[#AAAAAA]">
              PORTFOLIO 2025 / 2026
            </span>
          </div>

          <div className="flex items-center gap-3 font-mono text-xs text-[#777777]">
            <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse" />
            <span className="uppercase tracking-wider">
              {portfolio?.tagline || 'AVAILABLE FOR NEW ROLES & COLLABORATIONS'}
            </span>
          </div>
        </motion.div>

        {/* Oversized Editorial Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10 sm:mb-14"
        >
          <h1 className="headline-huge text-white">
            <span className="block overflow-hidden">
              <span className="block">BUILDING</span>
            </span>
            <span className="block overflow-hidden">
              <span className="block flex items-baseline gap-4 sm:gap-8 flex-wrap">
                <span>DIGITAL</span>
                <span className="inline-block text-[#F04444] text-[0.4em] transform -translate-y-4 sm:-translate-y-8">
                  ✻
                </span>
              </span>
            </span>
            <span className="block overflow-hidden">
              <span className="block text-[#E5E5E5]">
                EXPERIENCES<span className="text-[#F04444]">.</span>
              </span>
            </span>
          </h1>
        </motion.div>

        {/* Two-Column Intro & CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end pt-6 border-t border-[#262626]"
        >
          {/* Subtitle / Bio */}
          <div className="md:col-span-7 lg:col-span-8">
            <p className="text-base sm:text-lg lg:text-xl text-[#AAAAAA] font-normal leading-relaxed max-w-2xl">
              I'm <span className="text-white font-medium">{portfolio?.name || 'Munna Kumar'}</span>, a Computer Science student and software engineer passionate about building meaningful digital experiences through code, system architecture, and intelligent AI solutions.
            </p>
          </div>

          {/* Minimalist CTA Links */}
          <div className="md:col-span-5 lg:col-span-4 flex flex-col sm:flex-row md:flex-col gap-4 items-start md:items-end justify-end">
            <button
              onClick={() => scrollTo('projects')}
              className="group inline-flex items-center gap-2 text-xs sm:text-sm font-display font-bold tracking-widest text-white uppercase hover:text-[#F04444] transition-colors"
            >
              <span>EXPLORE MY WORK</span>
              <ArrowDownRight className="w-4 h-4 text-[#F04444] transform group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
            </button>

            <button
              onClick={() => scrollTo('contact')}
              className="group inline-flex items-center gap-2 text-xs sm:text-sm font-display font-bold tracking-widest text-[#AAAAAA] uppercase hover:text-white transition-colors"
            >
              <span>LET'S CONNECT</span>
              <ArrowUpRight className="w-4 h-4 text-[#777777] group-hover:text-white transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
            </button>
          </div>
        </motion.div>
      </div>

      {/* Bottom Metadata Bar with Thin 1px Dividers */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="max-w-7xl mx-auto px-5 sm:px-8 w-full relative z-10 pt-10"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-4 border-y border-[#262626] font-mono text-[11px] text-[#777777]">
          <div>
            <span className="block text-[#555555] uppercase text-[9px] tracking-widest mb-0.5">
              CURRENT FOCUS
            </span>
            <span className="text-[#CCCCCC] font-medium">BACKEND & AI ENGINEERING</span>
          </div>

          <div>
            <span className="block text-[#555555] uppercase text-[9px] tracking-widest mb-0.5">
              EDUCATION
            </span>
            <span className="text-[#CCCCCC] font-medium">KL UNIVERSITY (9.6 CGPA)</span>
          </div>

          <div>
            <span className="block text-[#555555] uppercase text-[9px] tracking-widest mb-0.5">
              LEETCODE DSA
            </span>
            <span className="text-[#CCCCCC] font-medium">200+ PROBLEMS SOLVED</span>
          </div>

          <div>
            <span className="block text-[#555555] uppercase text-[9px] tracking-widest mb-0.5">
              BASED IN
            </span>
            <span className="text-[#CCCCCC] font-medium">INDIA (REMOTE READY)</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
