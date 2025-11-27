import React from "react";
import "./Hero.css";
// Import technology icons from react-icons
import {
  SiReact,
  SiNodedotjs,
  SiTailwindcss,
  SiMongodb,
  SiCss3,
  SiBootstrap,
  SiExpress,
  SiFirebase,
  SiGraphql,
  SiChartdotjs,
} from "react-icons/si";

// Use React Icon components directly
const ICONS = [
  { name: "react", component: SiReact },
  { name: "nodejs", component: SiNodedotjs },
  { name: "tailwind", component: SiTailwindcss },
  { name: "mongodb", component: SiMongodb },
  { name: "css3", component: SiCss3 },
  { name: "bootstrap", component: SiBootstrap },
  { name: "express", component: SiExpress },
  { name: "firebase", component: SiFirebase },
  { name: "graphql", component: SiGraphql },
  { name: "chartjs", component: SiChartdotjs },
];

// Brand colors for each icon (keeps original color look)
const COLORS = {
  react: "#61DAFB",
  nodejs: "#3C873A",
  tailwind: "#06B6D4",
  mongodb: "#4DB33D",
  css3: "#1572B6",
  bootstrap: "#7952B3",
  express: "#000000",
  firebase: "#FFCB2B",
  graphql: "#E10098",
  chartjs: "#F7931E",
};

const Hero = () => {
  // Simplified: render React icons directly (no CSS var images)

  return (
    <section className="hero">
      <h1>Hero</h1>
      <p>Icônes des technologies — rendues avec react-icons (SVG)</p>
      <div className="icons-grid">
        {ICONS.map(({ name, component }) => {
          const Comp = component;
          return (
            <div key={name} className="tech-item">
              <Comp
                className="tech-svg"
                style={{ color: COLORS[name] || "currentColor" }}
                aria-hidden={true}
                title={name}
              />
              <div className="tech-name">{name}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Hero;
