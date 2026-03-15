import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Calendar, Award, BookOpen, Rocket, Lightbulb } from 'lucide-react';
import { usePortfolioData } from '../contexts/PortfolioContext';
import { personalData as fallbackData } from '../utils/data';

const educationIcons = [
  <GraduationCap className="w-5 h-5" style={{ color: '#8B5E3C' }} />,
  <BookOpen className="w-5 h-5" style={{ color: '#c4875a' }} />,
  <Rocket className="w-5 h-5" style={{ color: '#a06840' }} />,
  <Lightbulb className="w-5 h-5" style={{ color: '#8B5E3C' }} />,
  <Award className="w-5 h-5" style={{ color: '#c4875a' }} />,
];

const dotColors = [
  'linear-gradient(135deg, #8B5E3C, #c4875a)',
  'linear-gradient(135deg, #c4875a, #EADBC8)',
  'linear-gradient(135deg, #a06840, #c4875a)',
  'linear-gradient(135deg, #8B5E3C, #a06840)',
  'linear-gradient(135deg, #c4875a, #8B5E3C)',
];

const barColors = [
  'linear-gradient(90deg, #8B5E3C, #c4875a, #EADBC8)',
  'linear-gradient(90deg, #c4875a, #EADBC8, #F5F5DC)',
  'linear-gradient(90deg, #a06840, #c4875a, #EADBC8)',
  'linear-gradient(90deg, #8B5E3C, #a06840, #c4875a)',
  'linear-gradient(90deg, #c4875a, #8B5E3C, #a06840)',
];

const iconBgColors = [
  'rgba(139,94,60,0.12)',
  'rgba(196,135,90,0.15)',
  'rgba(160,104,64,0.12)',
  'rgba(139,94,60,0.10)',
  'rgba(196,135,90,0.12)',
];

const Education = () => {
  const { portfolio } = usePortfolioData();
  const personalData = portfolio || fallbackData;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  const educationData = personalData.education || [];

  return (
    <section
      ref={ref}
      className="py-24 relative overflow-hidden"
      style={{ background: '#FEFCF7' }}
      id="education"
    >
      {/* Subtle background grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'linear-gradient(rgba(139,94,60,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(139,94,60,0.04) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div
            className="inline-flex items-center justify-center w-14 h-14 mb-4 rounded-2xl"
            style={{ background: 'rgba(139,94,60,0.12)' }}
          >
            <GraduationCap className="w-7 h-7" style={{ color: '#8B5E3C' }} />
          </div>
          <span className="section-subtitle block mb-2">Academic Journey</span>
          <h2 className="section-title" style={{ color: '#3A2D28' }}>
            Education
          </h2>
          <div className="w-16 h-1 mx-auto mt-4 rounded-full" style={{ background: 'linear-gradient(90deg, #8B5E3C, #c4875a)' }} />
          <p className="mt-4 max-w-xl mx-auto" style={{ color: '#6B5A4E' }}>
            My academic journey and learning milestones that shaped my career
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="hidden md:block absolute left-7 top-0 h-full w-0.5"
            style={{ background: 'linear-gradient(to bottom, #8B5E3C, #c4875a, #EADBC8)' }}
          />

          <div className="space-y-8">
            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="relative"
              >
                {/* Dot */}
                <div
                  className="hidden md:flex absolute left-3.5 top-6 w-7 h-7 rounded-full items-center justify-center shadow-lg z-10"
                  style={{ background: dotColors[index % dotColors.length] }}
                >
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>

                <div className="md:ml-20">
                  <motion.div
                    className="rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border group"
                    style={{ background: '#FEFCF7', borderColor: '#EADBC8' }}
                    whileHover={{ y: -4, scale: 1.01 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  >
                    <div className="p-6 md:p-7">
                      {/* Year badge */}
                      <div className="inline-flex items-center gap-2 mb-4">
                        <Calendar className="w-3.5 h-3.5" style={{ color: '#8B5E3C' }} />
                        <span
                          className="text-xs font-bold px-3 py-1 rounded-full"
                          style={{ color: '#8B5E3C', background: 'rgba(139,94,60,0.12)' }}
                        >
                          {edu.year}
                        </span>
                      </div>

                      {/* Icon + Title */}
                      <div className="flex items-start gap-3 mb-3">
                        <div
                          className="p-2 rounded-xl flex-shrink-0"
                          style={{ background: iconBgColors[index % iconBgColors.length] }}
                        >
                          {educationIcons[index % educationIcons.length]}
                        </div>
                        <h3 className="text-xl font-bold leading-tight" style={{ color: '#3A2D28' }}>
                          {edu.title}
                        </h3>
                      </div>

                      {edu.institution && (
                        <p className="font-medium text-sm mb-3" style={{ color: '#8B5E3C' }}>
                          {edu.institution}
                        </p>
                      )}

                      <p className="text-sm leading-relaxed" style={{ color: '#6B5A4E' }}>
                        {edu.description}
                      </p>

                      {edu.gpa && (
                        <div className="inline-flex items-center gap-2 mt-4 text-sm font-semibold">
                          <Award className="w-4 h-4" style={{ color: '#c4875a' }} />
                          <span
                            className="px-3 py-1 rounded-full"
                            style={{ color: '#8B5E3C', background: 'rgba(196,135,90,0.15)' }}
                          >
                            GPA: {edu.gpa}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Color bar */}
                    <div className="h-1" style={{ background: barColors[index % barColors.length] }} />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Footer note */}
        <motion.div
          className="text-center mt-14"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.9, duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-3 text-sm" style={{ color: '#8B5E3C' }}>
            <div className="w-10 h-px" style={{ background: 'linear-gradient(90deg, transparent, #8B5E3C)' }} />
            <span className="font-medium">Lifelong Learning</span>
            <div className="w-10 h-px" style={{ background: 'linear-gradient(90deg, #8B5E3C, transparent)' }} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
