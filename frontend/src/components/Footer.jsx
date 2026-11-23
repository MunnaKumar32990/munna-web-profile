import React from 'react';
import { ArrowUp, ArrowUpRight } from 'lucide-react';
import { usePortfolioData } from '../contexts/PortfolioContext';

const Footer = () => {
  const { portfolio } = usePortfolioData();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const links = [
    { id: 'projects', label: 'PROJECTS' },
    { id: 'about', label: 'ABOUT' },
    { id: 'skills', label: 'SKILLS' },
    { id: 'experience', label: 'EXPERIENCE' },
    { id: 'process', label: 'PROCESS' },
    { id: 'contact', label: 'CONTACT' },
  ];

  return (
    <footer className="bg-[#111111] text-white pt-20 pb-12 border-t border-[#262626]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Top Section: Giant Brand Typography */}
        <div className="border-b border-[#262626] pb-14 mb-14">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <span className="label-tiny text-[#777777] block mb-2">
                [ EDITION 2025 / 2026 ]
              </span>
              <h2 className="headline-large text-white tracking-tighter">
                {portfolio?.name || 'MUNNA KUMAR'}
                <span className="text-[#F04444] ml-2">✻</span>
              </h2>
            </div>

            <button
              onClick={scrollToTop}
              className="group inline-flex items-center gap-2 font-mono text-xs text-[#AAAAAA] hover:text-[#F04444] transition-colors uppercase self-start md:self-auto border border-[#262626] px-4 py-2 hover:border-[#F04444]"
            >
              <span>BACK TO TOP</span>
              <ArrowUp className="w-3.5 h-3.5 transform group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Middle Columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-14 border-b border-[#262626]">
          {/* Navigation Column */}
          <div className="md:col-span-4">
            <span className="label-tiny text-[#777777] block mb-5">
              // INDEX
            </span>
            <div className="grid grid-cols-2 gap-3">
              {links.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className="font-display font-medium text-xs tracking-wider text-[#AAAAAA] hover:text-[#F04444] transition-colors text-left uppercase"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Social Presence Column */}
          <div className="md:col-span-4">
            <span className="label-tiny text-[#777777] block mb-5">
              // NETWORKS
            </span>
            <div className="flex flex-col gap-2.5 font-display text-xs">
              <a
                href={portfolio?.socialLinks?.github || 'https://github.com/MunnaKumar32990'}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#AAAAAA] hover:text-white transition-colors inline-flex items-center gap-1 uppercase"
              >
                <span>GITHUB</span>
                <ArrowUpRight className="w-3 h-3 text-[#F04444]" />
              </a>
              <a
                href={portfolio?.socialLinks?.linkedin || 'https://linkedin.com/in/MunnaKumar32990'}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#AAAAAA] hover:text-white transition-colors inline-flex items-center gap-1 uppercase"
              >
                <span>LINKEDIN</span>
                <ArrowUpRight className="w-3 h-3 text-[#F04444]" />
              </a>
              <a
                href="https://leetcode.com/u/KLU2300032990/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#AAAAAA] hover:text-white transition-colors inline-flex items-center gap-1 uppercase"
              >
                <span>LEETCODE (200+ SOLVED)</span>
                <ArrowUpRight className="w-3 h-3 text-[#F04444]" />
              </a>
              <a
                href="https://www.hackerrank.com/profile/h2300032990"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#AAAAAA] hover:text-white transition-colors inline-flex items-center gap-1 uppercase"
              >
                <span>HACKERRANK</span>
                <ArrowUpRight className="w-3 h-3 text-[#F04444]" />
              </a>
            </div>
          </div>

          {/* Colophon & Contact */}
          <div className="md:col-span-4 flex flex-col justify-between">
            <div>
              <span className="label-tiny text-[#777777] block mb-5">
                // LOCATION & TIME
              </span>
              <p className="font-mono text-xs text-[#AAAAAA] leading-relaxed">
                ENGINEERED WITH REACT, TAILWIND CSS & VITE.<br />
                BASED IN INDIA (UTC +5:30).<br />
                ACCREDITED KL UNIVERSITY CSE.
              </p>
            </div>

            <div className="pt-6">
              <a
                href={`mailto:${portfolio?.email || 'munnakushw7@gmail.com'}`}
                className="font-mono text-xs text-[#F04444] hover:underline"
              >
                {portfolio?.email || 'munnakushw7@gmail.com'}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-[#555555]">
          <div>
            &copy; {new Date().getFullYear()} {portfolio?.name || 'Munna Kumar'}. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center gap-3">
            <span>DESIGN LANGUAGE: SPECTOR EDITORIAL</span>
            <span className="text-[#F04444]">✻</span>
            <span>PRECISION SOFTWARE</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
