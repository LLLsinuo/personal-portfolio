import React from "react";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Dashboard from "./components/Dashboard/Dashboard";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import ContactMe from "./components/ContactMe/ContactMe";
import Footer from "./components/Footer/Footer";
import Projects from "./components/Projects/Projects";
import Education from "./components/Education/Education";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div id="dashboard"><Dashboard /></div>
        {/* <Skills /> */}
        <div id="education"><Education /></div>
        <div id="skills"><Skills /></div>
        <div id="experience"><Experience /></div>
        <div id="projects"><Projects /></div>
        {/* <ContactMe /> */}
      </div>
      <Footer />
    </div>
  )
}

export default App