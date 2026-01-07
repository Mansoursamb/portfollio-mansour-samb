import React from "react";
import "./Footer.css";
import profilepic from "../../assets/profilepic.jpg";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__left">
        <img src={profilepic} alt="Profile" className="footer__avatar" />
        <h3>Mansor Samb</h3>
        <p>Développeur Web</p>
      </div>

      <div className="footer__center">
        <h4>Liens</h4>
        <ul>
          <li>
            <a href="#home">Accueil</a>
          </li>
          <li>
            <a href="#about">À propos</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="https://github.com/mansorsamb" target="_blank">
              GitHub
            </a>
          </li>
        </ul>
      </div>

      <div className="footer__right">
        <h4>Contact</h4>
        <p>
          Email :{" "}
          <a href="mailto:mansour.samb@example.com">mansour.samb@example.com</a>
        </p>
        <p>
          Téléphone : <a href="tel:+33600000000">+33 6 00 00 00 00</a>
        </p>
        <p>
          GitHub :{" "}
          <a href="https://github.com/mansorsamb" target="_blank">
            mansorsamb
          </a>
        </p>
      </div>
      <div className="footer__bottom">
        <p>© {new Date().getFullYear()} Mansor Samb — Tous droits réservés.</p>
      </div>
    </footer>
  );
}
