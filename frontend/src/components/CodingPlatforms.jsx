import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code, Trophy, Zap, GitBranch, Award, ChevronRight } from 'lucide-react';
import { usePortfolioData } from '../contexts/PortfolioContext';
import { personalData as fallbackData } from '../utils/data';

const platformImages = {
  github:      'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
  leetcode:    'https://assets.leetcode.com/static_assets/public/webpack_bundles/images/logo-dark.e99485d9b.svg',
  hackerrank:  'https://cdn.worldvectorlogo.com/logos/hackerrank.svg',
  codechef:    'https://cdn.codechef.com/sites/all/themes/abessive/cc-logo.svg',
  codeforces:  'https://sta.codeforces.com/s/92438/images/codeforces-logo-with-telegram.png',
  spoj: '',
};

// Warm earthy per-platform appearances
const platformExtras = {
  GitHub:     { cardBg: 'rgba(139,94,60,0.08)', barFrom: '#8B5E3C', barTo: '#c4875a', accent: '#8B5E3C', badgeBg: 'rgba(139,94,60,0.12)', badgeText: '#8B5E3C',  badges: ['Contributor', 'Open Source'], progress: 85, rank: 'Advanced',     image: platformImages.github,      icon: GitBranch },
  LeetCode:   { cardBg: 'rgba(196,135,90,0.10)', barFrom: '#c4875a', barTo: '#EADBC8', accent: '#c4875a', badgeBg: 'rgba(196,135,90,0.15)', badgeText: '#a06840',  badges: ['Top 35%', 'Daily Streak'],   progress: 65, rank: 'Intermediate', image: platformImages.leetcode,    icon: Code    },
  HackerRank: { cardBg: 'rgba(139,94,60,0.06)', barFrom: '#a06840', barTo: '#c4875a', accent: '#a06840', badgeBg: 'rgba(160,104,64,0.12)', badgeText: '#6e4a2e',  badges: ['Gold Badge', '15 Certs'],    progress: 75, rank: 'Proficient',   image: platformImages.hackerrank,  icon: Award   },
  CodeChef:   { cardBg: 'rgba(196,135,90,0.07)', barFrom: '#8B5E3C', barTo: '#a06840', accent: '#7a4a2a', badgeBg: 'rgba(139,94,60,0.10)', badgeText: '#7a4a2a',  badges: ['200+ Problems'],             progress: 45, rank: 'Beginner',    image: platformImages.codechef,    icon: Trophy  },
  Codeforces: { cardBg: 'rgba(234,219,200,0.40)', barFrom: '#a06840', barTo: '#8B5E3C', accent: '#8B5E3C', badgeBg: 'rgba(234,219,200,0.6)', badgeText: '#6e4a2e', badges: ['Rated'],                     progress: 50, rank: 'Intermediate', image: platformImages.codeforces,  icon: Zap     },
  Spoj:       { cardBg: 'rgba(245,245,220,0.50)', barFrom: '#c4875a', barTo: '#EADBC8', accent: '#6B5A4E', badgeBg: 'rgba(234,219,200,0.5)', badgeText: '#6B5A4E', badges: ['Problem Solver'],            progress: 40, rank: 'Beginner',    image: platformImages.spoj,        icon: Code    },
};

const AnimatedCounter = ({ value, isInView }) => {
  const [display, setDisplay] = useState(0);
  useEffect(() => {
    if (!isInView || !value) return;
    const num = typeof value === 'string' ? parseInt(value.replace(/\D/g, '')) || 0 : value;
    let current = 0;
    const steps = 50;
    const inc = num / steps;
    const timer = setInterval(() => {
      current += inc;
      if (current >= num) { setDisplay(num); clearInterval(timer); }
      else setDisplay(Math.floor(current));
    }, 40);
    return () => clearInterval(timer);
  }, [isInView, value]);
  if (!value) return null;
  const suffix = typeof value === 'string' ? value.replace(/[\d,]/g, '').trim() : '';
  return <span>{display}{suffix}</span>;
};

