import { motion } from 'framer-motion';

const techBadges = [
  { name: 'React.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Python', icon: 'https://cdn.worldvectorlogo.com/logos/python-5.svg' },
  { name: 'Node.js', icon: 'https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg' },
  { name: 'AWS Cloud', icon: 'https://cdn.worldvectorlogo.com/logos/aws-2.svg' },
  { name: 'MongoDB', icon: 'https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg' },
  { name: 'FastAPI', icon: 'https://cdn.worldvectorlogo.com/logos/fastapi-1.svg' },
  { name: 'Docker', icon: 'https://cdn.worldvectorlogo.com/logos/docker.svg' },
  { name: 'Tailwind CSS', icon: 'https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg' },
  { name: 'JavaScript', icon: 'https://cdn.worldvectorlogo.com/logos/javascript-1.svg' },
  { name: 'Git & GitHub', icon: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png' },
  { name: 'Express.js', icon: 'https://cdn.worldvectorlogo.com/logos/express-109.svg' },
  { name: 'Java', icon: 'https://cdn.worldvectorlogo.com/logos/java-4.svg' },
];

const TechMarquee = () => {
  return (
    <div className="relative w-full overflow-hidden py-10 bg-slate-100/60 dark:bg-[#0E1017]/60 border-y border-slate-200 dark:border-white/[0.06] backdrop-blur-md">
      {/* Edge gradient mask for smooth fading */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-slate-50 dark:from-[#0B0C10] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-slate-50 dark:from-[#0B0C10] to-transparent z-10 pointer-events-none" />

      {/* Infinite Scrolling Track */}
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
        {[...techBadges, ...techBadges].map((tech, idx) => (
          <div
            key={idx}
            className="flex items-center gap-3 mx-4 px-5 py-2.5 rounded-full bg-white dark:bg-[#13151F] border border-slate-200 dark:border-white/[0.08] shadow-sm hover:border-blue-500/50 hover:shadow-md transition-all duration-300 group cursor-default"
          >
            <div className="w-5 h-5 flex items-center justify-center">
              <img
                src={tech.icon}
                alt={tech.name}
                className="w-full h-full object-contain filter group-hover:scale-115 transition-transform duration-300"
              />
            </div>
            <span className="text-xs font-semibold text-slate-800 dark:text-slate-200 font-mono tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechMarquee;

