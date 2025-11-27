import React from "react";
import "./About.css";
import avatar from "../../assets/viel homme.png.png";

const About = () => {
  return (
    <section className="about" id="about">
      <h2>À propos</h2>
      <p>Bienvenue sur mon portfolio — je suis Mans, développeur passionné.</p>
      <img src={avatar} alt="Avatar" className="avatar-image" />
    </section>
  );
};

export default About;
