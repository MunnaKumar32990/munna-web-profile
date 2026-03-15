import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code, Trophy, Zap, GitBranch, Award, ChevronRight } from 'lucide-react';
import { usePortfolioData } from '../contexts/PortfolioContext';
import { personalData as fallbackData } from '../utils/data';

// Platform images
const platformImages = {
  github: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
  leetcode: "https://assets.leetcode.com/static_assets/public/webpack_bundles/images/logo-dark.e99485d9b.svg",
  hackerrank: "https://cdn.worldvectorlogo.com/logos/hackerrank.svg",
  codechef: "https://cdn.codechef.com/sites/all/themes/abessive/cc-logo.svg",
  codeforces: "https://sta.codeforces.com/s/92438/images/codeforces-logo-with-telegram.png",
  // Leave empty so the icon fallback renders (previous URL was a redirect that can break)
  spoj: "",
};

const platformExtras = {
  GitHub: { color: "bg-purple-100", accentColor: "bg-purple-500", badges: ["Contributor", "Open Source"], progress: 85, rank: "Advanced", image: platformImages.github, icon: GitBranch },
  LeetCode: { color: "bg-amber-100", accentColor: "bg-amber-500", badges: ["Top 35%", "Daily Streak"], progress: 65, rank: "Intermediate", image: platformImages.leetcode, icon: Code },
  HackerRank: { color: "bg-emerald-100", accentColor: "bg-emerald-500", badges: ["Gold Badge", "15 Certificates"], progress: 75, rank: "Proficient", image: platformImages.hackerrank, icon: Award },
  CodeChef: { color: "bg-red-100", accentColor: "bg-red-500", badges: ["Div. 1", "200+ Problems"], progress: 45, rank: "Beginner", image: platformImages.codechef, icon: Trophy },
  Codeforces: { color: "bg-blue-100", accentColor: "bg-blue-500", badges: ["Rated Participant"], progress: 50, rank: "Intermediate", image: platformImages.codeforces, icon: Zap },
  Spoj: { color: "bg-gray-100", accentColor: "bg-gray-500", badges: ["Problem Solver"], progress: 40, rank: "Beginner", image: platformImages.spoj, icon: Code },
};

