import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Award, BadgeCheck, BookOpen, ShieldCheck, Star, ChevronRight } from 'lucide-react';
import { usePortfolioData } from '../contexts/PortfolioContext';
import { personalData as fallbackData } from '../utils/data';

const certIcons = {
  development: <BookOpen className="w-5 h-5" style={{ color: '#8B5E3C' }} />,
  security:    <ShieldCheck className="w-5 h-5" style={{ color: '#c4875a' }} />,
  cloud:       <ShieldCheck className="w-5 h-5" style={{ color: '#a06840' }} />,
  language:    <BadgeCheck className="w-5 h-5" style={{ color: '#8B5E3C' }} />,
  ai:          <Award className="w-5 h-5" style={{ color: '#c4875a' }} />,
  'computer-science': <BookOpen className="w-5 h-5" style={{ color: '#a06840' }} />,
  default:     <BadgeCheck className="w-5 h-5" style={{ color: '#8B5E3C' }} />,
};

const certBadgeStyle = {
  development:       { background: 'rgba(139,94,60,0.12)', color: '#8B5E3C' },
  security:          { background: 'rgba(196,135,90,0.15)', color: '#c4875a' },
  cloud:             { background: 'rgba(160,104,64,0.12)', color: '#a06840' },
  language:          { background: 'rgba(139,94,60,0.10)', color: '#8B5E3C' },
  ai:                { background: 'rgba(196,135,90,0.12)', color: '#c4875a' },
  'computer-science':{ background: 'rgba(160,104,64,0.10)', color: '#a06840' },
  default:           { background: 'rgba(139,94,60,0.10)', color: '#8B5E3C' },
};

const getCertIcon  = (cat) => certIcons[(cat || '').toLowerCase()]   || certIcons.default;
const getCertBadge = (cat) => certBadgeStyle[(cat || '').toLowerCase()] || certBadgeStyle.default;

const Certifications = () => {
  const { portfolio } = usePortfolioData();
  const personalData = portfolio || fallbackData;
  const ref = useRef(null);
  const cardsRef = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  const cardsInView = useInView(cardsRef, { once: true, threshold: 0.05 });

  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #EADBC8 0%, #F5F5DC 50%, #FEFCF7 100%)' }}
      id="certifications"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'linear-gradient(rgba(139,94,60,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(139,94,60,0.04) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          className="text-center mb-16 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-8 h-px" style={{ background: '#EADBC8' }} />
            <Star className="w-5 h-5" style={{ color: '#c4875a' }} />
            <div className="w-8 h-px" style={{ background: '#EADBC8' }} />
          </div>
          <span className="section-subtitle block mb-2">Validated Credentials</span>
          <h2 className="section-title" style={{ color: '#3A2D28' }}>
            Professional Certifications
          </h2>
          <div className="w-16 h-1 mx-auto mt-4 rounded-full" style={{ background: 'linear-gradient(90deg, #8B5E3C, #c4875a)' }} />
          <p className="mt-4" style={{ color: '#6B5A4E' }}>
            Industry-recognized credentials demonstrating my skills across multiple domains.
          </p>
        </motion.div>

        {/* Certs Grid */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {(personalData.certifications || []).map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 50, scale: 0.93 }}
              animate={cardsInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ delay: index * 0.12, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 border overflow-hidden flex flex-col group"
              style={{ background: '#FEFCF7', borderColor: '#EADBC8' }}
            >
              {/* Image area */}
              <div
                className="relative h-52 overflow-hidden transition-all duration-500"
                style={{ background: 'linear-gradient(135deg, #F5F5DC, #EADBC8)' }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#3A2D28]/40 z-10" />

                <motion.img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-contain p-6 relative z-0"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.4 }}
                />

                {/* Issuer badge */}
                <div className="absolute bottom-3 left-4 z-20 flex items-center gap-2">
                  {getCertIcon(cert.category)}
                  <span className="text-xs font-semibold text-white bg-black/30 backdrop-blur-sm px-2.5 py-1 rounded-full">
                    {cert.issuer}
                  </span>
                </div>

                {/* Category badge */}
                <div
                  className="absolute top-3 right-3 z-20 px-2.5 py-0.5 rounded-full text-xs font-semibold capitalize"
                  style={getCertBadge(cert.category)}
                >
                  {cert.category || 'Certification'}
                </div>

                {/* Shimmer overlay */}
                <div
                  className="absolute inset-0 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.12) 50%, transparent 60%)' }}
                />
              </div>

              {/* Content */}
              <div className="p-5 flex-1 flex flex-col">
                <h3 className="text-base font-bold mb-1 leading-tight" style={{ color: '#3A2D28' }}>
                  {cert.title}
                </h3>

                <div className="flex justify-between items-center mt-3 mb-4">
                  <span className="text-sm font-medium" style={{ color: '#6B5A4E' }}>{cert.date}</span>
                  <div className="flex items-center text-xs gap-1" style={{ color: '#8B5E3C' }}>
                    <Award className="w-3.5 h-3.5" />
                    <span>Credential</span>
                  </div>
                </div>

                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto flex items-center justify-between w-full py-2.5 px-4 text-white font-medium rounded-xl transition-all shadow-md group/link"
                  style={{ background: 'linear-gradient(135deg, #8B5E3C, #c4875a)' }}
                >
                  <span className="text-sm">View Certificate</span>
                  <ChevronRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <motion.div
          className="text-center mt-14"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-3 text-sm" style={{ color: '#8B5E3C' }}>
            <div className="w-12 h-px" style={{ background: 'linear-gradient(90deg, transparent, #8B5E3C)' }} />
            <Star className="w-4 h-4" style={{ color: '#c4875a' }} />
            <span>Continuously expanding expertise</span>
            <Star className="w-4 h-4" style={{ color: '#c4875a' }} />
            <div className="w-12 h-px" style={{ background: 'linear-gradient(90deg, #8B5E3C, transparent)' }} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;