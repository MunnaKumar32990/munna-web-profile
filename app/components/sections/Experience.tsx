'use client';

import { motion } from 'framer-motion';
import { FaBriefcase } from 'react-icons/fa';
import { useState, useEffect } from 'react';

const experienceData = [
  {
    role: 'AWS AI/ML Intern',
    company: 'EduSkills (Virtual Internship)',
    year: '2024',
    details: [
      'Completed a virtual internship in AWS Artificial Intelligence and Machine Learning domain.',
      'Gained hands-on experience with AWS services such as S3, SageMaker, and Lambda.',
      'Worked on real-world ML projects including data preprocessing, model training, and deployment.',
      'Collaborated on cloud-based solutions and followed industry best practices in model lifecycle management.'
    ],
  },
  {
    role: 'Social Intern',
    company: 'K L E F Deemed to be University – Student Activity Center',
    year: '2023 - 2024',
    details: [
      'Successfully completed the Social Internship Program focused on community service and social impact.',
      'Demonstrated strong dedication, teamwork, and leadership in addressing social challenges.',
      'Recognized for valuable contributions to society and unwavering commitment to social responsibility.',
      'Awarded a certificate of excellence (UID: Y23SIC01625) for outstanding service.'
    ],
  }
];

const titleClassName = "text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent";

const Experience = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Return a loading state or null while client-side hydration is happening
  if (!mounted) {
    return (
      <section id="experience" className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className={titleClassName}>
              Experience
            </h2>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className={titleClassName}>
            Experience
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            My professional journey and internships
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experienceData.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="mb-12 last:mb-0"
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-blue-500">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    <FaBriefcase className="text-2xl text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                      {exp.role}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">{exp.company}</p>
                    <p className="text-blue-600 dark:text-blue-400 text-sm">{exp.year}</p>
                  </div>
                </div>
                <ul className="space-y-2 ml-4">
                  {exp.details.map((detail, detailIdx) => (
                    <li
                      key={detailIdx}
                      className="text-gray-600 dark:text-gray-300 flex items-start gap-2"
                    >
                      <span className="text-blue-500 mt-1.5">•</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 