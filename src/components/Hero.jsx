import { useEffect, useRef, useState } from "react";
import Typed from "typed.js";
import profileImg from "../assets/phot.png";

const workingTechs = [
  { icon: "devicon-flutter-plain colored", label: "Flutter" },
  { icon: "devicon-react-original colored", label: "React" },
  { icon: "devicon-javascript-plain colored", label: "JavaScript" },
  { icon: "devicon-nodejs-plain colored", label: "Node.js" },
  { icon: "devicon-python-plain colored", label: "Python / AI" },
  { icon: "devicon-c-plain colored", label: "C / C++" },
  { icon: "devicon-git-plain colored", label: "Git/GitHub" },
];

function Hero() {
  const typedRef = useRef(null);
  const [activeTechIndex, setActiveTechIndex] = useState(0);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        "Computer Engineer",
        "Embedded Systems Dev",
        "IoT Specialist",
        "FullStack Developer",
        "AI Enthusiast",
      ],
      typeSpeed: 55,
      backSpeed: 30,
      backDelay: 1800,
      startDelay: 400,
      loop: true,
      showCursor: true,
      cursorChar: "|",
    });

    return () => typed.destroy();
  }, []);

  // Tech stack cycling effect
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTechIndex((prev) => (prev + 1) % workingTechs.length);
    }, 1200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="hero-section">

      {/* Floating background faint watermark icons */}
      <div className="watermark-icons" aria-hidden="true">
        <i className="devicon-angularjs-plain watermark w-1" />
        <i className="devicon-amazonwebservices-plain-wordmark watermark w-2" />
        <i className="devicon-vuejs-plain watermark w-3" />
        <i className="devicon-figma-plain watermark w-4" />
        <i className="devicon-django-plain watermark w-5" />
        <i className="devicon-postgresql-plain watermark w-6" />
      </div>

      <div className="hero-container">

        {/* ===== LEFT COLUMN: Text Content & CTAs ===== */}
        <div className="hero-left">

          {/* Availability Pill */}
          <div className="status-badge">
            <span className="status-dot" />
            Open to new opportunities
          </div>

          <div className="status-subtext">
            <span className="dot">•</span> Full-time
            <span className="dot">•</span> Internship
            <span className="dot">•</span> Freelance
          </div>

          <h1 className="hero-name">Sirine Tekaya</h1>

          <h2 className="hero-role-text">
            I'm a <span className="typed-accent" ref={typedRef} />
          </h2>

          <p className="hero-description">
            Computer Engineering graduate passionate about AI, building scalable web
            and mobile applications with a strong focus on performance,
            clean architecture, and user experience, from prototype to
            production.
          </p>

          <div className="hero-actions">
            <a href="#about" className="btn-primary-pill">
              Learn more
            </a>
            <a href="src/assets/resume.pdf" className="btn-secondary-pill" download>
              Download CV
            </a>
          </div>

        </div>

        {/* ===== CENTER COLUMN: Photo + Amber Oval Spotlight ===== */}
        <div className="hero-center">
          <div className="amber-spotlight" aria-hidden="true" />
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
        </div>

        {/* ===== RIGHT COLUMN: Currently Working With Stack ===== */}
        <div className="hero-right">
          <div className="tech-stack-title">CURRENTLY WORKING WITH:</div>
          <div className="tech-stack-list">
            {workingTechs.map((tech, index) => (
              <div
                className={`tech-stack-card ${index === activeTechIndex ? "active-tech" : ""}`}
                key={tech.label}
              >
                <i className={tech.icon} />
                <span>{tech.label}</span>
                {index === activeTechIndex && <div className="active-line-indicator" />}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;