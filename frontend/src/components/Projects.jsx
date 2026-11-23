import { useState, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ExternalLink, Github, Terminal, Sparkles, X, ArrowUpRight, Code2 } from 'lucide-react';
import { usePortfolioData } from '../contexts/PortfolioContext';

const filterCategories = ['All', 'AI & ML', 'Full Stack', 'React', 'Python'];

/* Motion.dev 3D Tilt Card with Cursor Spotlight */
const ProjectCard = ({ project, onSelect }) => {
  const cardRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 200, damping: 20 });
  const mouseY = useSpring(y, { stiffness: 200, damping: 20 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], ['6deg', '-6deg']);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ['-6deg', '6deg']);

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const clientX = e.clientX - rect.left;
    const clientY = e.clientY - rect.top;

    x.set(clientX / width - 0.5);
    y.set(clientY / height - 0.5);
    setMousePos({ x: clientX, y: clientY });
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className="devx-card group overflow-hidden flex flex-col justify-between hover:shadow-2xl hover:border-blue-500/50 transition-all duration-300 relative perspective-[1000px]"
    >
      {/* Spotlight Radial Light following cursor */}
      {isHovered && (
        <div
          className="pointer-events-none absolute -inset-px rounded-2xl opacity-100 transition duration-300 z-10"
          style={{
            background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(59, 130, 246, 0.12), transparent 80%)`,
          }}
        />
      )}

      {/* Top Header Row inside Card */}
      <div className="p-6 pb-4 flex items-center justify-between border-b border-slate-100 dark:border-white/[0.06] relative z-20">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-blue-600/10 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:scale-110 group-hover:rotate-6 transition-all">
            <Code2 className="w-4 h-4" />
          </div>
          <span className="font-bold text-slate-900 dark:text-white text-sm">
            {project.title.split(' ')[0]}
          </span>
        </div>

        {/* Category Pills on Right */}
        <div className="flex items-center gap-1.5">
          {(project.tags || []).slice(0, 2).map((tag, tIdx) => (
            <span
              key={tIdx}
              className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-slate-100 dark:bg-white/[0.04] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/[0.08]"
            >
              {tag.trim()}
            </span>
          ))}
        </div>
      </div>

      {/* Big Preview Image Mockup with Hover Zoom */}
      <div
        onClick={() => onSelect(project)}
        className="relative aspect-[16/10] overflow-hidden bg-slate-100 dark:bg-[#0E1017] cursor-pointer relative z-20"
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover object-top group-hover:scale-108 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-5">
          <span className="text-xs font-semibold text-white bg-blue-600 px-3.5 py-1.5 rounded-full shadow-lg flex items-center gap-1.5">
            Explore Case Study <ArrowUpRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>

      {/* Details & Actions */}
      <div className="p-6 pt-5 flex-1 flex flex-col justify-between relative z-20">
        <div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-2">
            {project.title}
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed mb-4">
            {project.description}
          </p>
        </div>

        {/* Bottom Action Buttons */}
        <div className="flex items-center gap-3 pt-4 border-t border-slate-100 dark:border-white/[0.06]">
          {project.liveUrl && project.liveUrl !== '#' ? (
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex-1 py-2.5 rounded-xl text-xs font-semibold text-center text-white bg-blue-600 hover:bg-blue-500 transition-all flex items-center justify-center gap-1.5 shadow-sm"
            >
              Live Demo
              <ArrowUpRight className="w-3.5 h-3.5" />
            </motion.a>
          ) : (
            <motion.button
              onClick={() => onSelect(project)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex-1 py-2.5 rounded-xl text-xs font-semibold text-center text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-white/[0.04] hover:bg-slate-200 dark:hover:bg-white/[0.08] border border-slate-200 dark:border-white/[0.08] transition-all flex items-center justify-center gap-1.5"
            >
              Project Details
            </motion.button>
          )}

          {project.githubUrl && (
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View source on GitHub"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.08] hover:border-blue-500 hover:text-blue-600 dark:hover:text-white text-slate-600 dark:text-slate-400 flex items-center justify-center transition-all shadow-sm"
            >
              <Github className="w-4 h-4" />
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const { portfolio, loading } = usePortfolioData();
  const personalData = portfolio || {};

  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  if (loading) return null;

  const rawProjects = personalData.projects || [];

  const filteredProjects = rawProjects.filter(project => {
    if (activeFilter === 'All') return true;
    const tags = (project.tags || []).map(t => t.toLowerCase());
    if (activeFilter === 'AI & ML') {
      return tags.some(t => t.includes('ai') || t.includes('openai') || t.includes('gemini') || t.includes('groq'));
    }
    if (activeFilter === 'Full Stack') {
      return tags.some(t => t.includes('full stack') || t.includes('mongodb') || t.includes('node') || t.includes('flask'));
    }
    if (activeFilter === 'React') {
      return tags.some(t => t.includes('react'));
    }
    if (activeFilter === 'Python') {
      return tags.some(t => t.includes('python') || t.includes('fastapi') || t.includes('flask'));
    }
    return true;
  });

  return (
    <section id="portfolio" className="py-24 relative overflow-hidden bg-slate-50 dark:bg-[#0B0C10] devx-grid-bg transition-colors duration-300">
      {/* Background ambient lighting */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.08, 0.15, 0.08],
        }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/3 -right-40 w-[500px] h-[500px] bg-blue-600 rounded-full blur-[140px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="devx-accent-bar mx-auto" />
          <h2 className="devx-section-title">
            Featured Portfolio
          </h2>
          <p className="devx-section-desc">
            Explore recent production-ready full-stack applications, AI integrations, and cloud systems.
          </p>

          {/* Filter Pills with animated background indicator */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {filterCategories.map(cat => {
              const isActive = activeFilter === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`relative px-5 py-2 rounded-full text-xs font-semibold transition-colors duration-200 ${
                    isActive
                      ? 'text-white'
                      : 'bg-white dark:bg-[#13151F] text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-white/[0.08] hover:text-blue-600 dark:hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeFilterTab"
                      className="absolute inset-0 bg-blue-600 rounded-full -z-10 shadow-md"
                      transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                    />
                  )}
                  {cat}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* 2-Column Responsive Project Grid with 3D Tilt Cards */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onSelect={setSelectedProject}
              />
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              className="relative w-full max-w-2xl rounded-2xl bg-white dark:bg-[#13151F] border border-slate-200 dark:border-white/[0.12] p-6 shadow-2xl max-h-[90vh] overflow-y-auto"
            >
              <motion.button
                onClick={() => setSelectedProject(null)}
                whileHover={{ rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                className="absolute top-4 right-4 p-2 rounded-xl text-slate-400 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-white/[0.05]"
              >
                <X className="w-4 h-4" />
              </motion.button>

              <div className="aspect-[16/9] rounded-xl overflow-hidden mb-5 border border-slate-200 dark:border-white/[0.08]">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{selectedProject.title}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-5">
                {selectedProject.details || selectedProject.description}
              </p>

              <div className="mb-6">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 mb-2 font-bold">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {(selectedProject.tags || []).map((t, i) => (
                    <span key={i} className="px-3 py-1 rounded-full text-xs font-mono bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 text-blue-700 dark:text-blue-300 font-semibold">
                      {t.trim()}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-3">
                {selectedProject.githubUrl && (
                  <motion.a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="btn-devx-secondary flex-1 text-xs"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Source Code
                  </motion.a>
                )}
                {selectedProject.liveUrl && selectedProject.liveUrl !== '#' && (
                  <motion.a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="btn-devx-primary flex-1 text-xs"
                  >
                    Live Demo
                    <ArrowUpRight className="w-4 h-4 ml-2" />
                  </motion.a>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
