import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { usePortfolioData } from '../contexts/PortfolioContext';
import { personalData as fallbackData } from '../utils/data';

const skillIcons = {
  React: 'https://cdn.worldvectorlogo.com/logos/react-2.svg',
  JavaScript: 'https://cdn.worldvectorlogo.com/logos/javascript-1.svg',
  TypeScript: 'https://cdn.worldvectorlogo.com/logos/typescript.svg',
  'HTML/CSS': 'https://cdn.worldvectorlogo.com/logos/html-1.svg',
  'Tailwind CSS': 'https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg',
  'Node.js': 'https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg',
  Express: 'https://cdn.worldvectorlogo.com/logos/express-109.svg',
  MongoDB: 'https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg',
  'REST APIs': 'https://cdn-icons-png.flaticon.com/512/4248/4248443.png',
  Git: 'https://cdn.worldvectorlogo.com/logos/git-icon.svg',
  Webpack: 'https://cdn.worldvectorlogo.com/logos/webpack-icon.svg',
  Docker: 'https://cdn.worldvectorlogo.com/logos/docker.svg',
  AWS: 'https://cdn.worldvectorlogo.com/logos/aws-2.svg',
  Python: 'https://cdn.worldvectorlogo.com/logos/python-5.svg',
  Java: 'https://cdn.worldvectorlogo.com/logos/java-4.svg',
  SpringBoot: 'https://cdn.worldvectorlogo.com/logos/spring-3.svg',
  Flask: 'https://cdn.worldvectorlogo.com/logos/flask.svg',
  SQL: 'https://cdn-icons-png.flaticon.com/512/4248/4248443.png',
  PostgreSQL: 'https://cdn.worldvectorlogo.com/logos/postgresql.svg',
};

// Warm earthy category colors
const categoryColors = {
  frontend: {
    from: 'from-[#8B5E3C]', to: 'to-[#c4875a]',
    text: 'text-[#8B5E3C]',
    bg: 'bg-[#EADBC8]/60',
    border: 'border-[#EADBC8]',
  },
  backend: {
    from: 'from-[#6a5a3a]', to: 'to-[#a08050]',
    text: 'text-[#6a5a3a]',
    bg: 'bg-[#f0e8d8]/60',
    border: 'border-[#d4c4a0]',
  },
  database: {
    from: 'from-[#5a6a3a]', to: 'to-[#809050]',
    text: 'text-[#5a6a3a]',
    bg: 'bg-[#e8f0d8]/60',
    border: 'border-[#c0d4a0]',
  },
  tools: {
    from: 'from-[#7a5040]', to: 'to-[#c07060]',
    text: 'text-[#7a5040]',
    bg: 'bg-[#f8ece8]/60',
    border: 'border-[#e0c0b0]',
  },
};

// Fixed orbs using warm tones
const orbs = [
  { width: 200, height: 200, top: 10, left: 5, color: 'rgba(139,94,60,0.3)' },
  { width: 300, height: 300, top: 60, left: 80, color: 'rgba(196,135,90,0.25)' },
  { width: 150, height: 150, top: 30, left: 50, color: 'rgba(234,219,200,0.4)' },
  { width: 250, height: 250, top: 80, left: 20, color: 'rgba(139,94,60,0.2)' },
  { width: 180, height: 180, top: 5, left: 70, color: 'rgba(196,135,90,0.2)' },
  { width: 220, height: 220, top: 50, left: 35, color: 'rgba(234,219,200,0.3)' },
];

