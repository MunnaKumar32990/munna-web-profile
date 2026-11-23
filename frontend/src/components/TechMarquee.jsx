import React from 'react';

const TECH_ITEMS = [
  'PYTHON',
  'FASTAPI',
  'JAVA SPRINGBOOT',
  'REACT.JS',
  'AWS CLOUD',
  'DOCKER',
  'MONGODB',
  'RESTFUL APIS',
  'OPENAI GPT-4',
  'LEETCODE DSA (200+)',
  'SYSTEM ARCHITECTURE',
  'MICROSERVICES',
  'AZURE COGNITIVE',
  'TAILWIND CSS',
  'LINUX & BASH',
];

const TechMarquee = () => {
  return (
    <div className="relative w-full overflow-hidden py-5 bg-[#181818] border-y border-[#262626] select-none">
      {/* Edge linear fade masks */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#181818] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#181818] to-transparent z-10 pointer-events-none" />

      {/* Infinite Scrolling Track */}
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
        {[...TECH_ITEMS, ...TECH_ITEMS].map((item, idx) => (
          <div key={idx} className="flex items-center gap-6 mx-5">
            <span className="font-display font-bold text-sm tracking-widest text-[#E5E5E5] uppercase hover:text-white transition-colors cursor-default">
              {item}
            </span>
            <span className="text-[#F04444] text-xs">✻</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechMarquee;
