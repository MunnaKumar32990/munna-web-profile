'use client';

import { motion } from 'framer-motion';
import { FaCertificate } from 'react-icons/fa';

const certificationsData = [
  {
    title: 'AWS Certified Solutions Architect – Associate',
    issuer: 'Amazon Web Services',
    year: '2025',
    link: 'https://aws.amazon.com/certification/certified-solutions-architect-associate/',
  },
  {
    title: 'Salesforce Associate in AI',
    issuer: 'Salesforce',
    year: '2024',
    link: 'https://www.salesforce.com/certification/salesforce-associate-in-ai/',
  },
  {
    title: 'NPTEL Programmming in JAVA',
    issuer: 'NPTEL',
    year: '2024',
    link: 'https://nptel.ac.in/courses/106/106/106106185/',
  },
  {
    title: 'NPTEL Programmming in Operating System Fundamentals',
    issuer: 'NPTEL',
    year: '2024',
    link: 'https://nptel.ac.in/courses/106/106/106106185/',
  },
  {
    title: 'Linguaskill English Test',
    issuer: 'Cambridge English',
    year: '2024',
    link: 'https://www.cambridgeenglish.org/test-your-english/linguaskill/',
  },
  {
    title: 'Microsoft Certified: Azure Administrator Associate',
    issuer: 'Microsoft',
    year: '2024',
    link: 'https://www.microsoft.com/en-us/learning/certification-overview.aspx',
  },
];

const Certifications = () => {
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
    <section id="certifications" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Certifications</h2>
          <p className="text-gray-600 dark:text-gray-300">
            My professional certifications
          </p>
        </motion.div>
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {certificationsData.map((cert, idx) => (
            <motion.div
              key={idx}
              variants={item}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 flex flex-col items-center hover:shadow-2xl transition-shadow border-t-4 border-yellow-400"
            >
              <FaCertificate className="text-4xl text-yellow-400 mb-3" />
              <h3 className="text-xl font-bold mb-2 text-blue-700 dark:text-blue-300 text-center">{cert.title}</h3>
              <p className="text-gray-700 dark:text-gray-200 mb-1 font-medium text-center">{cert.issuer}</p>
              <p className="text-gray-500 dark:text-gray-400 mb-2 text-center">{cert.year}</p>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline text-center"
              >
                View Certificate
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
