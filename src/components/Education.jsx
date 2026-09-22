const educationItems = [
  {
    date: "2023 — 2026",
    degree: "Computer Engineering, Embedded Systems & IoT",
    institution: "ISITCOM — Higher Institute of Communication and Information Technologies, Tunisia",
  },
  {
    date: "2023",
    degree: "Baccalaureate in Mathematics",
    institution: "High School, Tunisia",
  },
];

function Education() {
  return (
    <section id="education" className="education-section">
      <div className="section-container">

        {/* Section Title with Code Tags */}
        <h2 className="code-section-title">
          <span className="code-tag">&lt;</span> Academic background <span className="code-tag">/&gt;</span>
        </h2>

        <div className="timeline">
          {educationItems.map((item, index) => (
            <div className="timeline-item" key={index}>
              {/* Concentric Double Circle Node */}
              <div className="timeline-dot-ring" />

              <div className="timeline-card">
                <span className="timeline-date">{item.date}</span>
                <h3 className="timeline-title">{item.degree}</h3>
                <p className="timeline-place">
                  <i className="bx bx-buildings" />
                  {item.institution}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Education;