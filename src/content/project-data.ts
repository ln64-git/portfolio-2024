const projectData = [
  {
    name: 'Personal Portfolio',
    date: 'January 2024',
    summary:
      'Modern and lightweight portfolio designed to demonstrate an adept understanding of modern CSS alongside contemporary JavaScript libraries such as Framer Motion and emailJS',
    image: 'portfolio',
    techArray: ['next', 'react'],
    demoUrl: 'https://lucian.bio/',
    githubUrl: 'https://github.com/lucian1996/vite-react-portfolio',
    textLeft: true
  },
  {
    name: 'Splitscreen Video',
    date: 'November 2023',
    summary:
      'Web based multi-screen media player that utilizes Zustand state management and for a responsive tiled media experience, designed for sporting events, audio / visual technicians and individuals who prefer multitasking.',
    image: 'splitscreen-video',
    techArray: ['next', 'react', 'zustand'],
    demoUrl: 'https://splitscreen-video.vercel.app/',
    githubUrl: 'https://github.com/lucian1996/splitscreen-video',
    textLeft: true
  },

  {
    name: 'CinDay Computer Database',
    date: 'July 2023',
    summary:
      'Full-stack React application using Next.js and Prisma to track student laptops and iPads, leveraging Redux state management, automated ORM, and the benefits of server-side rendering (SSR) for improved performance and user experience.',
    image: 'database',
    techArray: ['next', 'react', 'prisma', 'redux'],
    demoUrl: 'https://computer-database-demo.vercel.app/',
    githubUrl: 'https://github.com/lucian1996/database-ui',
    textLeft: false
  },
  {
    name: 'StockOverflow',
    date: 'December 2022',
    summary:
      'Full-stack Vue application that utilizes RESTful API calls to store entries inside of a PostgreSQL database. The application features user authentication and a reactive front-end interface that enables users to create, read, update, and delete shared grocery lists.',
    image: 'stockOverflow',
    techArray: ['vue', 'springboot', 'java'],
    githubUrl: 'https://github.com/lucian1996/stockOverflow',
    textLeft: false
  }
];

export default projectData;
