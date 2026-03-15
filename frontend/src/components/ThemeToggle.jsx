import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle = ({ embedded = false }) => {
  const { isDark, toggleTheme } = useTheme();

  if (embedded) {
    return (
      <motion.button
        onClick={toggleTheme}
        className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-all duration-200"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Toggle theme"
      >
        <motion.div
          animate={{ rotate: isDark ? 180 : 0 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
        >
          {isDark ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5" />}
        </motion.div>
      </motion.button>
    );
  }

  return (
    <motion.button
      onClick={toggleTheme}
      className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full shadow-xl flex items-center justify-center transition-all duration-300"
      style={{
        background: isDark
          ? 'linear-gradient(135deg, #1e1b4b, #312e81)'
          : 'linear-gradient(135deg, #6366f1, #8b5cf6)',
        boxShadow: '0 8px 30px rgba(99,102,241,0.4)',
        border: '1px solid rgba(255,255,255,0.15)',
      }}
      whileHover={{ scale: 1.15, y: -2 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Toggle dark mode"
    >
      <motion.div
        animate={{ rotate: isDark ? 180 : 0 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      >
        {isDark ? (
          <Sun className="w-6 h-6 text-amber-300" />
        ) : (
          <Moon className="w-6 h-6 text-white" />
        )}
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;