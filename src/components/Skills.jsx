import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { usePortfolioData } from '../contexts/PortfolioContext';
import { personalData as fallbackData } from "../utils/data";

// Category icons
const categoryImages = {
  frontend: "https://cdn-icons-png.flaticon.com/512/1055/1055666.png",
  backend: "https://cdn-icons-png.flaticon.com/512/2721/2721287.png",
  tools: "https://cdn-icons-png.flaticon.com/512/3067/3067585.png",
  design: "https://cdn-icons-png.flaticon.com/512/3242/3242257.png",
  database: "https://cdn-icons-png.flaticon.com/512/4299/4299856.png",
  devops: "https://cdn-icons-png.flaticon.com/512/4299/4299904.png"
};

// Skill icons (logos)
const skillIcons = {
  React: "https://cdn.worldvectorlogo.com/logos/react-2.svg",
  JavaScript: "https://cdn.worldvectorlogo.com/logos/javascript-1.svg",
  TypeScript: "https://cdn.worldvectorlogo.com/logos/typescript.svg",
  HTML: "https://cdn.worldvectorlogo.com/logos/html-1.svg",
  CSS: "https://cdn.worldvectorlogo.com/logos/css-3.svg",
  Tailwind: "https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg",
  Node: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg",
  Python: "https://cdn.worldvectorlogo.com/logos/python-5.svg",
  Java: "https://cdn.worldvectorlogo.com/logos/java-4.svg",
  SpringBoot: "https://cdn.worldvectorlogo.com/logos/spring-3.svg",
  Flask: "https://cdn.worldvectorlogo.com/logos/flask.svg",
  MongoDB: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg",
  MySQL: "https://cdn.worldvectorlogo.com/logos/mysql-6.svg",
  PostgreSQL: "https://cdn.worldvectorlogo.com/logos/postgresql.svg",
  SQL: "https://cdn-icons-png.flaticon.com/512/4248/4248443.png",
  Git: "https://cdn.worldvectorlogo.com/logos/git-icon.svg",
  Docker: "https://cdn.worldvectorlogo.com/logos/docker.svg",
  AWS: "https://cdn.worldvectorlogo.com/logos/aws-2.svg",
  Figma: "https://cdn.worldvectorlogo.com/logos/figma-1.svg",
  Photoshop: "https://cdn.worldvectorlogo.com/logos/adobe-photoshop-2.svg"
};

// Skill Card (animated)
const SkillCard = ({ skill, index, categoryDelay }) => (
  <motion.div
    initial={{ opacity: 0, y: 30, scale: 0.9 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    transition={{
      delay: categoryDelay + index * 0.1,
      type: "spring",
      stiffness: 200,
      damping: 20
    }}
    whileHover={{
      y: -8,
      scale: 1.05,
      transition: { type: "spring", stiffness: 400, damping: 25 }
    }}
    className="group cursor-pointer"
  >
    <div className="relative bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-md border border-slate-200/50 dark:border-slate-700/50 hover:border-indigo-400 dark:hover:border-indigo-600 transition-all duration-300 overflow-hidden">
      {/* Subtle hover background */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-gradient-to-br from-indigo-400/30 to-purple-400/10" />

      {/* Skill Icon */}
      <div className="relative z-10 flex flex-col items-center text-center">
        <div className="w-16 h-16 rounded-xl flex items-center justify-center bg-slate-50 dark:bg-slate-700/30 mb-4 transition-transform duration-300 group-hover:scale-110">
          {skillIcons[skill.name] ? (
            <img
              src={skillIcons[skill.name]}
              alt={skill.name}
              className="w-10 h-10 object-contain"
            />
          ) : (
            <span className="text-2xl">✨</span>
          )}
        </div>

        <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
          {skill.name}
        </h3>
      </div>

      {/* Animated border bar */}
      <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
    </div>
  </motion.div>
);

const Skills = () => {
  const { portfolio, loading } = usePortfolioData();
  const personalData = portfolio || fallbackData;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  // ✅ Extended backend + database categories
  const updatedSkills = {
    ...(personalData.skills || {}),
    backend: [
      ...(personalData.skills?.backend || []),
      { name: "SpringBoot" },
      { name: "Flask" }
    ],
    database: [
      { name: "SQL" },
      { name: "PostgreSQL" },
      { name: "MongoDB" }
    ]
  };

  return (
    <section
      className="py-20 relative overflow-hidden min-h-screen"
      style={{
        background: `
          radial-gradient(circle at 20% 20%, rgba(120,119,198,0.08) 0%, transparent 40%),
          radial-gradient(circle at 80% 80%, rgba(168,85,247,0.08) 0%, transparent 40%),
          linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%)
        `
      }}
      id="skills"
      ref={ref}
    >
      {/* Floating Orbs Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full opacity-20"
            style={{
              width: `${Math.random() * 220 + 120}px`,
              height: `${Math.random() * 220 + 120}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              background: `linear-gradient(135deg, ${
                ["#a5b4fc", "#c4b5fd", "#fbcfe8", "#e9d5ff"][
                  Math.floor(Math.random() * 4)
                ]
              }60, transparent)`
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              rotate: [0, 360]
            }}
            transition={{
              duration: 25 + Math.random() * 20,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear"
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-slate-800 dark:text-slate-200">My </span>
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            A showcase of my technical expertise and tools I work with — always
            learning, adapting, and building clean solutions.
          </p>
        </motion.div>

        {/* Skills by Category */}
        <div className="space-y-16">
          {Object.entries(updatedSkills).map(([category, skills], categoryIndex) => {
            const categoryDelay = 0.3 + categoryIndex * 0.2;

            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ delay: categoryDelay, duration: 0.6 }}
                className="relative"
              >
                {/* Category Header */}
                <div className="flex items-center mb-8">
                  {categoryImages[category] && (
                    <div className="w-14 h-14 rounded-xl bg-slate-100 dark:bg-slate-700/30 flex items-center justify-center p-2 mr-4">
                      <img
                        src={categoryImages[category]}
                        alt={category}
                        className="w-8 h-8 object-contain"
                      />
                    </div>
                  )}
                  <h3 className="text-3xl font-bold text-slate-800 dark:text-slate-200 capitalize">
                    {category}
                  </h3>
                  <div className="flex-1 h-px bg-gradient-to-r from-slate-300 to-transparent dark:from-slate-600 ml-6" />
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                  {skills.map((skill, index) => (
                    <SkillCard
                      key={skill.name}
                      skill={skill}
                      index={index}
                      categoryDelay={categoryDelay}
                    />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Footer */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 1.5, duration: 0.6 }}
        >
          <div className="inline-flex items-center justify-center gap-4 text-slate-500 dark:text-slate-400">
            <motion.div
              className="w-16 h-px bg-gradient-to-r from-transparent to-indigo-400"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ delay: 1.7, duration: 0.8 }}
            />
            <span className="text-sm font-medium">
              Always learning and growing
            </span>
            <motion.div
              className="w-16 h-px bg-gradient-to-l from-transparent to-purple-400"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ delay: 1.7, duration: 0.8 }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
