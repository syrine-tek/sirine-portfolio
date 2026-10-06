import cyberCert from "../assets/Introduction to Cybersecurity.jpg";
import networkCert from "../assets/Networking Basics.jpg";
import softSkillsCert from "../assets/certifSoftskills.jpg";

const certificatesData = [
  {
    id: "cert-01",
    title: "Introduction to Cybersecurity",
    issuer: "CISCO",
    date: "2024",
    image: cyberCert,
    color: "#b27c1e",
    glow: "rgba(178,124,30,0.35)",
  },
  {
    id: "cert-02",
    title: "Networking Basics",
    issuer: "CISCO",
    date: "2024",
    image: networkCert,
    color: "#4ade80",
    glow: "rgba(74,222,128,0.25)",
  },
  {
    id: "cert-03",
    title: "Soft Skills & Professional Development",
    issuer: "ISITCOM",
    date: "2023",
    image: softSkillsCert,
    color: "#b27c1e",
    glow: "rgba(178,124,30,0.25)",
  },
];

function Certificates() {
  return (
    <section id="certificates" className="cert-section">
      {/* Ambient glows */}
      <div className="cert-glow cert-glow-amber" aria-hidden="true" />
      <div className="cert-glow cert-glow-green" aria-hidden="true" />

      <div className="section-container cert-inner">
        {/* Section Header */}
        <div className="cert-header">
          <div className="cert-label">
            <span className="cert-label-bracket">[</span>
            <span className="cert-label-text">CERTIFICATIONS</span>
            <span className="cert-label-bracket">]</span>
          </div>
          <h2 className="cert-title">
            My{" "}
            <span className="cert-title-accent">Certificates</span>
          </h2>
          <p className="cert-subtitle">
            Professional certifications that validate my technical expertise and continuous learning journey.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="cert-cards-grid">
          {certificatesData.map((cert, index) => (
            <div
              key={cert.id}
              className="cert-card"
              style={{ "--card-color": cert.color, "--card-glow": cert.glow }}
            >
              {/* Card inner glow ring */}
              <div className="cert-card-ring" aria-hidden="true" />

              {/* Medal badge */}
              <div className="cert-medal-badge" aria-hidden="true">
                <i className="bx bxs-medal" />
              </div>

              {/* Certificate image frame */}
              <div className="cert-img-frame">
                <div className="cert-img-scanline" aria-hidden="true" />
                <img
                  src={cert.image}
                  alt={`${cert.title} certificate`}
                  className="cert-img"
                  loading="lazy"
                />
                {/* HUD corners on image */}
                <span className="cert-hud cert-hud-tl" aria-hidden="true" />
                <span className="cert-hud cert-hud-tr" aria-hidden="true" />
                <span className="cert-hud cert-hud-bl" aria-hidden="true" />
                <span className="cert-hud cert-hud-br" aria-hidden="true" />
              </div>

              {/* Info */}
              <div className="cert-card-body">
                <h3 className="cert-card-title">{cert.title}</h3>
                <div className="cert-card-meta">
                  <span className="cert-issuer">
                    <i className="bx bx-buildings" />
                    {cert.issuer}
                  </span>
                  <span className="cert-date">
                    <i className="bx bx-calendar" />
                    {cert.date}
                  </span>
                </div>
              </div>

              {/* Index watermark */}
              <span className="cert-card-index" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* Corner accents */}
              <span className="cert-corner cert-corner-tl" aria-hidden="true" />
              <span className="cert-corner cert-corner-br" aria-hidden="true" />
            </div>
          ))}
        </div>

        {/* Bottom decorative bar */}
        <div className="cert-footer-bar" aria-hidden="true">
          <span className="cert-footer-line" />
          <span className="cert-footer-code">sys.certificates.loaded()</span>
          <span className="cert-footer-line" />
        </div>
      </div>
    </section>
  );
}

export default Certificates;
