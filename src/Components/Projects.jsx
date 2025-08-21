import React from "react";
import "./Project.css";

const Projects = () => {
  const projects = [
    { title: "Portfolio Website", desc: "A modern portfolio built with React." },
    { title: "E-commerce Store", desc: "Online shopping platform with cart system." },
    { title: "Blog App", desc: "A responsive blogging app with user authentication." },
  ];

  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="project-grid">
        {projects.map((proj, index) => (
          <div key={index} className="project-card">
            <h3>{proj.title}</h3>
            <p>{proj.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
