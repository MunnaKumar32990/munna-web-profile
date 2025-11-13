import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Award, BadgeCheck, BookOpen, ShieldCheck, Star, ChevronRight } from 'lucide-react';
import { usePortfolioData } from '../contexts/PortfolioContext';
import { personalData as fallbackData } from '../utils/data';

const Certifications = () => {
  const { portfolio, loading } = usePortfolioData();
  const personalData = portfolio || fallbackData;
  const ref = useRef(null);
  const containerRef = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  const isContainerInView = useInView(containerRef, { once: true, threshold: 0.1 });

  // Simplified icons
  const certificationIcons = {
    development: <BookOpen className="w-6 h-6 text-blue-500" />,
    security: <ShieldCheck className="w-6 h-6 text-emerald-500" />,
    cloud: <ShieldCheck className="w-6 h-6 text-sky-500" />,
    language: <BadgeCheck className="w-6 h-6 text-purple-500" />,
    default: <BadgeCheck className="w-6 h-6 text-purple-500" />
  };

  const getCategoryIcon = (category) => {
    if (!category || typeof category !== 'string') {
      return certificationIcons.default;
    }
    return certificationIcons[category.toLowerCase()] || certificationIcons.default;
  };

  // Simplified color scheme
  const getCategoryColor = (category) => {
    switch((category || '').toLowerCase()) {
      case 'development': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300';
      case 'security': return 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300';
      case 'cloud': return 'bg-sky-100 text-sky-800 dark:bg-sky-900/30 dark:text-sky-300';
      case 'language': return 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300';
      default: return 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300';
    }
  };

  return (
    <section 
      className="py-20 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800"
      id="certifications"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
        >
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-flex items-center justify-center gap-3 mb-5">
              <div className="w-8 h-0.5 bg-slate-300"></div>
              <Star className="w-5 h-5 text-slate-500" />
              <div className="w-8 h-0.5 bg-slate-300"></div>
            </div>
            
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6 text-slate-800 dark:text-slate-100"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Professional Certifications
              <span className="block mt-4 text-lg font-normal text-slate-600 dark:text-slate-400 max-w-md mx-auto">
                Validated expertise and continuous learning
              </span>
            </motion.h2>
            
            <motion.p 
              className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              Professional certifications demonstrating my skills and knowledge across various domains
            </motion.p>
          </div>
          
          <div 
            ref={containerRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {(personalData.certifications || []).map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={isContainerInView ? { 
                  opacity: 1, 
                  y: 0, 
                  scale: 1
                } : { 
                  opacity: 0, 
                  y: 30, 
                  scale: 0.95
                }}
                transition={{ 
                  delay: index * 0.1, 
                  duration: 0.5, 
                  ease: "easeOut"
                }}
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 25px 30px -5px rgba(0, 0, 0, 0.15), 0 15px 15px -5px rgba(0, 0, 0, 0.08)"
                }}
                className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-200 dark:border-slate-700 flex flex-col"
              >
                {/* Card Header with Image */}
                <div className="relative overflow-hidden h-56 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900/70 z-10" />
                  
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-contain p-4"
                  />
                  
                  {/* Issuer Badge */}
                  <div className="absolute bottom-4 left-4 z-20">
                    <div className="flex items-center gap-2">
                      {getCategoryIcon(cert.category)}
                      <span className="text-xs font-medium text-white px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-sm">
                        {cert.issuer}
                      </span>
                    </div>
                  </div>
                  
                  {/* Category Badge */}
                  <div className={`absolute top-4 right-4 z-20 px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(cert.category)}`}>
                    {cert.category || "Certification"}
                  </div>
                </div>
                
                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">
                      {cert.title}
                    </h3>
                    
                    {/* Additional Details */}
                    <div className="flex flex-wrap gap-2 mb-3">
                      {cert.score && (
                        <span className="text-sm font-medium bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 px-3 py-1 rounded-full">
                          Score: {cert.score}
                        </span>
                      )}
                      {cert.level && (
                        <span className="text-sm font-medium bg-purple-50 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300 px-3 py-1 rounded-full">
                          Level: {cert.level}
                        </span>
                      )}
                    </div>
                    
                    <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
                      {cert.description}
                    </p>
                  </div>
                  
                  {/* Date and Link */}
                  <div className="mt-auto">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
                        {cert.date}
                      </span>
                      <div className="flex items-center text-sm text-slate-500 dark:text-slate-400">
                        <Award className="w-4 h-4 mr-1" />
                        <span>Credential</span>
                      </div>
                    </div>
                    
                    <motion.a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex items-center justify-between w-full py-3 px-4 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-medium rounded-lg transition-all group/link shadow-md hover:shadow-lg"
                    >
                      <span>View Certificate</span>
                      <ChevronRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <div className="inline-flex items-center justify-center gap-4 text-slate-500 dark:text-slate-500 text-sm">
              <div className="w-16 h-px bg-gradient-to-r from-transparent to-slate-400"></div>
              <span className="flex items-center gap-2">
                <Star className="w-4 h-4 text-slate-500" />
                Continuously learning and expanding my expertise
                <Star className="w-4 h-4 text-slate-500" />
              </span>
              <div className="w-16 h-px bg-gradient-to-l from-transparent to-slate-400"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;