const SkillCard = ({ skill, index, colors, isInView }) => (
  <motion.div
    initial={{ opacity: 0, y: 30, scale: 0.9 }}
    animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
    transition={{ delay: index * 0.07, type: 'spring', stiffness: 200, damping: 20 }}
    whileHover={{ y: -8, scale: 1.05 }}
    className="group cursor-pointer"
  >
    <div
      className={`relative p-5 rounded-2xl shadow-sm border ${colors.border} hover:shadow-xl transition-all duration-300 overflow-hidden`}
      style={{ background: '#FEFCF7' }}
    >
      {/* Hover shimmer */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: 'linear-gradient(135deg, rgba(234,219,200,0.5), rgba(139,94,60,0.05))' }}
      />

      <div className="relative z-10 flex flex-col items-center text-center">
        <div
          className="w-14 h-14 rounded-xl flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-110"
          style={{ background: 'rgba(234,219,200,0.6)' }}
        >
          {skillIcons[skill.name] ? (
            <img src={skillIcons[skill.name]} alt={skill.name} className="w-9 h-9 object-contain" />
          ) : (
            <span className="text-2xl">✨</span>
          )}
        </div>

        <h3 className={`text-sm font-semibold ${colors.text} leading-tight`}>
          {skill.name}
        </h3>

        {skill.level && (
          <div className="w-full mt-2.5">
            <div className="h-1.5 rounded-full overflow-hidden" style={{ background: '#EADBC8' }}>
              <motion.div
                className={`h-full bg-gradient-to-r ${colors.from} ${colors.to} rounded-full`}
                initial={{ width: 0 }}
                animate={isInView ? { width: `${skill.level}%` } : {}}
                transition={{ delay: index * 0.07 + 0.3, duration: 0.8, ease: 'easeOut' }}
              />
            </div>
            <span className={`text-xs font-medium ${colors.text} mt-1 block`}>{skill.level}%</span>
          </div>
        )}
      </div>

      {/* Bottom accent bar */}
      <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r ${colors.from} ${colors.to} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left w-full`} />
    </div>
  </motion.div>
);

const Skills = () => {
  const { portfolio } = usePortfolioData();
  const personalData = portfolio || fallbackData;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.05 });

  const updatedSkills = {
    ...(personalData.skills || {}),
    backend: [
      ...(personalData.skills?.backend || []),
      { name: 'SpringBoot' },
      { name: 'Flask' },
    ],
    database: [
      { name: 'SQL' },
      { name: 'PostgreSQL' },
      { name: 'MongoDB' },
    ],
  };

  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #F5F5DC 0%, #FEFCF7 50%, #EADBC8 100%)' }}
      id="skills"
      ref={ref}
    >
      {/* Fixed floating orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {orbs.map((orb, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full opacity-30"
            style={{
              width: orb.width,
              height: orb.height,
              top: `${orb.top}%`,
              left: `${orb.left}%`,
              background: `radial-gradient(circle, ${orb.color}, transparent)`,
            }}
            animate={{ x: [0, i % 2 === 0 ? 30 : -30, 0], y: [0, i % 2 === 0 ? -20 : 20, 0] }}
            transition={{ duration: 15 + i * 3, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-14 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="section-subtitle">Technical Expertise</span>
          <h2 className="section-title mt-2" style={{ color: '#3A2D28' }}>
            My{' '}
            <span style={{ background: 'linear-gradient(135deg, #8B5E3C, #c4875a)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Skills
            </span>
          </h2>
          <div className="w-16 h-1 mx-auto mt-4 rounded-full" style={{ background: 'linear-gradient(90deg, #8B5E3C, #c4875a)' }} />
          <p className="mt-4 leading-relaxed" style={{ color: '#6B5A4E' }}>
            A showcase of my technical expertise — always learning, adapting, and building clean solutions.
          </p>
        </motion.div>

        {/* Skills by Category */}
        <div className="space-y-14">
          {Object.entries(updatedSkills).map(([category, skills], catIdx) => {
            const colors = categoryColors[category] || categoryColors.tools;
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 + catIdx * 0.15, duration: 0.6 }}
              >
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`px-4 py-1.5 rounded-full text-sm font-bold capitalize ${colors.bg} ${colors.text} border ${colors.border}`}>
                    {category}
                  </div>
                  <div className={`flex-1 h-px bg-gradient-to-r ${colors.from} ${colors.to} opacity-40`} />
                  <span className="text-sm" style={{ color: '#8B5E3C' }}>{skills.length} skills</span>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {skills.map((skill, i) => (
                    <SkillCard key={skill.name} skill={skill} index={i} colors={colors} isInView={isInView} />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Footer tagline */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-4 text-sm" style={{ color: '#8B5E3C' }}>
            <div className="w-16 h-px" style={{ background: 'linear-gradient(90deg, transparent, #8B5E3C)' }} />
            <span className="font-medium">Always learning and growing</span>
            <div className="w-16 h-px" style={{ background: 'linear-gradient(90deg, #8B5E3C, transparent)' }} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
