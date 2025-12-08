import React, { useEffect, useState } from "react";
import "./Nav.css";
// Using anchor links for single-page navigation
import { IoIosMenu } from "react-icons/io";
function Nav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(() => {
    try {
      return window.location.hash ? window.location.hash.slice(1) : "home";
    } catch {
      return "home";
    }
  });
  /*window.location.hash modifie l’URL : bon pour le partage/SEO basique et navigation historique.
classList est immédiat et local : utile pour animations temporaires, toggles JS.
Si vous changez le hash programmatique (window.location.hash = 'x'), le navigateur ajoute une entrée dans l’historique — attention aux retours utilisateur.
Pour un site en React, synchroniser hash → state → className est la solution propre.
Conclusion courte  ;  add classlist: local*/

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

      <a className="button__contact" href="#contact">
        Contactez moi
      </a>
    </div>
  );
}

export default Nav;
