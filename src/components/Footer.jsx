import { useEffect, useState } from "react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Education", href: "#education" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
];

const services = [
  "Full-Stack Web Development",
  "Mobile App Development (Flutter)",
  "Embedded Systems & IoT Solutions",
];

function Footer() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <footer className="footer">
        <div className="footer-main">

          {/* Brand */}
          <div className="footer-brand">
            <a href="#home" className="logo-brand">
              <div className="logo-monogram">
                <span className="monogram-text">𝓢𝓣</span>
              </div>
            </a>
            <span className="footer-status">
              <span className="availability-dot" />
              Open to new opportunities
            </span>
            <p className="footer-desc">
              Computer Engineering graduate specialized in Embedded Systems, IoT,
              Web and Mobile development.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h4 className="footer-col-title">Explore</h4>
            <nav className="footer-nav">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href}>{link.name}</a>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="footer-col-title">Services</h4>
            <nav className="footer-nav">
              {services.map((service) => (
                <a key={service}>{service}</a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="footer-col-title">Connect</h4>
            <a href="mailto:syrinetekaya@gmail.com" className="footer-contact-item">
              <i className="bx bx-envelope" /> syrinetekaya@gmail.com
            </a>
            <a href="tel:+21693203284" className="footer-contact-item">
              <i className="bx bx-phone" /> +216 93203284
            </a>
            <span className="footer-contact-item">
              <i className="bx bx-map" /> Teboulba, Monastir, Tunisia
            </span>
          </div>

        </div>

        <div className="footer-divider" />

        {/* Footer Bottom Bar matching reference screenshot */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {new Date().getFullYear()} Sirine Tekaya.
          </p>

          <div className="footer-social-icons">
            <a
              href="https://github.com/syrine-tek"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn"
              aria-label="GitHub"
            >
              <i className="bx bxl-github" />
            </a>
            <a
              href="https://linkedin.com/in/sirine-tekaya"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn"
              aria-label="LinkedIn"
            >
              <i className="bx bxl-linkedin" />
            </a>
            <a
              href="mailto:syrinetekaya@gmail.com"
              className="social-icon-btn"
              aria-label="Email"
            >
              <i className="bx bx-envelope" />
            </a>
          </div>
        </div>
      </footer>

      {/* Back to top button */}
      <a
        href="#home"
        className={`back-top${showTop ? " visible" : ""}`}
        id="back-top"
        aria-label="Back to top"
      >
        <i className="bx bx-up-arrow-alt" />
      </a>
    </>
  );
}

export default Footer;