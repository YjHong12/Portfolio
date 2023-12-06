import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="navbar-container">
        <nav className="navbar">
          <h1 className="navbar-title">Jennifer Hong | Software Engineer</h1>

          <div className="side-navbar">
            <ul className="nav-links">
              <li>
                <Link to="/about" className="nav-about">
                  About
                </Link>
              </li>
              <li>
                <Link to="/projects" className="nav-projects">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/contact" className="nav-contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
