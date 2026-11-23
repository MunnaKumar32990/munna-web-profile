import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle = ({ className = '' }) => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.92 }}
      className={`p-2.5 rounded-xl border transition-all duration-300 flex items-center justify-center ${
        isDark
          ? 'bg-[#181A27] border-white/[0.12] text-amber-300 hover:text-amber-200 hover:border-amber-400/40 hover:bg-[#202334] shadow-[0_0_15px_rgba(251,191,36,0.15)]'
          : 'bg-white border-slate-200 text-slate-700 hover:text-blue-600 hover:border-blue-300 shadow-sm'
      } ${className}`}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <motion.div
        key={isDark ? 'dark' : 'light'}
        initial={{ rotate: -90, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        exit={{ rotate: 90, opacity: 0 }}
        transition={{ duration: 0.25 }}
      >
        {isDark ? (
          <Sun className="w-4 h-4" />
        ) : (
          <Moon className="w-4 h-4" />
        )}
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;
