import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // Add current time dynamically
    const timeField = document.createElement("input");
    timeField.type = "hidden";
    timeField.name = "time";
    timeField.value = new Date().toLocaleString(); // Example: 4/9/2025, 11:45 PM
    form.current.appendChild(timeField);

    emailjs
      .sendForm(
        "service_g9nyicc",   // Service ID
        "template_s7oarll",  // Template ID
        form.current,        // Form reference
        "LIwLt1AHVvl3BUm2O"  // Public Key
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result);
          // ✅ Custom alert with tick mark
          alert("✔️ Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error);
          alert("❌ Something went wrong: " + JSON.stringify(error));
        }
      );
  };

  return (
    <div className="contact-page">
      <div className="glass-container">
        {/* Top Social Links */}
        <div className="social-top">
          <a href="https://github.com/yourusername" target="_blank" rel="noreferrer">
            <div className="social-circle"><FaGithub /></div>
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer">
            <div className="social-circle"><FaLinkedin /></div>
          </a>
          <a href="mailto:yourmail@gmail.com">
            <div className="social-circle"><FaEnvelope /></div>
          </a>
        </div>

        {/* Form */}
        <form ref={form} onSubmit={sendEmail}>
          <h2 className="form-heading">Get in Touch</h2>
          <input type="text" name="user_name" placeholder="Name" required />
          <input type="email" name="user_email" placeholder="Email" required />
          <input type="text" name="user_phone" placeholder="Phone" required />
          <textarea name="message" placeholder="Message" rows="5" required></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
