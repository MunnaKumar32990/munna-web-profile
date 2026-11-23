import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { usePortfolioData } from '../contexts/PortfolioContext';

const Experience = () => {
  const { portfolio } = usePortfolioData();
  const timeline = portfolio?.about?.timeline || [];
  const education = portfolio?.education || [];
  const certifications = portfolio?.certifications || [];
  const [tab, setTab] = useState('EXPERIENCE');

  return (
    <section id="experience" className="py-24 bg-white text-[#111111] border-b border-[#E5E5E5]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#E5E5E5]">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[#F04444] text-xs font-mono">✻</span>
              <span className="label-tiny text-[#777777]">06 / TRAJECTORY & CREDENTIALS</span>
            </div>
            <h2 className="headline-large text-[#111111]">
              PRACTICAL IMPACT<br />
              & <span className="text-[#F04444]">FOUNDATIONS.</span>
            </h2>
          </div>

          {/* Tab Selector */}
          <div className="flex items-center gap-2">
            {['EXPERIENCE', 'EDUCATION', 'CERTIFICATIONS'].map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`px-3.5 py-1 text-xs font-mono tracking-wider uppercase transition-colors border ${
                  tab === t
                    ? 'bg-[#111111] text-white border-[#111111]'
                    : 'bg-white text-[#777777] border-[#E5E5E5] hover:border-[#111111] hover:text-[#111111]'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* Tab 1: Experience / Internships */}
        {tab === 'EXPERIENCE' && (
          <div className="divide-y divide-[#E5E5E5] border-b border-[#E5E5E5]">
            {timeline.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="py-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-start group hover:bg-[#FAFAFA] px-4 -mx-4 transition-colors"
              >
                {/* Year / Period */}
                <div className="md:col-span-3">
                  <span className="font-mono text-xs text-[#F04444] block mb-1">
                    [ {item.year} ]
                  </span>
                  <span className="font-mono text-[11px] text-[#777777] uppercase tracking-wider">
                    INTERNSHIP / PRACTICUM
                  </span>
                </div>

                {/* Role / Org */}
                <div className="md:col-span-4">
                  <h3 className="font-display font-bold text-xl text-[#111111] uppercase tracking-tight group-hover:text-[#F04444] transition-colors">
                    {item.title}
                  </h3>
                </div>

                {/* Narrative Details */}
                <div className="md:col-span-5">
                  <p className="text-sm text-[#555555] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Tab 2: Education */}
        {tab === 'EDUCATION' && (
          <div className="divide-y divide-[#E5E5E5] border-b border-[#E5E5E5]">
            {education.map((edu, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="py-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-start group hover:bg-[#FAFAFA] px-4 -mx-4 transition-colors"
              >
                {/* Year / Period */}
                <div className="md:col-span-3">
                  <span className="font-mono text-xs text-[#F04444] block mb-1">
                    [ {edu.year} ]
                  </span>
                  <span className="font-mono text-[11px] text-[#777777] uppercase tracking-wider">
                    ACADEMIC INSTITUTION
                  </span>
                </div>

                {/* Title */}
                <div className="md:col-span-4">
                  <h3 className="font-display font-bold text-xl text-[#111111] uppercase tracking-tight group-hover:text-[#F04444] transition-colors">
                    {edu.title}
                  </h3>
                </div>

                {/* Description */}
                <div className="md:col-span-5">
                  <p className="text-sm text-[#555555] leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Tab 3: Industry Certifications */}
        {tab === 'CERTIFICATIONS' && (
          <div className="divide-y divide-[#E5E5E5] border-b border-[#E5E5E5]">
            {certifications.map((cert, idx) => (
              <motion.div
                key={cert.id || idx}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="py-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-center group hover:bg-[#FAFAFA] px-4 -mx-4 transition-colors"
              >
                {/* Year */}
                <div className="md:col-span-2">
                  <span className="font-mono text-xs text-[#F04444]">
                    [ {cert.date || '2025/2026'} ]
                  </span>
                </div>

                {/* Title */}
                <div className="md:col-span-5">
                  <h3 className="font-display font-bold text-lg text-[#111111] uppercase tracking-tight group-hover:text-[#F04444] transition-colors">
                    {cert.title}
                  </h3>
                  <span className="font-mono text-xs text-[#777777]">
                    ISSUER: {cert.issuer}
                  </span>
                </div>

                {/* Category */}
                <div className="md:col-span-3">
                  <span className="font-mono text-[11px] uppercase tracking-widest text-[#555555] bg-[#F3F3F3] px-2.5 py-1 border border-[#E5E5E5]">
                    {cert.category || 'INDUSTRY CERTIFICATION'}
                  </span>
                </div>

                {/* Verification Link */}
                <div className="md:col-span-2 text-left md:text-right">
                  {cert.link && cert.link !== '#' ? (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-mono text-[#111111] hover:text-[#F04444] uppercase tracking-wider underline underline-offset-4"
                    >
                      VERIFY <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <span className="font-mono text-xs text-[#999999]">VERIFIED</span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Experience;

