import React from 'react';
import { motion } from 'framer-motion';
import { usePortfolioData } from '../contexts/PortfolioContext';

const Philosophy = () => {
  const { portfolio } = usePortfolioData();

  return (
    <section className="py-28 bg-[#111111] text-white border-b border-[#262626] relative overflow-hidden">
      {/* Background Subtle Accent Watermark */}
      <div className="absolute right-8 -bottom-10 select-none pointer-events-none opacity-5 font-display font-black text-[18vw] leading-none text-white">
        SPECTOR
      </div>

      <div className="max-w-6xl mx-auto px-5 sm:px-8 relative z-10">
        <div className="flex items-center gap-2 mb-12">
          <span className="text-[#F04444] text-xs font-mono">✻</span>
          <span className="label-tiny text-[#AAAAAA]">PERSONAL ENGINEERING PHILOSOPHY</span>
        </div>

        {/* Large Red Quotation Mark */}
        <div className="text-[#F04444] font-serif text-7xl sm:text-9xl leading-none select-none mb-2">
          “
        </div>

        {/* Oversized Statement Headline */}
        <motion.blockquote
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="headline-medium text-white max-w-4xl tracking-tight leading-snug sm:leading-tight mb-12"
        >
          SOFTWARE ENGINEERING IS NOT MERELY ABOUT EMITTING SYNTAX — IT IS THE DISCIPLINE OF <span className="text-[#F04444]">ELIMINATING COMPLEXITY</span>, DESIGNING ROBUST ARCHITECTURES, AND BUILDING EXPERIENCES THAT EMPOWER PEOPLE.
        </motion.blockquote>

        {/* Attribution Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-8 border-t border-[#262626]">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 border border-[#333333] bg-[#181818] flex items-center justify-center font-display font-bold text-sm text-[#F04444]">
              MK
            </div>
            <div>
              <div className="font-display font-bold text-sm uppercase tracking-wider text-white">
                {portfolio?.name || 'MUNNA KUMAR'}
              </div>
              <div className="font-mono text-xs text-[#777777]">
                SOFTWARE ENGINEER & AI SYSTEMS SPECIALIST
              </div>
            </div>
          </div>

          <div className="font-mono text-xs text-[#777777] flex items-center gap-3">
            <span>[ KL UNIVERSITY CSE ]</span>
            <span className="text-[#F04444]">✻</span>
            <span>[ INDIA ]</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;

