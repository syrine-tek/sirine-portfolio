import aboutImg from "../assets/phot.png";

function About() {
  return (
    <section id="about" className="about-section">
      {/* Background faint watermark tech icons */}
      <div className="watermark-icons" aria-hidden="true">
        <i className="devicon-spring-plain watermark w-3" style={{ top: "15%", left: "28%" }} />
        <i className="devicon-vuejs-plain watermark w-1" style={{ top: "25%", left: "31%" }} />
        <i className="devicon-figma-plain watermark w-4" style={{ top: "45%", left: "40%" }} />
        <i className="devicon-django-plain watermark w-5" style={{ top: "58%", left: "55%" }} />
        <i className="devicon-postgresql-plain watermark w-6" style={{ bottom: "15%", left: "25%" }} />
      </div>

      <div className="section-container">

        {/* Section Title with Code Tags */}
        <h2 className="code-section-title">
          <span className="code-tag">&lt;</span> About Me <span className="code-tag">/&gt;</span>
        </h2>

        <div className="about-content">

          {/* Left: Circle Photo Container with Amber Arc Glow */}
          <div className="about-img-wrap">
            <div className="about-circle-container">

              {/* Outer Amber Arc Glow Ring */}
              <div className="about-arc-ring" aria-hidden="true" />

              {/* Circular Inner Image Frame */}
              <div className="about-img-frame-circle">
                <img
                  src={aboutImg}
                  alt="Sirine Tekaya"
                  className="about-photo-circle"
                  onError={(e) => {
                    e.target.style.display = "none";
                    if (e.target.nextSibling) {
                      e.target.nextSibling.style.display = "flex";
                    }
                  }}
                />
                <span className="about-avatar-large" style={{ display: "none" }}>ST</span>
              </div>

            </div>
          </div>

          {/* Right: Text + Stats */}
          <div className="about-text-wrap">
            <h3 className="about-headline">
              Between hardware and software, I build things that work.
            </h3>

            <p>
              Computer Engineering graduate from ISITCOM, specialized in Embedded Systems and IoT.
              I work across the full stack — from ESP32 and Arduino on the hardware side,
              to React/Node.js web apps and Flutter mobile apps on the software side.
            </p>

            <p>
              Through projects like AntiSamsar (AI-powered real estate app), SmartLift Access (smart elevator control), and Milora (e-commerce platform),
              I've built experience in embedded systems, web development, mobile apps, and AI.
              Now looking for a team where I can keep building end-to-end solutions.
            </p>

            {/* Stats row */}
            <div className="about-stats">
              <div className="stat">
                <span className="stat-num">3</span>
                <span className="stat-label">professional internships</span>
              </div>
              <div className="stat">
                <span className="stat-num">5+</span>
                <span className="stat-label">projects completed</span>
              </div>
              <div className="stat">
                <span className="stat-num">25+</span>
                <span className="stat-label">technologies &amp; certifications</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;