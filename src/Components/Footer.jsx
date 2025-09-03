import React, { useRef } from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import "./Footer.css";

export default function Footer() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_g9nyicc",   // your service ID
        "template_s7oarll",  // your template ID
        form.current,        // form reference
        "LIwLt1AHVvl3BUm2O"  // your public key
      )
      .then(
        () => {
          alert("✔️ Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("❌ Failed to send: " + error.text);
        }
      );
  };

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

        {/* Column 2 - About */}
        <div className="footer-about">
          <h3>About</h3>
          <p>
            I specialize in building clean, high-performance web apps with a
            focus on <b>frontend magic ✨</b> and smooth user experiences.  
            Open for freelance & collaborations.
          </p>
        </div>

        {/* Column 3 - Contact */}
        <div className="footer-contact">
          <h3>Get in Touch</h3>
          <p>📧 utsavgoyal2005@gmail.com</p>
          <p>📍 India</p>
          <form ref={form} className="contact-formm" onSubmit={sendEmail}>
            <input type="email" name="user_email" placeholder="Enter your email" required />
            <button type="submit">Contact</button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Utsav Goyal. All Rights Reserved.</p>
        <p className="made-with">
          Made with <span>❤️</span> & lots of ☕ by Utsav
        </p>
      </div>
    </footer>
  );
}
