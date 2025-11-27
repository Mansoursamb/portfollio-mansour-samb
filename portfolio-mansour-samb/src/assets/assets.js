import profilePic from "./profile.jpg";
import avatar from "./viel homme.png.png";
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
    title: "Landing Page Crypto",
    image: "https://source.unsplash.com/featured/?crypto",
    description: "Page d’accueil pour une startup crypto.",
    tech: ["React", "Tailwind", "API"],
  },
  {
    title: "Blog Dev",
    image: "https://source.unsplash.com/featured/?code",
    description: "Blog personnel avec Markdown et CMS.",
    tech: ["Next.js", "GraphQL"],
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
  { name: "React Avancé", hours: 40 },
  { name: "Node.js API", hours: 30 },
  { name: "MongoDB & Mongoose", hours: 25 },
  { name: "UI/UX Design", hours: 20 },
];
