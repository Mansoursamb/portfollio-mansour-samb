import React, { useState } from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
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
            <Link to="/">Home</Link>
          </li>
          <li onClick={() => setOpen(false)}>
            <Link to="/about">About</Link>
          </li>
          <li onClick={() => setOpen(false)}>
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li onClick={() => setOpen(false)}>
            <Link to="/contact">Contact</Link>
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

      <button className="button">Contactez moi</button>
    </div>
  );
}

export default Nav;
