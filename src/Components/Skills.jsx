import "./Skills.css";

function Skills() {
  const skills = [
    { name: "HTML 5", img: "/assets/html.jpg" },
    { name: "CSS 3", img: "/assets/css.png" },
    { name: "JavaScript", img: "/assets/js.png" },
    { name: "React", img: "/assets/react.png" },
    { name: "Tailwind", img: "/assets/tailwind.png" },
    { name: "Figma", img: "/assets/figma.png" },
    { name: "Python", img: "/assets/python.png" },
    { name: "Java", img: "/assets/java.png" },
    { name: "Git", img: "/assets/git.png" },
    { name: "GitHub", img: "/assets/github.png" },
    { name: "MySQL", img: "/assets/mysql.png" },
    { name: "PHP", img: "/assets/php.png" },
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
