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
