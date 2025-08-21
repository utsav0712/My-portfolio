import React from "react";
import Navbar from "./Components/Navbar";
import HomeHero from "./Components/HomeHero";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <HomeHero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}