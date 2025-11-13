import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { GraduationCap, Calendar, Award, BookOpen, Rocket, Lightbulb } from "lucide-react";
import { usePortfolioData } from '../contexts/PortfolioContext';
import { personalData as fallbackData } from "../utils/data";

const Education = () => {
  const { portfolio, loading } = usePortfolioData();
  const personalData = portfolio || fallbackData;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  // Use education data from personalData
  const educationData = personalData.education || [];

  // Icons to rotate for each entry
  const educationIcons = [
    <GraduationCap className="w-6 h-6 text-blue-500" />,
    <BookOpen className="w-6 h-6 text-emerald-500" />,
    <Rocket className="w-6 h-6 text-amber-500" />,
    <Lightbulb className="w-6 h-6 text-purple-500" />,
    <Award className="w-6 h-6 text-rose-500" />
  ];

  return (
    <section 
      ref={ref} 
      className="min-h-screen py-16 px-4 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900"
      id="education"
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center mb-4">
            <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full">
              <GraduationCap className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800 dark:text-white">
            Education
          </h2>
          
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            My academic journey and learning milestones that shaped my career
          </p>
        </motion.div>

        {/* Education Timeline */}
        <div className="relative">
          <div className="hidden md:block absolute left-8 top-0 h-full w-0.5 bg-gradient-to-b from-blue-200 to-purple-200 dark:from-blue-800 dark:to-purple-800"></div>
          
          <div className="space-y-8">
            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="relative"
              >
                <div className="hidden md:block absolute left-6 top-6 w-4 h-4 bg-blue-500 rounded-full border-4 border-white dark:border-slate-800 shadow-lg"></div>
                
                <div className="md:ml-20 bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-slate-700">
                  <div className="p-6 md:p-8">
                    {/* Year Badge */}
                    <div className="inline-flex items-center gap-2 mb-4">
                      <Calendar className="w-4 h-4 text-blue-500" />
                      <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-3 py-1 rounded-full">
                        {edu.year}
                      </span>
                    </div>
                    
                    {/* Icon + Title */}
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                        {educationIcons[index % educationIcons.length]}
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white">
                        {edu.title}
                      </h3>
                    </div>

                    {edu.institution && (
                      <p className="text-blue-600 dark:text-blue-400 font-medium mb-4">
                        {edu.institution}
                      </p>
                    )}
                    
                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                      {edu.description}
                    </p>
                    
                    {/* GPA Badge */}
                    {edu.gpa && (
                      <div className="inline-flex items-center gap-2 text-sm font-medium">
                        <Award className="w-4 h-4 text-amber-500" />
                        <span className="text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/30 px-3 py-1 rounded-full">
                          GPA: {edu.gpa}
                        </span>
                      </div>
                    )}
                  </div>
                  
                  <div className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Footer */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <div className="inline-flex items-center justify-center gap-3 text-gray-500 dark:text-gray-400">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-blue-300"></div>
            <span className="text-sm font-medium">Lifelong Learning</span>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-blue-300"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
