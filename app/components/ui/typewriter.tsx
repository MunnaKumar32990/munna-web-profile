// components/ui/Typewriter.tsx
'use client';

import { useEffect, useState } from 'react';

interface TypewriterProps {
  words: string[];
  delay?: number;
  className?: string;
}

export const Typewriter = ({ words, delay = 1500, className }: TypewriterProps) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = words[currentWordIndex];
      
      if (isDeleting) {
        setCurrentText(currentWord.substring(0, currentText.length - 1));
        setTypingSpeed(100);
      } else {
        setCurrentText(currentWord.substring(0, currentText.length + 1));
        setTypingSpeed(150);
      }

      if (!isDeleting && currentText === currentWord) {
        setTimeout(() => setIsDeleting(true), delay);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
        setTypingSpeed(500);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, words, delay, typingSpeed]);

  return (
    <span className={`text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-400 ${className}`}>
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  );
};