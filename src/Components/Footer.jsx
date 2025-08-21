import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© {new Date().getFullYear()} Utsav Goyal | All Rights Reserved</p>
        <div className="social-icons">
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="mailto:yourmail@example.com">Email</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
