import { FaGithub, FaFacebook, FaFreeCodeCamp, FaSkype } from 'react-icons/fa';
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

// Three Main Contact Accounts
const myAccounts = [
  {
    icon: FaGithub,
    link: "https://github.com/justinenorie",
    name: "Github"
  },
  {
    icon: FaLinkedin,
    link: "https://github.com/",
    name: "Linkedin"
  },
  {
    icon: MdEmail,
    link: "mailto:justinedelacruz97@gmail.com",
    name: "Gmail"
  }
];

// Any Accounts here
const otherSocials = [
  {
    icon: FaFacebook,
    link: "https://github.com/",
    name: "Facebook"
  },
  {
    icon: FaFreeCodeCamp,
    link: "https://github.com/",
    name: "FreeCodeCamp"
  },
  {
    icon: FaSkype,
    link: "https://github.com/",
    name: "Skype"
  },
  {
    icon: FaSkype,
    link: "https://github.com/",
    name: "Skype"
  },
]

// Experience tab here
const experience = [
  {
    companyLogo: "",
    position: "Full Stack Developer",
    company: "Company",
    duration: "July 2022 - November 2023",
    location: "Philippines, Quezon City (Onsite)",
    description: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed at nisi sit amet justo malesuada porta. Etiam vitae magna eu augue tristique faucibus. Morbi at nulla auctor, vestibulum magna sed, convallis ex. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed at nisi sit amet justo malesuada porta. Etiam vitae magna eu augue tristique faucibus. ", "Hey", "Yow"]
  },
  {
    companyLogo: "",
    position: "Full Stack Developer",
    company: "Company",
    duration: "July 2022 - November 2023",
    location: "Philippines, Quezon City (Onsite)",
    description: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed at nisi sit amet justo malesuada porta. Etiam vitae magna eu augue tristique faucibus. Morbi at nulla auctor, vestibulum magna sed, convallis ex. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed at nisi sit amet justo malesuada porta. Etiam vitae magna eu augue tristique faucibus. ", "Hey"]
  },
];

const data = {
  myAccounts,
  otherSocials,
  experience
};

export default data;
