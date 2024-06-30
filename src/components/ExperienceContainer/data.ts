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
        'Implemented custom hit points in SVG shapes for easier diagramming',
        'Rewrote the arrows logic from scratch and reported bugs decresed to almost zero',
        'Replaced our text input tools for new ones in order to achieve coherence across all the application and allow for development of new features',
        'Worked with product to simplify the user experience of the application'
      ],
      from: new Date('2022-08-01')
    },
    {
      position: 'Software Engineer',
      description: [
        'Designed and developed the Infinite Canvas for our application which became a default way of creating murals',
        'Implemented the dot grid in the background so elements could easily be aligned',
        'Implemented support for rich text becoming for post it notes, then becoming the standard for all elements in the murals',
        'Lead list implementation for rich text elements'
      ],
      from: new Date('2020-06-01'),
      to: new Date('2022-07-01')
    },
    {
      position: 'Software Engineer',
      description: [
        'Developed an in house rendering engine using Canvas2D and Typescript with a special focus on performance, increasing frame rate from low 10s to low 40s in the worst case scenarios',
        'Developed testing rig for the rendering engine by comparing the expected render the result with the current one generated by the application in order to catch differences and the number of bugs this project had was pretty low',
        'Integrated the rendering engine into the main web application'
      ],
      from: new Date('2019-04-11'),
      to: new Date('2020-05-31')
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
        'Project estimations and tech feasibility of creative proposals to present to clients',
        'Prototype building for new business proposals',
        'Tech team support and development to achieve our deadlines'
      ],
      from: new Date('2019-09-01'),
      to: new Date('2019-11-04')
    },
    {
      position: 'Senior Fullstack Developer',
      description: [
        'Landing page development for Microsoft internal communications',
        'Mentoring of junior developers'
      ],
      from: new Date('2019-02-01'),
      to: new Date('2019-09-01')
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
        'Building web application using various Javascript frameworks and Sass',
        'PHP API development using Laravel',
        'Node API development with MongoDB',
        'Developer in Google Brandhack projects'
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
      to: new Date('2010-01-01')
    }
  ]
};

export const experienceData: Company[] = [mural, possible, rga, vm, w3];