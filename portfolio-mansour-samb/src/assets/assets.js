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

import avatar from "./viel hommesmall.webp";
import profilePic from "../assets/profilepicsmall.webp";
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
  title: "Frontend Developer",
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
    description: "Démarrez votre formation d'Intégrateur Web.",
    tech: ["Bureautique", "HTML", "CSS"],
    url: "#",
  },
  {
    id: 2,
    title: "Project Two",
    image: bcg2,
    description: "Premiers pas sur le langage HTML.",
    tech: ["HTML", "CSS"],
    url: "#",
  },
  {
    id: 3,
    title: "Project Three",
    image: bcg3,
    description:
      "Créez la page d'accueil d'une agence de voyage avec HTML & CSS.",
    tech: ["HTML", "CSS"],
    url: "#",
  },
  {
    id: 4,
    title: "Project Four",
    image: bcg4,
    description:
      "Améliorez l'interface d'un site mobile avec des animations CSS.",
    tech: ["HTML", "Saas", "Animations", "Figma"],
    url: "#",
  },
  {
    id: 5,
    title: "Project Five",
    image: bcg5,
    description: "Premiers pas sur le langage JavaScript.",
    tech: ["JavaScript", "Figma", "CSS"],
    url: "#",
  },
  {
    id: 6,
    title: "Project Six",
    image: bcg6,
    description: "Créez une page web dynamique avec JavaScript.",
    tech: ["Node.js", "Express", "API", "Swagger"],
    url: "#",
  },
  {
    id: 7,
    title: "Project Seven",
    image: bcg7,
    description:
      "Créez une application web de location immobilière avec React.",
    tech: ["Node.js", "Express", "MongoDB", "Mongoose", "React"],
    url: "#",
  },
  {
    id: 8,
    title: "Project Eight",
    image: bcg8,
    description: "Optimisez le référencement d'un site de photographe.",
    tech: ["SEO", "Performance", "Accessibility"],
    url: "#",
  },
  {
    id: 9,
    title: "Project Nine",
    image: bcg9,
    description: "Débuggez le site d'une agence d'événementiel.",
    tech: ["Node.js", "React", "Debugging"],
    url: "#",
  },
  {
    id: 10,
    title: "Project Ten",
    image: bcg10,
    description:
      "Implémentez le front-end d'une application bancaire avec React.",
    tech: ["React", "Redux", "API"],
    url: "#",
  },
  {
    id: 11,
    title: "Project Eleven",
    image: bcg11,
    description: "Planifiez le développement du site de votre client.",
    tech: ["Notion", "Figma", "Feedly"],
    url: "#",
  },
  {
    id: 12,
    title: "Project Twelve",
    image: bcg12,
    description: "Créez et publiez votre portfolio de développeur.",
    tech: ["React", "Seo", "GitHub Pages"],
    url: "#",
  },
];

