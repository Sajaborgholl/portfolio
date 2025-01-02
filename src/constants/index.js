//contains all contents that we have in the app
//instead of putting text inside our code, we change it once from here
import {
    mobile,
    frontendwebdev,
    zeroandone,
    webapp,
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
    git,
    figma,
    docker,
    threejs,
    androidapp,
    trackyourwork,
    CurrencyExchange,
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
      title: "Full Stack Web Developer",
      icon: web,
    },
    {
      title: "Android App Developer",
      icon: mobile,
    },
    {
      title: "Software Programming",
      icon: backend,
    },
    {
      title: "AI Integration",
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
      name: "Node JS",
      icon: nodejs,
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
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Full Stack Web Developer",
      company_name: "Track Your Work Website",
      icon: webapp,
      iconBg: "#383E56",
      date: "February 2024 - April 2024",
      points: [
        "Developed a task management website using Django.",
        "Integrated automated email notification to enhance communication and task tracking",
      ],
    },
    {
      title: "Android App Developer",
      company_name: "Currency Exchange App",
      icon: androidapp,
      iconBg: "#E6DEDD",
      date: "March 2024 - April 2024",
      points: [
        "Developed an Android application for currency management",
        "Integrated registration, transaction processing, and analytics.",
        "Integrated an exchange rate predictor and payment functionalities for credit cards",

      ],
    },
    {
      title: "HR software - AI integration",
      company_name: "Zero&One",
      icon: zeroandone,
      iconBg: "#383E56",
      date: "June 2023 - August 2023",
      points: [
        "Developed a task management website using Django.",
        "Integrated automated email notification to enhance communication and task tracking",
      ],
    },
    {
      title: "Front End Developer",
      company_name: "Hotel Website",
      icon: frontendwebdev,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Specialized in the front-end development of a hotel website.",
        "Focused on crafting responsive layouts and user interfaces using HTML and CSS.",
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
      name: "Track your work",
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
      image: trackyourwork,
      source_code_link: "https://github.com/",
    },
    {
      name: "Currency Exchange Android App",
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
      image: CurrencyExchange,
      source_code_link: "https://github.com/",
    }
   
  ];
  
  export { services, technologies, experiences, testimonials, projects };