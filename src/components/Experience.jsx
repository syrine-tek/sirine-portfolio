const experiences = [
  {
    date: "Summer 2026",
    company: "Freelance",
    location: "Tunisia",
    roles: ["Full-Stack Web Developer"],
    title: "Milora: E-commerce Web Platform",
    description:
      "Developed a complete e-commerce web platform with a customer storefront and an administration dashboard.",
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "Socket.io", "REST APIs"],
  },
  {
    date: "2025 — 2026",
    company: "SOTUPUB",
    location: "Sousse, Tunisia",
    roles: ["Final Year Project", "Mobile Developer"],
    title: "AntiSamsar — Smart Real-Estate App",
    description:
      "Development of a smart real-estate mobile application combining property search, geolocation, real-time communication and intelligent recommendation features.",
    technologies: ["Flutter", "NestJS", "MongoDB", "TypeORM", "Mapbox", "AI"],
  },
  {
    date: "Summer 2024",
    company: "Tunisie Télécom",
    location: "Moknine, Tunisia",
    roles: ["Technical Internship"],
    title: "Telecommunications & Networking",
    description:
      "Introduction to telecommunications infrastructure, transmission systems, and network technologies including SDH, DWDM, and PABX systems.",
    technologies: ["SDH", "DWDM", "PBX / PABX", "Networking"],
  },
  {
    date: "Summer 2024",
    company: "SYNC",
    location: "Monastir, Tunisia",
    roles: ["Mobile Developer"],
    title: "Training App",
    description:
      "Developed a complete mobile application for monitoring and training an artificial hand.",
    technologies: ["Flutter", "Firebase"],
  },
];

function Experience() {
  return (
    <section id="experience" className="experience-section">
      <div className="section-container">

        {/* Section Title with Code Tags */}
        <h2 className="code-section-title">
          <span className="code-tag">&lt;</span> Professional experience <span className="code-tag">/&gt;</span>
        </h2>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <div className="timeline-item" key={index}>
              {/* Concentric Double Circle Node */}
              <div className="timeline-dot-ring" />

              <div className="timeline-card">
                <span className="timeline-date">{exp.date}</span>

                <p className="timeline-place">
                  <i className="bx bx-buildings" />
                  {exp.company}{exp.location ? `, ${exp.location}` : ""}
                </p>

                {exp.roles && exp.roles.length > 0 && (
                  <div className="timeline-roles">
                    {exp.roles.map((role) => (
                      <span className="role-badge" key={role}>{role}</span>
                    ))}
                  </div>
                )}

                {exp.title && <h3 className="timeline-title">{exp.title}</h3>}

                {exp.description && <p className="timeline-desc">{exp.description}</p>}

                {exp.technologies && exp.technologies.length > 0 && (
                  <div className="edu-tags" style={{ marginTop: "14px" }}>
                    {exp.technologies.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Experience;