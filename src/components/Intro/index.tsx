import * as React from 'react';
import { HighlightedText } from '../HighlightedText';

export const Intro: React.FC = () => {
  return (
    <section className="intro">
      <p>
        I&apos;m a <HighlightedText text="Software Engineer" /> based in Buenos Aires, Argentina 🇦🇷.
      </p>
      <p>
        I&apos;m focused on <HighlightedText text="product companies" />, I truly care about our{' '}
        <HighlightedText text="customers" />, ensuring{' '}
        <HighlightedText text="solutions meet their needs" /> and{' '}
        <HighlightedText text="exceed expectations" />.
      </p>
      <p>
        I&apos;ve been working on <HighlightedText text="frontend projects" /> lately, specially
        ones with <HighlightedText text="complex user interactions" /> defining how these{' '}
        <HighlightedText text="should be develeped" /> and creating their{' '}
        <HighlightedText text="executiones plans" />.
      </p>
    </section>
  );
};
