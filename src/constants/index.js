import {
  mobile,
  backend,
  trello,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  symfony,
  twig,
  unity,
  nodejs,
  git,
  figma,
  docker,
  mmi,
  umai,
  carrent,
  jobit,
  tripguide,
  threejs,
  laravel,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Projets",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Développeur Web",
    icon: web,
  },
  {
    title: "Développeur React Native",
    icon: mobile,
  },
  {
    title: "Développeur Backend",
    icon: backend,
  },
  {
    title: "UI/UX Designer",
    icon: figma,
  },
  {
    title: "Gestionnaire de Projets",
    icon: trello,
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
    name: "Twig",
    icon: twig,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
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
    name: "Symfony",
    icon: symfony,
  },
  {
    name: "Laravel",
    icon: laravel,
  },
  {
    name: "Unity",
    icon: unity,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "Docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "1ère Année de BUT Métiers du Multimédia et de l'Internet",
    company_name: "MMI",
    icon: mmi,
    iconBg: "#383E56",
    date: "Septembre 2023 - Juin 2024",
    points: [
      "Apprentissage des fondamentaux du développement web et des technologies associées.",
      "Participation à des projets collaboratifs pour développer des compétences pratiques.",
      "Mise en œuvre de conceptions réactives et garantie de la compatibilité entre navigateurs.",
    ],
  },
  {
    title: "Job de fin de première année",
    company_name: "UMAÏ Ramen",
    icon: umai,
    iconBg: "#E6DEDD",
    date: "Août 2024",
    points: [
      "Préparation et cuisson de ramen authentiques selon les recettes maison.",
      "Collaboration avec l'équipe de cuisine pour assurer la qualité et la cohérence des plats.",
      "Gestion des stocks d'ingrédients et respect des normes d'hygiène alimentaire.",
    ],
  },
  {
    title: "1ère Année de BUT Métiers du Multimédia et de l'Internet",
    company_name: "MMI",
    icon: mmi,
    iconBg: "#383E56",
    date: "Septembre 2023 - Juin 2024",
    points: [
      "Apprentissage des fondamentaux du développement web et des technologies associées.",
      "Participation à des projets collaboratifs pour développer des compétences pratiques.",
      "Mise en œuvre de conceptions réactives et garantie de la compatibilité entre navigateurs.",
    ],
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
    source_code_link: "https://github.com/Yunostaa",
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

export { services, technologies, experiences, projects };
