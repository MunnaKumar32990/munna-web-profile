import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github, ExternalLink } from 'lucide-react';
import { usePortfolioData } from '../contexts/PortfolioContext';

const Projects = () => {
  const { portfolio } = usePortfolioData();
  const rawProjects = portfolio?.projects || [];
  const [filter, setFilter] = useState('ALL');

  // Categorize tags for optional filtering
  const categories = ['ALL', 'AI & ML', 'FULL STACK', 'SYSTEMS'];

  const filteredProjects = rawProjects.filter((p) => {
    if (filter === 'ALL') return true;
    if (filter === 'AI & ML') {
      return (
        p.title.toLowerCase().includes('ai') ||
        p.tags.some((t) => ['OpenAI', 'Groq', 'gemini', 'Python', 'ML'].includes(t))
      );
    }
    if (filter === 'FULL STACK') {
      return (
        p.tags.some((t) => ['React', 'Node.js', 'Flask', 'MongoDB'].includes(t))
      );
    }
    if (filter === 'SYSTEMS') {
      return (
        p.tags.some((t) => ['FastAPI', 'Socket.io', 'SpringBoot', 'Docker'].includes(t)) ||
        p.title.toLowerCase().includes('employee') ||
        p.title.toLowerCase().includes('chat')
      );
    }
    return true;
  });

  return (
    <section id="projects" className="py-24 bg-white text-[#111111] border-b border-[#E5E5E5]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#E5E5E5]">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[#F04444] text-xs font-mono">✻</span>
              <span className="label-tiny text-[#777777]">03 / SELECTED WORKS</span>
            </div>
            <h2 className="headline-large text-[#111111]">
              CRAFTED WITH INTENT<br />
              & <span className="text-[#F04444]">TECHNICAL RIGOR.</span>
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3 py-1 text-xs font-mono tracking-wider uppercase transition-colors border ${
                  filter === cat
                    ? 'bg-[#111111] text-white border-[#111111]'
                    : 'bg-white text-[#777777] border-[#E5E5E5] hover:border-[#111111] hover:text-[#111111]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Asymmetrical Project Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pt-12">
          {filteredProjects.map((project, idx) => {
            // Asymmetrical grid column spans based on index
            // Item 0: 7 cols (large feature)
            // Item 1: 5 cols (portrait/tall feature)
            // Item 2: 5 cols
            // Item 3: 7 cols
            // Item 4: 6 cols
            // Item 5: 6 cols
            let colSpan = 'md:col-span-6';
            if (idx === 0) colSpan = 'md:col-span-7';
            else if (idx === 1) colSpan = 'md:col-span-5';
            else if (idx === 2) colSpan = 'md:col-span-5';
            else if (idx === 3) colSpan = 'md:col-span-7';
            else colSpan = 'md:col-span-6';

            const isHeroFeature = idx === 0 || idx === 3;

            return (
              <motion.article
                key={project.id || idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: (idx % 2) * 0.15 }}
                className={`${colSpan} group flex flex-col justify-between`}
              >
                {/* Project Image Frame (Strictly Rectangular, Minimal 1px Border) */}
                <div className="relative overflow-hidden bg-[#181818] border border-[#E5E5E5] mb-5 aspect-[16/10]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center grayscale contrast-105 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />

                  {/* Corner Accent Label */}
                  <div className="absolute top-3 left-3 bg-[#111111]/90 backdrop-blur-sm text-white px-2.5 py-1 text-[10px] font-mono tracking-widest uppercase border border-[#333333]">
                    {String(idx + 1).padStart(2, '0')} / {project.tags?.[0] || 'DEV'}
                  </div>

                  {/* Quick Action Overlay on Hover */}
                  <div className="absolute bottom-3 right-3 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.githubUrl && project.githubUrl !== '#' && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 bg-white text-[#111111] flex items-center justify-center hover:bg-[#F04444] hover:text-white transition-colors shadow-sm"
                        aria-label="GitHub Repository"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    {project.liveUrl && project.liveUrl !== '#' && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 bg-[#111111] text-white flex items-center justify-center hover:bg-[#F04444] transition-colors shadow-sm"
                        aria-label="Live Demo"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Metadata & Title */}
                <div>
                  <div className="flex items-center justify-between gap-4 border-b border-[#E5E5E5] pb-3 mb-3">
                    <h3 className="font-display font-bold text-xl sm:text-2xl text-[#111111] uppercase tracking-tight group-hover:text-[#F04444] transition-colors flex items-center gap-2">
                      <span>{project.title}</span>
                      <ArrowUpRight className="w-4 h-4 text-[#F04444] transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </h3>
                    <span className="font-mono text-xs text-[#777777] whitespace-nowrap">
                      [ 2024 / 2025 ]
                    </span>
                  </div>

                  <p className="text-sm text-[#555555] leading-relaxed mb-4 line-clamp-2 sm:line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Stack Tags (Clean Minimalist Text Pills) */}
                  <div className="flex flex-wrap items-center gap-1.5 pt-2">
                    {project.tags?.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="font-mono text-[11px] text-[#555555] bg-[#F5F5F5] px-2 py-0.5 border border-[#EBEBEB]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Bottom Archive Link */}
        <div className="mt-16 pt-8 border-t border-[#E5E5E5] flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-mono text-xs text-[#777777]">
            SHOWCASING {filteredProjects.length} OF {rawProjects.length} CURATED PROJECTS
          </span>
          <a
            href={portfolio?.socialLinks?.github || 'https://github.com/MunnaKumar32990'}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 font-display font-bold text-xs tracking-widest text-[#111111] hover:text-[#F04444] uppercase transition-colors"
          >
            <span>VIEW COMPLETE REPOSITORY ARCHIVE ON GITHUB</span>
            <ArrowUpRight className="w-4 h-4 text-[#F04444] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
