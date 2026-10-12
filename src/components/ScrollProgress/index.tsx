import * as React from 'react';
import { useScrollPosition } from '../../hooks/useScrollPosition';

export const ScrollProgress: React.FC = () => {
  const scrollPercentage = useScrollPosition();

  return (
    <div
      className="pointer-events-none fixed inset-x-0 top-0 z-50 h-0.5"
      role="progressbar"
      aria-valuenow={Math.round(scrollPercentage)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Scroll progress">
      <div className="h-full bg-accent" style={{ width: `${scrollPercentage}%` }} />
    </div>
  );
};
