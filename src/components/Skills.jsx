import { useState, useCallback, useEffect } from "react";
import certifSoftskills from "../assets/certifSoftskills.jpg";
import aiNightCert from "../assets/AI Night Challenge.png";
import networkingCert from "../assets/Networking Basics.jpg";
import cybersecurityCert from "../assets/Introduction to Cybersecurity.jpg";

const certifications = [
  {
    id: "softskills",
    icon: "bx bx-brain",
    chipId: "CERT_01",
    title: "Emotional Intelligence (Soft Skills)",
    issuer: "KoneKt Us Business",
    badge: "Certified Training Diploma",
    hours: "4 Hours Training",
    code: "25383TW7",
    image: certifSoftskills,
    credentialUrl: "https://www.linkedin.com/in/sirine-tekaya/details/certifications/",
    description:
      "Certified Training Diploma in Emotional Intelligence & Soft Skills delivered by Hassene Methlouthi under the supervision of KoneKt US Business.",
  },
  {
    id: "ainight",
    icon: "bx bx-award",
    chipId: "CERT_02",
    title: "Certificate of Participation",
    issuer: "AI Night Challenge – 5th Edition",
    badge: "National Hackathon Diploma",
    hours: "Hackathon Competition",
    code: "AI-NIGHT-2025",
    image: aiNightCert,
    credentialUrl: "https://www.linkedin.com/in/sirine-tekaya/details/certifications/",
    description:
      "Official certificate of participation in the AI Night Challenge 5th Edition national hackathon & AI competition.",
  },
  {
    id: "networking",
    icon: "bx bx-network-chart",
    chipId: "CERT_03",
    title: "Networking Basics",
    issuer: "Cisco Networking Academy",
    badge: "Cisco Certification",
    hours: "Verified Credential",
    code: "CISCO-NET-01",
    image: networkingCert,
    credentialUrl: "https://www.linkedin.com/in/sirine-tekaya/details/certifications/",
    description:
      "Comprehensive certification covering foundational computer networking concepts, IP addressing, protocols, router configuration, and network security fundamentals.",
  },
  {
    id: "cybersecurity",
    icon: "bx bx-shield-quarter",
    chipId: "CERT_04",
    title: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    badge: "Cisco Certification",
    hours: "Verified Credential",
    code: "CISCO-SEC-02",
    image: cybersecurityCert,
    credentialUrl: "https://www.linkedin.com/in/sirine-tekaya/details/certifications/",
    description:
      "Certification in core cybersecurity principles, threat intelligence, data protection, privacy guidelines, and network defense strategies.",
  },
];

const neuralNodes = [
  {
    id: "embedded",
    nodeCode: "NODE_01",
    title: "Embedded Systems & IoT Core",
    icon: "bx bx-chip",
    accentColor: "#b27c1e",
    level: "92% OPTIMIZED",
    skills: ["ESP32", "Arduino", "Raspberry Pi"],
    summary: "Microcontroller logic, sensor telemetry, RTOS concurrency & hardware-software interfacing.",
  },
  {
    id: "web",
    nodeCode: "NODE_02",
    title: "Full-Stack Web Engine",
    icon: "bx bx-code-alt",
    accentColor: "#ffe082",
    level: "95% OPTIMIZED",
    skills: ["React", "Node.js", "NestJS", "Express", "JavaScript", "Python"],
    summary: "High-performance web applications, REST APIs, asynchronous servers & modern UI architecture.",
  },
  {
    id: "mobile",
    nodeCode: "NODE_03",
    title: "Mobile App Architecture",
    icon: "bx bx-mobile-alt",
    accentColor: "#d49e38",
    level: "88% OPTIMIZED",
    skills: ["Flutter", "Dart"],
    summary: "Native-grade cross-platform iOS/Android apps with real-time cloud data sync.",
  },
  {
    id: "ai-cloud",
    nodeCode: "NODE_04",
    title: "Databases",
    icon: "bx bx-brain",
    accentColor: "#ffe082",
    level: "90% OPTIMIZED",
    skills: ["MongoDB", "SQL", "Git"],
    summary: "SQL/NoSQL databases deployment.",
  },
];

