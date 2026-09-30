import aboutImg from "../assets/phot.png";

function About() {
  return (
    <section id="about" className="about-section">
      <div className="section-container">

        {/* Section Header */}
        <div className="exp-header">
          <div className="exp-label">
            <span className="exp-label-bracket">[</span>
            <span className="exp-label-text">ABOUT.ENGINEER</span>
            <span className="exp-label-bracket">]</span>
          </div>
          <h2 className="exp-title">
            About <span className="exp-title-accent">Me</span>
          </h2>
        </div>

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

          </div>
        </div>
      </div>
    </section>
  );
}

export default About;