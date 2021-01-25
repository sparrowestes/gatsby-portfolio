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
  name: 'Sparrow Estes',
  subtitle: 'designer = ( ) => { developer }',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profilepic.jpg',
  paragraphOne:
    'Designer with a recently aquired web development certification seeking a career that will allow my professional skills, experience, and education to benefit an organization.',
  paragraphTwo:
    'Ready to create high engaging content and features that users find interesting and interactive by bringing good mastery of Adobe Creative Suite, modern HTML, CSS, and JavaScript, as well as a robust ability to execute and complete print and web-based projects.',
  paragraphThree: '',
  resume: 'https://drive.google.com/file/d/10mxWY-pu-rrstILgSl8174tc4pMCUaf0/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project1.jpg',
    title: 'Netflix Clone App',
    info: 'Clone of Netflix app. Built using React Functional Components and TMDB API.',
    info2: '',
    url: 'https://netflixclonebysparrow.netlify.app',
    repo: 'https://github.com/sparrowestes/netflix-clone', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project2.jpg',
    title: 'Responsive Website',
    info: 'Responsive website built using Vanilla Javascript and CSS.',
    info2: '',
    url: 'https://responsivewebsitebysparrow.netlify.app',
    repo: 'https://github.com/sparrowestes/responsive-website', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project3.jpg',
    title: 'Lyric Finder App',
    info:
      'App that finds song lyrics using React and the Musixmatch API. Built using Class Based Components and styled with Bootstrap.',
    info2: '',
    url: 'https://lyricfinderbysparrow.netlify.app',
    repo: 'https://github.com/sparrowestes/lyric-finder-class', // if no repo, the button will not show up
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
    // {
    //   id: nanoid(),
    //   name: 'twitter',
    //   url: '',
    // },
    // {
    //   id: nanoid(),
    //   name: 'codepen',
    //   url: '',
    // },
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
