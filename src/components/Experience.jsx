const experiences = [
  {
    id: "exp-01",
    date: "Summer 2026",
    company: "Freelance",
    location: "Tunisia",
    roles: ["Full-Stack Web Developer"],
    title: "Milora: E-commerce Web Platform",
    description:
      "Developed a complete e-commerce web platform with a customer storefront and an administration dashboard.",
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "Socket.io", "REST APIs"],
    icon: "devicon-react-original colored",
    color: "#61dafb",
    glow: "rgba(97,218,251,0.2)",
    type: "Freelance",
  },
  {
    id: "exp-02",
    date: "2025 — 2026",
    company: "SOTUPUB",
    location: "Sousse, Tunisia",
    roles: ["Final Year Project", "Mobile Developer"],
    title: "AntiSamsar — Smart Real-Estate App",
    description:
      "Development of a smart real-estate mobile application combining property search, geolocation, real-time communication and intelligent recommendation features.",
    technologies: ["Flutter", "NestJS", "MongoDB", "TypeORM", "Mapbox", "AI"],
    icon: "devicon-flutter-plain colored",
    color: "#54c5f8",
    glow: "rgba(84,197,248,0.2)",
    type: "Internship",
  },
  {
    id: "exp-03",
    date: "Summer 2024",
    company: "Tunisie Télécom",
    location: "Moknine, Tunisia",
    roles: ["Technical Internship"],
    title: "Telecommunications & Networking",
    description:
      "Introduction to telecommunications infrastructure, transmission systems, and network technologies including SDH, DWDM, and PABX systems.",
    technologies: ["SDH", "DWDM", "PBX / PABX", "Networking"],
    icon: "bx bx-wifi",
    color: "#b27c1e",
    glow: "rgba(178,124,30,0.25)",
    type: "Internship",
  },
  {
    id: "exp-04",
    date: "Summer 2024",
    company: "SYNC",
    location: "Monastir, Tunisia",
    roles: ["Mobile Developer"],
    title: "Training App — Artificial Hand",
    description:
      "Developed a complete mobile application for monitoring and training an artificial hand.",
    technologies: ["Flutter", "Firebase"],
    icon: "devicon-flutter-plain colored",
    color: "#4ade80",
    glow: "rgba(74,222,128,0.2)",
    type: "Internship",
  },
];

const typeColors = {
  Freelance: { bg: "rgba(178,124,30,0.08)", border: "rgba(178,124,30,0.3)", text: "#b27c1e" },
  Internship: { bg: "rgba(74,222,128,0.07)", border: "rgba(74,222,128,0.3)", text: "#4ade80" },
};

function Experience() {
  return (
    <section id="experience" className="exp-section">
      {/* Ambient glows */}
      <div className="exp-glow exp-glow-amber" aria-hidden="true" />
      <div className="exp-glow exp-glow-blue" aria-hidden="true" />

      <div className="section-container exp-inner">
        {/* Section Header */}
        <div className="exp-header">
          <div className="exp-label">
            <span className="exp-label-bracket">[</span>
            <span className="exp-label-text">PROFESSIONAL.EXPERIENCE</span>
            <span className="exp-label-bracket">]</span>
          </div>
          <h2 className="exp-title">
            Professional
            <span className="exp-title-accent"> Experience</span>
          </h2>
        </div>

        {/* Cards Grid — 2 col */}
        <div className="exp-cards-grid">
          {experiences.map((exp, index) => {
            const tc = typeColors[exp.type] || typeColors["Internship"];
            return (
              <div
                key={exp.id}
                className="exp-card"
                style={{ "--exp-color": exp.color, "--exp-glow": exp.glow }}
              >
                {/* Glow ring */}
                <div className="exp-card-ring" aria-hidden="true" />

                {/* Corner accents */}
                <span className="exp-corner exp-corner-tl" aria-hidden="true" />
                <span className="exp-corner exp-corner-br" aria-hidden="true" />

                {/* Watermark index */}
                <span className="exp-card-index" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* Top row */}
                <div className="exp-card-top">
                  <div className="exp-card-icon-wrap">
                    <i className={exp.icon} />
                  </div>
                  <div className="exp-card-meta">
                    <span
                      className="exp-type-badge"
                      style={{ background: tc.bg, border: `1px solid ${tc.border}`, color: tc.text }}
                    >
                      {exp.type}
                    </span>
                    <span className="exp-card-date">{exp.date}</span>
                  </div>
                </div>

                {/* Body */}
                <div className="exp-card-body">
                  {/* Company */}
                  <div className="exp-company-row">
                    <i className="bx bx-buildings" />
                    <div>
                      <span className="exp-company-name">{exp.company}</span>
                      {exp.location && (
                        <span className="exp-company-location">{exp.location}</span>
                      )}
                    </div>
                  </div>

                  {/* Role badges */}
                  <div className="exp-roles">
                    {exp.roles.map((role) => (
                      <span key={role} className="exp-role-pill">{role}</span>
                    ))}
                  </div>

                  {/* Title */}
                  <h3 className="exp-card-title">{exp.title}</h3>

                  {/* Description */}
                  <p className="exp-card-desc">{exp.description}</p>
                </div>

                {/* Tech tags */}
                <div className="exp-card-tags">
                  {exp.technologies.map((tech) => (
                    <span key={tech} className="exp-tag">{tech}</span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer bar */}
        <div className="exp-footer-bar" aria-hidden="true">
          <span className="exp-footer-line" />
          <span className="exp-footer-code">sys.experience.loaded()</span>
          <span className="exp-footer-line" />
        </div>
      </div>
    </section>
  );
}

export default Experience;