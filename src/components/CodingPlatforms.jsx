import { useRef } from 'react';
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

  return (
    <section className="py-16 md:py-24 bg-white" id="coding-platforms">
      {/* Remove fixed heights so all cards are visible and layout adjusts naturally */}
      <div className="container mx-auto px-8 sm:px-8 max-w-screen-2xl">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {codingPlatforms.map((platform, index) => (
              <motion.div
                key={platform.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-slate-100"
              >
                <div className="p-8">
                  {/* Platform Header */}
                  <div className="flex items-center mb-6">
                    <div className={`w-14 h-14 rounded-lg ${platform.color} flex items-center justify-center`}>
                      {platform.image ? (
                        <img 
                          src={platform.image} 
                          alt={platform.name} 
                          className="w-10 h-10 object-contain"
                        />
                      ) : (
                        <platform.icon size={28} className="text-slate-700" />
                      )}
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-bold text-slate-800">{platform.name}</h3>
                      <p className="text-sm text-slate-500">@{platform.username}</p>
                    </div>
                  </div>
                  
                  {/* Stats */}
                  {platform.stats && (
                    <div className="mb-5">
                      <p className="text-2xl font-semibold text-slate-800">{platform.stats}</p>
                      <p className="text-slate-600 text-sm mt-1">{platform.description}</p>
                    </div>
                  )}
                  
                  {/* Progress Bar */}
                  {platform.progress && (
                    <div className="mb-5">
                      <div className="flex justify-between text-xs text-slate-500 mb-1">
                        <span>Progress</span>
                        <span>{platform.progress}%</span>
                      </div>
                      <div className="h-2.5 bg-slate-100 rounded-full overflow-hidden">
                        <motion.div 
                          className={`h-full rounded-full ${platform.accentColor}`}
                          initial={{ width: 0 }}
                          animate={{ width: `${platform.progress}%` }}
                          transition={{ delay: 0.3, duration: 0.8 }}
                        />
                      </div>
                    </div>
                  )}
                  
                  {/* Badges */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {platform.badges?.map((badge, i) => (
                      <span 
                        key={i}
                        className={`text-xs px-3 py-1.5 rounded-full ${platform.color} text-slate-700`}
                      >
                        {badge}
                      </span>
                    ))}
                    {platform.rank && (
                      <span className="text-xs px-3 py-1.5 rounded-full bg-slate-100 text-slate-700">
                        {platform.rank}
                      </span>
                    )}
                  </div>
                  
                  {/* Visit Button */}
                  <motion.a
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center justify-center gap-2 w-full py-3 bg-white border border-slate-200 hover:border-slate-300 text-slate-700 font-medium rounded-lg transition-all"
                  >
                    <span>Visit Profile</span>
                    <ChevronRight size={16} />
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
