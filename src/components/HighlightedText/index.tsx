import * as React from 'react';
import './style.css';

interface HighlightedTextProps {
  text: string;
}

export const HighlightedText: React.FC<HighlightedTextProps> = ({ text }: HighlightedTextProps) => {
  return <span className="highlight">{text}</span>;
};
