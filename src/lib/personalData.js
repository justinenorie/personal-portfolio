// Icon Imports Here from React Icons
import {
  FaGithub,
  FaFacebook,
  FaFreeCodeCamp,
  FaSkype,
  FaReact,
  FaNodeJs,
  FaCss3Alt,
  FaHtml5,
  FaGitAlt,
} from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import { SiExpress, SiMongodb } from 'react-icons/si';
import { RiTailwindCssFill } from 'react-icons/ri';
import { FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

// Three Main Contact Accounts
const myAccounts = [
  {
    icon: FaGithub,
    link: 'https://github.com/justinenorie',
    name: 'Github',
  },
  {
    icon: FaLinkedin,
    link: 'https://github.com/',
    name: 'Linkedin',
  },
  {
    icon: MdEmail,
    link: 'mailto:justinedelacruz97@gmail.com',
    name: 'Gmail',
  },
];

// Any Other Accounts Here
const otherSocials = [
  {
    icon: FaFacebook,
    link: 'https://github.com/',
    name: 'Facebook',
  },
  {
    icon: FaFreeCodeCamp,
    link: 'https://github.com/',
    name: 'FreeCodeCamp',
  },
  {
    icon: FaSkype,
    link: 'https://github.com/',
    name: 'Skype',
  },
  {
    icon: FaSkype,
    link: 'https://github.com/',
    name: 'Skype',
  },
];

// My Projects Data
const projects = [
  {
    image: '/Rectangle.svg',
    projectName: 'Project',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mollis quam nec nisi ultrices, quis aliquet tortor dictum. Nam sed vestibulum magna. Nulla varius odio et sapien efficitur, id varius mauris gravida. ',
    githubLink: 'https://github.com/justinenorie',
    webAppURL: 'https://vercel.com/justinenories-projects',
    techStacks: ['JavaScript', 'NodeJS', 'MongoDB', 'ReactJS'],
  },
  {
    image: '/Rectangle.svg',
    projectName: 'Project',
    description: 'Description',
    githubLink: 'https://github.com/justinenorie',
    webAppURL: 'https://vercel.com/justinenories-projects',
    techStacks: ['JavaScript', 'NodeJS', 'ExpressJS'],
  },
];

// Experience Data
const experience = [
  {
    companyLogo: '',
    position: 'Full Stack Developer',
    company: 'Company',
    duration: 'July 2022 - November 2023',
    location: 'Philippines, Quezon City (Onsite)',
    description: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed at nisi sit amet justo malesuada porta. Etiam vitae magna eu augue tristique faucibus. Morbi at nulla auctor, vestibulum magna sed, convallis ex. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed at nisi sit amet justo malesuada porta. Etiam vitae magna eu augue tristique faucibus. ',
      'Hey',
      'Yow',
    ],
  },
  {
    companyLogo: '',
    position: 'Full Stack Developer',
    company: 'Company',
    duration: 'July 2022 - November 2023',
    location: 'Philippines, Quezon City (Onsite)',
    description: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed at nisi sit amet justo malesuada porta. Etiam vitae magna eu augue tristique faucibus. Morbi at nulla auctor, vestibulum magna sed, convallis ex. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed at nisi sit amet justo malesuada porta. Etiam vitae magna eu augue tristique faucibus. ',
      'Hey',
    ],
  },
];

const techStacks = [
  { icon: FaHtml5, name: 'HTML', color: '#E34F26' },
  { icon: FaCss3Alt, name: 'CSS', color: '#254ADC' },
  { icon: IoLogoJavascript, name: 'JavaScript', color: '#FFD600' },
  { icon: RiTailwindCssFill, name: 'Tailwind CSS', color: '#38BDF8' },
  { icon: FaReact, name: 'ReactJS', color: '#61DBFB' },
  { icon: FaReact, name: 'React Native', color: '#61DBFB' },
  { icon: FaNodeJs, name: 'NodeJS', color: '#68A063' },
  { icon: SiExpress, name: 'ExpressJS', color: '#828282' },
  { icon: SiMongodb, name: 'MongoDB', color: '#01F365' },
  { icon: FaGithub, name: 'GitHub', color: '#fefffe' },
  { icon: FaGitAlt, name: 'Git', color: '#F05032' },
];

const data = {
  myAccounts,
  otherSocials,
  techStacks,
  projects,
  experience,
};

export default data;
