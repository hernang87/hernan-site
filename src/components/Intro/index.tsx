import * as React from 'react';

export const Intro: React.FC = () => {
  return (
    <section className="mb-16 space-y-4 text-lg" aria-labelledby="intro-heading">
      <h2 id="intro-heading" className="sr-only">
        About Me
      </h2>
      <p>
        I&apos;m a senior software engineer at Webflow, based in Buenos Aires. I built the global
        locale bindings that let Webflow sites offer language and region switchers that update on
        their own, and the bindings for page settings.
      </p>
      <p>
        Before Webflow I spent six years at Mural, working on the canvas itself. I designed the
        infinite canvas that became the default for every new mural, and wrote the Canvas2D
        rendering engine behind it, which took worst-case frame rate from about 10 fps to 40. Later
        I rewrote how arrows work, and arrow bug reports dropped close to zero.
      </p>
      <p>
        I work on both frontend and backend. I&apos;m happiest on products with complex
        interactions, where I can get involved early and help decide how they get built.
      </p>
    </section>
  );
};
