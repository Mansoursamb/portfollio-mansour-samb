import React from "react";
import "./About.css";
import avatar from "../../assets/viel homme.png.png";

const About = () => {
  console.log("About render", new Date().toISOString());
  return (
    <section className="about" id="about">
      <div>
        <h2>À propos</h2>
        <p>
          Bienvenue sur mon portfolio — je suis Mans, développeur passionné.
        </p>
        <button className="button">Download CV</button>
      </div>
      <img src={avatar} alt="Avatar" className="avatar-image" />
    </section>
  );
};

export default About;
