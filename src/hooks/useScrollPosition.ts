import { useState, useEffect } from 'react';

export function useScrollPosition(): number {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const updatePosition = (): void => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY ?? document.documentElement.scrollTop;
      const scrollableHeight = documentHeight - windowHeight;
      const percentage = scrollableHeight !== 0 ? (scrollTop / scrollableHeight) * 100 : 0;
      setScrollPosition(Math.min(100, Math.max(0, percentage)));
    };

    window.addEventListener('scroll', updatePosition, { passive: true });
    updatePosition(); // Initial calculation

    return (): void => {
      window.removeEventListener('scroll', updatePosition);
    };
  }, []);

  return scrollPosition;
}
