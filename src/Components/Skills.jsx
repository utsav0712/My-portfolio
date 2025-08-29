<<<<<<< HEAD
import "./Skills.css";

function Skills() {
  const skills = [
    { name: "HTML 5", img: "src/assets/html.jpg" },
    { name: "CSS 3", img: "src/assets/css.png" },
    { name: "JavaScript", img: "src/assets/js.png" },
    { name: "React", img: "src/assets/react.png" },
    { name: "Tailwind", img: "src/assets/tailwind.png" },
    { name: "Figma", img: "src/assets/figma.png" },
    { name: "Python", img: "src/assets/python.png" },
    { name: "Java", img: "src/assets/java.png" },
    { name: "Git", img: "src/assets/git.png" },
    { name: "GitHub", img: "src/assets/github.png" },
    { name: "mysql", img: "src/assets/mysql.png" },
    { name: "php", img: "src/assets/php.png" },
  ];

  return (
    <section className="skills-section" id="skills">
      <h1 className="skills-title">
        <span style={{ color: "#ffffff" }}>My </span>
        <span style={{ color: "#14b8a6" }}>Skills</span>
      </h1>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <img src={skill.img} alt={skill.name} className="skill-icon" />
            <div className="overlay">
              <span className="skill-name">{skill.name}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
=======
import React, { useState } from "react";
import "./Skills.css";

const skills = [
  { name: "HTML", level: 95 },
  { name: "CSS", level: 90 },
  { name: "JavaScript", level: 85 },
  { name: "React.js", level: 80 },
  { name: "Node.js", level: 75 },
  { name: "MongoDB", level: 70 },
  { name: "Java", level: 80 },
  { name: "Python", level: 75 },
  { name: "UI/UX Design", level: 85 },
  { name: "Responsive Design", level: 90 },
  { name: "Bootstrap", level: 85 },
  { name: "SEO", level: 70 },
  { name: "PHP", level: 65 },
  { name: "C", level: 80 },
  { name: "C++", level: 75 },
  { name: "Deep Learning with Python", level: 60 },
];

const Skills = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <div className="skills-heading">
          <h2>My <span className="highlight">Skills</span></h2>
          <p className="subheading">Technologies & proficiency levels</p>
        </div>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`skill-box ${
                hoveredIndex === index ? "hovered" : "moving"
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="skill-name">{skill.name}</div>
              <div className="skill-percent">
                {hoveredIndex === index ? `${skill.level}%` : ""}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
>>>>>>> 9dd296d797cacd049637661e8695a64943c087bc
