'use client';

import { motion } from 'framer-motion';
import { FaLaptopCode, FaSearch, FaRocket, FaLightbulb } from 'react-icons/fa';

const servicesData = [
  {
    icon: <FaLaptopCode className="text-4xl text-blue-500 mb-4" />,
    title: 'Web Design',
    description: 'Creating responsive and user-friendly web interfaces with a focus on UI aesthetics and functionality.'
  },
  {
    icon: <FaSearch className="text-4xl text-green-500 mb-4" />,
    title: 'SEO',
    description: 'Optimizing websites for search engines to improve visibility, rankings, and drive organic traffic.'
  },
  {
    icon: <FaRocket className="text-4xl text-purple-500 mb-4" />,
    title: 'Startup Development',
    description: 'Building innovative solutions in a startup environment, from concept to execution with agility and creativity.'
  },
  {
    icon: <FaLightbulb className="text-4xl text-yellow-500 mb-4" />,
    title: 'Innovative Solutions',
    description: 'Developing cutting-edge solutions to address real-world challenges and enhance user experiences.'
  },
];

const Services = () => {
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
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Services</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            What I can do for you: a quick look at my core services and areas of expertise.
          </p>
        </motion.div>
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto"
        >
          {servicesData.map((service, idx) => (
            <motion.div
              key={idx}
              variants={item}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 flex flex-col items-center hover:shadow-2xl transition-shadow border-t-4 border-blue-100 dark:border-blue-900"
            >
              {service.icon}
              <h3 className="text-xl font-bold mb-2 text-center">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services; 