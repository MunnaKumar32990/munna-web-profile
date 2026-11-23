import React from 'react';
import { motion } from 'framer-motion';
import { useScrollProgress } from '../hooks/useScrollProgress';

const ScrollProgress = () => {
  const scrollProgress = useScrollProgress();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] z-[100] origin-left bg-[#F04444]"
      style={{
        scaleX: scrollProgress / 100,
      }}
    />
  );
};

export default ScrollProgress;
