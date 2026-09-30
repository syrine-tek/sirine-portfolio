import React, { useState, useEffect } from "react";

function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState("Initializing System...");
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const statuses = [
      { p: 15, text: "Connecting to Neural Core..." },
      { p: 35, text: "Loading Embedded Systems Modules..." },
      { p: 60, text: "Mounting Circuit Interfaces..." },
      { p: 85, text: "Compiling Portfolio Assets..." },
      { p: 100, text: "System Ready. Welcome." },
    ];

    let currentStep = 0;
    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + Math.floor(Math.random() * 3) + 1;
        if (next >= 100) {
          clearInterval(interval);
          setStatusText("System Ready. Welcome.");
          setTimeout(() => {
            setIsFading(true);
            setTimeout(() => {
              if (onComplete) onComplete();
            }, 800);
          }, 600);
          return 100;
        }

        const match = statuses.find((s) => next >= s.p && prev < s.p);
        if (match) setStatusText(match.text);

        return next;
      });
    }, 70);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className={`preloader-overlay ${isFading ? "fade-out" : ""}`}>
      <div className="preloader-glow" />

      <div className="preloader-content">
        {/* Monogram Badge */}
        <div className="preloader-logo">
          <div className="preloader-ring" />
          <span className="preloader-monogram">ST</span>
        </div>

        {/* Name Title */}
        <h1 className="preloader-name">
          SIRINE <span className="preloader-accent">TEKAYA</span>
        </h1>
        <p className="preloader-subtitle">SOFTWARE &amp; EMBEDDED SYSTEMS ENGINEER</p>

        {/* Progress Container */}
        <div className="preloader-bar-wrap">
          <div className="preloader-bar-fill" style={{ width: `${progress}%` }} />
        </div>

        {/* Status & Counter */}
        <div className="preloader-meta">
          <span className="preloader-status">
            <i className="bx bx-cog bx-spin" /> {statusText}
          </span>
          <span className="preloader-counter">{progress}%</span>
        </div>
      </div>
    </div>
  );
}

export default Preloader;
