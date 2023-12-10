import { useState } from "react";
import { Link, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import About from "./About";
import Projects from "./Projects";
import Experience from "./Experience";

function Home() {
  return (
    <>
      <Navbar />
      <About />
          <Link to="/resume" className="resume-page">
            View Resume
          </Link>
      <Projects />
      <Experience />
    </>
  );
}

export default Home;