import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  nest,
  jenkins,
  vagrant,
  esprit,
  terrakodo,
  sqliservices,
  parapharmacy,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  login,
  field4yield,
  social
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Software Architect",
    icon: backend,
  },
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "DevOps",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "jenkins",
    icon: jenkins,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "vagrant",
    icon: vagrant,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "nest",
    icon: nest,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Mobile Application Developer",
    company_name: "Parapharmacy Mariem",
    icon: parapharmacy,
    iconBg: "#383E56",
    date: "February 2020 - July 2020",
    points: [
      "Collaboration with the staff in the design, development, testing and implementation of the mobile application.",
      "Conception, development and integration of a mobile application Para-Ma.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Esprit",
    icon: esprit,
    iconBg: "#E6DEDD",
    date: "July 2021 - August 2022",
    points: [
      "Conception,development and integration of a website Social-Street-League.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Support project management activities.",
    ],
  },
  {
    title: " Web Developer and Devops assistant",
    company_name: "Terrakodo",
    icon: terrakodo,
    iconBg: "#383E56",
    date: "June 2023 - August 2023",
    points: [
      "Conception, development and deployment of a website Field4Yield.",
      "Automated build and deployment process with jenkins.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "Full stack Developer and Devops assistant",
    company_name: "SQLI Services",
    icon: sqliservices,
    iconBg: "#E6DEDD",
    date: "Jan 2024 - July 2024",
    points: [
      "Conception, development and deployment of a website and mobile application Transporty",
      "Automated build and deployment process with jenkins",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Transporty",
    description:
      "Web and mobile application that allows entreprises and grocery owners to track transporters in real time, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "nest-js",
        color: "pink-text-gradient",
      },
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "jenkins",
        color: "pink-text-gradient",
      },
    ],
    image: login,
    source_code_link: "https://github.com/iheblafi/Transportation",
  },
  {
    name: "Field4Yield",
    description:
      "Web application that enables young farmers to connect, create or participate and locate available farming projects based on their current location providing a comprehensive and efficient solution.",
    tags: [
      {
        name: "Angular",
        color: "pink-text-gradient",
      },
      {
        name: "Docker",
        color: "blue-text-gradient",
      },
      {
        name: "Jenkins",
        color: "green-text-gradient",
      },
      {
        name: "Laravel",
        color: "pink-text-gradient",
      },
    ],
    image: field4yield,
    source_code_link: "https://github.com/",
  },
  {
    name: "Social street league",
    description:
      "A comprehensive and user friendly sport social platform that allows users to check and navigate through the latest sport news and also offers recommendations for popular events.",
    tags: [
      {
        name: "git",
        color: "pink-text-gradient",
      },
      {
        name: "Django",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: social,
    source_code_link: "https://github.com/iheblafi/SocialStreetLeague",
  },
];

export { services, technologies, experiences, testimonials, projects };
