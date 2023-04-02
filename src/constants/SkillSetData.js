import {
  c,
  cpp,
  css,
  expressJS,
  figma,
  firebase,
  git,
  github,
  html,
  java,
  javascript,
  mongoDB,
  mySql,
  nextJS,
  nodeJS,
  postman,
  python,
  reactJS,
  redux,
  tailwindCSS,
  typescript,
  viteJS,
  vsCode
} from '../assets';

const SkillSetData = [
  {
    type: 'Languages',
    skills: [
      {
        name: 'C',
        icon: c,
        exposure: '3+ Years',
        description: 'General-purpose, imperative programming language.',
        borderColor: 'border-indigo-800 dark:border-indigo-800'
      },
      {
        name: 'C++',
        icon: cpp,
        exposure: '3+ Years',
        description:
          'Fastest, High-level, object-oriented programming language.',
        borderColor: 'border-blue-500 dark:border-blue-500'
      },
      {
        name: 'Java',
        icon: java,
        exposure: '3+ Years',
        description: 'Class-based, object-oriented programming language.',
        borderColor: 'border-red-500 dark:border-red-500'
      },
      {
        name: 'Python',
        icon: python,
        exposure: '2+ Years',
        description: 'Simple, versatile programming language.',
        borderColor: 'border-yellow-400 dark:border-yellow-400'
      },
      {
        name: 'HTML',
        icon: html,
        exposure: '3+ Years',
        description: 'Document markup language for web browser.',
        borderColor: 'border-orange-500 dark:border-orange-500'
      },
      {
        name: 'CSS',
        icon: css,
        exposure: '3+ Years',
        description: 'Style sheet language to design HTML/XML content.',
        borderColor: 'border-blue-400 dark:border-blue-400'
      },
      {
        name: 'JavaScript',
        icon: javascript,
        exposure: '3+ Years',
        description: 'High-level language to add interactivity to web pages.',
        borderColor: 'border-amber-500 dark:border-amber-500'
      },
      {
        name: 'TypeScript',
        icon: typescript,
        exposure: '0+ Years',
        description: 'Strongly typed High-level programming language.',
        borderColor: 'border-blue-400 dark:border-blue-400'
      }
    ]
  },
  {
    type: 'Frameworks',
    skills: [
      {
        name: 'Tailwind CSS',
        icon: tailwindCSS,
        exposure: '2+ Years',
        description:
          'Highly customizable utility-first CSS framework to create custom designs.',
        borderColor: 'border-cyan-700 dark:border-cyan-700'
      },
      {
        name: 'React JS',
        icon: reactJS,
        exposure: '1+ Years',
        description:
          'JavaScript library for building user interfaces based on components.',
        borderColor: 'border-cyan-500 dark:border-cyan-500'
      },
      {
        name: 'Redux',
        icon: redux,
        exposure: '0+ Years',
        description: 'JavaScript library for managing application state.',
        borderColor: 'border-violet-600 dark:border-violet-600'
      },
      {
        name: 'Node JS',
        icon: nodeJS,
        exposure: '1+ Years',
        description:
          "JavaScript runtime built on Chrome's V8 JavaScript engine.",
        borderColor: 'border-green-600 dark:border-green-600'
      },
      {
        name: 'Express JS',
        icon: expressJS,
        exposure: '0+ Years',
        description:
          'Fast, minimalist, flexible and robust web framework for Node JS.',
        borderColor: 'border-gray-500 dark:border-gray-500'
      },
      {
        name: 'Next JS',
        icon: nextJS,
        exposure: '0+ Years',
        description:
          'React JS framework to build web-apps using server-side rendered rendering.',
        borderColor: 'border-black dark:border-white'
      },
      {
        name: 'Firebase',
        icon: firebase,
        exposure: '0+ Years',
        description:
          'Mobile and web application development platform by Google.',
        borderColor: 'border-amber-500 dark:border-amber-500'
      },
      {
        name: 'MongoDB',
        icon: mongoDB,
        exposure: '1+ Years',
        description:
          'NoSQL document database used for high-volume data storage.',
        borderColor: 'border-green-500 dark:border-green-500'
      },
      {
        name: 'MySQL',
        icon: mySql,
        exposure: '0+ Years',
        description: 'SQL based relational database management system.',
        borderColor: 'border-amber-600 dark:border-amber-600'
      }
    ]
  },
  {
    type: 'Others',
    skills: [
      {
        name: 'Vite JS',
        icon: viteJS,
        exposure: '2+ Years',
        description: 'Next generation frontend tooling comes with dev server.',
        borderColor: 'border-fuchsia-700 dark:border-fuchsia-700'
      },
      {
        name: 'Git',
        icon: git,
        exposure: '2+ Years',
        description:
          'Version control system used for tracking changes in computer files.',
        borderColor: 'border-orange-600 dark:border-orange-600'
      },
      {
        name: 'Github',
        icon: github,
        exposure: '2+ Years',
        description:
          'Code hosting platform for version control and collaboration.',
        borderColor: 'border-black dark:border-white'
      },
      {
        name: 'Figma',
        icon: figma,
        exposure: '0+ Years',
        description:
          'Browser-based interface design and prototyping tool for creating UIs.',
        borderColor: 'border-rose-500 dark:border-rose-500'
      },
      {
        name: 'VS Code',
        icon: vsCode,
        exposure: '3+ Years',
        description:
          'Lightweight but powerful Source code editor, supports all languages.',
        borderColor: 'border-cyan-600 dark:border-cyan-600'
      },
      {
        name: 'Postman',
        icon: postman,
        exposure: '0+ Years',
        description:
          'Helps to write functional tests, integration tests, regression tests, and more.',
        borderColor: 'border-orange-500 dark:border-orange-500'
      }
    ]
  }
];

export default SkillSetData;
