
import React from "react";
import "./About.css";

const competitions = [
  "Hacknovate – Participant",
  "Microsoft(Web3) – Participant",
  "Grootz – UI/UX Intern",
];

const internships = [
  "Deep Learning with PyTorch - Assisto AI",
  "Grootz - UI/UX Intern",
  "Deloitte - Data Analytics",
];

const achievements = [
  "Silver Badge on CodeChef (250+ problems solved)",
  "Java Certification (SoftPro)",
  "WebDev Workshop Hosted",
  "Freedom with AI Masterclass (Freedom with AI)",
  "Programming Contest",
];

const About = () => {
  return (
    <section id="about" className="about-section ">
      <div className="about-container">
        <div className="about-left">
          {/* Heading with Developer & Designer box */}
          <div className="heading-with-box">
            <h2>
              About <span className="highlight">Me</span>
            </h2>
            <span className="effect-box">Developer & Designer</span>
          </div>

          {/* About Me paragraph */}
          <p>
            Hi, I’m Utsav, a full-stack developer & designer passionate about building modern web applications.
            I specialize in creating clean, responsive, and interactive designs with both frontend and backend technologies.
          </p>

          {/* Competitions & Internships side by side */}
          <div className="experience-container">
            <div className="experience-box">
              <h3 className="sectionn-title">Competitions & Participation</h3>
              <div className="box-container">
                {competitions.map((item, index) => (
                  <span key={index} className="small-box">{item}</span>
                ))}
              </div>
            </div>

            <div className="experience-box">
              <h3 className="sectionn-title">Internships & Experience</h3>
              <div className="box-container">
                {internships.map((intern, index) => (
                  <span key={index} className="small-box">{intern}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Achievements Section */}
          <h3 className="sectionn-title">Achievements</h3>
          <div className="box-container">
            {achievements.map((achieve, index) => (
              <span key={index} className="small-box">{achieve}</span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="cta-buttons">
            <a
              href="/Utsav Goyal Resume.pdf"
              download="Utsav-Goyal-Resume.pdf"
              className="cta-btn"
            >
              Download CV
            </a>
            <a href="#contact" className="cta-btn-outline">Contact Me</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
