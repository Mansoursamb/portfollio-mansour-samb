import React from "react";
import "./Skills.css";

export const Skills = () => {
  console.log("Skills render", new Date().toISOString());
  return (
    <section className="skills" id="skills">
      <h2>Skills</h2>
      <p>Mes compétences s'affichent ici.</p>
    </section>
  );
};
