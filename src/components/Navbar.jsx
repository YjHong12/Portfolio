import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Resume from "./Resume";
import Home from "./Home";

function Navbar() {
  const handleSetActive = (title) => {
    const section = document.getElementById(title.toLowerCase());
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <div className="navbar-container">
        <nav className="navbar">
          <Link to="/" className="nav-h1" onClick={() => handleSetActive("")}>
            <h1>Jennifer Hong | Software Engineer</h1>
          </Link>

          <div className="side-navbar">
            <ul className="nav-links">
              <li>
                <Link
                  to="#about"
                  className="nav-about"
                  onClick={() => handleSetActive("About")}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="#projects"
                  className="nav-projects"
                  onClick={() => handleSetActive("Projects")}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="#contact"
                  className="nav-contact"
                  onClick={() => handleSetActive("Contact")}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <Routes>
        <Route path="/resume" element={<Resume />} />
        <Route path="/" element={<Home />} />
        </Routes>
    </>
  );
}

export default Navbar;
