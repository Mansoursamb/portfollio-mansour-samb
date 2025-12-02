import React from "react";
import "./Portfolio.css";

const Portfolio = () => {
  console.log("Portfolio render", new Date().toISOString());
  return (
    <section className="portfolio" id="portfolio">
      <h2>Portfolio</h2>
      <p>Mes réalisations seront affichées ici.</p>
    </section>
  );
};

export default Portfolio;
