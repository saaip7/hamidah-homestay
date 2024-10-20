'use client';

import { useEffect, useState } from 'react';
import { Button } from './button';
import { ArrowUp } from 'lucide-react';

const BackToTop = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {showBackToTop && (
        <Button
            className="fixed bottom-4 right-4 rounded-full p-2 bg-pink-600 text-white hover:bg-pink-700 transition-all duration-300 shadow-lg"
            onClick={scrollToTop}
            aria-label="Back to top"
            >
            <ArrowUp className="h-6 w-6"  />
        </Button>
      )}
    </>
  );
};

export default BackToTop;
