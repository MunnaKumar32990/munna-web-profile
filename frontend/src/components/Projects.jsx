import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Github, X, ArrowRight, Tag } from 'lucide-react';
import { usePortfolioData } from '../contexts/PortfolioContext';
import { personalData as fallbackData } from '../utils/data';

const Projects = () => {
  const { portfolio } = usePortfolioData();
  const personalData = portfolio || fallbackData;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.05 });
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('All');

  const projects = personalData.projects || [];
  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(p => p.tags && p.tags.includes(filter));

  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{ background: '#FEFCF7' }}
      id="projects"
    >
      <div
        className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{ background: 'rgba(234,219,200,0.6)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="section-subtitle">My Work</span>
          <h2 className="section-title mt-2" style={{ color: '#3A2D28' }}>
            Featured{' '}
            <span style={{ background: 'linear-gradient(135deg, #8B5E3C, #c4875a)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Projects
            </span>
          </h2>
          <div className="w-16 h-1 mx-auto mt-4 rounded-full" style={{ background: 'linear-gradient(90deg, #8B5E3C, #c4875a)' }} />
          <p className="mt-4 max-w-2xl mx-auto" style={{ color: '#6B5A4E' }}>
            A showcase of my work — web applications, AI solutions, and other creative engineering.
          </p>
        </motion.div>

        {/* Filter pills */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {['All', 'React', 'Python', 'Flask', 'Node.js', 'MongoDB'].map((tag) => (
            <motion.button
              key={tag}
              onClick={() => setFilter(tag)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300"
              style={filter === tag ? {
                background: 'linear-gradient(135deg, #8B5E3C, #c4875a)',
                color: '#fff',
                boxShadow: '0 4px 15px rgba(139,94,60,0.3)',
              } : {
                background: '#FEFCF7',
                color: '#6B5A4E',
                border: '1px solid #EADBC8',
              }}
            >
              {tag === 'All' ? 'All Projects' : tag}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                className="group relative"
              >
                <div
                  className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border h-full flex flex-col"
                  style={{ background: '#FEFCF7', borderColor: '#EADBC8' }}
                >
                  {/* Image */}
                  <div className="relative overflow-hidden h-48">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {index < 3 && (
                      <div
                        className="absolute top-3 right-3 text-white px-2.5 py-1 rounded-full text-xs font-bold shadow-lg"
                        style={{ background: 'linear-gradient(135deg, #8B5E3C, #c4875a)' }}
                      >
                        Featured
                      </div>
                    )}

                    {/* Quick action buttons appear on hover */}
                    <div className="absolute bottom-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 bg-white/90 backdrop-blur rounded-lg flex items-center justify-center transition-colors"
                        style={{ color: '#8B5E3C' }}
                        whileHover={{ scale: 1.1, background: '#8B5E3C', color: '#fff' }}
                        onClick={e => e.stopPropagation()}
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </motion.a>
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 bg-white/90 backdrop-blur rounded-lg flex items-center justify-center transition-colors"
                        style={{ color: '#3A2D28' }}
                        whileHover={{ scale: 1.1, background: '#3A2D28', color: '#fff' }}
                        onClick={e => e.stopPropagation()}
                      >
                        <Github className="w-3.5 h-3.5" />
                      </motion.a>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 flex flex-col flex-1">
                    <h3
                      className="text-lg font-bold mb-2 leading-tight transition-colors"
                      style={{ color: '#3A2D28' }}
                    >
                      {project.title}
                    </h3>
                    <p className="text-sm mb-4 leading-relaxed line-clamp-2 flex-1" style={{ color: '#6B5A4E' }}>
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.tags.slice(0, 3).map((tag, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 text-xs font-medium rounded-lg"
                          style={{ background: 'rgba(234,219,200,0.7)', color: '#8B5E3C' }}
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span
                          className="px-2.5 py-1 text-xs font-medium rounded-lg"
                          style={{ background: '#F5F5DC', color: '#6B5A4E' }}
                        >
                          +{project.tags.length - 3}
                        </span>
                      )}
                    </div>

                    <button
                      onClick={() => setSelectedProject(project)}
                      className="flex items-center gap-1.5 text-sm font-semibold transition-all duration-200 hover:gap-2.5"
                      style={{ color: '#8B5E3C' }}
                    >
                      View Details <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.85, opacity: 0, y: 20 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              className="rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
              style={{ background: '#FEFCF7' }}
              onClick={e => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-56 md:h-72 object-cover rounded-t-3xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-t-3xl" />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-black/30 backdrop-blur rounded-full flex items-center justify-center text-white hover:bg-black/50 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-7 md:p-9">
                <h3 className="text-2xl md:text-3xl font-bold mb-3" style={{ color: '#3A2D28' }}>
                  {selectedProject.title}
                </h3>
                <p className="leading-relaxed mb-6 text-sm md:text-base" style={{ color: '#6B5A4E' }}>
                  {selectedProject.details}
                </p>

                <div className="flex flex-wrap gap-2 mb-7">
                  <Tag className="w-4 h-4 mt-1" style={{ color: '#8B5E3C' }} />
                  {selectedProject.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm font-medium rounded-xl"
                      style={{ background: 'rgba(234,219,200,0.7)', color: '#8B5E3C' }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-6 py-3.5 text-white rounded-xl font-semibold text-center flex items-center justify-center gap-2 transition-all shadow-lg"
                    style={{ background: 'linear-gradient(135deg, #8B5E3C, #c4875a)' }}
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Live Project
                  </a>
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-6 py-3.5 rounded-xl font-semibold text-center flex items-center justify-center gap-2 transition-all"
                    style={{ border: '2px solid #EADBC8', color: '#3A2D28' }}
                  >
                    <Github className="w-4 h-4" />
                    View Source Code
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;