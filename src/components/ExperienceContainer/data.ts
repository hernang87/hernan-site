import { type Company } from '../../types';

const webflow: Company = {
  name: 'Webflow',
  logo: {
    url: '/images/webflow-logo.png'
  },
  positions: [
    {
      position: 'Senior Software Engineer',
      description: ['Built Page Settings bindings for active page metadata'],
      stack: ['TypeScript', 'AI', 'Systems design'],
      from: new Date('2026-01-01')
    }
  ]
};

const mural: Company = {
  name: 'Mural',
  logo: {
    url: '/images/mural-logo.jpeg'
  },
  positions: [
    {
      position: 'Senior Software Engineer',
      summary: 'Owned user interactions and canvas navigation.',
      stack: ['TypeScript', 'React', 'Node.js', 'MongoDB', 'REST'],
      description: [
        'Added custom hit points to SVG shapes for diagramming.',
        'Rewrote arrows from scratch. Arrow bug reports dropped to near zero.',
        'Unified the text input tools across the app, so new features build on one implementation.',
        'Worked with product and design on onboarding.',
        'Was on the architecture team, working on reactive behaviors.'
      ],
      from: new Date('2022-08-01'),
      to: new Date('2026-01-01')
    },
    {
      position: 'Software Engineer',
      description: [
        'Designed and built the Infinite Canvas, now the default for every new mural.',
        'Added a dot grid for aligning elements.',
        'Wrote a Canvas2D rendering engine in TypeScript. Worst-case frame rate went from ~10 to ~40 fps.',
        'Built visual tests that compare expected and actual renders. Fewer bugs and regressions.',
        'Shipped the engine into the main app.'
      ],
      stack: ['TypeScript', 'React', 'Canvas2D'],
      from: new Date('2019-11-01'),
      to: new Date('2022-07-31')
    }
  ]
};

const possible: Company = {
  name: 'Possible Worldwide',
  logo: {
    url: 'images/possible-logo.jpeg',
    withBorder: true
  },
  positions: [
    {
      position: 'Lead Developer',
      description: [
        'Estimated projects and checked whether creative pitches were technically doable.',
        'Supported the dev team and wrote code alongside them.',
        'Built prototypes for new business pitches.',
        'Built internal comms landing pages for Microsoft.',
        'Mentored junior developers.'
      ],
      stack: ['JavaScript', 'Sass', 'Webpack', 'ESLint'],
      from: new Date('2019-02-01'),
      to: new Date('2019-11-01')
    }
  ]
};

const softvision: Company = {
  name: 'Softvision',
  positions: [
    {
      position: 'Senior Software Engineer',
      description: [
        'Frontend applications development using React, Redux and Sass',
        'Backend development using Node'
      ],
      stack: ['TypeScript', 'React', 'Redux', 'Node.js', 'MongoDB', 'Sass'],
      from: new Date('2018-04-01'),
      to: new Date('2019-02-01')
    }
  ]
};

const rga: Company = {
  name: 'R/GA',
  logo: {
    url: '/images/rga-logo.jpeg'
  },
  positions: [
    {
      position: 'Software Engineer',
      description: [
        'Built web apps with various JS frameworks and Sass.',
        'Built APIs in PHP/Laravel (MySQL) and Node (MySQL, MongoDB).',
        'Developer on Google Brandhack projects.'
      ],
      stack: ['Node.js', 'PHP', 'Laravel', 'MySQL', 'MongoDB', 'Ember.js'],
      from: new Date('2015-07-01'),
      to: new Date('2018-01-01')
    }
  ]
};

const vm: Company = {
  name: 'Software Mind',
  logo: {
    url: '/images/vm-logo.jpeg'
  },
  positions: [
    {
      position: 'Software Engineer',
      description: [
        'Nexage - Ember.JS development.',
        'Spredfast (in Austin, TX) – CanJS, Handlebars and Sass development',
        'MarketingG2 – Knockout.js and Less implementation'
      ],
      from: new Date('2013-12-01'),
      to: new Date('2015-07-01')
    }
  ]
};

const tecnosoftware: Company = {
  name: 'Tecnosoftware',
  positions: [
    {
      position: 'Software Engineer',
      description: [
        'On client position at Telecom Personal doing SharePoint development and analyzing different ways to improve workflows.'
      ],
      from: new Date('2013-02-01'),
      to: new Date('2013-11-01')
    }
  ]
};

const w3: Company = {
  name: 'W3 Comunicación',
  logo: {
    url: '/images/w3-logo.jpeg'
  },
  positions: [
    {
      position: 'Software Engineer',
      description: [
        'On site position at TecPetrol',
        'Web development using HTML, CSS and Javascript while using C# for backend'
      ],
      from: new Date('2010-01-01'),
      to: new Date('2013-02-01')
    }
  ]
};

export const experienceData: Company[] = [webflow, mural, possible, softvision, rga];

export const earlierExperienceData: Company[] = [vm, tecnosoftware, w3];
