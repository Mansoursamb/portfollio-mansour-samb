import React from "react";
import "./Portfolio.css";
import { projects } from "../../assets/assets.js";

const Portfolio = () => {
  console.log("Portfolio render", new Date().toISOString());
  return (
    <section className="portfolio" id="portfolio">
      <h2>Portfolio</h2>
      <div className="projects-grid">
        {projects.map((p) => (
          <article className="project" key={p.id}>
            <img src={p.image} alt={p.title} className="project-image" />
            <div className="project-body">
              <h3 className="project-title">{p.title}</h3>
              <p className="project-desc">{p.description}</p>
              <p className="project-tech">{p.tech.join(" • ")}</p>
              <a className="project-link" href={p.url || "#"}>
                Voir
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
