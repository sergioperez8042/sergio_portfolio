import {
  // mobile,
  // backend,
  // creator,
  webdevelopment,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  // mongodb,
  git,
  figma,
  // docker,
  // meta,
  octupus,
  soaint,
  mome,
  // tesla,
  // shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  nextjsLogo,
  reactnative,
  github,
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
    icon: webdevelopment,
  },
  {
    title: "React Developer",
    icon: reactjs,
  },
  {
    title: "React Native Developer",
    icon: reactnative,
  },
  {
    title: "Nextjs Developer",
    icon: nextjsLogo,
  },
  // {
  //   title: "Content Creator",
  //   icon: creator,
  // },
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
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Github",
    icon: github,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Nextjs Developer",
    company_name: "Octupus",
    icon: octupus,
    iconBg: "#383E56",
    date: "August 2023 - October 2024",
    points: [
      "I developed and integrated management systems and e-commerce platforms using Next.js as the frontend and Odoo as the backend, achieving intuitive and complex user interfaces with a UX/UI focus to enhance navigability and user experience. I configured custom modules in Odoo, automating critical processes and establishing seamless communication through APIs to connect Odoo with Next.js, enabling a more interactive and accessible user experience. In e-commerce development, I created optimized shopping experiences, including product catalogs, shopping carts, secure payment systems, and SEO strategies to improve visibility and customer engagement. I coordinated multiple projects, applying agile methodologies to ensure timely deliveries at each phase, implementing continuous improvements and code optimizations to ensure long-term scalability and efficiency, meeting client expectations and future growth demands.",
    ],
  },
  {
    title: "React Developer",
    company_name: "MOME",
    icon: mome,
    iconBg: "#383E56",
    date: "Jun 2021 - Jul 2023",
    points: [
      "I contributed to the development of a communication system for ad sales platforms, enhancing user interaction and improving the efficiency of online ad management. I was involved in designing and developing key features to ensure an intuitive and seamless user experience. The technologies utilized included Next.js for building a fast and efficient interface, React as the foundation for creating reusable and responsive components, JavaScript and TypeScript for secure and structured frontend programming, Node.js for backend and API development for data integrations, CSS and Styled Components for visual design and interface customization, and RESTful APIs for efficient communication between the system's frontend and backend.",
    ],
  },
  {
    title: "React Native Developer & React Developer",
    company_name: "Soaint",
    icon: soaint,
    iconBg: "#E6DEDD",
    date: "Oct 2022 - Abr 2023",
    points: [
      "During the refactoring and updating of the mobile application, I undertook a comprehensive overhaul of the user interface, enhancing navigation and interaction. Key components of the app were redesigned to improve fluidity and accessibility, ensuring users could quickly and clearly find the functions they needed. Additionally, I developed new features that added value to the user experience, providing additional tools that increased the app's appeal and utility.",
    ],
  },

  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
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
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
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
    image: jobit,
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
