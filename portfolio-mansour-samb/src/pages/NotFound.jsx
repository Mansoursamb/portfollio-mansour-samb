import React from "react";
import "./NotFound.css";

const NotFound = () => {
  return (
    <section className="notfound" id="notfound">
      <h1>404</h1>
      <p>Oups… cette page n’existe pas.</p>

      <a href="#home" className="notfound__btn">
        Retour à l’accueil
      </a>
    </section>
  );
};

export default NotFound;
