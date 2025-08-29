import React from "react";
import "./Project.css";
import { FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Pizza Delivery Website (UI/UX Design)",
    description: "A modern and interactive pizza delivery website prototype focusing on user-friendly navigation and smooth ordering flow.",
    img: "src/assets/pizza.jpg",
    link: "https://www.behance.net/gallery/233198545/-Pizza-Delivery-Website-Prototype-UIUX-Design "
  },
  {
    title: "DualSense Controller Showcase",
    description: "A sleek frontend design showcasing Sony’s DualSense wireless controller with high-quality visuals and engaging layout.",
    img: "src/assets/game.jpg",
    link: "https://www.behance.net/gallery/233201215/DualSense-Wireless-Controller-Design"
  },
  {
    title: "Coffee Shop Website",
    description: "An aesthetic coffee brand website emphasizing minimal UI, cozy theme, and smooth browsing experience for users.",
    img: "src/assets/coffee.jpg",
    link: "https://www.behance.net/gallery/233202747/Coffee-The-Best-For-You"
  },
  {
    title: "Food Delivery App UI Kit",
    description: "A clean and modern UI kit for food delivery apps with engaging layouts, menu browsing, and order tracking screens.",
    img: "src/assets/food.jpg",
    link: "https://www.behance.net/gallery/233203565/Food-Delivery-Website-App-Design-UI-Kit"
  },
  {
    title: "Clothing Store",
    description: "A fully responsive clothing e-commerce website built with HTML, CSS, and JavaScript.",
    img: "src/assets/E-commerce.png",
    link: "https://e-commerce-website-nine-iota.vercel.app/"
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2 className="project-title"><b> <span style={{ color: "#ffffffff" }}>My </span><span style={{ color: "#3b82f6" }}>Projects</span></b></h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.img} alt={project.title} />
            <div className="overlay">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <FaExternalLinkAlt />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
