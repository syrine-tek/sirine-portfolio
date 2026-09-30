import { useRef, useState, useEffect, useCallback } from "react";
import milora from "../assets/milora.png";
import miloraVideo from "../assets/MILORA.mp4";
import antisamsar from "../assets/antisamsar.png";
import antisamsarVideo from "../assets/antisamsar.mp4";
import prototype from "../assets/prototype.jpeg";
import SMART1 from "../assets/SMART1.png";
import SMART2 from "../assets/SMART2.png";
import SMART3 from "../assets/SMART3.png";
import SMART4 from "../assets/SMART4.png";
import cablageprojet from "../assets/cablageprojet.png";
import port1 from "../assets/port1.png";
import port2 from "../assets/port2.png";
import port3 from "../assets/port3.png";
import port4 from "../assets/port4.png";
import port5 from "../assets/port5.png";
import port6 from "../assets/port6.png";
import port7 from "../assets/port7.png";
import clubSuite1 from "../assets/University Clubs Management Suite1.png";
import clubSuite2 from "../assets/University Clubs Management Suite2.png";
import clubSuite3 from "../assets/University Clubs Management Suite3.png";

const projects = [
  {
    id: "milora-ecommerce",
    title: "Milora : Fullstack E-commerce",
    shortTitle: "Milora",
    description:
      "Next-generation e-commerce platform: a complete purchasing journey with customer storefront, admin dashboard, product management, and real-time Socket.io admin notifications.",
    tags: ["React", "Node.js", "Express.js", "MongoDB", "Socket.io"],
    githubUrl: "https://github.com/syrine-tek",
    isPrivate: false,
    icon: "bx bx-shopping-bag",
    bgGradient: "linear-gradient(135deg, #2d1b4e 0%, #16182c 100%)",
    thumbnail: milora,
    video: miloraVideo,
  },
  {
    id: "antisamsar",
    title: "AntiSamsar : Smart Real Estate App",
    shortTitle: "AntiSamsar",
    description:
      "Real-time mobile management application bringing together property search, geolocation, RESTful APIs, and AI recommendation features for buyers and renters.",
    tags: ["Flutter", "NestJS", "MongoDB", "Mapbox", "AI"],
    githubUrl: "#contact",
    isPrivate: true,
    icon: "bx bx-building-house",
    bgGradient: "linear-gradient(135deg, #4c1d95 0%, #1e1b4b 100%)",
    thumbnail: antisamsar,
    video: antisamsarVideo,
    phoneFrame: true,
    videoBg: "radial-gradient(ellipse at center, #008f47 0%, #006633 45%, #003d1f 100%)",
  },
  {
    id: "smartlift-access",
    title: "SmartLift Access : Elevator Control",
    shortTitle: "SmartLift",
    description:
      "Smart elevator access control system providing secure resident & visitor access through ESP32-CAM camera authentication, Firebase sync, and Wokwi simulation.",
    tags: ["Android", "Arduino", "Firebase", "ESP32-CAM", "Wokwi"],
    githubUrl: "https://github.com/syrine-tek",
    isPrivate: false,
    icon: "bx bx-shield-quarter",
    bgGradient: "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)",
    thumbnail: prototype,
    images: [SMART1, SMART2, SMART3, SMART4, cablageprojet],
  },
  {
    id: "portfolio-website",
    title: "Portfolio : Personal Website",
    shortTitle: "Portfolio",
    description:
      "Modern interactive personal portfolio web application engineered with React, custom CSS glassmorphism, responsive design system, and smooth animations.",
    tags: ["React", "HTML5", "CSS3", "JavaScript"],
    githubUrl: "https://github.com/syrine-tek",
    liveUrl: "#home",
    isPrivate: false,
    icon: "bx bx-globe",
    bgGradient: "linear-gradient(135deg, #1e1b4b 0%, #0f1026 100%)",
    thumbnail: port1,
    images: [port1, port2, port3, port4, port5, port6, port7],
  },
  {
    id: "events-clubs-management",
    title: "University Clubs Management Suite",
    shortTitle: "Clubs Management",
    description:
      "Web management platform designed for promoting university clubs, scheduling student events, and centralizing student engagement at ISITCOM.",
    tags: ["HTML", "CSS", "JavaScript", "PHP", "SQL"],
    githubUrl: "https://github.com/syrine-tek",
    isPrivate: false,
    icon: "bx bx-group",
    bgGradient: "linear-gradient(135deg, #2e1065 0%, #170d38 100%)",
    thumbnail: clubSuite1,
    images: [clubSuite1, clubSuite2, clubSuite3],
  },
];

