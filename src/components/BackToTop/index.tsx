import * as React from 'react';
import { useState, useEffect } from 'react';

const SCROLL_THRESHOLD = 300;

export const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = (): void => {
      if (window.scrollY > SCROLL_THRESHOLD) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    toggleVisibility(); // Check initial state

    return (): void => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = (): void => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <button
      className="fixed bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-md border border-line bg-paper text-muted transition-colors hover:border-muted hover:text-ink sm:bottom-8 sm:right-8"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      title="Scroll to top">
      <span aria-hidden="true">↑</span>
      <span className="sr-only">Back to top</span>
    </button>
  );
};