export const courses = [
  {
    id: 1,
    projectTitle: "Projet 1: Bureautique",
    courses: [
      {
        name: "Planification et gestion documentaire",
        description:
          "Maîtrise de Word, Excel et PowerPoint pour la gestion documentaire professionnelle.",
        icon: FaMicrosoft,
        duration: "23 hours",
        completion: 100,
      },
    ],
  },
  {
    id: 2,
    projectTitle: "Projet 2: HTML",
    courses: [
      {
        name: "Création de site Nina Carducci",
        description:
          "Intégrer des éléments sur une page web en utilisant les fondamentaux de HTML et CSS.",
        icon: SiHtml5,
        duration: "20 hours",
        completion: 75, // 75% terminé
      },
    ],
  },
  {
    id: 3,
    projectTitle: "Projet 3: HTML & CSS",
    courses: [
      {
        name: "Création de site Booky",
        description:
          "Implémenter une interface responsive avec HTML et CSS pour une agence de voyage.",
        icon: SiJavascript,
        duration: "20 hours",
        completion: 100, // 75% terminé
      },
      {
        name: "Création de site Booky",
        description: "Installer un environnement de développement front-end.",
        icon: SiJavascript,
        duration: "20 hours",
        completion: 100, // 75% terminé
      },
      {
        name: "Création de site Booky",
        description:
          "Intégrer du contenu conformément à une maquette avec HTML et CSS.",
        icon: SiJavascript,
        duration: "40 hours",
        completion: 80, // 75% terminé
      },
    ],
  },
  {
    id: 4,
    projectTitle: "Projet 4: Animations CSS",
    courses: [
      {
        name: "Foodtech Mobile First",
        description:
          "Implémentez le site d’une foodtech en mobile first et ses animations CSS avec Sass..",
        icon: SiReact,
        duration: "60 hours",
        completion: 50,
      },
      {
        name: "Foodtech Mobile First",
        description: "Intégrer une maquette en mobile-first.",
        icon: SiReact,
        duration: "20 hours",
        completion: 100,
      },
      {
        name: "Foodtech Mobile First",
        description:
          "Mettre en œuvre des animations CSS ,Versionner son projet avec Git et Github",
        icon: SiReact,
        duration: "40 hours",
        completion: 70,
      },
    ],
  },
  {
    id: 5,
    projectTitle: "Projet 5: JavaScript",
    courses: [
      {
        name: " Carrousel du site Internet d’une imprimerie ",
        description: "Programmer en utilisant les fondamentaux de JavaScript.",
        icon: SiNodedotjs,
        duration: "20 hours",
        completion: 100,
      },
    ],
  },
  {
    id: 6,
    projectTitle: "Projet 6: JavaScript",
    courses: [
      {
        name: "Api dynamique pour une architecte",
        description:
          "Aidez votre équipe à finaliser le nouveau site internet d’une architecte grâce à la création d’un site dynamique avec JavaScript, communiquant avec une API.",
        icon: SiMongodb,
        duration: "60 hours",
        completion: 65,
      },
      {
        name: "Api dynamique pour une architecte",
        description:
          "Récupérer les données utilisateurs dans le JavaScript via des formulaires.Gérer les événements utilisateurs avec JavaScript.Manipuler les éléments du DOM avec JavaScript.",

        icon: SiMongodb,
        duration: "60 hours",
        completion: 65,
      },
    ],
  },
  {
    id: 7,
    projectTitle: "Projet 7: React",
    courses: [
      {
        name: "Kasa, une application de location de logements",
        description:
          "Implémentez le front end de Kasa, une application de location de logements. Mettez en place des composants avec React et les routes de l'application avec React Router.",
        icon: SiDocker,
        duration: "60 hours",
        completion: 85,
      },
      {
        name: "Kasa",
        description:
          "Initialiser une application avec Create React App.Configurer la navigation entre les pages de l'application avec React Router.",
        icon: SiDocker,
        duration: "60 hours",
        completion: 85,
      },
      {
        name: "Kasa",
        description:
          "Développer des éléments de l'interface d'un site web grâce à des composants React.Mettre en œuvre des animations CSS.Mettre en œuvre des animations CSS.",
        icon: SiDocker,
        duration: "60 hours",
        completion: 85,
      },
    ],
  },
  {
    id: 8,
    projectTitle: "Projet 8: SEO",
    courses: [
      {
        name: "Optimisez le référencement d'un site de photographe",
        description: "Optimiser la performance d'un site web.",
        icon: SiGit,
        duration: "40 hours",
        completion: 90,
      },
    ],
  },
  {
    id: 9,
    projectTitle: "Projet 9: Debuggage",
    courses: [
      {
        name: "Agence 724events.",
        description:
          "Prenez le relais d’un autre développeur pour débugger le site de l’agence 724events.",
        icon: SiGit,
        duration: "60 hours",
        completion: 70,
      },
      {
        name: "724events.",
        description:
          "Débugger un site web grâce aux Chrome DevTools.Rédiger un cahier de recette pour tester un site.",
        icon: SiGit,
        duration: "60 hours",
        completion: 60,
      },
    ],
  },
  {
    id: 10,
    projectTitle: "Projet 10: Redux",
    courses: [
      {
        name: "Argent Bank",
        description:
          "Complétez le code de l'application bancaire Argent Bank avec React et Redux. Vous écrivez des appels à l'API REST pour connecter le front au back, et vous modéliserez une API.",
        icon: SiGit,
        duration: "80 hours",
        completion: 70,
      },
      {
        name: "Argent Bank",
        description:
          "Afficher les données du back end sur l'interface via des appels API.Configurer des routes API pour la communication client / serveur.",
        duration: "80 hours",
        completion: 30,
      },
      {
        name: "Argent Bank",
        description:
          "Implémenter la gestion des données avec Redux pour assurer le fonctionnement du front-end.",
        icon: SiGit,
        duration: "80 hours",
        completion: 70,
      },
    ],
  },
  {
    id: 11,
    projectTitle: "Projet 11: Planning",
    courses: [
      {
        name: "Planifiez le développement du site de votre client",
        description:
          "Présenter la solution technique.Rédiger les spécifications techniques d'un projet web à partir de besoins fonctionnels.",
        icon: SiGit,
        duration: "60 hours",
        completion: 10,
      },
      {
        name: "Planifiez le développement du site de votre client",
        description:
          "Découper une fonctionnalité en tâches pour préparer le développement.Mettre en place une méthode de veille technologique adaptée .",
        icon: SiGit,
        duration: "20 hours",
        completion: 10,
      },
      {
        name: "Planifiez le développement du site de votre client",
        description:
          "Suivre le déroulement du projet grâce à un outil de gestion de projet.",
        icon: SiGit,
        duration: "30 hours",
        completion: 10,
      },
    ],
  },
  {
    id: 12,
    projectTitle: "Projet 12: Portfolio",
    courses: [
      {
        name: "Créez et publiez votre portfolio de développeur",
        description:
          "Débuggez votre portfolio et optimisez la performance du code et du référencement SEO avant de le déployer en ligne afin de donner de la visibilité à vos projets.Déployer un site statique en ligne. Merci de votre attention.",
        icon: SiGit,
        duration: "40 hours",
        completion: 90,
      },
    ],
  },
];
