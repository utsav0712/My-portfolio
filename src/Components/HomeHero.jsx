import React, { useEffect, useState } from "react";
import "./HomeHero.css";
import profilePic from "../assets/profile.jpg"; 

const roles = ["Full Stack Web Developer", "UI/UX Designer"];

const HomeHero = () => {
  const [currentRole, setCurrentRole] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let typingSpeed = isDeleting ? 60 : 120;

    const type = setTimeout(() => {
      if (!isDeleting) {
        setCurrentRole(current.slice(0, currentRole.length + 1));
        if (currentRole === current) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        setCurrentRole(current.slice(0, currentRole.length - 1));
        if (currentRole === "") {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(type);
  }, [currentRole, isDeleting, roleIndex]);

  return (
    <section id="home" className="home-hero">
      {/* LEFT SECTION */}
      <div className="hero-left">
        <h1>
          Hi, I'm <span>Utsav Goyal</span>
        </h1>
        <h2 className="role">
          {currentRole}
          {/* <span className="cursor">|</span> */}
        </h2>
        <p>
          I design and develop modern, responsive websites with clean code and
          smooth user experiences.
        </p>
        <button className="hire-btn">Hire Me</button>
      </div>

      {/* RIGHT SECTION */}
      <div className="hero-right">
        <img src={profilePic} alt="Profile" />
      </div>
    </section>
  );
};

export default HomeHero;
