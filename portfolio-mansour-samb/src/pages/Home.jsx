import React from "react";
import "./Home.css";

import Nav from "../components/Nav.jsx";
const Home = () => {
  console.log("Home render", new Date().toISOString());
  return (
    <section className="home-section" id="home">
      <Nav />
    </section>
  );
};

export default Home;
