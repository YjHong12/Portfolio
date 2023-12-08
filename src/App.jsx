import { useState } from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";

function App() {
  return (
    <>
      <Navbar />
      <About />
      <Projects />
      <Experience />
    </>
  );
}

export default App;
