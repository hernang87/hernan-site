import * as React from 'react';
import './style.css';

export const Intro: React.FC = () => {
  return (
    <section className="intro" aria-labelledby="intro-heading">
      <h2 id="intro-heading" className="sr-only">
        About Me
      </h2>
      <p className="intro-paragraph">
        I&apos;m a software engineer in Buenos Aires{' '}
        <span role="img" aria-label="Argentina flag">
          🇦🇷
        </span>
        , currently at Webflow. Before that I spent six years at Mural working on the canvas:
        rendering, arrows, text, the parts people use all day.
      </p>
      <p className="intro-paragraph">
        I like product work, where the user is a real person and not a ticket. Lately that means
        frontend with complex interactions: working out how it should be built, then planning how to
        get there.
      </p>
    </section>
  );
};
