import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar, BookOpen, Sparkles } from 'lucide-react';
import { usePortfolioData } from '../contexts/PortfolioContext';

const Education = () => {
  const { portfolio, loading } = usePortfolioData();
  const personalData = portfolio || {};

  if (loading) return null;

  const educationList = personalData.education || [];

  return (
    <section id="education" className="py-24 relative overflow-hidden bg-white dark:bg-[#0E1017] transition-colors duration-300">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-10 w-80 h-80 bg-blue-500/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="devx-accent-bar mx-auto" />
          <h2 className="devx-section-title">
            Academic Background
          </h2>
          <p className="devx-section-desc">
            Formal engineering foundations and academic achievements shaping my technical rigor.
          </p>
        </motion.div>

        {/* Education Cards Stack */}
        <div className="space-y-6">
          {educationList.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4, scale: 1.01 }}
              className="devx-card p-6 sm:p-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 group hover:border-blue-500/40 hover:shadow-xl transition-all"
            >
              <div className="flex items-start sm:items-center gap-5">
                <motion.div
                  whileHover={{ rotate: 12, scale: 1.1 }}
                  className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-600 dark:text-blue-400 flex-shrink-0"
                >
                  <GraduationCap className="w-6 h-6" />
                </motion.div>
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 text-blue-700 dark:text-blue-300 font-semibold">
                      {edu.year}
                    </span>
                    {edu.title.includes('Bachelor') && (
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 text-emerald-700 dark:text-emerald-400 font-bold">
                        CGPA {personalData.cgpa || '9.6'}
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {edu.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mt-1 max-w-2xl">
                    {edu.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Education;
