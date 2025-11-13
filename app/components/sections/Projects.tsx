// components/sections/Projects.tsx
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { FaGithub, FaExternalLinkAlt, FaCheckCircle } from 'react-icons/fa';

const projects = [
  {
    title: 'Chat App',
    description: 'A full-stack chat application built with Next.js, Node.js, and MongoDB. Features include user authentication, chat rooms, and real-time messaging.',
    image: '/chat-app.png',
    backendFeatures: [
      'JWT authentication & session management',
      'RESTful API with Express.js',
      'Real-time messaging with Socket.io',
      'MongoDB for chat and user data storage',
    ],
    tags: ['Next.js', 'Node.js', 'MongoDB', 'Socket.io'],
    github: 'https://github.com/MunnaKumar32990/Chat-App',
    demo: 'https://chatapp-demo.vercel.app',
  },
  {
    title: 'AI Resume Builder',
    description: 'A full-stack AI resume builder application built with Next.js, Node.js, and MongoDB. Features include user authentication, resume generation, and real-time messaging.',
    image: '/ai-resume.png',
    backendFeatures: [
      'User authentication & authorization',
      'RESTful API for resume data',
      'AI-powered resume generation (OpenAI API)',
      'MongoDB for user and resume storage',
    ],
    tags: ['Next.js', 'Node.js', 'MongoDB', 'OpenAI'],
    github: 'https://github.com/MunnaKumar32990/AI-Resume-Builder',
    demo: 'https://ai-resume-builder-demo.vercel.app',
  },
  {
    title: 'Employee Management System',
    description: 'A full-stack employee management system built with Next.js, Node.js, and MongoDB. Features include user authentication, employee management, and real-time messaging.',
    image: '/employee-management.png',
    backendFeatures: [
      'Role-based access control',
      'RESTful API for employee CRUD operations',
      'Real-time notifications with Socket.io',
      'MongoDB for employee and user data',
    ],
    tags: ['Next.js', 'Node.js', 'MongoDB', 'Socket.io'],
    github: 'https://github.com/MunnaKumar32990/EmployeeManagementSystem',
    demo: 'https://employee-management-system-demo.vercel.app',
  },
];

const Projects = () => {
  const [mounted, setMounted] = useState(false);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  // Handle hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
            Here are some of my recent projects that showcase my skills and experience in full-stack development.
          </p>
        </motion.div>

        <div className="space-y-24 max-w-7xl mx-auto">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden group"
              onMouseEnter={() => setHoveredProject(idx)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="grid lg:grid-cols-2 gap-8 items-center p-8">
                <div className="relative h-[300px] lg:h-[400px] rounded-xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-shadow duration-300">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-contain bg-gray-100 dark:bg-gray-700"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority={idx === 0}
                  />
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-3xl font-bold mb-4 text-blue-600 dark:text-blue-400">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-xl mb-3 text-gray-800 dark:text-gray-200">
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {project.backendFeatures.map((feature, fidx) => (
                        <li key={fidx} className="flex items-start gap-2 text-gray-600 dark:text-gray-300">
                          <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tidx) => (
                      <span
                        key={tidx}
                        className="px-4 py-1.5 bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-6 pt-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gray-800 dark:bg-gray-700 text-white rounded-lg hover:bg-blue-600 dark:hover:bg-blue-500 transition-all duration-300 transform hover:scale-105"
                    >
                      <FaGithub className="text-2xl" />
                      <span className="font-medium">View Code</span>
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-blue-600 dark:bg-blue-500 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-all duration-300 transform hover:scale-105"
                    >
                      <FaExternalLinkAlt className="text-xl" />
                      <span className="font-medium">Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;