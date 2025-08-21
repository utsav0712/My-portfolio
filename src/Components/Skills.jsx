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
