import React, { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

export const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-slate-900/80 backdrop-blur-md border border-slate-700/80 text-sky-400 hover:text-white hover:bg-sky-600/30 hover:border-sky-500/60 shadow-lg shadow-sky-950/50 transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-sky-400"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
};
