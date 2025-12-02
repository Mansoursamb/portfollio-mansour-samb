import React from "react";
import "./Home.css";
import Hero from "../components/Hero.jsx";
const Home = () => {
  console.log("Home render", new Date().toISOString());
  return (
    <section className="home-section" id="home">
      <Hero />
    </section>
  );
};

export default Home;
