<<<<<<< HEAD
import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">Portfolio</div>

      <ul className={isOpen ? "nav-links open" : "nav-links"}>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      {/* Hire Me button -> Contact section pe le jayega */}
      <a href="#contact" className="hire-btnn">Hire Me</a>

      {/* Hamburger */}
      <div
        className={`hamburger ${isOpen ? "toggle" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
=======
import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-70 text-white flex justify-between items-center px-6 py-4 z-50">
  <div className="text-2xl font-bold">Portfolio</div>
  <ul className="flex gap-6">
    <li><a href="#home" className="hover:text-blue-400 transition">Home</a></li>
    <li><a href="#about" className="hover:text-blue-400 transition">About</a></li>
    <li><a href="#contact" className="hover:text-blue-400 transition">Contact</a></li>
  </ul>
</nav>
 
  return (
    <nav className="navbar">
      <div className="logo">Portfolio</div>

      <ul className={isOpen ? "nav-links open" : "nav-links"}>
        <li><a href="#home" className="active">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#hire" className="hire-btn">Hire Me</a></li>
      </ul>

      {/* Hamburger */}
      <div
        className={`hamburger ${isOpen ? "toggle" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
>>>>>>> 9dd296d797cacd049637661e8695a64943c087bc
