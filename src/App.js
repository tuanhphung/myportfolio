import React from "react";

import "./css/App.css";

import LandingSection from "./Components/LandingSection";
import Technologies from "./Components/Technologies";
import Projects from "./Components/Projects";
import Footer from "./Components/Footer";
import AboutMe from "./Components/AboutMe";

const App = () => {
  return (
    <div>
      <LandingSection />
      <AboutMe />
      <Technologies />
      <Projects />
      <Footer />
    </div>
  );
};

export default App;