const CodingPlatforms = () => {
  const { portfolio, loading } = usePortfolioData();
  const personalData = portfolio || fallbackData;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const live = portfolio?.liveStats || null;

  const codingPlatforms = (personalData.codingPlatforms || []).map(platform => {
    const base = { ...platform, ...platformExtras[platform.name] };
    // Override stats with live data when available
    if (live) {
      if (platform.name === 'LeetCode' && live.leetcode) {
        const solved = live.leetcode.totalSolved ?? null;
        if (solved != null) base.stats = `${solved} problems solved`;
      } else if (platform.name === 'GitHub' && live.github) {
        const repos = live.github.publicRepos ?? null;
        if (repos != null) base.stats = `${repos} public repositories`;
      } else if (platform.name === 'Codeforces' && live.codeforces) {
        const rating = live.codeforces.rating ?? null;
        if (rating != null) base.stats = `Rating ${rating}`;
      }
    }
    return base;
  });

  // Animated counter component
  const AnimatedCounter = ({ value, suffix = '' }) => {
    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
      if (isInView && value) {
        const numValue = typeof value === 'string' ? parseInt(value.replace(/\D/g, '')) || 0 : value;
        const duration = 2000; // 2 seconds
        const steps = 60;
        const increment = numValue / steps;
        const stepDuration = duration / steps;
        
        let current = 0;
        const timer = setInterval(() => {
          current += increment;
          if (current >= numValue) {
            setDisplayValue(numValue);
            clearInterval(timer);
          } else {
            setDisplayValue(Math.floor(current));
          }
        }, stepDuration);

        return () => clearInterval(timer);
      }
    }, [isInView, value]);

    if (!value) return null;
    return <span>{displayValue}{suffix}</span>;
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 relative overflow-hidden" id="coding-platforms">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl dark:bg-blue-500/5"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-purple-500/10 blur-3xl dark:bg-purple-500/5"></div>
      
      {/* Remove fixed heights so all cards are visible and layout adjusts naturally */}
      <div className="container mx-auto px-8 sm:px-8 max-w-screen-2xl relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-4 text-slate-800"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              My Coding Profiles
              <span className="block mt-2 text-lg font-normal text-slate-600">
                Showcasing my skills across platforms
              </span>
            </motion.h2>
            
            <motion.p 
              className="text-slate-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              Explore my achievements across various coding platforms where I solve problems, compete, and contribute to the developer community.
            </motion.p>
          </div>
          
          {/* Platforms Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
            {codingPlatforms.map((platform, index) => (
              <motion.div
                key={platform.name}
                initial={{ opacity: 0, y: 50, scale: 0.9, rotateX: -10 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1, rotateX: 0 } : { opacity: 0, y: 50, scale: 0.9, rotateX: -10 }}
                transition={{ 
                  delay: index * 0.15, 
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1]
                }}
                whileHover={{ 
                  y: -12, 
                  scale: 1.03,
                  rotateY: 5,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                }}
                className="bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-slate-200 dark:border-slate-700 group"
              >
                <div className="p-8">
                  {/* Platform Header */}
                  <motion.div 
                    className="flex items-center mb-6"
                    whileHover={{ x: 5 }}
                  >
                    <motion.div 
                      className={`w-14 h-14 rounded-lg ${platform.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      {platform.image ? (
                        <motion.img 
                          src={platform.image} 
                          alt={platform.name} 
                          className="w-10 h-10 object-contain"
                          whileHover={{ scale: 1.2 }}
                        />
                      ) : (
                        <platform.icon size={28} className="text-slate-700 dark:text-slate-300" />
                      )}
                    </motion.div>
                    <div className="ml-4">
                      <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100">{platform.name}</h3>
                      <p className="text-sm text-slate-500 dark:text-slate-400">@{platform.username}</p>
                    </div>
                  </motion.div>
                  
                  {/* Stats */}
                  {platform.stats && (
                    <motion.div 
                      className="mb-5"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ delay: index * 0.15 + 0.3, duration: 0.5 }}
                    >
                      <p className="text-2xl font-semibold text-slate-800 dark:text-slate-100">
                        {platform.stats.includes('problems solved') || platform.stats.includes('repositories') || platform.stats.includes('Rating') ? (
                          <AnimatedCounter 
                            value={platform.stats.match(/\d+/)?.[0]} 
                            suffix={platform.stats.replace(/\d+/, '').trim()} 
                          />
                        ) : (
                          platform.stats
                        )}
                      </p>
                      {platform.description && (
                        <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">{platform.description}</p>
                      )}
                    </motion.div>
                  )}
                  
                  {/* Progress Bar */}
                  {platform.progress && (
                    <motion.div 
                      className="mb-5"
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ delay: index * 0.15 + 0.4, duration: 0.5 }}
                    >
                      <div className="flex justify-between text-xs text-slate-500 dark:text-slate-400 mb-2">
                        <span className="font-medium">Progress</span>
                        <motion.span 
                          className="font-semibold"
                          initial={{ opacity: 0 }}
                          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                          transition={{ delay: index * 0.15 + 0.6 }}
                        >
                          {platform.progress}%
                        </motion.span>
                      </div>
                      <div className="h-3 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden shadow-inner">
                        <motion.div 
                          className={`h-full rounded-full ${platform.accentColor} relative`}
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${platform.progress}%` } : { width: 0 }}
                          transition={{ 
                            delay: index * 0.15 + 0.5, 
                            duration: 1.2,
                            ease: "easeOut"
                          }}
                        >
                          <motion.div
                            className="absolute inset-0 bg-white/30"
                            animate={{
                              x: ['-100%', '100%'],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "linear"
                            }}
                        />
                        </motion.div>
                      </div>
                    </motion.div>
                  )}
                  
                  {/* Badges */}
                  <motion.div 
                    className="flex flex-wrap gap-2 mb-6"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: index * 0.15 + 0.5, duration: 0.5 }}
                  >
                    {platform.badges?.map((badge, i) => (
                      <motion.span 
                        key={i}
                        className={`text-xs px-3 py-1.5 rounded-full ${platform.color} dark:bg-slate-700 text-slate-700 dark:text-slate-300 font-medium`}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                        transition={{ delay: index * 0.15 + 0.6 + i * 0.1, type: "spring", stiffness: 200 }}
                        whileHover={{ scale: 1.1, y: -2 }}
                      >
                        {badge}
                      </motion.span>
                    ))}
                    {platform.rank && (
                      <motion.span 
                        className="text-xs px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 font-medium"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                        transition={{ delay: index * 0.15 + 0.7, type: "spring", stiffness: 200 }}
                        whileHover={{ scale: 1.1, y: -2 }}
                      >
                        {platform.rank}
                      </motion.span>
                    )}
                  </motion.div>
                  
                  {/* Visit Button */}
                  <motion.a
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, x: 2 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center gap-2 w-full py-3 bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-700 dark:to-slate-800 border border-slate-200 dark:border-slate-600 hover:border-blue-400 dark:hover:border-blue-500 text-slate-700 dark:text-slate-200 font-medium rounded-lg transition-all relative overflow-hidden group/btn"
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-blue-500/0"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '100%' }}
                      transition={{ duration: 0.6 }}
                    />
                    <span className="relative z-10">Visit Profile</span>
                    <ChevronRight size={16} className="relative z-10 group-hover/btn:translate-x-1 transition-transform" />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Footer Text */}
          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-3 text-slate-500">
              <div className="w-16 h-px bg-slate-200"></div>
              <span>Continuously solving problems and participating in coding contests</span>
              <div className="w-16 h-px bg-slate-200"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CodingPlatforms;
