import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Sparrow Estes | Portfolio', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: 'Welcome to my website!', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: '',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profilepic.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://drive.google.com/file/d/1LU-temfmvtkXM3kFNWp7ilKuASh0UukL/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project1.jpg',
    title: 'Netflix Clone App',
    info: 'Clone of Netflix app. Built using React Hooks and TMDB API.',
    info2: '',
    url: 'https://netflixclonebysparrow.netlify.app',
    repo: 'https://github.com/sparrowestes/netflix-clone', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project2.jpg',
    title: 'Task Manager App',
    info: 'Task Manager App built with React Hooks and Context API.',
    info2: '',
    url: 'https://taskmanagerappbysparrow.netlify.app',
    repo: 'https://github.com/sparrowestes/task-manager', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project4.jpg',
    title: 'Responsive Website',
    info: 'Responsive website built using HTML and CSS.',
    info2: '',
    url: 'https://responsivewebsitebysparrow.netlify.app',
    repo: 'https://github.com/sparrowestes/responsive-website', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'sparrowestes@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/sparrow-estes/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/sparrowestes',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
