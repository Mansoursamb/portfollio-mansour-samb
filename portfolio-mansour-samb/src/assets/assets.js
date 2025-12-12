// Import react-icons for courses
import {
  SiHtml5,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiDocker,
  SiGit,
} from "react-icons/si";
import { FaMicrosoft } from "react-icons/fa";

import avatar from "./viel homme.png.png";
import profilePic from "../images/profile-placeholder.svg";
import bcg1 from "../images/bcg1.jpg";
import bcg2 from "../images/bcg2.png";
import bcg3 from "../images/bcg3.webp";
import bcg4 from "../images/bcg4.png";
import bcg5 from "../images/bcg5.png";
import bcg6 from "../images/bcg6.jpg";
import bcg7 from "../images/bcg7.jpg";
import bcg8 from "../images/bcg8.jpg";
import bcg9 from "../images/bcg9.jpg";
import bcg10 from "../images/bcg10.jpg";
import bcg11 from "../images/bcg11.jpg";
import bcg12 from "../images/bcg12.jpg";

export const profile = {
  name: "Mansour Samb",
  title: "Full Stack Developer",
  bio: "Développeur passionné avec une expertise en React, Node.js et bases de données.",
  profileImage: profilePic,
  avatar: avatar,
  contact: {
    email: "mansour_samb@yahoo.com",
    phone: "+33 644785877",
    location: "Toulouse, France",
  },
};

export const projects = [
  {
    id: 1,
    title: "Project One",
    image: bcg1,
    description: "Prototype d'interface utilisateur responsive.",
    tech: ["HTML", "CSS", "JavaScript"],
    url: "#",
  },
  {
    id: 2,
    title: "Project Two",
    image: bcg2,
    description: "Application single-page avec interactions dynamiques.",
    tech: ["React", "Vite"],
    url: "#",
  },
  {
    id: 3,
    title: "Project Three",
    image: bcg3,
    description: "Dashboard analytique avec graphiques.",
    tech: ["React", "Chart.js"],
    url: "#",
  },
  {
    id: 4,
    title: "Project Four",
    image: bcg4,
    description: "Landing page marketing optimisée SEO.",
    tech: ["HTML", "Tailwind"],
    url: "#",
  },
  {
    id: 5,
    title: "Project Five",
    image: bcg5,
    description: "Prototype e‑commerce avec panier.",
    tech: ["React", "Node.js", "Express"],
    url: "#",
  },
  {
    id: 6,
    title: "Project Six",
    image: bcg6,
    description: "Application mobile web-first (PWA).",
    tech: ["React", "Service Worker"],
    url: "#",
  },
  {
    id: 7,
    title: "Project Seven",
    image: bcg7,
    description: "Intégration API tierce pour données en temps réel.",
    tech: ["Node.js", "Socket.io"],
    url: "#",
  },
  {
    id: 8,
    title: "Project Eight",
    image: bcg8,
    description: "Refonte UI et amélioration accessibilité.",
    tech: ["HTML", "ARIA"],
    url: "#",
  },
  {
    id: 9,
    title: "Project Nine",
    image: bcg9,
    description: "Micro‑service pour traitement d'images.",
    tech: ["Node.js", "Sharp"],
    url: "#",
  },
  {
    id: 10,
    title: "Project Ten",
    image: bcg10,
    description: "Dashboard d'administration sécurisé.",
    tech: ["React", "Auth"],
    url: "#",
  },
  {
    id: 11,
    title: "Project Eleven",
    image: bcg11,
    description: "Prototype d'animation et transitions avancées.",
    tech: ["CSS", "GSAP"],
    url: "#",
  },
  {
    id: 12,
    title: "Project Twelve",
    image: bcg12,
    description: "Site vitrine statique optimisé performance.",
    tech: ["HTML", "Netlify"],
    url: "#",
  },
];
export const skills = [
  {
    name: "JavaScript",
    level: "Advanced",
    icon: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
  },
  {
    name: "React",
    level: "Advanced",
    icon: "https://cdn-icons-png.flaticon.com/512/1126/1126012.png",
  },
  {
    name: "Node.js",
    level: "Intermediate",
    icon: "https://cdn-icons-png.flaticon.com/512/919/919825.png",
  },
  {
    name: "Python",
    level: "Intermediate",
    icon: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png",
  },
];
export const experiences = [
  {
    role: "Frontend Developer",
    company: "Tech Solutions",
    duration: "Jan 2022 - Present",
    description: "Développement d'interfaces utilisateur réactives.",
    tech: ["React", "Redux", "CSS"],
  },
  {
    role: "Backend Developer",
    company: "Web Services Inc.",
    duration: "Jun 2020 - Dec 2021",
    description: "Création d'API RESTful et gestion de bases de données.",
    tech: ["Node.js", "Express", "MongoDB"],
  },
];
export const testimonials = [
  {
    name: "Alice Dupont",
    feedback: "Travail exceptionnel et communication fluide.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Jean Martin",
    feedback: "Respect des délais et qualité au rendez-vous.",
    avatar: "https://randomuser.me/api/portraits/men/46.jpg",
  },
];
export const socialLinks = {
  github: "",
  linkedin: "",
  twitter: "",
  facebook: "",
  instagram: "",
};

