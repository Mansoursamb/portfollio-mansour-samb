import React, { useState } from "react";
import "./About.css";
import avatar from "../../assets/viel hommesmall.webp";
import profilepic from "../../assets/profilepicsmall.webp";
import cv from "../../assets/cvmansor.pdf";

const About = () => {
  const [flipped, setFlipped] = useState(false);

  return (
    <section id="about" className="about">
      <div className="about__text">
        <h2>À propos</h2>
        <p>
          Bienvenue sur mon portfolio — je suis Mans, développeur passionné.
        </p>

        <a
          href={cv}
          target="_blank"
          rel="noopener noreferrer"
          className="button"
        >
          Download CV
        </a>
      </div>

      {/* Carte 3D */}
      <div
        className={`flip-card ${flipped ? "flipped" : ""}`}
        onClick={() => setFlipped(!flipped)}
      >
        <div className="flip-inner">
          <img
            src={avatar}
            alt="Portrait de Mans"
            className="flip-front"
            loading="lazy"
            decoding="async"
            width="400"
            height="400"
          />

          <img
            src={profilepic}
            alt="Photo de profil de Mans"
            className="flip-back"
            loading="lazy"
            decoding="async"
            width="400"
            height="400"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
