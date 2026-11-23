import React from 'react';
import { motion } from 'framer-motion';

const STEPS = [
  {
    num: '01',
    title: 'DISCOVER',
    subtitle: 'PROBLEM DECONSTRUCTION',
    description:
      'Deep dive into specifications, user workflows, system constraints, and data requirements before writing a single line of code.',
  },
  {
    num: '02',
    title: 'ARCHITECT',
    subtitle: 'SYSTEM & SCHEMA DESIGN',
    description:
      'Designing robust API contracts, normalized database schemas, asynchronous event pipelines, and modular interface boundaries.',
  },
  {
    num: '03',
    title: 'DEVELOP',
    subtitle: 'PRECISION IMPLEMENTATION',
    description:
      'Writing type-safe, maintainable backend services in Python, FastAPI, SpringBoot and reactive modern frontends in React.',
  },
  {
    num: '04',
    title: 'DEPLOY',
    subtitle: 'OPTIMIZE & OPERATE',
    description:
      'Packaging with Docker, provisioning on AWS cloud infrastructure, conducting load testing, and ensuring high reliability.',
  },
];

const WorkProcess = () => {
  return (
    <section id="process" className="py-24 bg-white text-[#111111] border-b border-[#E5E5E5]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#E5E5E5]">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[#F04444] text-xs font-mono">✻</span>
              <span className="label-tiny text-[#777777]">02 / METHODOLOGY</span>
            </div>
            <h2 className="headline-large text-[#111111]">
              AN ENGINEERING PRACTICE<br />
              ROOTED IN <span className="text-[#F04444]">PRECISION.</span>
            </h2>
          </div>

          <p className="font-mono text-xs text-[#777777] max-w-xs md:text-right">
            [ FOUR STAGES OF RIGOROUS SOFTWARE CRAFTSMANSHIP ]
          </p>
        </div>

        {/* 4-Step Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-[#E5E5E5] border-b border-[#E5E5E5]">
          {STEPS.map((step, idx) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group py-10 md:px-8 first:md:pl-0 last:md:pr-0 flex flex-col justify-between transition-colors duration-300 hover:bg-[#F9F9F9]"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="font-mono text-xs text-[#777777] group-hover:text-[#F04444] transition-colors">
                    {step.num} —
                  </span>
                  <span className="text-[#F04444] opacity-0 group-hover:opacity-100 transition-opacity text-xs">
                    ✦
                  </span>
                </div>

                <h3 className="font-display font-bold text-2xl text-[#111111] tracking-tight uppercase mb-2 group-hover:text-[#F04444] transition-colors">
                  {step.title}
                </h3>

                <p className="font-mono text-[10px] text-[#777777] uppercase tracking-wider mb-5">
                  {step.subtitle}
                </p>

                <p className="text-sm text-[#555555] leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-[#E5E5E5] flex items-center justify-between text-[11px] font-mono text-[#999999]">
                <span>STAGE 0{idx + 1}</span>
                <span>VERIFIED</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;
