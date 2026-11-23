import { motion } from 'framer-motion';
import { Cpu, Layers, Server, Wrench, Database, Sparkles } from 'lucide-react';
import { usePortfolioData } from '../contexts/PortfolioContext';

const skillIcons = {
  React: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  JavaScript: 'https://cdn.worldvectorlogo.com/logos/javascript-1.svg',
  'HTML/CSS': 'https://cdn.worldvectorlogo.com/logos/html-1.svg',
  'Tailwind CSS': 'https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg',
  'Node.js': 'https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg',
  Express: 'https://cdn.worldvectorlogo.com/logos/express-109.svg',
  MongoDB: 'https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg',
  'REST APIs': 'https://cdn-icons-png.flaticon.com/512/4248/4248443.png',
  Git: 'https://cdn.worldvectorlogo.com/logos/git-icon.svg',
  GitHub: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
  Docker: 'https://cdn.worldvectorlogo.com/logos/docker.svg',
  AWS: 'https://cdn.worldvectorlogo.com/logos/aws-2.svg',
  Python: 'https://cdn.worldvectorlogo.com/logos/python-5.svg',
  Java: 'https://cdn.worldvectorlogo.com/logos/java-4.svg',
  SpringBoot: 'https://cdn.worldvectorlogo.com/logos/spring-3.svg',
  FastAPI: 'https://cdn.worldvectorlogo.com/logos/fastapi-1.svg',
  SQL: 'https://cdn-icons-png.flaticon.com/512/4248/4248443.png',
};

const skillCategories = [
  {
    title: 'Frontend Engineering',
    description: 'Modern component-driven web interfaces with fluid responsiveness and state management.',
    icon: Layers,
    skills: ['React', 'JavaScript', 'HTML/CSS', 'Tailwind CSS'],
    color: 'bg-blue-500/10 text-blue-600 dark:text-blue-400',
  },
  {
    title: 'Backend & APIs',
    description: 'High-throughput microservices, REST APIs, and event-driven architectures.',
    icon: Server,
    skills: ['Node.js', 'Express', 'Python', 'FastAPI', 'REST APIs'],
    color: 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400',
  },
  {
    title: 'Database & Cloud',
    description: 'Document and relational databases alongside cloud deployment infrastructure.',
    icon: Database,
    skills: ['MongoDB', 'SQL', 'AWS', 'Docker'],
    color: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400',
  },
  {
    title: 'Languages & Tools',
    description: 'Core programming languages, version control, and modern engineering workflows.',
    icon: Wrench,
    skills: ['Python', 'Java', 'Git', 'GitHub'],
    color: 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400',
  },
];

const Skills = () => {
  const { portfolio, loading } = usePortfolioData();

  if (loading) return null;

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-slate-50 dark:bg-[#0B0C10] devx-grid-bg transition-colors duration-300">
      {/* Background Glow */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.03, 0.08, 0.03] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-500 rounded-full blur-[150px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

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
            Technologies & Stack
          </h2>
          <p className="devx-section-desc">
            A comprehensive overview of programming languages, libraries, databases, and DevOps tools I use.
          </p>
        </motion.div>

        {/* 4-Card Categorized Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="devx-card p-7 flex flex-col justify-between group hover:border-blue-500/50 hover:shadow-xl transition-all"
            >
              <div>
                {/* Header */}
                <div className="flex items-center gap-4 mb-4">
                  <motion.div
                    whileHover={{ rotate: 12, scale: 1.1 }}
                    className={`w-12 h-12 rounded-2xl ${category.color} flex items-center justify-center shadow-sm`}
                  >
                    <category.icon className="w-6 h-6" />
                  </motion.div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {category.title}
                    </h3>
                    <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                      {category.skills.length} Core Technologies
                    </span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                  {category.description}
                </p>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-slate-100 dark:border-white/[0.06]">
                {category.skills.map((skillName) => (
                  <motion.div
                    key={skillName}
                    whileHover={{ y: -5, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex flex-col items-center justify-center p-3 rounded-xl bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/[0.06] hover:border-blue-500/40 hover:bg-white dark:hover:bg-white/[0.04] transition-all group/item cursor-pointer shadow-sm hover:shadow-md"
                  >
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center mb-2">
                      {skillIcons[skillName] ? (
                        <img
                          src={skillIcons[skillName]}
                          alt={skillName}
                          className="w-7 h-7 object-contain group-hover/item:scale-115 transition-transform duration-300"
                        />
                      ) : (
                        <Sparkles className="w-5 h-5 text-blue-500" />
                      )}
                    </div>
                    <span className="text-xs font-semibold text-slate-800 dark:text-slate-200 text-center leading-tight">
                      {skillName}
                    </span>
                  </motion.div>
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
