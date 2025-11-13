import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { usePortfolioData } from '../contexts/PortfolioContext';
import { personalData as fallbackData } from '../utils/data';
import { Globe, Mail, MapPin, Clock, Briefcase } from 'lucide-react';

const About = () => {
  const { portfolio, loading } = usePortfolioData();
  const personalData = portfolio || fallbackData;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 relative overflow-hidden" id="about">
      {/* Decorative elements */}
      <div className="absolute top-20 -right-20 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl dark:bg-blue-500/5"></div>
      <div className="absolute bottom-10 left-0 w-80 h-80 rounded-full bg-purple-500/10 blur-3xl dark:bg-purple-500/5"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <motion.span
              className="text-sm font-semibold tracking-wider text-blue-600 dark:text-blue-400 uppercase"
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ delay: 0.2 }}
            >
              Personal Profile
            </motion.span>
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mt-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.3 }}
            >
              About Me
            </motion.h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Profile Card & Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="space-y-8"
            >
              {/* Profile Card */}
              <motion.div 
                className="bg-white dark:bg-slate-800 rounded-3xl shadow-xl p-8 border border-slate-200 dark:border-slate-700"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center gap-6 mb-6">
                  <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-1 rounded-full">
                    <div className="bg-white dark:bg-slate-800 rounded-full p-1">
                      <img
                        src={personalData.profileImage}
                        alt={personalData.name}
                        className="w-24 h-24 rounded-full object-cover border-4 border-white/50 dark:border-slate-800/50"
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100">{personalData.name}</h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium">{personalData.role}</p>
                    <p className="text-slate-500 dark:text-slate-400 mt-1">{personalData.tagline}</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-slate-50 dark:bg-slate-900/50 rounded-xl">
                    <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-xl">
                      <MapPin className="text-blue-600 dark:text-blue-400 w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 dark:text-slate-400">Location</p>
                      <p className="font-medium text-slate-800 dark:text-slate-200">{personalData.location}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 bg-slate-50 dark:bg-slate-900/50 rounded-xl">
                    <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-xl">
                      <Mail className="text-purple-600 dark:text-purple-400 w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 dark:text-slate-400">Email</p>
                      <p className="font-medium text-slate-800 dark:text-slate-200">{personalData.email}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* About Me Card */}
              <motion.div 
                className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl shadow-xl overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                <div className="p-8 text-white">
                  <div className="flex items-center gap-3 mb-6">
                    <Globe className="w-8 h-8" />
                    <h3 className="text-xl font-bold">About Me</h3>
                  </div>
                  <p className="leading-relaxed text-blue-100">
                    {personalData.about?.description || ''}
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column - Experience */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="space-y-8"
            >
              {/* Experience Section */}
              <motion.div 
                className="bg-white dark:bg-slate-800 rounded-3xl shadow-xl p-8 border border-slate-200 dark:border-slate-700"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: 0.6 }}
              >
                <div className="flex items-center gap-3 mb-8">
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-xl">
                    <Briefcase className="text-blue-600 dark:text-blue-400 w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200">Professional Experience</h3>
                </div>
                
                <div className="relative">
                  {/* Timeline line */}
                  <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-blue-200 dark:bg-blue-900/50"></div>
                  
                  <div className="space-y-10 ml-10">
                    {(personalData.about?.timeline || []).map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ 
                          delay: 0.7 + index * 0.1, 
                          duration: 0.5 
                        }}
                        className="relative"
                      >
                        {/* Timeline dot */}
                        <div className="absolute -left-[34px] top-4 w-6 h-6 bg-blue-500 rounded-full border-4 border-white dark:border-slate-800 flex items-center justify-center">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                        
                        <div className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="bg-blue-500/10 dark:bg-blue-500/20 p-2 rounded-lg">
                              <Clock className="text-blue-600 dark:text-blue-400 w-4 h-4" />
                            </div>
                            <span className="text-xs font-semibold text-blue-600 bg-blue-100 dark:bg-blue-900/50 px-3 py-1 rounded-full">
                              {item.year}
                            </span>
                          </div>
                          <h4 className="font-bold text-xl text-slate-800 dark:text-slate-200 mb-2">{item.title}</h4>
                          <p className="text-slate-600 dark:text-slate-400">{item.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;