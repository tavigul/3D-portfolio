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
  webpack,
  vuejs,
  mongodb,
  git,
  figma,
  docker,
  groupbwt,
  askartec,
  saltex,
  kicb,
  optima,
  tripguide,
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Vue Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
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
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Vue JS",
    icon: vuejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Webpack",
    icon: webpack,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "Node.js",
    icon: nodejs,
  },
];

const experiences = [
  {
    title: "Web Developer",
    company_name: "Saltex",
    icon: saltex,
    iconBg: "#383E56",
    date: "Feb 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and Vue.js technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "GroupBWT",
    icon: groupbwt,
    iconBg: "#383E56",
    date: "Feb 2022 - Feb 2023",
    points: [
      "Responsible for creating effective design and development of user interaction screens using Vue.js and React.js for US and European projects.",
      "Led front-end projects in two directions: e-commerce and charity. Led the integration of Shopify to deliver a headless eCommerce customer experience that resulted in a 15% increase in leads for the Dutch company.",
      "Translated user requirements into scalable code, developed prototypes, conducted wireframing activities, and ensured alignment with client business specifications.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Askartec",
    icon: askartec,
    iconBg: "#E6DEDD",
    date: "Mar 2020 - Dec 2021",
    points: [
      "Develops cross-platform and cross-browser websites from concept to deployment",
      "Standardizes all output with a new, responsive, mobile-first approach and strategy",
      "Mentors interns (2 + mentees successfully completed internships as a result the company I worked for hired those developers)",
      "Enhances group projects using SCRUM methodology",
      "Participating in code reviews and providing constructive feedback to other developers.",
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
    name: "Internet Bank KICB",
    description: "Developed Internet Bank using Vue.js 2, Quasar framework, and gRPC. Developed both the client application (gRPC), and the admin panel (REST API - Axios).",
    tags: [
      {
        name: "vuejs",
        color: "green-text-gradient",
      },
      {
        name: "gRPC",
        color: "blue-text-gradient",
      },
      {
        name: "quasar framework",
        color: "pink-text-gradient",
      },
    ],
    image: kicb,
    source_code_link: "https://github.com/",
  },
  {
    name: "Optima",
    description:
      "Online banking offers convenient banking services directly from your home. Conduct all banking transactions and accessing real-time account info.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: optima,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
