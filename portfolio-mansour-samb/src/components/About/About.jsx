import React from "react";
import "./About.css";
import avatar from "../../assets/viel homme.png.png";
import cv from "../../assets/cvmansor.pdf";
const About = () => {
  console.log("About render", new Date().toISOString());
  return (
    <section className="about" id="about">
      <div>
        <h2>À propos</h2>
        <p>
          Bienvenue sur mon portfolio — je suis Mans, développeur passionné.
        </p>
        <a href={cv} target="_blank" rel="noopener noreferrer">
          <button className="button">Download CV</button>
        </a>
      </div>
      <img src={avatar} alt="Avatar" className="avatar-image" />
    </section>
  );
};

export default About;
