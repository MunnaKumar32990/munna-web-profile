'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import clsx from 'clsx';

const personalDetails = [
  { label: 'Location', value: 'Bettiah, Bihar, India' },
  { label: 'Languages', value: 'English, Hindi' },
  { label: 'Age', value: '20' },
  { label: 'Work', value: 'Student / Developer' },
  { label: 'Freelance', value: 'Available' },
];

const detailsContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};
const detailItem = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="container mx-auto px-4"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden bg-gray-200 dark:bg-gray-800 shadow-lg flex items-center justify-center ring-4 ring-blue-400/30 dark:ring-blue-500/40 animate-float"
            >
              <Image
                src="/profile.png"
                alt="Your Name"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 40vw"
              />
              <div className="absolute inset-0 rounded-2xl pointer-events-none bg-gradient-to-br from-blue-400/10 via-purple-400/10 to-pink-400/10" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500">
                About Me
              </h2>
              <p className="text-gray-700 dark:text-gray-200 mb-4 text-lg">
                I am a passionate and creative full stack developer dedicated to building impactful digital experiences. With a strong foundation in both frontend and backend technologies, I strive to deliver clean, efficient, and user-friendly solutions that solve real-world problems.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                My journey in tech is driven by curiosity, continuous learning, and a desire to make a difference through code. I enjoy collaborating with diverse teams and embracing new challenges that push my skills to the next level.
              </p>
              <motion.div
                variants={detailsContainer}
                initial="hidden"
                animate="show"
                className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6"
              >
                {personalDetails.map((item, idx) => (
                  <motion.div
                    key={item.label}
                    variants={detailItem}
                    className="flex items-center"
                  >
                    <span className="font-semibold text-gray-800 dark:text-gray-100 w-28">{item.label}:</span>
                    <span className="ml-2 text-gray-600 dark:text-gray-300">{item.value}</span>
                  </motion.div>
                ))}
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="mb-6"
              >
                <a
                  href="/api/resume"
                  download="Munna_Kumar_Resume.pdf"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg shadow-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  Download Resume
                </a>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="italic text-blue-600 dark:text-blue-400 text-base mb-2"
              >
                "Building the future, one line of code at a time."
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;