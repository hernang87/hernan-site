import * as React from 'react';

export const Intro: React.FC = () => {
  return (
    <section className="mb-16 space-y-4 text-lg" aria-labelledby="intro-heading">
      <h2 id="intro-heading" className="sr-only">
        About Me
      </h2>
      <p>
        I&apos;m a software engineer at Webflow. Before that I spent six years at Mural, mostly on
        the canvas itself: the rendering engine, arrows, text editing, and how people move around a
        mural.
      </p>
      <p>
        I work on both frontend and backend, and I enjoy products with complex user interactions the
        most. I like getting involved early, figuring out how something should be built, and then
        planning the work to ship it.
      </p>
    </section>
  );
};
