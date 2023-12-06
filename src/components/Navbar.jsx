import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const [active, setActive] = useState("");

  const handleSetActive = (title) => {
    const section = document.getElementById(title.toLowerCase());
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="navbar-container">
        <nav className="navbar">
          <Link to="/" className="navbar-h1" onClick={() => setActive("")}>
            <h1>Jennifer Hong | Software Engineer</h1>
          </Link>

          <div className="side-navbar">
            <ul className="nav-links">
              <li>
                <button
                  onClick={() => handleSetActive("About")}
                  className="nav-about"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleSetActive("Projects")}
                  className="nav-projects"
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleSetActive("Contact")}
                  className="nav-contact"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
