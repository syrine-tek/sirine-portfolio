import { useRef, useEffect, useState, useCallback } from "react";
import certifSoftskills from "../assets/certifSoftskills.jpg";
import aiNightCert from "../assets/AI Night Challenge.png";
import networkingCert from "../assets/Networking Basics.jpg";
import cybersecurityCert from "../assets/Introduction to Cybersecurity.jpg";

const certifications = [
  {
    id: "softskills",
    icon: "bx bx-brain",
    title: "Emotional Intelligence (Soft Skills)",
    issuer: "KoneKt Us Business",
    badge: "Certified Training Diploma",
    hours: "4 Hours Training",
    code: "25383TW7",
    image: certifSoftskills,
    description:
      "Certified Training Diploma in Emotional Intelligence & Soft Skills delivered by Hassene Methlouthi under the supervision of KoneKt US Business.",
  },
  {
    id: "ainight",
    icon: "bx bx-award",
    title: "Certificate of Participation",
    issuer: "AI Night Challenge – 5th Edition",
    badge: "Attestation de Participation",
    image: aiNightCert,
    description:
      "Official certificate of participation in the AI Night Challenge 5th Edition national hackathon & AI competition.",
  },
  {
    id: "networking",
    icon: "bx bx-network-chart",
    title: "Networking Basics",
    issuer: "Cisco Networking Academy",
    badge: "Cisco Certification",
    image: networkingCert,
    description:
      "Comprehensive certification covering foundational computer networking concepts, IP addressing, protocols, router configuration, and network security fundamentals.",
  },
  {
    id: "cybersecurity",
    icon: "bx bx-shield-quarter",
    title: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    badge: "Cisco Certification",
    image: cybersecurityCert,
    description:
      "Certification in core cybersecurity principles, threat intelligence, data protection, privacy guidelines, and network defense strategies.",
  },
];

const skillGroups = [
  {
    icon: "bx bx-code-curly",
    name: "Languages",
    tags: ["C", "C++", "Python", "JavaScript", "Dart"],
  },
  {
    icon: "bx bx-window-alt",
    name: "Web",
    tags: ["React", "Node.js", "NestJS", "Express"],
  },
  {
    icon: "bx bx-mobile-alt",
    name: "Mobile",
    tags: ["Flutter", "Firebase"],
  },
  {
    icon: "bx bx-chip",
    name: "Embedded / IoT",
    tags: ["Arduino", "ESP32", "FreeRTOS", "MQTT", "Raspberry Pi"],
  },
  {
    icon: "bx bx-data",
    name: "Databases",
    tags: ["MongoDB", "PostgreSQL", "MySQL"],
  },
  {
    icon: "bx bx-cloud",
    name: "Cloud & DevOps",
    tags: ["AWS", "Docker", "GitHub Actions", "Git"],
  },
  {
    icon: "bx bx-bulb",
    name: "AI & ML",
    tags: ["scikit-learn", "TensorFlow", "OpenCV", "YOLOv8"],
  },
];

// Duplicated for seamless infinite loop
const doubleCerts = [...certifications, ...certifications, ...certifications];
const doubleSkills = [...skillGroups, ...skillGroups, ...skillGroups];

