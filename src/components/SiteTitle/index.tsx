import * as React from 'react';
import { HighlightedText } from '../HighlightedText';
import './style.css';

export const SiteTitle: React.FC = () => {
  return (
    <h1>
      <span role="img" aria-label="Waving hand">
        👋
      </span>{' '}
      I&apos;m <HighlightedText text="Hernan" animate />
    </h1>
  );
};
