'use client';

import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { useState,useEffect } from 'react';
import { FaDownload } from 'react-icons/fa';

// Dynamically import PDFViewer to avoid SSR issues
const PDFViewer = dynamic(() => import('../PDFViewer'), {
  ssr: false,
  loading: () => (
    <div className="flex justify-center items-center min-h-[400px]">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
    </div>
  ),
});

const Resume = () => {
  const [mounted, setMounted] = useState(false);
  const pdfUrl = '/Munna_Kumar_Resume.pdf'; // Make sure to add your PDF file in the public folder

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section id="resume" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Resume
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg mb-8">
            View or download my resume to learn more about my skills and experience.
          </p>
          
          <a
            href={pdfUrl}
            download="Munna_Kumar_Resume.pdf"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors mb-12"
          >
            <FaDownload className="text-xl" />
            <span className="font-medium">Download Resume</span>
          </a>
        </motion.div>

        <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-4">
          <PDFViewer pdfUrl={pdfUrl} />
        </div>
      </div>
    </section>
  );
};

export default Resume; 