function TechStack() {
  const technologies = [
    "C",
    "C++",
    "Python",
    "JavaScript",
    "React",
    "Flutter",
    "Node.js",
    "NestJS",
    "MongoDB",
    "Arduino",
    "ESP32",
    "Git",
  ];

  return (
    <section id="tech-stack" className="tech-stack">

      <div className="section-container">

        <div className="section-label">
          <span></span>
          CURRENTLY WORKING WITH
        </div>

        <div className="tech-list">
          {technologies.map((tech) => (
            <div className="tech-item" key={tech}>
              {tech}
            </div>
          ))}
        </div>

      </div>

    </section>
  );
}

export default TechStack;