/* ─────────────────────────────────────────────
   CERTIFICATE MODAL LIGHTBOX
───────────────────────────────────────────── */
function CertModal({ certIndex, onSelectIndex, onClose }) {
  const cert = certifications[certIndex];
  const total = certifications.length;

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

  return (
    <div className="cert-modal-overlay" onClick={onClose}>
      <div className="cert-modal-box" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button className="cert-modal-close" onClick={onClose} aria-label="Close modal">
          <i className="bx bx-x" />
        </button>

        {/* Header */}
        <div className="cert-modal-header">
          <div className="cert-modal-icon-badge">
            <i className={cert.icon} />
          </div>
          <div>
            <span className="cert-badge-tag">{cert.badge || "Certification Officielle"}</span>
            <h3 className="cert-modal-title">{cert.title}</h3>
            <p className="cert-modal-issuer">
              <i className="bx bx-buildings" /> {cert.issuer}
              {cert.code && <span className="cert-code-tag"> · Code: {cert.code}</span>}
              {cert.hours && <span className="cert-code-tag"> · {cert.hours}</span>}
            </p>
          </div>
        </div>

        {/* Content Body */}
        <div className="cert-modal-body">
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
                <i className="bx bx-check-shield" /> Certifié &amp; Vérifié
              </div>
            </div>
          )}

          {cert.description && (
            <p className="cert-modal-desc">{cert.description}</p>
          )}
        </div>

        {/* Footer Navigation */}
        {total > 1 && (
          <div className="cert-modal-footer">
            <button className="cert-nav-btn" onClick={handlePrev} aria-label="Previous certificate">
              <i className="bx bx-chevron-left" /> Précédent
            </button>
            <span className="cert-nav-count">
              {certIndex + 1} / {total}
            </span>
            <button className="cert-nav-btn" onClick={handleNext} aria-label="Next certificate">
              Suivant <i className="bx bx-chevron-right" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function Skills() {
  const certTrackRef = useRef(null);
  const skillsTrackRef = useRef(null);
  const [isCertHovered, setIsCertHovered] = useState(false);
  const [isSkillsHovered, setIsSkillsHovered] = useState(false);
  const [isCertPaused, setIsCertPaused] = useState(false);
  const [isSkillsPaused, setIsSkillsPaused] = useState(false);
  const [activeCertIndex, setActiveCertIndex] = useState(null);

  const certTimeoutRef = useRef(null);
  const skillsTimeoutRef = useRef(null);

  const handleArrowClick = (trackType, direction) => {
    const ref = trackType === "cert" ? certTrackRef : skillsTrackRef;
    if (!ref.current) return;

    if (trackType === "cert") {
      setIsCertPaused(true);
      if (certTimeoutRef.current) clearTimeout(certTimeoutRef.current);
      certTimeoutRef.current = setTimeout(() => setIsCertPaused(false), 1800);
    } else {
      setIsSkillsPaused(true);
      if (skillsTimeoutRef.current) clearTimeout(skillsTimeoutRef.current);
      skillsTimeoutRef.current = setTimeout(() => setIsSkillsPaused(false), 1800);
    }

    const track = ref.current;
    if (direction < 0 && track.scrollLeft <= 20) {
      track.scrollLeft = track.scrollWidth / 3;
    }
    track.scrollBy({ left: direction * 280, behavior: "smooth" });
  };

  // Continuous smooth marquee animation over time
  useEffect(() => {
    let animId;
    const speed = 0.8; // px per frame

    const animate = () => {
      // Certifications track animation
      if (certTrackRef.current && !isCertHovered && !isCertPaused && activeCertIndex === null) {
        const track = certTrackRef.current;
        track.scrollLeft += speed;
        // Circular loop reset
        if (track.scrollLeft >= track.scrollWidth / 3) {
          track.scrollLeft = 0;
        }
      }

      // Skills track animation
      if (skillsTrackRef.current && !isSkillsHovered && !isSkillsPaused) {
        const track = skillsTrackRef.current;
        track.scrollLeft += speed * 0.9;
        // Circular loop reset
        if (track.scrollLeft >= track.scrollWidth / 3) {
          track.scrollLeft = 0;
        }
      }

      animId = requestAnimationFrame(animate);
    };

    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, [isCertHovered, isSkillsHovered, isCertPaused, isSkillsPaused, activeCertIndex]);

  const handleCertClick = (originalIndex) => {
    setActiveCertIndex(originalIndex % certifications.length);
  };

  return (
    <section id="skills" className="skills-section">
      <div className="section-container">

        <h2 className="section-title">Skills & Certifications</h2>

        {/* ===== CERTIFICATIONS ===== */}
        <div className="cert-block">
          <div className="cert-block-head">
            <h3 className="cert-heading">
              <i className="bx bx-medal" /> Certifications
            </h3>
            <div className="marquee-nav">
              <button
                className="marquee-arrow"
                aria-label="Previous"
                onClick={() => handleArrowClick("cert", -1)}
              >
                <i className="bx bx-chevron-left" />
              </button>
              <button
                className="marquee-arrow"
                aria-label="Next"
                onClick={() => handleArrowClick("cert", 1)}
              >
                <i className="bx bx-chevron-right" />
              </button>
            </div>
          </div>

          <div
            className="marquee-viewport"
            onMouseEnter={() => setIsCertHovered(true)}
            onMouseLeave={() => setIsCertHovered(false)}
          >
            <div className="marquee-track" ref={certTrackRef}>
              {doubleCerts.map((cert, i) => {
                const originalIndex = i % certifications.length;
                return (
                  <div
                    className="cert-card cert-card-clickable"
                    key={i}
                    onClick={() => handleCertClick(originalIndex)}
                  >
                    <i className={cert.icon} />
                    <div>
                      <h4>{cert.title}</h4>
                      <span>{cert.issuer}</span>
                    </div>
                    <div className="cert-card-hover-icon">
                      <i className="bx bx-expand-alt" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ===== STACK & TOOLS ===== */}
        <div className="cert-block">
          <div className="cert-block-head">
            <h3 className="cert-heading">
              <i className="bx bx-code-block" /> Stack & Tools
            </h3>
            <div className="marquee-nav">
              <button
                className="marquee-arrow"
                aria-label="Previous"
                onClick={() => handleArrowClick("skills", -1)}
              >
                <i className="bx bx-chevron-left" />
              </button>
              <button
                className="marquee-arrow"
                aria-label="Next"
                onClick={() => handleArrowClick("skills", 1)}
              >
                <i className="bx bx-chevron-right" />
              </button>
            </div>
          </div>

          <div
            className="marquee-viewport"
            onMouseEnter={() => setIsSkillsHovered(true)}
            onMouseLeave={() => setIsSkillsHovered(false)}
          >
            <div className="marquee-track" ref={skillsTrackRef}>
              {doubleSkills.map((group, i) => (
                <div className="skill-card" key={`${group.name}-${i}`}>
                  <div className="skill-head">
                    <i className={group.icon} />
                    <span className="skill-name">{group.name}</span>
                  </div>
                  <div className="skill-tags">
                    {group.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
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
