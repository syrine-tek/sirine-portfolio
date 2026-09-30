const educationData = [
  {
    id: "edu-01",
    date: "2023 — 2026",
    degree: "Computer Engineering",
    specialization: "Embedded Systems & IoT",
    institution: "ISITCOM",
    institutionFull: "Higher Institute of Communication and Information Technologies, Tunisia",
    icon: "devicon-embeddedc-plain",
    tags: ["C/C++", "ESP32", "React", "Flutter", "IoT", "AI"],
    level: "Bachelor's Degree",
    status: "In Progress",
    color: "#b27c1e",
    glow: "rgba(178,124,30,0.35)",
  },
  {
    id: "edu-02",
    date: "2023",
    degree: "Baccalaureate",
    specialization: "Mathematics",
    institution: "High School",
    institutionFull: "High School, Tunisia",
    icon: "bx bx-math",
    tags: ["Algebra", "Calculus", "Logic", "Physics"],
    level: "National Diploma",
    status: "Completed",
    color: "#4ade80",
    glow: "rgba(74,222,128,0.25)",
  },
];

function Education() {
  return (
    <section id="education" className="edu-section">
      {/* Ambient glows — section-specific colour accents */}
      <div className="edu-glow edu-glow-amber" aria-hidden="true" />
      <div className="edu-glow edu-glow-green" aria-hidden="true" />

      <div className="section-container edu-inner">
        {/* Section Header */}
        <div className="edu-header">
          <div className="edu-label">
            <span className="edu-label-bracket">[</span>
            <span className="edu-label-text">ACADEMIC.BACKGROUND</span>
            <span className="edu-label-bracket">]</span>
          </div>
          <h2 className="edu-title">
            Academic
            <span className="edu-title-accent"> Background
            </span>
          </h2>
          <p className="edu-subtitle">
            The foundation behind every circuit I've designed and every line of code I've written.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="edu-cards-grid">
          {educationData.map((item, index) => (
            <div
              key={item.id}
              className="edu-card"
              style={{ "--card-color": item.color, "--card-glow": item.glow }}
            >
              {/* Card inner glow ring */}
              <div className="edu-card-ring" aria-hidden="true" />

              {/* Top row */}
              <div className="edu-card-top">
                <div className="edu-card-icon-wrap">
                  <i className={item.icon} />
                </div>
                <div className="edu-card-meta">
                  <span
                    className="edu-card-status"
                    data-done={item.status === "Completed"}
                  >
                    <span className="edu-status-dot" />
                    {item.status}
                  </span>
                  <span className="edu-card-level">{item.level}</span>
                </div>
              </div>

              {/* Main info */}
              <div className="edu-card-body">
                <span className="edu-card-date">{item.date}</span>
                <h3 className="edu-card-degree">{item.degree}</h3>
                <span className="edu-card-specialization">{item.specialization}</span>

                <div className="edu-card-institution">
                  <i className="bx bx-buildings" />
                  <div>
                    <span className="edu-inst-short">{item.institution}</span>
                    <span className="edu-inst-full">{item.institutionFull}</span>
                  </div>
                </div>
              </div>

              {/* Tags */}
              <div className="edu-card-tags">
                {item.tags.map((tag) => (
                  <span key={tag} className="edu-tag">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Index number watermark */}
              <span className="edu-card-index" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* Corner accents */}
              <span className="edu-corner edu-corner-tl" aria-hidden="true" />
              <span className="edu-corner edu-corner-br" aria-hidden="true" />
            </div>
          ))}
        </div>

        {/* Bottom decorative bar */}
        <div className="edu-footer-bar" aria-hidden="true">
          <span className="edu-footer-line" />
          <span className="edu-footer-code">sys.education.loaded()</span>
          <span className="edu-footer-line" />
        </div>
      </div>
    </section>
  );
}

export default Education;