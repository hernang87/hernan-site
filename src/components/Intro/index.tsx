import * as React from 'react';

export const Intro: React.FC = () => {
  return (
    <section className="mb-16 space-y-4 text-lg" aria-labelledby="intro-heading">
      <h2 id="intro-heading" className="sr-only">
        About Me
      </h2>
      <p>
        I&apos;m a software engineer in Buenos Aires{' '}
        <span role="img" aria-label="Argentina flag">
          🇦🇷
        </span>
        , currently at Webflow. Before that I spent six years at Mural working on the canvas:
        rendering, arrows, text, the parts people use all day.
      </p>
      <p>
        I like product work, where the user is a real person and not a ticket. Lately that means
        frontend with complex interactions: working out how it should be built, then planning how to
        get there.
      </p>
    </section>
  );
};
