import * as React from 'react';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import './style.css';

export const ScrollProgress: React.FC = () => {
  const scrollPercentage = useScrollPosition();

  return (
    <div
      className="scroll-progress"
      role="progressbar"
      aria-valuenow={Math.round(scrollPercentage)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Scroll progress">
      <div className="scroll-progress-bar" style={{ width: `${scrollPercentage}%` }} />
    </div>
  );
};
