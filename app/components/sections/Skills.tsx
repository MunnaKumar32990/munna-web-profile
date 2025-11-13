// components/sections/Skills.tsx
'use client';

import { motion } from 'framer-motion';
import { FaCode, FaServer, FaTools } from 'react-icons/fa';

const skillsData = {
  frontend: [
    { name: 'React.js', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'Next.js', level: 85 },
    { name: 'Tailwind CSS', level: 90 },
    { name: 'HTML/CSS', level: 95 },
  ],
  backend: [
    { name: 'Node.js', level: 85 },
    { name: 'Express.js', level: 85 },
    { name: 'MongoDB', level: 80 },
    { name: 'RESTful APIs', level: 90 },
    { name: 'GraphQL', level: 75 },
  ],
  tools: [
    { name: 'Git', level: 90 },
    { name: 'Docker', level: 75 },
    { name: 'AWS', level: 70 },
    { name: 'Jest', level: 80 },
    { name: 'CI/CD', level: 75 },
  ],
};

const SkillBar = ({ name, level }: { name: string; level: number }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{name}</span>
        <span className="text-sm text-gray-500 dark:text-gray-400">{level}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
        <motion.div
          className="bg-gradient-to-r from-blue-500 to-blue-600 h-2.5 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${level}%` }}
          transition={{ duration: 1, delay: 0.2 }}
        />
      </div>
    </div>
  );
};

const Skills = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A quick overview of my technical toolbox, from frontend frameworks to backend systems and essential developer tools. I love learning new technologies and applying them to real-world projects.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          <motion.div
            variants={item}
            className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow border-t-4 border-blue-500 flex flex-col items-center"
          >
            <FaCode className="text-4xl text-blue-500 mb-2" />
            <h3 className="text-xl font-bold mb-4 text-center">Frontend</h3>
            {skillsData.frontend.map((skill) => (
              <SkillBar key={skill.name} {...skill} />
            ))}
          </motion.div>

          <motion.div
            variants={item}
            className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow border-t-4 border-green-500 flex flex-col items-center"
          >
            <FaServer className="text-4xl text-green-500 mb-2" />
            <h3 className="text-xl font-bold mb-4 text-center">Backend</h3>
            {skillsData.backend.map((skill) => (
              <SkillBar key={skill.name} {...skill} />
            ))}
          </motion.div>

          <motion.div
            variants={item}
            className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow border-t-4 border-purple-500 flex flex-col items-center"
          >
            <FaTools className="text-4xl text-purple-500 mb-2" />
            <h3 className="text-xl font-bold mb-4 text-center">Tools & Technologies</h3>
            {skillsData.tools.map((skill) => (
              <SkillBar key={skill.name} {...skill} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;