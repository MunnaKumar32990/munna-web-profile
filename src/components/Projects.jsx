import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Github, X, ArrowRight } from 'lucide-react';
import { usePortfolioData } from '../contexts/PortfolioContext';
import { personalData as fallbackData } from '../utils/data';

const Projects = () => {
  const { portfolio, loading } = usePortfolioData();
  const personalData = portfolio || fallbackData;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('All');

  const projects = personalData.projects || [];
  const allTags = ['All', ...new Set(projects.flatMap(project => project.tags || []))];
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.tags && project.tags.includes(filter));

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900" id="projects">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed mb-12">
            A showcase of my work, including web applications, design projects, and other creative endeavors. Each project represents a unique challenge and learning opportunity.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {allTags.map((tag) => (
              <motion.button
                key={tag}
                onClick={() => setFilter(tag)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  filter === tag
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                    : 'bg-white dark:bg-slate-800 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 hover:text-blue-600 dark:hover:text-blue-400'
                }`}
              >
                {tag === 'All' ? 'All Projects' : tag}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-max">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group relative"
            >
              <div className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-slate-700">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 md:h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  {index < 3 && (
                    <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Animated Tech Stack Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.slice(0, 4).map((tag, tagIndex) => (
                      <motion.span
                        key={tagIndex}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className="px-3 py-1 text-sm font-medium bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg cursor-pointer transition-all duration-300"
                      >
                        {tag}
                      </motion.span>
                    ))}
                    {project.tags.length > 4 && (
                      <span className="px-3 py-1 text-sm font-medium bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-lg">
                        +{project.tags.length - 4}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium hover:gap-3 transition-all duration-300"
                    >
                      View Details <ArrowRight className="w-4 h-4" />
                    </button>
                    
                    <div className="flex gap-3">
                      <motion.a
                        href={project.liveUrl}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </motion.a>
                      <motion.a
                        href={project.githubUrl}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-800 dark:hover:bg-gray-600 hover:text-white transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github className="w-4 h-4" />
                      </motion.a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-white dark:bg-slate-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 md:h-80 object-cover"
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-3 bg-black/20 backdrop-blur-sm rounded-full hover:bg-black/40 transition-colors text-white"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="p-8 md:p-12">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-6">
                {selectedProject.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg leading-relaxed">
                {selectedProject.details}
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                {selectedProject.tags.map((tag, index) => (
                  <motion.span
                    key={index}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="px-4 py-2 text-sm font-medium bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-xl cursor-pointer transition-all duration-300"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.a
                  href={selectedProject.liveUrl}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 px-8 py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors font-medium text-center flex items-center justify-center gap-3"
                >
                  <ExternalLink className="w-5 h-5" />
                  View Live Project
                </motion.a>
                <motion.a
                  href={selectedProject.githubUrl}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors font-medium text-center flex items-center justify-center gap-3"
                >
                  <Github className="w-5 h-5" />
                  View Source Code
                </motion.a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Projects;