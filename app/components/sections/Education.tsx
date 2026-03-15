'use client';

import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';

const educationData = [
  {
    degree: 'Bachelor of Technology in Computer Science',
    institution: 'Koneru Lakshmaiah Education Foundation , Vijayawada',
    year: '2023 - 2027',
    details: 'Specialized in Full Stack Web Development and Artificial Intelligence.',
  },
  {
    degree: 'Higher Secondary Certificate (HSC)',
    institution: 'Baidnath high school laxmipur , bettiah',
    year: '2020 - 2022',
    details: 'Major in Science (PCM). Scored 81% overall.',
  },

{
  degree: 'Secondary School Certificate (SSC)',
  institution: 'Notre Dame Public School, bettiah',
  year: '2008 - 2020',
  details: 'Major in Science (PCM). Scored 76% overall.',
}

];

const Education = () => {
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
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Education</h2>
          <p className="text-gray-600 dark:text-gray-300">
            My academic background
          </p>
        </motion.div>
        <div className="relative max-w-2xl mx-auto">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200 dark:bg-blue-900/40 rounded"></div>
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="space-y-12"
          >
            {educationData.map((edu, idx) => (
              <motion.div
                key={idx}
                variants={item}
                className={`relative bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 border-l-4 ${idx % 2 === 0 ? 'border-blue-500 ml-0 md:ml-12' : 'border-green-500 ml-0 md:mr-12'} hover:shadow-2xl transition-shadow`}
                style={{ maxWidth: '90%', marginLeft: idx % 2 === 0 ? 'auto' : undefined, marginRight: idx % 2 !== 0 ? 'auto' : undefined }}
              >
                <div className="flex items-center mb-2">
                  <FaGraduationCap className="text-2xl text-blue-500 mr-3" />
                  <h3 className="text-xl font-bold text-blue-700 dark:text-blue-300 mb-0">{edu.degree}</h3>
                </div>
                <p className="text-gray-700 dark:text-gray-200 font-medium mb-1">{edu.institution}</p>
                <p className="text-gray-500 dark:text-gray-400 mb-2">{edu.year}</p>
                <p className="text-gray-600 dark:text-gray-300">{edu.details}</p>
                <span className="absolute left-1/2 top-4 transform -translate-x-1/2 w-5 h-5 bg-blue-500 dark:bg-blue-400 rounded-full border-4 border-white dark:border-gray-800 z-10"></span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
