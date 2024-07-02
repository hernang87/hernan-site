import * as React from 'react';
import './style.css';
import { TypeAnimation } from 'react-type-animation';
import { flatMap } from 'lodash';

interface HighlightedTextProps {
  animate?: boolean;
  text: string;
}

const toSequence = (text: string): Array<string | number> => {
  const letters = text.split('');
  const sequence = letters.reduce((acc: string[], letter: string, index: number) => {
    if (index === 0) {
      acc.push(letter);
      return acc;
    }

    acc.push(acc[index - 1] + letter);

    return acc;
  }, []);

  return flatMap(sequence, (value, index, array) =>
    array.length - 1 !== index // check for the last item
      ? [value, 100]
      : value
  );
};

export const HighlightedText: React.FC<HighlightedTextProps> = ({
  animate = false,
  text
}: HighlightedTextProps) => {
  return animate ? (
    <TypeAnimation className="highlight" sequence={toSequence(text)} repeat={0} />
  ) : (
    <span className="highlight">{text}</span>
  );
};
