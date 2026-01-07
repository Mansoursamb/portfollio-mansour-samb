import React, { useState } from "react";
import "./About.css";
import avatar from "../../assets/viel homme.png.png";
import profilepic from "../../assets/profilepic.jpg";
import cv from "../../assets/cvmansor.pdf";

const About = () => {
  const [flipped, setFlipped] = useState(false);

  return (
    <section className="about" id="about">
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
          <img src={avatar} alt="Avatar" className="flip-front" />
          <img src={profilepic} alt="Profile" className="flip-back" />
        </div>
      </div>
    </section>
  );
};

export default About;
