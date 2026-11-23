import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { usePortfolioData } from '../contexts/PortfolioContext';

const SKILL_GROUPS = [
  {
    num: '01',
    category: 'BACKEND & FRAMEWORKS',
    headline: 'High-throughput microservices, API contracts, and scalable server architecture.',
    skills: ['Python', 'FastAPI', 'Java SpringBoot', 'Node.js', 'Express.js', 'REST APIs', 'Socket.io / WebSockets'],
    proficiency: 'PRIMARY FOCUS',
  },
  {
    num: '02',
    category: 'ARTIFICIAL INTELLIGENCE',
    headline: 'Large language model integration, speech pipelines, and edge inference.',
    skills: ['OpenAI GPT-4 API', 'Groq LPU', 'Google Gemini API', 'Azure Speech Services', 'AWS SageMaker', 'Prompt Engineering'],
    proficiency: 'HANDS-ON APPLIED',
  },
  {
    num: '03',
    category: 'DATABASES & CACHING',
    headline: 'Document stores, relational databases, query optimization, and schema design.',
    skills: ['MongoDB', 'Mongoose ODM', 'SQL / Relational Modeling', 'Data Normalization', 'Aggregation Pipelines'],
    proficiency: 'PRODUCTION READY',
  },
  {
    num: '04',
    category: 'FRONTEND & USER EXPERIENCE',
    headline: 'Modern component-driven web interfaces with micro-interactions and responsiveness.',
    skills: ['React.js', 'JavaScript (ES6+)', 'Tailwind CSS', 'HTML5 / Modern CSS', 'Framer Motion', 'State Management'],
    proficiency: 'PRODUCTION READY',
  },
  {
    num: '05',
    category: 'CLOUD, DEVOPS & TOOLS',
    headline: 'Containerization, cloud resource optimization, and version control.',
    skills: ['Amazon Web Services (AWS)', 'Docker', 'Git', 'GitHub', 'Postman API Testing', 'Linux / Bash'],
    proficiency: 'CERTIFIED (AWS/AZURE)',
  },
  {
    num: '06',
    category: 'CORE COMPUTER SCIENCE',
    headline: 'Rigorous algorithmic foundation, performance complexity, and engineering standards.',
    skills: ['Data Structures & Algorithms (200+ LeetCode)', 'Object-Oriented Programming (OOP)', 'Database Management Systems (DBMS)', 'Operating Systems', 'Computer Networks'],
    proficiency: 'ACADEMIC EXCELLENCE',
  },
];

const Skills = () => {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  return (
    <section id="skills" className="py-24 bg-white text-[#111111] border-b border-[#E5E5E5]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#E5E5E5]">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[#F04444] text-xs font-mono">✻</span>
              <span className="label-tiny text-[#777777]">05 / TECHNICAL EXPERTISE</span>
            </div>
            <h2 className="headline-large text-[#111111]">
              CAPABILITIES & <br />
              ENGINEERING <span className="text-[#F04444]">TOOLSET.</span>
            </h2>
          </div>

          <p className="font-mono text-xs text-[#777777] max-w-xs md:text-right">
            [ STRUCTURED ACROSS SIX CORE SPECIALIZATIONS ]
          </p>
        </div>

        {/* Structured Editorial Skill Rows */}
        <div className="divide-y divide-[#E5E5E5] border-b border-[#E5E5E5]">
          {SKILL_GROUPS.map((group, idx) => (
            <motion.div
              key={group.num}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
              className="py-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start transition-colors duration-200 hover:bg-[#FAFAFA] px-4 -mx-4"
            >
              {/* Col 1: Index & Category */}
              <div className="lg:col-span-4">
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-mono text-xs text-[#777777]">
                    {group.num} /
                  </span>
                  <span className="font-mono text-[10px] text-[#F04444] tracking-widest uppercase bg-[#FFF0F0] px-2 py-0.5 border border-[#FFD5D5]">
                    {group.proficiency}
                  </span>
                </div>
                <h3 className="font-display font-bold text-xl sm:text-2xl text-[#111111] uppercase tracking-tight">
                  {group.category}
                </h3>
                <p className="text-xs text-[#777777] mt-2 font-sans max-w-sm">
                  {group.headline}
                </p>
              </div>

              {/* Col 2: Technologies as Clean Text Pills */}
              <div className="lg:col-span-8 flex flex-wrap items-center gap-2 pt-2 lg:pt-0">
                {group.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="font-mono text-xs text-[#222222] bg-[#F3F3F3] hover:bg-[#111111] hover:text-white px-3 py-1.5 border border-[#E5E5E5] transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
