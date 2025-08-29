<<<<<<< HEAD
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import { 
  FaEnvelope, 
  FaPhone, 
  FaGithub, 
  FaInstagram, 
  FaLinkedinIn, 
  FaXTwitter 
} from "react-icons/fa6";


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_g9nyicc",    // Service ID
        "template_s7oarll",   // Template ID
        form.current,
        "LIwLt1AHVvl3BUm2O"   // Public Key
      )
      .then(
        () => {
          alert("✅ Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("❌ Failed to send message. Error: " + error.text);
        }
      );
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        {/* Left Side */}
        <div className="contact-left">
          <h2><b> <span style={{ color: "#ffffffff" }}>Contact </span><span style={{ color: "#3b82f6" }}>Me</span></b></h2>
          <p>
            Let's work together! Have a project idea or want to collaborate?
            Feel free to reach out using the form or my social links below.
          </p>
          <div className="contact-info">
            <span><FaEnvelope /> utsavgoyal2005@gmail.com</span>
            <span><FaPhone /> +91 9457991688</span>
          </div>
          <div className="contact-socials">
  <a href="https://github.com/utsav0712" target="_blank" rel="noopener noreferrer">
    <FaGithub />
  </a>
  <a href="https://twitter.com/UtsavGoyal0712" target="_blank" rel="noopener noreferrer">
    <FaXTwitter />
  </a>
  <a href="https://instagram.com/utsavgoyal_22" target="_blank" rel="noopener noreferrer">
    <FaInstagram />
  </a>
  <a href="https://www.linkedin.com/in/utsav-goyal-7bb456250/" target="_blank" rel="noopener noreferrer">
    <FaLinkedinIn />
  </a>
</div>

        </div>

        {/* Right Side (Form) */}
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <input type="text" name="title" placeholder="Enter Your Subject" required />
          <input type="text" name="user_name" placeholder="Enter Your Name" required />
          <input type="email" name="user_email" placeholder="Enter Your Email" required />
          <input type="text" name="user_Phone no." placeholder="Enter Your Phone" required />
          <textarea name="message" rows="5" placeholder="Enter Your Message" required></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
=======
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import { 
  FaEnvelope, 
  FaPhone, 
  FaGithub, 
  FaInstagram, 
  FaLinkedinIn, 
  FaXTwitter 
} from "react-icons/fa6";


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_g9nyicc",    // Service ID
        "template_s7oarll",   // Template ID
        form.current,
        "LIwLt1AHVvl3BUm2O"   // Public Key
      )
      .then(
        () => {
          alert("✅ Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("❌ Failed to send message. Error: " + error.text);
        }
      );
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        {/* Left Side */}
        <div className="contact-left">
          <h2><b> <span style={{ color: "#ffffffff" }}>Contact </span><span style={{ color: "#3b82f6" }}>Me</span></b></h2>
          <p>
            Let's work together! Have a project idea or want to collaborate?
            Feel free to reach out using the form or my social links below.
          </p>
          <div className="contact-info">
            <span><FaEnvelope /> utsavgoyal2005@gmail.com</span>
            <span><FaPhone /> +91-9457991688</span>
          </div>
          <div className="contact-socials">
  <a href="https://github.com/utsav0712" target="_blank" rel="noopener noreferrer">
    <FaGithub />
  </a>
  <a href="https://twitter.com/UtsavGoyal0712" target="_blank" rel="noopener noreferrer">
    <FaXTwitter />
  </a>
  <a href="https://instagram.com/utsavgoyal_22" target="_blank" rel="noopener noreferrer">
    <FaInstagram />
  </a>
  <a href="https://www.linkedin.com/in/utsav-goyal-7bb456250/" target="_blank" rel="noopener noreferrer">
    <FaLinkedinIn />
  </a>
</div>
          

        </div>

        {/* Right Side (Form) */}
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <input type="text" name="title" placeholder="Enter Your Subject" required />
          <input type="text" name="user_name" placeholder="Enter Your Name" required />
          <input type="email" name="user_email" placeholder="Enter Your Email" required />
          <input type="text" name="user_Phone no." placeholder="Enter Your Phone" required />
          <textarea name="message" rows="5" placeholder="Enter Your Message" required></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;


>>>>>>> 9dd296d797cacd049637661e8695a64943c087bc
