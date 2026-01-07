import React, { useEffect, useState } from "react";
import "./Nav.css";
import { IoIosMenu } from "react-icons/io";
import profilepic from "../assets/profilepic.jpg"; // ← AJOUT

function Nav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(() => {
    try {
      return window.location.hash ? window.location.hash.slice(1) : "home";
    } catch {
      return "home";
    }
  });

  useEffect(() => {
    const onHash = () => setActive(window.location.hash.slice(1) || "home");
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  return (
    <div className="nav">
      <div className="logo">
        <div className="alif"></div>
        <span className="ba"></span>
      </div>

      <div id="nav-links" className={`links ${open ? "open" : ""}`}>
        <ul>
          <li onClick={() => setOpen(false)}>
            <a
              href="#home"
              className={active === "home" ? "active" : ""}
              onClick={() => setActive("home")}
            >
              Home
            </a>
          </li>

          <li onClick={() => setOpen(false)}>
            <a
              href="#about"
              className={active === "about" ? "active" : ""}
              onClick={() => setActive("about")}
            >
              About
            </a>
          </li>

          <li onClick={() => setOpen(false)}>
            <a
              href="#portfolio"
              className={active === "portfolio" ? "active" : ""}
              onClick={() => setActive("portfolio")}
            >
              Portfolio
            </a>
          </li>

          <li onClick={() => setOpen(false)}>
            <a
              href="#courses"
              className={active === "skills" ? "active" : ""}
              onClick={() => setActive("skills")}
            >
              Courses
            </a>
          </li>

          <li onClick={() => setOpen(false)}>
            <a
              href="#contact"
              className={active === "contact" ? "active" : ""}
              onClick={() => setActive("contact")}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>

      {/* Hamburger */}
      <button
        className="hamburger"
        aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
        aria-expanded={open}
        aria-controls="nav-links"
        onClick={() => setOpen((v) => !v)}
      >
        <IoIosMenu />
      </button>

      <a className="button__contact" href="#contact">
        Contactez moi
      </a>
      {/* Avatar ajouté ici */}
      <img
        src={profilepic}
        alt="Profile"
        className="nav__avatar"
        onClick={() => setOpen(false)}
      />
    </div>
  );
}

export default Nav;
