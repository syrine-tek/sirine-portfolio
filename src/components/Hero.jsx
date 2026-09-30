import { useEffect, useRef, useState } from "react";
import Typed from "typed.js";
import profileImg from "../assets/phot.png";

const workingTechs = [
  { icon: "devicon-c-plain colored", label: "C / C++ (Embedded)", category: "HARDWARE" },
  { icon: "devicon-react-original colored", label: "React / Vite", category: "WEB" },
  { icon: "devicon-flutter-plain colored", label: "Flutter / Mobile", category: "MOBILE" },
  { icon: "devicon-python-plain colored", label: "Python & AI", category: "AI / ML" },
  { icon: "devicon-nodejs-plain colored", label: "Node.js & Express", category: "BACKEND" },
  { icon: "devicon-git-plain colored", label: "Git & GitHub", category: "SYSTEM" },
];

function Hero() {
  const typedRef = useRef(null);
  const [activeTechIndex, setActiveTechIndex] = useState(0);
  const [cpuFreq, setCpuFreq] = useState("240 MHz");

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        "Computer Engineer",
        "Embedded Systems Dev",
        "IoT & Hardware Specialist",
        "FullStack Web & Mobile Dev",
      ],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1800,
      startDelay: 300,
      loop: true,
      showCursor: true,
      cursorChar: "_",
    });

    return () => typed.destroy();
  }, []);

  // Tech stack cycling & live telemetry simulation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTechIndex((prev) => (prev + 1) % workingTechs.length);
      const freq = (238 + Math.floor(Math.random() * 5)).toString();
      setCpuFreq(`${freq} MHz`);
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="hero-section">
      {/* Background Cyber-Grid Light & Circuit Accent */}
      <div className="hero-cyber-grid" aria-hidden="true" />
      <div className="hero-amber-spotlight" aria-hidden="true" />

      <div className="hero-container">

        {/* ===== LEFT COLUMN: Cybernetic Engineer ID Card ===== */}
        <div className="hero-left">

          {/* Hardware Status Terminal Pill */}
          <div className="cyber-status-pill">
            <span className="cyber-pulse-dot" />
            <span className="cyber-pill-label">Open to new opportunities</span>
          </div>

          <div className="hero-system-tags">
            <span className="sys-badge"><i className="bx bx-chip" /> ISITCOM ENGINEER</span>
            <span className="sys-badge"><i className="bx bx-check-shield" /> DEGREE 2026</span>
          </div>

          <h1 className="hero-name">
            Sirine <span className="hero-name-accent">Tekaya</span>
          </h1>

          <h2 className="hero-role-text">
            <span className="terminal-prompt">&gt;</span> SYSTEM.ROLE ={" "}
            <span className="typed-accent" ref={typedRef} />
          </h2>

          <p className="hero-description">
            Computer engineering graduate bridging hardware systems with web &amp; mobile software architecture.
            Specialized in embedded microcontrollers, IoT, responsive full-stack interfaces, and AI.
          </p>

          {/* Action CTAs */}
          <div className="hero-actions">
            <a href="#projects" className="btn-primary-pill">
              <i className="bx bx-terminal" /> Explore Projects
            </a>
            <a href="src/assets/resume.pdf" className="btn-secondary-pill" download>
              <i className="bx bx-download" /> Download CV
            </a>
          </div>

        </div>

        {/* ===== CENTER COLUMN: Futuristic Hologram Avatar & HUD Matrix ===== */}
        <div className="hero-center">
          <div className="holo-avatar-wrapper">

            {/* Hologram Reticle Rings */}
            <div className="holo-ring ring-outer" />
            <div className="holo-ring ring-inner" />
            <div className="holo-scanline" />

            {/* Corner Bracket Frames */}
            <span className="hud-corner top-left" />
            <span className="hud-corner top-right" />
            <span className="hud-corner bottom-left" />
            <span className="hud-corner bottom-right" />

            {/* Floating Live Telemetry Badges */}
            <div className="holo-tag tag-top">
              <i className="bx bx-pulse" /> CLK: {cpuFreq}
            </div>
            <div className="holo-tag tag-bottom">
              <i className="bx bx-wifi" /> IoT Node Connected
            </div>

            {/* Main Photo Frame */}
            <div className="hero-photo-frame">
              <img
                src={profileImg}
                alt="Sirine Tekaya"
                className="hero-main-photo"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.nextSibling.style.display = "flex";
                }}
              />
              <div className="hero-initials-fallback" style={{ display: "none" }}>
                ST
              </div>
            </div>

            <div className="holo-base-light" />
          </div>
        </div>

        {/* ===== RIGHT COLUMN: Interactive Cyber-Deck Tech Stack ===== */}
        <div className="hero-right">
          <div className="tech-stack-panel">
            <div className="panel-header">
              <i className="bx bx-code-block" />
              <span>ACTIVE ENGINE STACK</span>
              <span className="panel-status">SYS_OK</span>
            </div>

            <div className="tech-stack-list">
              {workingTechs.map((tech, index) => {
                const isActive = index === activeTechIndex;
                return (
                  <div
                    key={tech.label}
                    className={`tech-stack-card ${isActive ? "active-tech" : ""}`}
                    onClick={() => setActiveTechIndex(index)}
                  >
                    <div className="tech-card-left">
                      <i className={tech.icon} />
                      <div>
                        <span className="tech-label">{tech.label}</span>
                        <span className="tech-cat">{tech.category}</span>
                      </div>
                    </div>

                    <div className="tech-card-right">
                      {isActive ? (
                        <span className="active-badge">ACTIVE</span>
                      ) : (
                        <span className="idle-badge">READY</span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Real-time System Bar */}
            <div className="panel-footer-telemetry">
              <div className="telemetry-item">
                <span>MEM_ALLOC</span>
                <div className="telemetry-bar"><div className="bar-fill" style={{ width: "84%" }} /></div>
              </div>
              <div className="telemetry-item">
                <span>COMPLY</span>
                <div className="telemetry-bar"><div className="bar-fill" style={{ width: "98%" }} /></div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;
