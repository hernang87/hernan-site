import { type Company } from '../../types';

const mural: Company = {
  name: 'Mural',
  logo: {
    url: 'https://media.licdn.com/dms/image/C4E0BAQGQsTygnkEJnA/company-logo_200_200/0/1670343515708/muralco_logo?e=1727913600&v=beta&t=xnsv7cb7odNgr4gAc26d5QkYVrb067p_4j4AQso2H0Y'
  },
  positions: [
    {
      position: 'Senior Software Engineer',
      description: [
        'Promoted to Senior Engineer and handling both user interactions and how users browse our canvases.',
        'Developed and implemented custom hit points in SVG shapes, optimizing diagramming functionality. ',
        'Re-engineered the arrows logic from the ground up, reducing related bug reports to near zero. ',
        'Standardized text input tools across the application, enhancing consistency and enabling future feature development. ',
        'Collaborated with product and design teams to improve user onboarding and streamline application usability. ',
        'Contributed to the architecture definition team, creating reactive behaviors to enhance system responsiveness and scalability.'
      ],
      from: new Date('2022-08-01')
    },
    {
      position: 'Software Engineer',
      description: [
        'Designed and developed the Infinite Canvas, which have become the default tool for creating murals inside the application',
        'Implemented a dot grid to simplify element alignment',
        'Built a custom rendering engine using Canvas2D and TypeScript, that specializes in performance optimization, resulting in an increase in frame rate from low 10s to low 40s in worst-case situations',
        'Created a testing out for the rendering engine for comparing expected and actual renders, notably decreasing the number of bugs and regressions',
        'Successfully integrated the rendering engine into the main application'
      ],
      from: new Date('2019-04-11'),
      to: new Date('2022-07-31')
    }
  ]
};

const possible: Company = {
  name: 'Possible Worldwide',
  logo: {
    url: 'https://media.licdn.com/dms/image/C4D0BAQH88SE97KUjUA/company-logo_100_100/0/1630531531610/possible_com_logo?e=1727913600&v=beta&t=jk0qptaMuybarhvA8AiZi5JWz6YjJDLBXg5aJo0mxe8',
    withBorder: true
  },
  positions: [
    {
      position: 'Lead Developer',
      description: [
        'Conducted project estimations and assessed the technical feasibility of creative proposals. ',
        'Provided ongoing support to the tech team and contributed to development efforts. ',
        'Built prototypes for new business proposals to explore potential opportunities.',
        'Developed landing pages internal communications for Microsoft, ensuring effective information dissemination.',
        'Mentored junior developers, fostering their growth and technical skill development.'
      ],
      from: new Date('2019-02-01'),
      to: new Date('2019-11-04')
    }
  ]
};

const rga: Company = {
  name: 'R/GA',
  logo: {
    url: 'https://media.licdn.com/dms/image/D4E0BAQGONAoWOcssqA/company-logo_100_100/0/1680533527224/r_ga_logo?e=1727913600&v=beta&t=LT7x8bMq3CUA8mk9FEHfDE0wHrFeBAGHTjTJIsyypgU'
  },
  positions: [
    {
      position: 'Senior Developer',
      description: [
        'Built web applications using multiple JavaScript frameworks and Sass, creating dynamic and scalable solutions.',
        'Developed APIs with PHP using Laravel and integrating it with mysql',
        'Node APIs development using mysql and mongodb',
        'Contributed as a developer in Google Brandhack tasks, collaborating on modern and excessive-impact'
      ],
      from: new Date('2015-07-01'),
      to: new Date('2018-01-01')
    }
  ]
};

const vm: Company = {
  name: 'Virtualmind Software House',
  logo: {
    url: 'https://media.licdn.com/dms/image/D4D0BAQEbScL_UhMAOw/company-logo_100_100/0/1700753354131/virtualmind_com_logo?e=1727913600&v=beta&t=iYvNmhM2jo3kcgAYJeJnjrRrHgnjBF4v801U4uiBCdc'
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
      to: new Date('2015-06-01')
    }
  ]
};

const w3: Company = {
  name: 'W3 Comunicación',
  logo: {
    url: 'https://media.licdn.com/dms/image/C4E0BAQE-G9WGmcBMMQ/company-logo_100_100/0/1630597283401/w3digitalagency_logo?e=1727913600&v=beta&t=XLeVqiHtMP12qk-1vYbCJ6PAjiMoCRdr0ZxoN9htsCs'
  },
  positions: [
    {
      position: 'Web Developer',
      description: [
        'On site position at TecPetrol',
        'Web development using HTML, CSS and Javascript while using C# for backend'
      ],
      from: new Date('2013-02-01'),
      to: new Date('2014-01-01')
    }
  ]
};

export const experienceData: Company[] = [mural, possible, rga, vm, w3];