/* ─────────────────────────────────────────────
   CERTIFICATE LIGHTBOX MODAL
───────────────────────────────────────────── */
function CertModal({ certIndex, onSelectIndex, onClose }) {
  const cert = certifications[certIndex];
  const total = certifications.length;
  const [copiedCode, setCopiedCode] = useState(false);

  const handlePrev = useCallback(() => {
    onSelectIndex((certIndex - 1 + total) % total);
  }, [certIndex, total, onSelectIndex]);

  const handleNext = useCallback(() => {
    onSelectIndex((certIndex + 1) % total);
  }, [certIndex, total, onSelectIndex]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose, handlePrev, handleNext]);

  if (!cert) return null;

  const certUrl = cert.credentialUrl || "https://www.linkedin.com/in/sirine-tekaya/details/certifications/";

  const handleCopyAndOpen = (e) => {
    e.stopPropagation();
    navigator.clipboard.writeText(certUrl).then(() => {
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2000);
    });
    window.open(certUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="showcase-modal-overlay" onClick={onClose}>
      <div className="showcase-modal-glow" style={{ background: "radial-gradient(circle, rgba(178, 124, 30, 0.28) 0%, transparent 70%)" }} />

      <div className="cert-showcase-window" onClick={(e) => e.stopPropagation()}>
        <div className="showcase-window-bar">
          <div className="window-dots">
            <button className="dot dot-close" onClick={onClose} title="Close window"><i className="bx bx-x" /></button>
            <button className="dot dot-minimize" onClick={onClose} title="Minimize"><i className="bx bx-minus" /></button>
            <button className="dot dot-expand" onClick={() => {
              if (document.fullscreenElement) document.exitFullscreen().catch(() => { });
              else document.documentElement.requestFullscreen().catch(() => { });
            }} title="Fullscreen"><i className="bx bx-expand-alt" /></button>
          </div>

          <div className="window-address-bar" onClick={handleCopyAndOpen} title="Click to copy link & open on LinkedIn">
            <i className="bx bxl-linkedin lock-icon" />
            <span className="address-url">{certUrl}</span>
            <span className="copy-badge">{copiedCode ? "Copied & Opening!" : "LinkedIn"}</span>
          </div>

          <div className="window-actions">
            <a
              href={certUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="window-action-btn"
              title="View on LinkedIn Profile"
              onClick={() => {
                navigator.clipboard.writeText(certUrl);
                setCopiedCode(true);
                setTimeout(() => setCopiedCode(false), 2000);
              }}
            >
              <i className="bx bxl-linkedin" />
              <span>{copiedCode ? "Copied!" : "LinkedIn"}</span>
            </a>
            <button className="window-close-btn" onClick={onClose} aria-label="Close">
              <i className="bx bx-x" />
            </button>
          </div>
        </div>

        <div className="cert-modal-header">
          <div className="cert-modal-icon-badge">
            <i className={cert.icon} />
          </div>
          <div>
            <span className="cert-badge-tag">{cert.badge || "Official Certificate"}</span>
            <h3 className="cert-modal-title">{cert.title}</h3>
            <p className="cert-modal-issuer">
              <i className="bx bx-buildings" /> {cert.issuer}
              {cert.code && <span className="cert-code-tag"> · Code: {cert.code}</span>}
              {cert.hours && <span className="cert-code-tag"> · {cert.hours}</span>}
            </p>
          </div>
        </div>

        <div className="cert-modal-body">
          {total > 1 && (
            <button className="gallery-nav-btn gallery-nav-prev" onClick={handlePrev} aria-label="Previous certificate">
              <i className="bx bx-chevron-left" />
            </button>
          )}

          {cert.image ? (
            <div className="cert-img-container">
              <img src={cert.image} alt={cert.title} className="cert-modal-img" />
            </div>
          ) : (
            <div className="cert-digital-badge-view">
              <i className={`${cert.icon} cert-digital-icon`} />
              <h4>{cert.title}</h4>
              <p className="cert-digital-issuer">{cert.issuer}</p>
              <div className="cert-seal">
                <i className="bx bx-check-shield" /> Certified &amp; Verified
              </div>
            </div>
          )}

          {total > 1 && (
            <button className="gallery-nav-btn gallery-nav-next" onClick={handleNext} aria-label="Next certificate">
              <i className="bx bx-chevron-right" />
            </button>
          )}
        </div>

        <div className="cert-modal-footer">
          {cert.description && (
            <p className="cert-modal-desc">{cert.description}</p>
          )}
          {total > 1 && (
            <div className="cert-nav-count-pill">
              {certIndex + 1} / {total}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function Skills() {
  const [activeNodeId, setActiveNodeId] = useState("embedded");
  const [activeCertIndex, setActiveCertIndex] = useState(null);

  // Automatic left-to-right cycling over time
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveNodeId((prevId) => {
        const currIndex = neuralNodes.findIndex((n) => n.id === prevId);
        const nextIndex = (currIndex + 1) % neuralNodes.length;
        return neuralNodes[nextIndex].id;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const activeNode = neuralNodes.find((n) => n.id === activeNodeId) || neuralNodes[0];

  return (
    <section id="skills" className="skills-section">
      {/* Background Soft Glow */}
      <div className="skills-soft-glow" aria-hidden="true" />

      <div className="section-container skills-inner">

        {/* Section Header */}
        <div className="exp-header" style={{ marginBottom: "50px" }}>
          <div className="exp-label">
            <span className="exp-label-bracket">[</span>
            <span className="exp-label-text">CYBERNETIC.ARSENAL</span>
            <span className="exp-label-bracket">]</span>
          </div>
          <h2 className="exp-title">
            Skills &  <span className="exp-title-accent">Certifications</span>
          </h2>
          <p className="exp-subtitle">
            Interactive neural nodes connecting embedded systems, web architectures &amp; verified credentials.
          </p>
        </div>

        {/* ===== QUANTUM NEURAL MATRIX CONTAINER ===== */}
        <div className="neural-matrix-deck">

          {/* TOP NEURAL CORE DOCK */}
          <div className="neural-core-header">
            <div className="core-status">
              <span className="core-pulse-dot" />
              <span>Skills</span>
            </div>
            <div className="core-mode-badge">
              <i className="bx bx-pulse" /> 4 ACTIVE NODES OPERATIONAL
            </div>
          </div>

          {/* NEURAL NODES SELECTOR TABS */}
          <div className="neural-nodes-grid">
            {neuralNodes.map((node) => {
              const isActive = node.id === activeNodeId;
              return (
                <div
                  key={node.id}
                  className={`neural-node-card ${isActive ? "active-node" : ""}`}
                  onClick={() => setActiveNodeId(node.id)}
                >
                  <div className="node-card-top">
                    <span className="node-code">{node.nodeCode}</span>
                    <span className="node-level">{node.level}</span>
                  </div>

                  <div className="node-card-main">
                    <div className="node-icon-box">
                      <i className={node.icon} />
                    </div>
                    <div>
                      <h3 className="node-title">{node.title}</h3>
                      <span className="node-skill-count">{node.skills.length} Tech Modules</span>
                    </div>
                  </div>

                  {isActive && <div className="node-active-line" />}
                </div>
              );
            })}
          </div>

          {/* ACTIVE NEURAL NODE DETAILED FOCUS PANEL */}
          <div className="neural-focus-panel">
            <div className="focus-header">
              <div className="focus-title-group">
                <i className={activeNode.icon} />
                <div>
                  <span className="focus-node-tag">{activeNode.nodeCode} // DETAILED KNOWLEDGE TREE</span>
                  <h3 className="focus-node-title">{activeNode.title}</h3>
                </div>
              </div>
            </div>

            <p className="focus-summary">{activeNode.summary}</p>

            {/* INTERACTIVE TECH CHIPS GRID */}
            <div className="focus-tech-grid">
              {activeNode.skills.map((skill) => (
                <div key={skill} className="focus-tech-chip">
                  <span className="chip-dot" />
                  <span className="chip-name">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* VERIFIED CERTIFICATIONS VAULT */}
          <div className="neural-cert-vault">
            <div className="vault-top-bar">
              <div className="vault-title-wrap">
                <i className="bx bx-shield-quarter" />
                <div>
                  <h3 className="vault-heading">Certifications</h3>
                  <p className="vault-subheading">Official diploma credentials</p>
                </div>
              </div>
              <span className="vault-count-badge">4 DIPLOMAS VERIFIED</span>
            </div>

            <div className="neural-cert-grid">
              {certifications.map((cert, index) => (
                <div
                  key={cert.id}
                  className="neural-cert-card"
                  onClick={() => setActiveCertIndex(index)}
                >
                  <div className="cert-card-header">
                    <span className="cert-chip-id">{cert.chipId}</span>
                  </div>

                  <div className="cert-card-content">
                    <div className="cert-icon-frame">
                      <i className={cert.icon} />
                    </div>
                    <div>
                      <span className="cert-badge-type">{cert.badge}</span>
                      <h4 className="cert-card-title">{cert.title}</h4>
                      <p className="cert-card-issuer">
                        <i className="bx bx-buildings" /> {cert.issuer}
                      </p>
                    </div>
                  </div>

                  <div className="cert-card-footer">
                    <span className="cert-hours-text">{cert.hours}</span>
                    <button className="cert-inspect-link">
                      View <i className="bx bx-right-arrow-alt" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

      {/* ===== CERTIFICATE LIGHTBOX MODAL ===== */}
      {activeCertIndex !== null && (
        <CertModal
          certIndex={activeCertIndex}
          onSelectIndex={setActiveCertIndex}
          onClose={() => setActiveCertIndex(null)}
        />
      )}
    </section>
  );
}

export default Skills;

