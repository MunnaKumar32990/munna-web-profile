import { motion, useSpring } from 'framer-motion';
import { useScrollProgress } from '../hooks/useScrollProgress';

const ScrollProgress = () => {
  const scrollProgress = useScrollProgress();
  const scaleX = useSpring(scrollProgress / 100, {
    stiffness: 200,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      {/* Progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] z-[100] origin-left"
        style={{
          scaleX: scrollProgress / 100,
          background: 'linear-gradient(90deg, #6366f1, #8b5cf6, #06b6d4)',
          boxShadow: '0 0 10px rgba(99,102,241,0.7)',
        }}
      />
      {/* Glow dot at tip */}
      <motion.div
        className="fixed top-0 z-[101] w-3 h-3 rounded-full"
        style={{
          left: `calc(${scrollProgress}% - 6px)`,
          top: '-5px',
          background: 'radial-gradient(circle, #a5b4fc, #6366f1)',
          boxShadow: '0 0 8px 2px rgba(99,102,241,0.8)',
          opacity: scrollProgress > 2 ? 1 : 0,
        }}
      />
    </>
  );
};

export default ScrollProgress;