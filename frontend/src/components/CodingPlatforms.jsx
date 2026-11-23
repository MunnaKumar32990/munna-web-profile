import { motion } from 'framer-motion';
import { Code, Terminal, Zap, Trophy, GitBranch, ExternalLink, Award } from 'lucide-react';
import { usePortfolioData } from '../contexts/PortfolioContext';

const platformLogos = {
  GitHub: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
  LeetCode: 'https://assets.leetcode.com/static_assets/public/webpack_bundles/images/logo-dark.e99485d9b.svg',
  HackerRank: 'https://cdn.worldvectorlogo.com/logos/hackerrank.svg',
  Codeforces: 'https://sta.codeforces.com/s/92438/images/codeforces-logo-with-telegram.png',
  CodeChef: 'https://cdn.codechef.com/sites/all/themes/abessive/cc-logo.svg',
};

const CodingPlatforms = () => {
  const { portfolio, loading } = usePortfolioData();
  const personalData = portfolio || {};

  if (loading) return null;

  const platforms = personalData.codingPlatforms || [];

  return (
    <section id="coding-platforms" className="py-24 relative overflow-hidden bg-white dark:bg-[#0E1017] transition-colors duration-300">
      {/* Background glow */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.08, 0.15, 0.08] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500 rounded-full blur-[140px] pointer-events-none"
      />

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
            Coding Profiles & Problem Solving
          </h2>
          <p className="devx-section-desc">
            Active participant on competitive coding platforms, open-source communities, and algorithmic challenges.
          </p>
        </motion.div>

        {/* Platforms Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {platforms.map((platform, idx) => (
            <motion.a
              key={platform.name}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              whileHover={{ y: -8, scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="devx-card p-6 flex flex-col justify-between group cursor-pointer hover:border-blue-500/50 hover:shadow-xl transition-all"
            >
              <div>
                {/* Logo & Arrow */}
                <div className="flex items-center justify-between mb-5">
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-[#0B0C10] border border-slate-200 dark:border-white/[0.08] p-2 flex items-center justify-center group-hover:border-blue-500/40 transition-colors shadow-sm"
                  >
                    <img
                      src={platformLogos[platform.name] || 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png'}
                      alt={platform.name}
                      className="w-7 h-7 object-contain"
                    />
                  </motion.div>
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>

                <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-1">
                  {platform.name}
                </h3>
                <p className="text-xs font-mono text-slate-500 mb-3 truncate">
                  @{platform.username}
                </p>
              </div>

              {/* Stats */}
              <div className="pt-3 border-t border-slate-100 dark:border-white/[0.06]">
                <span className="text-xs font-bold text-blue-600 dark:text-blue-400 font-mono">
                  {platform.stats || 'Active Profile'}
                </span>
              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CodingPlatforms;
