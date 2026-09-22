import { useState, useEffect } from "react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Education", href: "#education" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Beyond Code", href: "#human-side" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Scroll shadow + active section tracking
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Active link detection
      const sections = [...navItems.map(item => item.href.slice(1)), "contact"];
      let current = "home";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) {
          current = id;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar${scrolled ? " scrolled" : ""}`}>
      <div className="navbar-container">

        {/* Logo Brand matching gold calligraphic monogram */}
        <a href="#home" className="logo-brand">
          <div className="logo-monogram">
            <span className="monogram-text">𝓢𝓣</span>
          </div>
          <div className="logo-text-wrap">
            <span className="logo-name">Sirine Tekaya</span>
            <span className="logo-subtitle">SOFTWARE DEVELOPER</span>
          </div>
        </a>

        {/* Nav Links */}
        <nav className={`nav-menu${isOpen ? " active" : ""}`}>
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={activeSection === item.href.slice(1) ? "active" : ""}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="nav-actions">
          <a href="#contact" className="lets-talk-btn" id="lets-talk-btn">
            Contact Me <i className="bx bx-right-arrow-alt" />
          </a>

          {/* Mobile hamburger */}
          <button
            className="menu-button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen
              ? <i className="bx bx-x" style={{ fontSize: "26px" }} />
              : <i className="bx bx-menu" style={{ fontSize: "26px" }} />
            }
          </button>
        </div>

      </div>
    </header>
  );
}

export default Navbar;