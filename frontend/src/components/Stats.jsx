import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { usePortfolioData } from '../contexts/PortfolioContext';

const CountUp = ({ target, suffix = '', duration = 1.5 }) => {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const numeric = parseFloat(String(target).replace(/[^0-9.]/g, '')) || 0;
  const isDecimal = String(target).includes('.');

  useEffect(() => {
    if (!inView) return;
    if (isDecimal) {
      setVal(numeric);
      return;
    }

    let start = null;
    let frame = null;

    const animate = (time) => {
      if (!start) start = time;
      const progress = Math.min((time - start) / (duration * 1000), 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setVal(Math.floor(easeOut * numeric));
      if (progress < 1) {
        frame = requestAnimationFrame(animate);
      } else {
        setVal(numeric);
      }
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [inView, numeric, duration, isDecimal]);

  return (
    <span ref={ref}>
      {isDecimal ? target : val}
      {suffix}
    </span>
  );
};

const Stats = () => {
  const { portfolio } = usePortfolioData();

  const metrics = [
    {
      num: portfolio?.leetcodeCount || '200',
      suffix: '+',
      label: 'LEETCODE & DSA',
      desc: 'Algorithmic problems solved covering graphs, dynamic programming, and data structures.',
    },
    {
      num: portfolio?.cgpa || '9.6',
      suffix: '',
      label: 'ACADEMIC CGPA',
      desc: 'B.Tech in Computer Science at KL University, maintaining top-tier academic rigor.',
    },
    {
      num: '06',
      suffix: '+',
      label: 'PROJECTS BUILT',
      desc: 'Full-stack systems and multimodal AI tools deployed to production and open source.',
    },
    {
      num: '05',
      suffix: '',
      label: 'CERTIFICATIONS',
      desc: 'Recognitions across AWS, Microsoft Azure, Oracle AI, MongoDB, and Salesforce.',
    },
    {
      num: portfolio?.githubRepos || '60',
      suffix: '+',
      label: 'GITHUB REPOSITORIES',
      desc: 'Open-source contributions, developer utilities, and software engineering projects.',
    },
  ];

  return (
    <section className="py-20 bg-[#111111] text-white border-b border-[#262626]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex items-center gap-2 mb-10 border-b border-[#262626] pb-4">
          <span className="text-[#F04444] text-xs font-mono">✻</span>
          <span className="label-tiny text-[#AAAAAA]">METRICS & VERIFIED ACHIEVEMENTS</span>
        </div>

        {/* 5-Column Stats Matrix */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 divide-y sm:divide-y-0 sm:divide-x divide-[#262626]">
          {metrics.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="py-8 sm:px-6 first:sm:pl-0 last:sm:pr-0 group"
            >
              <div className="headline-large text-white group-hover:text-[#F04444] transition-colors mb-2">
                <CountUp target={item.num} suffix={item.suffix} />
              </div>

              <div className="font-display font-bold text-xs uppercase tracking-wider text-[#E5E5E5] mb-2">
                {item.label}
              </div>

              <p className="font-sans text-xs text-[#777777] leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