/* ─────────────────────────────────────────────
   PERFECTIONIST PROJECT SHOWCASE MODAL
───────────────────────────────────────────── */
function ProjectShowcaseModal({ project, initialTab = "demo", onClose }) {
  const [activeTab, setActiveTab] = useState(() => {
    if (initialTab === "live" && project.liveUrl) return "live";
    if (project.video) return "video";
    if (project.images && project.images.length > 0) return "gallery";
    return "details";
  });

  const [currentIndex, setCurrentIndex] = useState(0);
  const [copiedUrl, setCopiedUrl] = useState(false);
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [iframeError, setIframeError] = useState(false);
  const videoRef = useRef(null);

  const images = project.images || [];
  const hasVideo = Boolean(project.video);
  const hasImages = images.length > 0;
  const hasLive = Boolean(project.liveUrl && project.liveUrl !== "#home");

  const prevImage = useCallback(() => {
    setCurrentIndex((i) => (i - 1 + images.length) % images.length);
  }, [images.length]);

  const nextImage = useCallback(() => {
    setCurrentIndex((i) => (i + 1) % images.length);
  }, [images.length]);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
      if (activeTab === "gallery" && images.length > 1) {
        if (e.key === "ArrowLeft") prevImage();
        if (e.key === "ArrowRight") nextImage();
      }
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose, activeTab, images.length, prevImage, nextImage]);

  const projectUrl = (project.liveUrl && project.liveUrl !== "#home")
    ? project.liveUrl
    : (project.githubUrl && project.githubUrl !== "#contact" ? project.githubUrl : `https://github.com/syrine-tek`);

  const handleCopyAndOpenProject = (e) => {
    e.stopPropagation();
    navigator.clipboard.writeText(projectUrl).then(() => {
      setCopiedUrl(true);
      setTimeout(() => setCopiedUrl(false), 2000);
    });
    if (projectUrl && projectUrl !== "#contact") {
      window.open(projectUrl, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div className="showcase-modal-overlay" onClick={onClose}>
      {/* Background ambient radial glow matching project theme */}
      <div
        className="showcase-modal-glow"
        style={{ background: project.videoBg || project.bgGradient || "radial-gradient(circle, rgba(178, 124, 30, 0.25) 0%, transparent 70%)" }}
      />

      <div className="showcase-modal-window" onClick={(e) => e.stopPropagation()}>
        {/* macOS Browser Window Header Bar */}
        <div className="showcase-window-bar">
          {/* Traffic Light Window Dots */}
          <div className="window-dots">
            <button className="dot dot-close" onClick={onClose} title="Close window"><i className="bx bx-x" /></button>
            <button className="dot dot-minimize" onClick={onClose} title="Minimize"><i className="bx bx-minus" /></button>
            <button className="dot dot-expand" onClick={() => {
              if (document.fullscreenElement) document.exitFullscreen().catch(() => { });
              else document.documentElement.requestFullscreen().catch(() => { });
            }} title="Fullscreen"><i className="bx bx-expand-alt" /></button>
          </div>

          {/* Browser Address Bar / URL Pill - Copies & Opens GitHub / Live Project */}
          <div className="window-address-bar" onClick={handleCopyAndOpenProject} title="Click to copy & open project link">
            <i className={projectUrl.includes("github.com") ? "bx bxl-github lock-icon" : "bx bx-lock-alt lock-icon"} />
            <span className="address-url">{projectUrl}</span>
            <span className="copy-badge">{copiedUrl ? "Copied & Opening!" : (projectUrl.includes("github.com") ? "GitHub" : "Open")}</span>
          </div>

          {/* Top Right Quick Actions */}
          <div className="window-actions">
            {project.githubUrl && !project.isPrivate && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="window-action-btn"
                title="View Source on GitHub"
                onClick={(e) => {
                  navigator.clipboard.writeText(project.githubUrl);
                  setCopiedUrl(true);
                  setTimeout(() => setCopiedUrl(false), 2000);
                }}
              >
                <i className="bx bxl-github" />
                <span>{copiedUrl ? "Copied!" : "GitHub"}</span>
              </a>
            )}
            <button className="window-close-btn" onClick={onClose} aria-label="Close">
              <i className="bx bx-x" />
            </button>
          </div>
        </div>

        {/* Sub-Header Title & Navigation Tabs */}
        <div className="showcase-sub-bar">
          <div className="showcase-title-area">
            <h2 className="showcase-modal-title">
              <i className={project.icon || "bx bx-code-alt"} />
              {project.title}
            </h2>
            <div className="showcase-modal-tags">
              {project.tags.map((tag) => (
                <span key={tag} className="showcase-tag-chip">{tag}</span>
              ))}
            </div>
          </div>

          {/* View Switcher Tabs */}
          <div className="showcase-tabs">
            {hasVideo && (
              <button
                className={`showcase-tab ${activeTab === "video" ? "active" : ""}`}
                onClick={() => setActiveTab("video")}
              >
                <i className="bx bx-play-circle" /> Video Walkthrough
              </button>
            )}
            {hasImages && (
              <button
                className={`showcase-tab ${activeTab === "gallery" ? "active" : ""}`}
                onClick={() => setActiveTab("gallery")}
              >
                <i className="bx bx-images" /> Gallery ({images.length})
              </button>
            )}
            {hasLive && (
              <button
                className={`showcase-tab ${activeTab === "live" ? "active" : ""}`}
                onClick={() => setActiveTab("live")}
              >
                <i className="bx bx-globe" /> Live Web Frame
              </button>
            )}
          </div>
        </div>

        {/* Modal Main Viewport Container */}
        <div className="showcase-modal-viewport">
          {/* TAB 1: VIDEO WALKTHROUGH */}
          {activeTab === "video" && hasVideo && (
            project.phoneFrame ? (
              /* Ultra Phone Mockup Mode */
              <div className="showcase-phone-viewport" style={{ background: project.videoBg || "radial-gradient(ellipse at center, #1b1035 0%, #090615 100%)" }}>
                <div className="phone-frame-pro">
                  <div className="phone-dynamic-island">
                    <span className="camera-lens" />
                  </div>
                  <div className="phone-screen-inner">
                    <video
                      ref={videoRef}
                      src={project.video}
                      controls
                      autoPlay
                      className="phone-video-media"
                    />
                  </div>
                </div>
              </div>
            ) : (
              /* Standard Desktop Browser Player Mode */
              <div className="showcase-video-viewport">
                <video
                  ref={videoRef}
                  src={project.video}
                  controls
                  autoPlay
                  className="showcase-desktop-video"
                />
              </div>
            )
          )}

          {/* TAB 2: IMAGE GALLERY CAROUSEL */}
          {activeTab === "gallery" && hasImages && (
            <div className="showcase-gallery-viewport">
              {images.length > 1 && (
                <button className="gallery-nav-btn gallery-nav-prev" onClick={prevImage} aria-label="Previous image">
                  <i className="bx bx-chevron-left" />
                </button>
              )}

              <div className="gallery-main-image-container">
                <img
                  src={images[currentIndex]}
                  alt={`${project.title} screenshot ${currentIndex + 1}`}
                  className="gallery-main-image"
                />
                <div className="gallery-counter-pill">
                  {currentIndex + 1} / {images.length}
                </div>
              </div>

              {images.length > 1 && (
                <button className="gallery-nav-btn gallery-nav-next" onClick={nextImage} aria-label="Next image">
                  <i className="bx bx-chevron-right" />
                </button>
              )}

              {/* Filmstrip thumbnails */}
              {images.length > 1 && (
                <div className="gallery-thumbnails-strip">
                  {images.map((img, idx) => (
                    <button
                      key={idx}
                      className={`thumb-box ${idx === currentIndex ? "active" : ""}`}
                      onClick={() => setCurrentIndex(idx)}
                    >
                      <img src={img} alt={`Thumb ${idx + 1}`} />
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* TAB 3: LIVE WEB FRAME PREVIEW (with origin protection fallback) */}
          {activeTab === "live" && hasLive && (
            <div className="showcase-live-viewport">
              {!iframeError ? (
                <div className="live-iframe-wrapper">
                  {!iframeLoaded && (
                    <div className="live-loading-spinner">
                      <div className="spinner-ring" />
                      <p>Loading interactive live frame...</p>
                    </div>
                  )}
                  <iframe
                    src={project.liveUrl}
                    title={project.title}
                    className="live-iframe-element"
                    onLoad={() => setIframeLoaded(true)}
                    onError={() => setIframeError(true)}
                  />
                </div>
              ) : (
                /* Fallback frame if external site blocks embedding */
                <div className="live-frame-fallback">
                  <div className="fallback-card">
                    <i className="bx bx-shield-quarter fallback-icon" />
                    <h3>Frame Embedding Restricted</h3>
                    <p>
                      This site enforces strict CORS security policies preventing in-browser iframe rendering.
                      You can launch it securely in a new isolated browser tab.
                    </p>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="fallback-launch-btn"
                    >
                      Open Live Application <i className="bx bx-export" />
                    </a>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Modal Description Footer */}
        <div className="showcase-modal-footer">
          <p className="showcase-footer-desc">{project.description}</p>
          <div className="showcase-footer-meta">
            {project.isPrivate ? (
              <span className="footer-status-tag private">
                <i className="bx bx-lock-alt" /> Private Repository
              </span>
            ) : (
              <span className="footer-status-tag public">
                <i className="bx bx-code-alt" /> Open Source Project
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}


/* ─────────────────────────────────────────────
   PROJECT CARD
───────────────────────────────────────────── */
function ProjectCard({ project, onOpenShowcase }) {
  const videoRef = useRef(null);
  const [hovered, setHovered] = useState(false);

  const hasImages = project.images && project.images.length > 0;
  const showDemoButton = project.video || hasImages || (project.liveUrl && project.liveUrl !== "#home");

  const handleMouseEnter = () => {
    setHovered(true);
    if (videoRef.current) videoRef.current.play().catch(() => { });
  };
  const handleMouseLeave = () => {
    setHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const handleDemoClick = (e, tab = "demo") => {
    e.preventDefault();
    onOpenShowcase(project, tab);
  };

  return (
    <article className="portfolio-card">
      <div
        className="portfolio-thumb"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={(e) => {
          if (showDemoButton) handleDemoClick(e, project.video ? "video" : "gallery");
          else if (project.liveUrl) handleDemoClick(e, "live");
        }}
        style={{
          background: project.thumbnail ? "transparent" : project.bgGradient,
          cursor: "pointer",
        }}
      >
        {/* Thumbnail background image */}
        {project.thumbnail && (
          <img
            src={project.thumbnail}
            alt={project.title}
            className="portfolio-thumb-bg"
          />
        )}

        {/* Video plays on hover (above thumbnail) */}
        {project.video && hovered && (
          <video
            ref={videoRef}
            className="portfolio-video"
            src={project.video}
            muted loop playsInline
            autoPlay
          />
        )}

        {/* Dark overlay always visible */}
        <div className={`portfolio-thumb-overlay ${hovered && showDemoButton ? "hovered" : ""}`} />

        {/* Badge top-right */}
        {project.isPrivate ? (
          <span className="repo-badge-private">
            <i className="bx bx-lock-alt" /> Private repository · Contact
          </span>
        ) : (
          <span className="repo-badge-public">
            <i className="bx bx-code-alt" /> Public repository
          </span>
        )}

        {/* Fallback icon box (no thumbnail, no video, no images) */}
        {!project.thumbnail && !project.video && !hasImages && (
          <div className="portfolio-preview-box">
            <i className={project.icon} />
            <span>{project.shortTitle}</span>
          </div>
        )}

        {/* Center play/view button — appears on hover */}
        {showDemoButton && (
          <div className={`portfolio-center-play ${hovered ? "visible" : ""}`}>
            <i className={project.video ? "bx bx-play-circle" : "bx bx-images"} />
            <span>{project.video ? "Watch demo" : "View showcase"}</span>
          </div>
        )}
      </div>

      <div className="portfolio-info">
        <h3>{project.title}</h3>
        <p>{project.description}</p>

        <div className="portfolio-tags">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>

        <div className="link-btn-group">
          {showDemoButton ? (
            <button className="btn-demo-pill" onClick={(e) => handleDemoClick(e, project.video ? "video" : "gallery")}>
              {project.video ? (
                <><i className="bx bx-play-circle" /> Watch demo</>
              ) : (
                <><i className="bx bx-images" /> View Demo</>
              )}
            </button>
          ) : project.liveUrl ? (
            <button className="btn-demo-pill" onClick={(e) => handleDemoClick(e, "live")}>
              Live <i className="bx bx-export" />
            </button>
          ) : (
            <a href="#contact" className="btn-demo-pill">
              Contact <i className="bx bx-envelope" />
            </a>
          )}

          {project.isPrivate ? (
            <a href="#contact" className="github-link-text">
              GitHub <span className="github-private-tag">Private</span> <i className="bx bx-lock-alt" />
            </a>
          ) : (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="github-link-text">
              GitHub <i className="bx bx-link-external" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

/* ─────────────────────────────────────────────
   PROJECTS SECTION
───────────────────────────────────────────── */
function Projects() {
  const [showcaseModal, setShowcaseModal] = useState(null);
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [selectedProjectId, setSelectedProjectId] = useState("milora-ecommerce");
  const spotlightVideoRef = useRef(null);
  const spotlightContainerRef = useRef(null);

  const categories = ["ALL", "FULLSTACK", "MOBILE & AI", "HARDWARE & IOT", "WEB & SYSTEMS"];

  const getCategory = (proj) => {
    if (proj.id === "milora-ecommerce") return "FULLSTACK";
    if (proj.id === "antisamsar") return "MOBILE & AI";
    if (proj.id === "smartlift-access") return "HARDWARE & IOT";
    return "WEB & SYSTEMS";
  };

  const filteredProjects = projects.filter(
    (p) => activeCategory === "ALL" || getCategory(p) === activeCategory
  );

  const activeSpotlightProject = projects.find((p) => p.id === selectedProjectId) || projects[0];

  const handleOpenShowcase = (project, initialTab = "demo") => {
    setShowcaseModal({ project, initialTab });
  };

  const handlePrevProject = () => {
    const currentIndex = filteredProjects.findIndex((p) => p.id === activeSpotlightProject.id);
    const prevIndex = (currentIndex - 1 + filteredProjects.length) % filteredProjects.length;
    setSelectedProjectId(filteredProjects[prevIndex].id);
  };

  const handleNextProject = () => {
    const currentIndex = filteredProjects.findIndex((p) => p.id === activeSpotlightProject.id);
    const nextIndex = (currentIndex + 1) % filteredProjects.length;
    setSelectedProjectId(filteredProjects[nextIndex].id);
  };

  const handleSelectProject = (projectId) => {
    setSelectedProjectId(projectId);
    if (spotlightContainerRef.current) {
      spotlightContainerRef.current.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  };

  useEffect(() => {
    if (spotlightVideoRef.current) {
      spotlightVideoRef.current.play().catch(() => { });
    }
  }, [selectedProjectId]);

  // Non-passive wheel event listener on spotlight container to switch projects on scroll wheel
  useEffect(() => {
    const container = spotlightContainerRef.current;
    if (!container) return;

    let isCooldown = false;

    const onWheel = (e) => {
      e.preventDefault();

      if (isCooldown) return;
      isCooldown = true;
      setTimeout(() => {
        isCooldown = false;
      }, 250);

      const totalCount = filteredProjects.length;
      if (totalCount <= 1) return;

      const currIdx = filteredProjects.findIndex((p) => p.id === activeSpotlightProject.id);

      if (e.deltaY > 0) {
        // Scroll down -> Next project
        const nextIdx = (currIdx + 1) % totalCount;
        setSelectedProjectId(filteredProjects[nextIdx].id);
      } else if (e.deltaY < 0) {
        // Scroll up -> Previous project
        const prevIdx = (currIdx - 1 + totalCount) % totalCount;
        setSelectedProjectId(filteredProjects[prevIdx].id);
      }
    };

    container.addEventListener("wheel", onWheel, { passive: false });
    return () => {
      container.removeEventListener("wheel", onWheel);
    };
  }, [filteredProjects, activeSpotlightProject.id]);

  return (
    <section id="projects" className="projects-section">
      <div className="projects-ambient-bg" />

      <div className="section-container">
        {/* Header & Category Filter */}
        <div className="projects-header-wrapper">
          <div className="exp-header" style={{ marginBottom: "0" }}>
            <div className="exp-label">
              <span className="exp-label-bracket">[</span>
              <span className="exp-label-text">ENGINEERING.PORTFOLIO</span>
              <span className="exp-label-bracket">]</span>
            </div>
            <h2 className="exp-title">
              Featured  <span className="exp-title-accent">Projects</span>
            </h2>
          </div>
        </div>

        {/* Feature Spotlight Showcase */}
        <div className="spotlight-showcase-container" ref={spotlightContainerRef}>
          <div className="spotlight-badge-strip">
            <span className="spotlight-flag"><i className="bx bx-star" /> FEATURED SPOTLIGHT</span>

            {/* Navigation Dots (Matching Beyond Code style) */}
            <div className="spotlight-nav-controls">
              <div className="spotlight-dots-wrapper">
                {filteredProjects.map((p) => (
                  <button
                    key={p.id}
                    className={`spotlight-dot ${p.id === activeSpotlightProject.id ? "active" : ""}`}
                    onClick={() => setSelectedProjectId(p.id)}
                    title={p.title}
                  />
                ))}
              </div>
            </div>

            <span className="spotlight-num-indicator">
              PROJECT 0{filteredProjects.findIndex((p) => p.id === activeSpotlightProject.id) + 1} / 0{filteredProjects.length}
            </span>
          </div>

          <div className="spotlight-card-body">
            {/* Visual Stage */}
            <div
              className="spotlight-visual-stage"
              onClick={() => handleOpenShowcase(activeSpotlightProject, activeSpotlightProject.video ? "video" : "gallery")}
              style={{
                background: activeSpotlightProject.videoBg || activeSpotlightProject.bgGradient || "radial-gradient(circle at center, #141824 0%, #090c14 100%)",
              }}
            >

              {activeSpotlightProject.video ? (
                <video
                  ref={spotlightVideoRef}
                  src={activeSpotlightProject.video}
                  className="spotlight-media-element"
                  muted
                  loop
                  playsInline
                  autoPlay
                />
              ) : activeSpotlightProject.thumbnail ? (
                <img
                  src={activeSpotlightProject.thumbnail}
                  alt={activeSpotlightProject.title}
                  className="spotlight-media-element"
                />
              ) : (
                <div className="spotlight-fallback-box">
                  <i className={activeSpotlightProject.icon} />
                </div>
              )}

              <div className="spotlight-overlay-vignette" />
            </div>

            {/* Details Panel */}
            <div className="spotlight-details-panel">
              <div className="spotlight-meta-header">
                <span className="spotlight-cat-pill">{getCategory(activeSpotlightProject)}</span>
                {activeSpotlightProject.isPrivate ? (
                  <span className="spotlight-status-private">
                    <i className="bx bx-lock-alt" /> Private Repository
                  </span>
                ) : (
                  <span className="spotlight-status-public">
                    <i className="bx bx-git-repo-forked" /> Open Source
                  </span>
                )}
              </div>

              <h3 className="spotlight-project-title">{activeSpotlightProject.title}</h3>
              <p className="spotlight-project-desc">{activeSpotlightProject.description}</p>

              <div className="spotlight-tech-stack">
                {activeSpotlightProject.tags.map((t) => (
                  <span key={t} className="spotlight-tech-tag">{t}</span>
                ))}
              </div>

              <div className="spotlight-actions-row">
                <button
                  className="spotlight-btn-primary"
                  onClick={() => handleOpenShowcase(activeSpotlightProject, activeSpotlightProject.video ? "video" : "gallery")}
                >
                  <i className="bx bx-layer" /> Explore Deep Details
                </button>

                {!activeSpotlightProject.isPrivate && activeSpotlightProject.githubUrl && (
                  <a
                    href={activeSpotlightProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="spotlight-btn-secondary"
                  >
                    <i className="bx bxl-github" /> Source Code <i className="bx bx-link-external" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Custom Project Deck Grid */}
        <div className="projects-deck-grid">
          {filteredProjects.map((project, idx) => {
            const isSelected = project.id === selectedProjectId;
            return (
              <div
                key={project.id}
                className={`deck-project-card ${isSelected ? "selected-active" : ""}`}
                onClick={() => handleSelectProject(project.id)}
              >
                <div className="deck-card-top-bar">
                  <div className="deck-card-index">0{idx + 1}</div>
                  <div className="deck-card-badge">
                    {project.isPrivate ? (
                      <span className="deck-badge-lock"><i className="bx bx-lock-alt" /> Private</span>
                    ) : (
                      <span className="deck-badge-repo"><i className="bx bx-code-alt" /> Public</span>
                    )}
                  </div>
                </div>

                <div className="deck-card-media-wrapper">
                  {project.thumbnail ? (
                    <img src={project.thumbnail} alt={project.title} className="deck-card-thumb" />
                  ) : (
                    <div className="deck-card-fallback-icon">
                      <i className={project.icon} />
                    </div>
                  )}
                  <div className="deck-card-hover-overlay">
                    <span className="deck-hover-prompt">Click to Spotlight</span>
                  </div>
                </div>

                <div className="deck-card-info-content">
                  <h4 className="deck-card-title">{project.title}</h4>
                  <p className="deck-card-excerpt">{project.description}</p>

                  <div className="deck-card-tags">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="deck-tag-pill">{tag}</span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="deck-tag-more">+{project.tags.length - 3}</span>
                    )}
                  </div>
                </div>

                <div className="deck-card-footer">
                  <button
                    className="deck-btn-inspect"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleOpenShowcase(project, project.video ? "video" : "gallery");
                    }}
                  >
                    <i className="bx bx-slideshow" /> View Demo
                  </button>
                  <span className="deck-select-indicator">
                    {isSelected ? "ACTIVE FOCUS" : "SELECT"}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Project Showcase Modal */}
      {showcaseModal && (
        <ProjectShowcaseModal
          project={showcaseModal.project}
          initialTab={showcaseModal.initialTab}
          onClose={() => setShowcaseModal(null)}
        />
      )}
    </section>
  );
}

export default Projects;
