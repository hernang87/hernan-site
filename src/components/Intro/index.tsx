import * as React from 'react';
import { HighlightedText } from '../HighlightedText';
import './style.css';

export const Intro: React.FC = () => {
  return (
    <section className="intro" aria-labelledby="intro-heading">
      <h2 id="intro-heading" className="sr-only">
        About Me
      </h2>
      <p className="intro-paragraph">
        I&apos;m a <HighlightedText text="Software Engineer" /> based in Buenos Aires, Argentina{' '}
        <span role="img" aria-label="Argentina flag">
          🇦🇷
        </span>
        .
      </p>
      <p className="intro-paragraph">
        I&apos;m focused on <HighlightedText text="product companies" />, I truly care about our{' '}
        <HighlightedText text="customers" />, ensuring{' '}
        <HighlightedText text="solutions meet their needs" /> and{' '}
        <HighlightedText text="exceed expectations" />.
      </p>
      <p className="intro-paragraph">
        I&apos;ve been working on <HighlightedText text="frontend projects" /> lately, specially
        ones with <HighlightedText text="complex user interactions" /> defining how these{' '}
        <HighlightedText text="should be developed" /> and creating their{' '}
        <HighlightedText text="executiones plans" />.
      </p>
    </section>
  );
};