const CodingPlatforms = () => {
  const { portfolio } = usePortfolioData();
  const personalData = portfolio || fallbackData;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.05 });

  const platforms = (personalData.codingPlatforms || []).map(p => ({
    ...p,
    ...(platformExtras[p.name] || {}),
  }));

  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{ background: '#FEFCF7' }}
      id="coding-platforms"
    >
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl pointer-events-none"
        style={{ background: 'rgba(234,219,200,0.6)' }}
      />
      <div
        className="absolute bottom-0 left-0 w-80 h-80 rounded-full blur-3xl pointer-events-none"
        style={{ background: 'rgba(196,135,90,0.2)' }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="section-subtitle">Competitive Programming</span>
          <h2 className="section-title mt-2" style={{ color: '#3A2D28' }}>
            My Coding{' '}
            <span style={{ background: 'linear-gradient(135deg, #8B5E3C, #c4875a)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Profiles
            </span>
          </h2>
          <div className="w-16 h-1 mx-auto mt-4 rounded-full" style={{ background: 'linear-gradient(90deg, #8B5E3C, #c4875a)' }} />
          <p className="mt-4 max-w-2xl mx-auto" style={{ color: '#6B5A4E' }}>
            Explore my achievements across coding platforms where I solve problems, compete, and contribute.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {platforms.map((platform, index) => {
            const Icon = platform.icon || Code;
            return (
              <motion.div
                key={platform.name}
                initial={{ opacity: 0, y: 40, scale: 0.92 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ delay: index * 0.12, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border overflow-hidden group"
                style={{ background: '#FEFCF7', borderColor: '#EADBC8' }}
              >
                {/* Colored accent top bar */}
                <div
                  className="h-1"
                  style={{ background: `linear-gradient(90deg, ${platform.barFrom || '#8B5E3C'}, ${platform.barTo || '#c4875a'})` }}
                />

                <div className="p-6">
                  {/* Platform Header */}
                  <div className="flex items-center gap-4 mb-5">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                      style={{ background: platform.cardBg || 'rgba(234,219,200,0.5)' }}
                    >
                      {platform.image ? (
                        <img src={platform.image} alt={platform.name} className="w-8 h-8 object-contain" />
                      ) : (
                        <Icon size={22} style={{ color: platform.accent || '#8B5E3C' }} />
                      )}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold" style={{ color: '#3A2D28' }}>{platform.name}</h3>
                      <p className="text-sm font-mono" style={{ color: platform.accent || '#8B5E3C' }}>@{platform.username}</p>
                    </div>
                  </div>

                  {/* Stats */}
                  {platform.stats && (
                    <div className="mb-4">
                      <p className="text-xl font-bold" style={{ color: '#3A2D28' }}>
                        {platform.stats.match(/\d+/) ? (
                          <AnimatedCounter value={platform.stats.match(/\d+/)?.[0]} isInView={isInView} />
                        ) : null}
                        <span className="text-base font-semibold ml-1" style={{ color: '#6B5A4E' }}>
                          {platform.stats.replace(/\d+/, '').trim()}
                        </span>
                      </p>
                    </div>
                  )}

                  {/* Progress */}
                  {platform.progress && (
                    <div className="mb-4">
                      <div className="flex justify-between text-xs mb-1.5" style={{ color: '#6B5A4E' }}>
                        <span>Proficiency</span>
                        <span className="font-semibold">{platform.progress}%</span>
                      </div>
                      <div className="h-2 rounded-full overflow-hidden" style={{ background: '#EADBC8' }}>
                        <motion.div
                          className="h-full rounded-full relative overflow-hidden"
                          style={{ background: `linear-gradient(90deg, ${platform.barFrom || '#8B5E3C'}, ${platform.barTo || '#c4875a'})` }}
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${platform.progress}%` } : {}}
                          transition={{ delay: index * 0.12 + 0.4, duration: 1.0, ease: 'easeOut' }}
                        >
                          <motion.div
                            className="absolute inset-0 bg-white/30"
                            animate={{ x: ['-100%', '100%'] }}
                            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                          />
                        </motion.div>
                      </div>
                    </div>
                  )}

                  {/* Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {platform.badges?.map((badge, i) => (
                      <span
                        key={i}
                        className="text-xs px-2.5 py-1 rounded-full font-medium"
                        style={{ background: platform.badgeBg || 'rgba(234,219,200,0.6)', color: platform.badgeText || '#8B5E3C' }}
                      >
                        {badge}
                      </span>
                    ))}
                    {platform.rank && (
                      <span
                        className="text-xs px-2.5 py-1 rounded-full font-medium"
                        style={{ background: 'rgba(234,219,200,0.4)', color: '#6B5A4E' }}
                      >
                        {platform.rank}
                      </span>
                    )}
                  </div>

                  {/* Visit Button */}
                  <a
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl transition-all text-sm font-semibold group/btn"
                    style={{ background: 'rgba(234,219,200,0.5)', border: '1px solid #EADBC8', color: '#3A2D28' }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = '#8B5E3C'; e.currentTarget.style.color = '#8B5E3C'; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = '#EADBC8'; e.currentTarget.style.color = '#3A2D28'; }}
                  >
                    <span>Visit Profile</span>
                    <ChevronRight size={15} className="group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Footer */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.9, duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-3 text-sm" style={{ color: '#8B5E3C' }}>
            <div className="w-12 h-px" style={{ background: '#EADBC8' }} />
            <span>Continuously solving problems and participating in contests</span>
            <div className="w-12 h-px" style={{ background: '#EADBC8' }} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CodingPlatforms;
