import * as React from 'react';
import { HighlightedText } from '../HighlightedText';
import './style.css';

export const SiteTitle: React.FC = () => {
  return (
    <h1>
      Hi! I&apos;m <HighlightedText text="Hernan" />
    </h1>
  );
};
