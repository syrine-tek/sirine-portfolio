import { useRef, useState, useEffect, useCallback } from "react";

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
    thumbnail: "src/assets/milora.png",  // add your screenshot here
    video: "src/assets/MILORA.mp4",
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
    thumbnail: "src/assets/antisamsar.png",  // add your screenshot here
    video: "src/assets/antisamsar.mp4",
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
    thumbnail: "src/assets/prototype.jpeg",  // add your screenshot here
    images: ["src/assets/SMART1.png", "src/assets/SMART2.png", "src/assets/SMART3.png", "src/assets/SMART4.png", "src/assets/cablageprojet.png"],  // add image paths here
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
    thumbnail: "src/assets/port1.png",
    images: ["src/assets/port1.png", "src/assets/port2.png", "src/assets/port3.png", "src/assets/port4.png", "src/assets/port5.png", "src/assets/port6.png"],  // add image paths here

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
    thumbnail: "src/assets/University Clubs Management Suite1.png",
    images: ["src/assets/University Clubs Management Suite1.png", "src/assets/University Clubs Management Suite2.png", "src/assets/University Clubs Management Suite3.png"],
  },
];

/* ─────────────────────────────────────────────
   VIDEO MODAL (lightbox)
───────────────────────────────────────────── */
function VideoModal({ project, onClose }) {
  useEffect(() => {
    const handleKey = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div className="video-modal-overlay" onClick={onClose}>
      <div className="video-modal-box" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="video-modal-header">
          <div>
            <h2 className="video-modal-title">{project.title}</h2>
            <p className="video-modal-desc">{project.description}</p>
          </div>
          <button className="video-modal-close" onClick={onClose} aria-label="Close">
            <i className="bx bx-x" />
          </button>
        </div>

        {/* Player area */}
        {project.phoneFrame ? (
          /* ── Phone frame mode ── */
          <div
            className="video-modal-phone-bg"
            style={{ background: project.videoBg || "radial-gradient(ellipse at center, #a021b5 0%, #6b0fa0 40%, #2a0040 100%)" }}
          >
            <div className="phone-frame">
              {/* notch */}
              <div className="phone-notch" />
              <div className="phone-screen">
                <video
                  src={project.video}
                  controls
                  autoPlay
                  className="phone-screen-video"
                />
              </div>
            </div>
          </div>
        ) : (
          /* ── Normal player mode ── */
          <div className="video-modal-player">
            <video
              src={project.video}
              controls
              autoPlay
              className="video-modal-video"
            />
          </div>
        )}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   IMAGE CAROUSEL MODAL (lightbox)
───────────────────────────────────────────── */
function ImageModal({ project, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = project.images || [];

  const prev = useCallback(() => setCurrentIndex((i) => (i - 1 + images.length) % images.length), [images.length]);
  const next = useCallback(() => setCurrentIndex((i) => (i + 1) % images.length), [images.length]);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose, prev, next]);

  return (
    <div className="video-modal-overlay" onClick={onClose}>
      <div className="image-modal-box" onClick={(e) => e.stopPropagation()}>

        {/* Header */}
        <div className="image-modal-header">
          <div>
            <h2 className="video-modal-title">{project.title}</h2>
            <p className="video-modal-desc">{project.imageCaption || "Overview of the interface and key features."}</p>
          </div>
          <button className="video-modal-close" onClick={onClose} aria-label="Close">
            <i className="bx bx-x" />
          </button>
        </div>

        {/* Image viewer */}
        <div className="image-modal-viewer">
          {/* Prev arrow */}
          {images.length > 1 && (
            <button className="img-modal-arrow img-modal-arrow-left" onClick={prev} aria-label="Previous">
              <i className="bx bx-chevron-left" />
            </button>
          )}

          {/* Image */}
          <div className="image-modal-img-wrap">
            <img
              src={images[currentIndex]}
              alt={`${project.title} screenshot ${currentIndex + 1}`}
              className="image-modal-img"
            />
          </div>

          {/* Next arrow */}
          {images.length > 1 && (
            <button className="img-modal-arrow img-modal-arrow-right" onClick={next} aria-label="Next">
              <i className="bx bx-chevron-right" />
            </button>
          )}
        </div>

        {/* Dot indicators */}
        {images.length > 1 && (
          <div className="image-modal-dots">
            {images.map((_, i) => (
              <button
                key={i}
                className={`img-dot ${i === currentIndex ? "active" : ""}`}
                onClick={() => setCurrentIndex(i)}
                aria-label={`Go to image ${i + 1}`}
              />
            ))}
          </div>
        )}

      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   PROJECT CARD
───────────────────────────────────────────── */
function ProjectCard({ project, onOpenVideoModal, onOpenImageModal }) {
  const videoRef = useRef(null);
  const [hovered, setHovered] = useState(false);

  const hasImages = project.images && project.images.length > 0;
  const showDemoButton = project.video || hasImages;

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

  const handleDemoClick = (e) => {
    e.preventDefault();
    if (project.video) onOpenVideoModal(project);
    else if (hasImages) onOpenImageModal(project);
  };

  return (
    <article className="portfolio-card">
      <div
        className="portfolio-thumb"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={showDemoButton ? handleDemoClick : undefined}
        style={{
          background: project.thumbnail ? "transparent" : project.bgGradient,
          cursor: showDemoButton ? "pointer" : "default",
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
            <span>{project.video ? "Watch demo" : "View screenshots"}</span>
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
            <button className="btn-demo-pill" onClick={handleDemoClick}>
              {project.video ? (
                <><i className="bx bx-play-circle" /> Watch demo</>
              ) : (
                <><i className="bx bx-images" /> View screenshots</>
              )}
            </button>
          ) : project.liveUrl ? (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-demo-pill">
              Live <i className="bx bx-export" />
            </a>
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
  const [videoModal, setVideoModal] = useState(null);
  const [imageModal, setImageModal] = useState(null);

  return (
    <section id="projects" className="projects-section">
      <div className="section-container">
        <h2 className="code-section-title">
          <span className="code-tag">&lt;</span> Featured Projects <span className="code-tag">/&gt;</span>
        </h2>

        <div className="portfolio-grid">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenVideoModal={setVideoModal}
              onOpenImageModal={setImageModal}
            />
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {videoModal && (
        <VideoModal project={videoModal} onClose={() => setVideoModal(null)} />
      )}

      {/* Image Carousel Modal */}
      {imageModal && (
        <ImageModal project={imageModal} onClose={() => setImageModal(null)} />
      )}
    </section>
  );
}

export default Projects;
