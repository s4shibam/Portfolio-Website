import { contentWriter, jobSearch, webDeveloper } from '../assets';

const ExperienceData = [
  {
    designation: 'Open To Work',
    icon: jobSearch,
    tenure: 'XX - XX',
    company: [
      {
        name: 's4shibam@gmail.com',
        link: 'https://mail.google.com/mail/u/0/?fs=1&tf=cm&to=s4shibam@gmail.com',
        css: 'text-red-500 border-red-500 dark:border-red-500'
      }
    ],
    points: [
      'Interested in Frontend, Backend, Fullstack.',
      'Looking for Remote/Onsite opportunities.',
      'Free to learn new technologies.'
    ]
  },
  {
    designation: 'Freelance Web Developer',
    icon: webDeveloper,
    tenure: '2023 - Present',
    company: [
      {
        name: 'Upwork',
        link: '#',
        css: 'text-green-500 border-green-500 dark:border-green-500'
      },
      {
        name: 'Freelancer',
        link: '#',
        css: 'text-blue-500 border-blue-500 dark:border-blue-500'
      }
    ],
    points: [
      'Web applications development for clients.',
      'Codebase maintenance.',
      'Technology migration.'
    ]
  },
  {
    designation: 'Technical Content Writer',
    icon: contentWriter,
    tenure: '2022 - Present',
    company: [
      {
        name: 'LeetCode',
        link: '#',
        css: 'text-amber-500 border-amber-500 dark:border-amber-500'
      },
      {
        name: 'GFG',
        link: 'https://auth.geeksforgeeks.org/user/s4shibam/articles',
        css: 'text-green-600 border-green-600 dark:border-green-600'
      }
    ],
    points: [
      'Writing content on emerging technologies.',
      'Review & moderation of content.',
      'Exploring new technologies.'
    ]
  }
];

export default ExperienceData;
