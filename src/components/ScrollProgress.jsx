import { motion } from 'framer-motion';
import { useScrollProgress } from '../hooks/useScrollProgress';

const ScrollProgress = () => {
  const scrollProgress = useScrollProgress();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 z-50 origin-left"
      style={{ scaleX: scrollProgress / 100 }}
    />
  );
};

export default ScrollProgress;