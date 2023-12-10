import { useState } from "react";
import { Link, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Resume from "./components/Resume";
import Home from "./components/Home";

function App() {
  return (
    <>
      <Navbar /> 
    </>
  );
}

export default App;
