import React, { useState } from "react";
import "./Nav.css";
// Using anchor links for single-page navigation
import { IoIosMenu } from "react-icons/io";
function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <div className="nav">
      <div className="logo">
        <div className="alif"></div>
        <span className="ba"></span>
      </div>
      <div id="nav-links" className={`links ${open ? "open" : ""}`}>
        <ul>
          <li onClick={() => setOpen(false)}>
            <a href="#home">Home</a>
          </li>
          <li onClick={() => setOpen(false)}>
            <a href="#about">About</a>
          </li>
          <li onClick={() => setOpen(false)}>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li onClick={() => setOpen(false)}>
            <a href="#skills">Skills</a>
          </li>
          <li onClick={() => setOpen(false)}>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
      {/* Hamburger for small screens */}
      <button
        className="hamburger"
        aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
        aria-expanded={open}
        aria-controls="nav-links"
        onClick={() => setOpen((v) => !v)}
      >
        <IoIosMenu />
      </button>

      <a className="button" href="#contact">
        Contactez moi
      </a>
    </div>
  );
}

export default Nav;
