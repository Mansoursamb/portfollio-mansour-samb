import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
function Nav() {
  return (
    <div className="nav">
      <div className="logo">
        <div class="alif"></div>
        <span class="ba"></span>
      </div>
      <div className="links">
        <ul>
          <Link>
            <li>Home</li>
          </Link>
          <Link>
            <li>About</li>
          </Link>
          <Link>
            <li>Portfolio</li>
          </Link>
          <Link>
            <li>Contact</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
