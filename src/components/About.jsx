import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import Resume from "./Resume";

function About() {
  return (
    <div className="About">
      <h2 className="sectionHead">Introduction.</h2>
      <p>
        My name is Jennifer and I'm a Software Engineer with a unique background
        in healthcare. My coding journey centers on web-based applications,
        mastering the PERN stack (PostgreSQL, Express.js, React, and Node.js)
        with JavaScript. I'm an ardent learner, constantly tackling projects
        that challenge and fortify my tech skills.
      </p>
      <p>
        Beyond the screen, you'll catch me lost in the world of painting,
        finding beauty in strokes of color. Nature is my sanctuary, especially
        when hiking trails with my furry companions. As I delve into languages
        like JavaScript and explore the depths of React, my aim is to craft not
        just code but elegant solutions that leave an impact.
      </p>
      <Routes>
        <Route path="/resume" element={<Resume />} /></Routes>
          <Link to="/resume" className="resume-page">
            View Resume
          </Link>
      
    </div>
  );
}

export default About;
