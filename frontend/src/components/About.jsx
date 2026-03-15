import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { usePortfolioData } from '../contexts/PortfolioContext';
import { personalData as fallbackData } from '../utils/data';
import { Globe, Mail, MapPin, Briefcase, Clock, User } from 'lucide-react';

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay, ease: 'easeOut' } },
});

const About = () => {
  const { portfolio } = usePortfolioData();
  const personalData = portfolio || fallbackData;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const inViewState = isInView ? 'visible' : 'hidden';

  return (
    <section
      className="py-20 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #F5F5DC 0%, #FEFCF7 50%, #EADBC8 100%)' }}
      id="about"
      ref={ref}
    >
      {/* Background decorations */}
      <div
        className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"
        style={{ background: 'rgba(196, 135, 90, 0.15)' }}
      />
      <div
        className="absolute bottom-0 left-0 w-[350px] h-[350px] rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 pointer-events-none"
        style={{ background: 'rgba(139, 94, 60, 0.10)' }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-14"
          variants={fadeUp(0)}
          initial="hidden"
          animate={inViewState}
        >
          <span className="section-subtitle">Personal Profile</span>
          <h2
            className="section-title mt-3"
            style={{
              background: 'linear-gradient(135deg, #8B5E3C, #c4875a)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            About Me
          </h2>
          <div
            className="w-16 h-1 mx-auto mt-4 rounded-full"
            style={{ background: 'linear-gradient(90deg, #8B5E3C, #c4875a)' }}
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-start max-w-6xl mx-auto">

          {/* Left Column */}
          <motion.div
            className="space-y-6"
            variants={fadeUp(0.2)}
            initial="hidden"
            animate={inViewState}
          >
            {/* Profile Card */}
            <motion.div
              className="card p-6 hover:shadow-xl"
              whileHover={{ y: -4 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <div className="flex items-center gap-5 mb-6">
                <div className="relative">
                  <div
                    className="absolute inset-0 rounded-full blur-md opacity-50"
                    style={{ background: 'linear-gradient(135deg, #8B5E3C, #c4875a)' }}
                  />
                  <div
                    className="relative p-0.5 rounded-full"
                    style={{ background: 'linear-gradient(135deg, #8B5E3C, #c4875a)' }}
                  >
                    <img
                      src={personalData.profileImage}
                      alt={personalData.name}
                      className="w-20 h-20 rounded-full object-cover border-2 border-white dark:border-[#2a1f1a]"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <User className="w-4 h-4" style={{ color: '#8B5E3C' }} />
                    <h3 className="text-lg font-bold" style={{ color: '#3A2D28' }}>{personalData.name}</h3>
                  </div>
                  <p className="font-medium text-sm" style={{ color: '#8B5E3C' }}>{personalData.role}</p>
                  <p className="text-sm mt-0.5 text-slate-500">{personalData.tagline}</p>
                </div>
              </div>

              <div className="space-y-3">
                <div
                  className="flex items-center gap-3 p-3 rounded-xl"
                  style={{ background: 'rgba(234, 219, 200, 0.5)' }}
                >
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(139, 94, 60, 0.15)' }}
                  >
                    <MapPin className="w-4 h-4" style={{ color: '#8B5E3C' }} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">Location</p>
                    <p className="font-semibold text-sm" style={{ color: '#3A2D28' }}>{personalData.location}</p>
                  </div>
                </div>

                <div
                  className="flex items-center gap-3 p-3 rounded-xl"
                  style={{ background: 'rgba(234, 219, 200, 0.5)' }}
                >
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(196, 135, 90, 0.2)' }}
                  >
                    <Mail className="w-4 h-4" style={{ color: '#c4875a' }} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">Email</p>
                    <p className="font-semibold text-sm break-all" style={{ color: '#3A2D28' }}>{personalData.email}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* About Description */}
            <motion.div
              className="relative rounded-3xl overflow-hidden shadow-xl"
              whileHover={{ y: -4 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(135deg, #8B5E3C 0%, #c4875a 60%, #EADBC8 100%)' }}
              />
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-2xl -mr-16 -mt-16" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full blur-xl -ml-10 -mb-10" />
              <div className="relative p-7 text-white">
                <div className="flex items-center gap-3 mb-4">
                  <motion.div
                    animate={{ rotate: [0, 15, -15, 0] }}
                    transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                  >
                    <Globe className="w-7 h-7" />
                  </motion.div>
                  <h3 className="text-lg font-bold">About Me</h3>
                </div>
                <p className="text-white/90 leading-relaxed text-sm">
                  {personalData.about?.description || ''}
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column – Compact Experience */}
          <motion.div
            className="space-y-6"
            variants={fadeUp(0.3)}
            initial="hidden"
            animate={inViewState}
          >
            <div className="card p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: 'rgba(139, 94, 60, 0.15)' }}
                >
                  <Briefcase className="w-5 h-5" style={{ color: '#8B5E3C' }} />
                </div>
                <h3 className="text-xl font-bold" style={{ color: '#3A2D28' }}>Professional Experience</h3>
              </div>

              {/* Compact vertical list */}
              <div className="space-y-4">
                {(personalData.about?.timeline || []).map((item, index) => (
                  <motion.div
                    key={index}
                    variants={fadeUp(0.4 + index * 0.1)}
                    initial="hidden"
                    animate={inViewState}
                  >
                    <motion.div
                      className="flex gap-4 p-4 rounded-2xl border transition-all duration-300 cursor-default"
                      style={{
                        background: 'rgba(245, 245, 220, 0.5)',
                        borderColor: 'rgba(234, 219, 200, 0.8)',
                      }}
                      whileHover={{
                        x: 4,
                        background: 'rgba(234, 219, 200, 0.7)',
                        borderColor: '#c4875a',
                      }}
                    >
                      {/* Year badge – left */}
                      <div className="flex-shrink-0 flex flex-col items-center gap-1 pt-0.5">
                        <div
                          className="w-8 h-8 rounded-full flex items-center justify-center shadow-md"
                          style={{ background: 'linear-gradient(135deg, #8B5E3C, #c4875a)' }}
                        >
                          <Clock className="w-3.5 h-3.5 text-white" />
                        </div>
                        <span
                          className="text-xs font-bold px-2 py-0.5 rounded-full"
                          style={{ background: 'rgba(139,94,60,0.15)', color: '#8B5E3C' }}
                        >
                          {item.year}
                        </span>
                      </div>

                      {/* Content – right */}
                      <div className="min-w-0">
                        <h4 className="font-bold text-sm leading-snug mb-1" style={{ color: '#3A2D28' }}>
                          {item.title}
                        </h4>
                        <p className="text-slate-600 text-xs leading-relaxed line-clamp-3">
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
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