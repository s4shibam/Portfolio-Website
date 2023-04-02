import {
  calculatorImg,
  certivitaImg,
  clockImg,
  filminggImg,
  formImg,
  quizzyImg,
  screnooImg,
  sudokuImg
} from '../assets';

const ProjectData = [
  {
    name: 'Quizzy',
    image: quizzyImg,
    description: 'Online Quiz Application',
    demo: 'https://s4shibam-quizzy.netlify.app/',
    code: 'https://github.com/s4shibam/Quizzy-Quiz-Application',
    features: [
      'Play quizzes on 20+ computer science topics.',
      'Login to access quizzes and watch videos.',
      'Download progress certificate upon completion.',
      'Tech Stack: React.JS, Firebase, TailwindCSS, Vite.JS'
    ],
    borderColor: 'border-violet-500 dark:border-violet-500'
  },
  {
    name: 'Sudoku Solver',
    image: sudokuImg,
    description: 'Generate & Solve Sudoku Puzzle',
    demo: 'https://s4shibam-sudoku-solver.netlify.app/',
    code: 'https://github.com/s4shibam/Sudoku-Solver-Web-App',
    features: [
      'Generate random sudoku puzzle problems to solve.',
      'Solve any given valid sudoku puzzle.',
      'Visualize how backtracking algorithm works in-real.',
      'Tech Stack: HTML, TailwindCSS, Vite.JS'
    ],
    borderColor: 'border-orange-400 dark:border-orange-400'
  },
  {
    name: 'Certivita',
    image: certivitaImg,
    description: 'Generate PDF Certificate',
    demo: 'https://s4shibam-certivita.netlify.app/',
    code: 'https://github.com/s4shibam/Certivita-Certificate-Generator',
    features: [
      'Generate customize certificate for your own.',
      'Preview generated certificate on preview panel.',
      'Download the certificate in PDF format.',
      'Tech Stack: HTML, TailwindCSS, PDF-LIB.JS'
    ],
    borderColor: 'border-lime-500 dark:border-lime-500'
  },
  {
    name: 'Screnoo',
    image: screnooImg,
    description: 'PC Screen Recorder',
    demo: 'https://s4shibam-screnoo.netlify.app/',
    code: 'https://github.com/s4shibam/Screnoo-PC-Screen-Recorder',
    features: [
      'Record computer screen along with audio.',
      'Download in MP4 format.',
      'Supports upto 1080p resolution.',
      'Tech Stack: HTML, TailwindCSS, JavaScript'
    ],
    borderColor: 'border-teal-500 dark:border-teal-500'
  },
  {
    name: 'Filmingg',
    image: filminggImg,
    description: 'Movie & Web Series Database',
    demo: 'https://s4shibam-filmingg.netlify.app/',
    code: 'https://github.com/s4shibam/Filmingg-Movie-Database',
    features: [
      'Search for any movies in the world.',
      'Get information about rating, director, cast etc.',
      'Redirect to google results by clicking on the image.',
      'Tech Stack: HTML, TailwindCSS, JavaScript'
    ],
    borderColor: 'border-amber-500 dark:border-amber-500'
  },
  {
    name: 'Calculator',
    image: calculatorImg,
    description: 'Calculator',
    demo: 'https://s4shibam-calculator.netlify.app/',
    code: 'https://github.com/s4shibam/Calculator',
    features: [
      'Simple & responsive Javascript calculator.',
      'Beautiful UI along with moving bubble background.',
      'Javascript "calc()" function was used behind this.',
      'Tech Stack: HTML, CSS, JavaScript'
    ],
    borderColor: 'border-cyan-500 dark:border-cyan-500'
  },
  {
    name: 'Clock',
    image: clockImg,
    description: 'Digital Clock',
    demo: 'https://s4shibam-digitalclock.netlify.app/',
    code: 'https://github.com/s4shibam/Digital-Clock',
    features: [
      'Responsive color changing digital clock.',
      'Contains AM - PM indication.',
      'This clock shows correct time always.',
      'Tech Stack: HTML, CSS, JavaScript'
    ],
    borderColor: 'border-pink-500 dark:border-pink-500'
  },
  {
    name: 'Form UI',
    image: formImg,
    description: 'Glassmorphism Form UI',
    demo: 'https://s4shibam-registrationform.netlify.app/',
    code: 'https://github.com/s4shibam/Registration-Form-UI',
    features: [
      'New user registration form for websites.',
      'Log-in with Google or Linkedin icon.',
      'And, that is it!',
      'Tech Stack: HTML & CSS only'
    ],
    borderColor: 'border-purple-400 dark:border-purple-400'
  }
];

export default ProjectData;
