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
  dimobile_1,
  dimobile_2,
  dimobile_3,
  dira,
  dirv,
  sae501_1,
  sae501_2,
  UC_1,
  UC_2,
  UC_3,
  git,
  figma,
  docker,
  mmi,
  umai,
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
    name: "Escape Room en Réalité Virtuelle",
    description:
      "Scène de réalité virtuelle interactive développée avec Unity, offrant une expérience d'escape room immersive.",
    tags: [
      {
        name: "unity",
        color: "blue-text-gradient",
      },
      {
        name: "c#",
        color: "pink-text-gradient",
      },
    ],
    images: [
      dirv,
    ],
    source_code_link: "https://github.com/Yunostaa",
  },
  {
    name: "Application mobile de cinéma",
    description:
      "Application mobile de festival de cinéma, permettant aux utilisateurs de consulter les films, les horaires et les informations sur les réalisateurs.",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
    ],
    images: [dimobile_1, dimobile_2, dimobile_3],
    source_code_link: "https://github.com/Yunostaa",
  },
  {
    name: "Site de gestion d'opération d'usine",
    description:
      "Site web de gestion d'opération d'usine de chocolat, permettant aux utilisateurs de suivre les opérations, les stocks et les performances de production.",
    tags: [
      {
        name: "laravel",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "php",
        color: "green-text-gradient",
      },
      {
        name: "chartjs",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    images: [UC_1, UC_2, UC_3],
    source_code_link: "https://github.com/Yunostaa",
  },
  {
    name: "Initiation à la Réalité Augmentée",
    description:
      "Scène de réalité augmentée interactive développée avec Unity.",
    tags: [
      {
        name: "unity",
        color: "blue-text-gradient",
      },
      {
        name: "c#",
        color: "pink-text-gradient",
      },
    ],
    images: [
      dira,
    ],
    source_code_link: "https://github.com/Yunostaa",
  },
  {
    name: "Jeu du Papillons",
    description:
      "Jeu interactif développé avec Unity, où les joueurs incarnent un papillon.",
    tags: [
      {
        name: "unity",
        color: "blue-text-gradient",
      },
      {
        name: "c#",
        color: "pink-text-gradient",
      },
    ],
    images: [
      sae501_1, sae501_2,
    ],
    source_code_link: "https://github.com/Yunostaa",
  },
];

export { services, technologies, experiences, projects };