export const courses = [
  {
    id: 1,
    projectTitle: "Projet 1: Bureautique",
    courses: [
      {
        name: "Introduction à la bureautique",
        description:
          "Maîtrise de Word, Excel et PowerPoint pour la gestion documentaire professionnelle.",
        icon: FaMicrosoft,
        duration: "40 hours",
      },
      {
        name: "Création de documents avec Word",
        description:
          "Mise en place de documents texte professionnels, mise en forme avancée et styles.",
        icon: FaMicrosoft,
        duration: "10 hours",
      },
    ],
  },
  {
    id: 2,
    projectTitle: "Projet 2: HTML & CSS",
    courses: [
      {
        name: "Création de site Nina Carducci",
        description:
          "Conception et optimisation SEO d'un site e-commerce avec structure sémantique HTML5.",
        icon: SiHtml5,
        duration: "40 hours",
      },
    ],
  },
  {
    id: 3,
    projectTitle: "Projet 3: JavaScript",
    courses: [
      {
        name: "Introduction à la programmation",
        description:
          "Fondamentaux du JavaScript, DOM manipulation et ES6+ pour interactivité web.",
        icon: SiJavascript,
        duration: "40 hours",
      },
    ],
  },
  {
    id: 4,
    projectTitle: "Projet 4: React Avancé",
    courses: [
      {
        name: "Développement d'applications SPA",
        description:
          "Composants, hooks, state management et patterns avancés en React.",
        icon: SiReact,
        duration: "40 hours",
      },
    ],
  },
  {
    id: 5,
    projectTitle: "Projet 5: Node.js API",
    courses: [
      {
        name: "Création d'API RESTful",
        description:
          "Serveurs backend robustes, gestion des requêtes et middlewares avec Express.",
        icon: SiNodedotjs,
        duration: "30 hours",
      },
    ],
  },
  {
    id: 6,
    projectTitle: "Projet 6: MongoDB & Mongoose",
    courses: [
      {
        name: "Bases de données NoSQL",
        description:
          "Schémas flexibles, requêtes complexes et optimisation avec MongoDB.",
        icon: SiMongodb,
        duration: "25 hours",
      },
    ],
  },
  {
    id: 7,
    projectTitle: "Projet 7: Docker",
    courses: [
      {
        name: "Containerisation et déploiement",
        description:
          "Création d'images Docker, orchestration et CI/CD pour applications.",
        icon: SiDocker,
        duration: "20 hours",
      },
    ],
  },
  {
    id: 8,
    projectTitle: "Projet 8: Git & GitHub",
    courses: [
      {
        name: "Versioning et collaboration",
        description:
          "Maîtrise du contrôle de version, branching, pull requests et workflows collaboratifs.",
        icon: SiGit,
        duration: "15 hours",
      },
    ],
  },
];
