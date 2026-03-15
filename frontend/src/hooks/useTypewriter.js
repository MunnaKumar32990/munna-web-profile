import { useState, useEffect } from 'react';

export const useTypewriter = (text, speed = 100, delay = 0) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    setDisplayText('');
    let i = 0;
    let typeInterval = null;

    const delayTimer = setTimeout(() => {
      typeInterval = setInterval(() => {
        if (i < text.length) {
          setDisplayText(text.slice(0, i + 1));
          i++;
        } else {
          clearInterval(typeInterval);
        }
      }, speed);
    }, delay);

    return () => {
      clearTimeout(delayTimer);
      if (typeInterval) clearInterval(typeInterval);
    };
  }, [text, speed, delay]);

  return displayText;
};

export default useTypewriter;