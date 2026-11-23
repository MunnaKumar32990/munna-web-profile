import { motion } from 'framer-motion';
import { Award, ExternalLink, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { usePortfolioData } from '../contexts/PortfolioContext';

const Certifications = () => {
  const { portfolio, loading } = usePortfolioData();
  const personalData = portfolio || {};

  if (loading) return null;

  const certs = personalData.certifications || [];

  return (
    <section id="certifications" className="py-24 relative overflow-hidden bg-slate-50 dark:bg-[#0B0C10] devx-grid-bg transition-colors duration-300">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="devx-accent-bar mx-auto" />
          <h2 className="devx-section-title">
            Certifications & Credentials
          </h2>
          <p className="devx-section-desc">
            Globally recognized industry certifications validating my cloud, AI, and software engineering competence.
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certs.map((cert, idx) => (
            <motion.div
              key={cert.id || idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.06 }}
              whileHover={{ y: -7 }}
              className="devx-card p-6 flex flex-col justify-between group hover:border-blue-500/50 hover:shadow-xl transition-all"
            >
              <div>
                {/* Top preview / image */}
                <div className="h-28 rounded-xl bg-slate-100 dark:bg-[#0B0C10] border border-slate-200 dark:border-white/[0.06] p-4 flex items-center justify-center mb-5 group-hover:border-blue-500/40 transition-colors relative overflow-hidden">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="max-h-full max-w-full object-contain filter group-hover:scale-115 transition-transform duration-500 ease-out relative z-10"
                  />
                </div>

                {/* Metadata */}
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-[11px] font-mono text-blue-600 dark:text-blue-400 uppercase tracking-wider font-bold">
                    {cert.issuer}
                  </span>
                  <span className="text-[11px] font-mono text-slate-500">
                    {cert.date}
                  </span>
                </div>

                <h3 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2 mb-4">
                  {cert.title}
                </h3>
              </div>

              {/* Verify Link */}
              <div className="pt-4 border-t border-slate-100 dark:border-white/[0.06]">
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors w-full justify-between group/link"
                >
                  <span>Verify Credential</span>
                  <ExternalLink className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Certifications;
