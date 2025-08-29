import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";
import "./Footer.css";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Column 1 - Branding */}
        <div className="footer-brand">
          <div className="logo">UG</div>
          <h2 className="brand-name">Utsav Goyal</h2>
          <p className="brand-text">
            Passionate Web Developer 🚀 — crafting modern, responsive &
            user-friendly digital experiences.
          </p>
          <div className="social-icons">
            <a href="https://github.com/utsav0712" target="_blank" rel="noreferrer"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/utsav-goyal-7bb456250/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
            <a href="https://instagram.com/utsavgoyal_22" target="_blank" rel="noreferrer"><FaInstagram /></a>
            <a href="mailto:utsav@example.com"><FaEnvelope /></a>
          </div>
        </div>

        {/* Column 2 - Links */}
      {/* <div className="footer-links">
  <h3>Quick Links</h3>
  <ul>
    <li><a href="#home">🏠 Home</a></li>
    <li><a href="#about">👨‍💻 About</a></li>
    <li><a href="#skills">⚡ Skills</a></li>
    <li><a href="#projects">📂 Projects</a></li>
    <li><a href="#contact">📞 Contact</a></li>
  </ul>
</div> */}

        {/* Column 3 - About */}
        <div className="footer-about">
          <h3>About</h3>
          <p>
            I specialize in building clean, high-performance web apps with a
            focus on **frontend magic ✨** and smooth user experiences.  
            Open for freelance & collaborations.
          </p>
        </div>

        {/* Column 4 - Contact */}
        <div className="footer-contact">
          <h3>Get in Touch</h3>
          <p>📧 utsavgoyal2005@gmail.com</p>
          <p>📍 India</p>
          <form className="contact-formm">
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Contact</button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Utsav Goyal. All Rights Reserved.
        </p>
        <p className="made-with">
          Made with <span>❤️</span> & lots of ☕ by Utsav
        </p>
      </div>
    </footer>
  );
}
