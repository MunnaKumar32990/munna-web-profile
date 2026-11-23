import { useState, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';
import {
  User, Briefcase, Calendar, MapPin, Mail, Phone,
  CheckCircle2, Sparkles, Terminal, Copy, Check
} from 'lucide-react';
import { usePortfolioData } from '../contexts/PortfolioContext';

const About = () => {
  const { portfolio, loading } = usePortfolioData();
  const personalData = portfolio || {};
  const [copied, setCopied] = useState(false);
  const [cursorBlink, setCursorBlink] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCursorBlink(prev => !prev);
    }, 530);
    return () => clearInterval(interval);
  }, []);

  if (loading) return null;

  const about = personalData.about || {};
  const timeline = about.timeline || [];

  const codeSnippet = `// developer.js
const developer = {
  name: "${personalData.name || 'Munna Kumar'}",
  role: "${personalData.role || 'FullStack Developer & AI Specialist'}",
  academics: "B.Tech in CSE @ ${personalData.university || 'KL University'} (CGPA: ${personalData.cgpa || '9.6'})",
  problemSolving: "${personalData.leetcodeCount || '200+'}+ LeetCode problems solved",
  coreStack: ["React", "Node.js", "Python", "AWS", "MongoDB"],
  cloudCertifications: [
    "AWS Cloud Practitioner",
    "Azure Fundamentals",
    "Oracle AI Associate",
    "MongoDB Associate Developer"
  ],
  passion: "Architecting scalable systems & intelligent AI solutions",
  status: "Available for new opportunities"
};`;

  const copyCode = () => {
    navigator.clipboard.writeText(codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-white dark:bg-[#0E1017] transition-colors duration-300">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <div className="devx-accent-bar" />
          <span className="text-xs font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400 font-bold block mb-2">
            My Story & Experience
          </span>
          <h2 className="devx-section-title">
            Engineering with <span className="text-gradient-brand">Passion & Rigor</span>
          </h2>
          <p className="devx-section-desc ml-0">
            From algorithmic problem-solving to cloud-native AI engineering, here is my journey and hands-on experience.
          </p>
        </motion.div>

        {/* 2-Column Layout */}
        <div className="grid lg:grid-cols-12 gap-10 items-start">

          {/* Left Column: Magic UI Border Beam Code Window */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6"
          >
            <div className="relative p-[1.5px] rounded-2xl bg-gradient-to-r from-blue-500/30 via-indigo-500/20 to-cyan-400/30 shadow-2xl hover:shadow-[0_0_30px_rgba(37,99,235,0.25)] transition-all duration-500">
              <div className="rounded-2xl overflow-hidden bg-[#090A0F] text-slate-300 border border-slate-800/80">
                {/* Window Header / Controls */}
                <div className="flex items-center justify-between px-4 py-3 bg-[#11131C] border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#FF5F56] inline-block hover:scale-110 transition-transform cursor-pointer" />
                    <span className="w-3 h-3 rounded-full bg-[#FFBD2E] inline-block hover:scale-110 transition-transform cursor-pointer" />
                    <span className="w-3 h-3 rounded-full bg-[#27C93F] inline-block hover:scale-110 transition-transform cursor-pointer" />
                    <span className="ml-3 text-xs font-mono text-slate-400 flex items-center gap-1.5 bg-[#090A0F] px-3 py-1 rounded-md border border-slate-800">
                      <Terminal className="w-3.5 h-3.5 text-blue-400" />
                      developer.js
                    </span>
                  </div>

                  <motion.button
                    onClick={copyCode}
                    whileTap={{ scale: 0.9 }}
                    className="text-xs text-slate-400 hover:text-white p-1.5 rounded-lg hover:bg-slate-800 transition-colors flex items-center gap-1"
                    title="Copy Code"
                  >
                    {copied ? (
                      <span className="flex items-center gap-1 text-emerald-400 font-mono text-[11px]">
                        <Check className="w-3.5 h-3.5" /> Copied!
                      </span>
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </motion.button>
                </div>

                {/* Code Content with blinking cursor */}
                <div className="p-5 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto select-text">
                  <div className="text-slate-500 italic mb-2">// {personalData.name || 'Munna Kumar'}'s Developer Profile</div>
                  <div>
                    <span className="text-purple-400">const </span>
                    <span className="text-blue-300">developer </span>
                    <span className="text-slate-400">= </span>
                    <span className="text-yellow-300">{'{'}</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-cyan-400">name</span>: <span className="text-emerald-300">"{personalData.name || 'Munna Kumar'}"</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-cyan-400">role</span>: <span className="text-emerald-300">"{personalData.role || 'FullStack Developer & AI Specialist'}"</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-cyan-400">academics</span>: <span className="text-emerald-300">"B.Tech in CSE @ {personalData.university || 'KL University'} (CGPA: {personalData.cgpa || '9.6'})"</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-cyan-400">problemSolving</span>: <span className="text-emerald-300">"{personalData.leetcodeCount || '200+'} LeetCode problems solved"</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-cyan-400">coreStack</span>: [
                    <span className="text-amber-300">"React"</span>, <span className="text-amber-300">"Node.js"</span>, <span className="text-amber-300">"Python"</span>, <span className="text-amber-300">"AWS"</span>, <span className="text-amber-300">"MongoDB"</span>
                    ],
                  </div>
                  <div className="pl-4">
                    <span className="text-cyan-400">certifications</span>: [
                    <span className="text-amber-300">"AWS"</span>, <span className="text-amber-300">"Azure"</span>, <span className="text-amber-300">"Oracle AI"</span>, <span className="text-amber-300">"MongoDB"</span>
                    ],
                  </div>
                  <div className="pl-4">
                    <span className="text-cyan-400">passion</span>: <span className="text-emerald-300">"Architecting scalable systems & AI solutions"</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-cyan-400">status</span>: <span className="text-blue-400">"Available for new opportunities"</span>
                    <span className={`inline-block w-2 h-4 ml-1 bg-blue-400 align-middle ${cursorBlink ? 'opacity-100' : 'opacity-0'}`} />
                  </div>
                  <div>
                    <span className="text-yellow-300">{'}'}</span>;
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Cards Below Code */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              <motion.div
                whileHover={{ y: -4, scale: 1.02 }}
                className="devx-card p-4 group cursor-default"
              >
                <div className="text-xs font-mono text-slate-500 uppercase">Degree & University</div>
                <div className="text-sm font-bold text-slate-900 dark:text-white mt-1 group-hover:text-blue-600 transition-colors">B.Tech in CSE</div>
                <div className="text-xs text-blue-600 dark:text-blue-400 font-semibold">{personalData.university || 'KL University'} ({personalData.cgpa || '9.6'} CGPA)</div>
              </motion.div>
              <motion.div
                whileHover={{ y: -4, scale: 1.02 }}
                className="devx-card p-4 group cursor-default"
              >
                <div className="text-xs font-mono text-slate-500 uppercase">Algorithmic Practice</div>
                <div className="text-sm font-bold text-slate-900 dark:text-white mt-1 group-hover:text-blue-600 transition-colors">{personalData.leetcodeCount || '200+'} LeetCode</div>
                <div className="text-xs text-blue-600 dark:text-blue-400 font-semibold">Strong Data Structures</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column: Experience Timeline with Animated Nodes */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="devx-card p-7 sm:p-8">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2.5">
                <Briefcase className="w-5 h-5 text-blue-600" />
                Internships & Practical Experience
              </h3>

              {/* Timeline container */}
              <div className="relative pl-6 space-y-8 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-[2px] before:bg-gradient-to-b before:from-blue-600 before:via-indigo-500 before:to-transparent">
                {timeline.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.12 }}
                    whileHover={{ x: 6 }}
                    className="relative group transition-all"
                  >
                    {/* Node Dot with Radar Pulse */}
                    <div className="absolute -left-[29px] top-1.5 w-3.5 h-3.5 rounded-full bg-white dark:bg-[#13151F] border-2 border-blue-600 group-hover:scale-125 group-hover:bg-blue-600 transition-all shadow-sm">
                      <span className="absolute inset-0 rounded-full bg-blue-500 animate-ping opacity-30" />
                    </div>

                    <div>
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold bg-blue-100 dark:bg-blue-500/10 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-500/20">
                        {item.year}
                      </span>
                      <h4 className="text-base font-bold text-slate-900 dark:text-white mt-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {item.title}
                      </h4>
                      <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default About;
