import { useState, useRef, useEffect, useCallback } from "react";
import BAC from "../assets/BAC.jpeg";
import JOUR from "../assets/JOUR.jpeg";
import rapport from "../assets/rapport.jpeg";
import comp from "../assets/comp.jpeg";
import ai_night from "../assets/ai night.jpeg";
import nuit_d_info from "../assets/nuit d'info.jpeg";
import friends from "../assets/friends.jpeg";
import pepole from "../assets/pepole.jpeg";
import gratude from "../assets/gratude.jpeg";

const categories = ["All", "Hackathons", "Life"];

const humanItems = [
  {
    id: "baccalaureate-achievement",
    category: "Life",
    title: "Academic Milestone: Mathematics Baccalaureate",
    description:
      "Laying the foundation — earning my Baccalaureate with a specialization in Mathematics, sparking a lifelong passion for complex problem-solving and software engineering.",
    image: BAC,
    bgGradient: "radial-gradient(circle at 50% 30%, #1e1b4b 0%, #090d16 100%)",
  },
  {
    id: "eniso-engineering-day",
    category: "Life",
    title: "ENISO Engineering & Industry Forum",
    description:
      "Engaging at the National Engineering School of Sousse (ENISO) — exchanging insights with industry pioneers, tech leaders, and fellow innovator engineers.",
    image: JOUR,
    bgGradient: "radial-gradient(circle at 50% 30%, #1e293b 0%, #0b0f17 100%)",
  },
  {
    id: "first-thesis-copy",
    category: "Life",
    title: "Engineering Thesis Manuscript",
    description:
      "Holding the physical culmination of my academic journey — months of intensive research, system architecture design, and full-stack engineering captured in print.",
    image: rapport,
    bgGradient: "radial-gradient(circle at 50% 30%, #2e1065 0%, #0a0d14 100%)",
  },
  {
    id: "polytechnique-sousse-ai-comp",
    category: "Hackathons",
    title: "1st Place Winner — Polytechnique AI Cup",
    description:
      "Awarded 1st place in the prestigious AI Competition hosted at Polytechnique Sousse with ARSSI Club for designing an innovative computer vision architecture.",
    image: comp,
    bgGradient: "radial-gradient(circle at 50% 30%, #3b0764 0%, #090c15 100%)",
  },
  {
    id: "ia-night-challenge",
    category: "Hackathons",
    title: "IA Night Challenge — 5th Edition",
    description:
      "Architecting machine learning solutions under high pressure — competing alongside top talent in an intensive overnight artificial intelligence hackathon.",
    image: ai_night,
    bgGradient: "radial-gradient(circle at 50% 30%, #064e3b 0%, #080c14 100%)",
  },
  {
    id: "info-night",
    category: "Hackathons",
    title: "Info Night — Technical Organizing Committee",
    description:
      "Steering logistics and operations for the annual tech hackathon — empowering developer teams, fostering collaboration, and cultivating tech community growth.",
    image: nuit_d_info,
    bgGradient: "radial-gradient(circle at 50% 30%, #1e3a8a 0%, #0a0d17 100%)",
  },
  {
    id: "good-times",
    category: "Life",
    title: "Moments & Connections",
    description:
      "Cherished memories with close companions — balancing deep focus with shared laughter, shared growth, and lifelong friendships.",
    image: friends,
    bgGradient: "radial-gradient(circle at 50% 30%, #172554 0%, #090c16 100%)",
  },
  {
    id: "people-around-me",
    category: "Life",
    title: "The Circle of Inspiration",
    description:
      "Surrounded by exceptional minds and supportive mentors who fuel creativity, continuous learning, and personal growth.",
    image: pepole,
    bgGradient: "radial-gradient(circle at 50% 30%, #311042 0%, #0a0d16 100%)",
  },
  {
    id: "new-chapter",
    category: "Life",
    title: "Commencement & Beyond",
    description:
      "Honoring the culmination of my engineering degree — stepping forward into the tech industry with ambition, drive, and vision.",
    image: gratude,
    bgGradient: "radial-gradient(circle at 50% 30%, #1e1b4b 0%, #080b13 100%)",
  },
];

function HumanSide() {
  const [activeTab, setActiveTab] = useState("All");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const deckRef = useRef(null);

  const filteredItems =
    activeTab === "All"
      ? humanItems
      : humanItems.filter((item) => item.category === activeTab);

  const totalCards = filteredItems.length;

  const handleTabChange = (category) => {
    setActiveTab(category);
    setCurrentIndex(0);
  };

  const nextCard = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalCards);
  }, [totalCards]);

  const prevCard = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalCards) % totalCards);
  }, [totalCards]);

  // Non-passive wheel event listener with e.preventDefault() to freeze page scroll
  useEffect(() => {
    const el = deckRef.current;
    if (!el) return;

    let isCooldown = false;

    const onWheel = (e) => {
      // Prevent browser default window scrolling
      e.preventDefault();

      if (isCooldown) return;
      isCooldown = true;
      setTimeout(() => {
        isCooldown = false;
      }, 250);

      if (e.deltaY > 0) {
        setCurrentIndex((prev) => (prev + 1) % totalCards);
      } else if (e.deltaY < 0) {
        setCurrentIndex((prev) => (prev - 1 + totalCards) % totalCards);
      }
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    return () => {
      el.removeEventListener("wheel", onWheel);
    };
  }, [totalCards]);

  // Touch swipe event handlers
  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientY);
  };

  const handleTouchEnd = (e) => {
    if (!touchStart) return;
    const diff = touchStart - e.changedTouches[0].clientY;
    if (Math.abs(diff) > 40) {
      if (diff > 0) nextCard();
      else prevCard();
    }
    setTouchStart(null);
  };

  return (
    <section id="human-side" className="human-side-section">
      <div className="section-container">
        {/* Section Header */}
        <div className="human-side-header">
          <h2 className="code-section-title" style={{ marginBottom: "16px" }}>
            <span className="code-tag">&lt;</span> Beyond Code <span className="code-tag">/&gt;</span>
          </h2>

          <p className="human-side-desc">
            Continuous learning, passion for hackathons, teamwork, and personal milestones that shape who I am behind the code.
          </p>

          {/* Filter Pills */}
          <div className="human-filter-pills">
            {categories.map((category) => (
              <button
                key={category}
                className={`filter-pill ${activeTab === category ? "active" : ""}`}
                onClick={() => handleTabChange(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* STACKED CARDS SHOWCASE (Deck in same place with window header bar & scroll lock) */}
        <div 
          ref={deckRef}
          className="deck-container"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="deck-wrapper">
            {filteredItems.map((item, idx) => {
              const offset = idx - currentIndex;
              let positionClass = "";

              if (offset === 0) positionClass = "deck-card-active";
              else if (offset === 1 || (offset === -(totalCards - 1) && totalCards > 2)) positionClass = "deck-card-next-1";
              else if (offset === 2 || (offset === -(totalCards - 2) && totalCards > 3)) positionClass = "deck-card-next-2";
              else if (offset < 0) positionClass = "deck-card-passed";
              else positionClass = "deck-card-hidden";

              return (
                <div
                  key={item.id}
                  className={`deck-card ${positionClass}`}
                  onClick={() => {
                    if (offset > 0) setCurrentIndex(idx);
                  }}
                >
                  {/* Full-bleed Photo Background */}
                  <div className="deck-card-bg" style={{ background: item.bgGradient }}>
                    {item.image && (
                      <img
                        src={item.image}
                        alt={item.title}
                        className="deck-card-img"
                        onError={(e) => { e.target.style.display = "none"; }}
                      />
                    )}
                    <div className="deck-card-overlay" />
                  </div>

                  {/* macOS Top Bar — Traffic lights + category pill */}
                  <div className="deck-card-window-bar">
                    <div className="window-dots">
                      <span className="dot dot-close" />
                      <span className="dot dot-minimize" />
                      <span className="dot dot-expand" />
                    </div>
                    <span className="deck-tag-pill">{item.category}</span>
                  </div>

                  {/* Glass Bottom Info Panel */}
                  <div className="deck-card-bottom">
                    <div className="deck-card-bottom-row">
                      <h3 className="deck-card-title">{item.title}</h3>
                      <span className="deck-card-counter">
                        {String(idx + 1).padStart(2, "0")} <span className="counter-sep">/</span> {String(filteredItems.length).padStart(2, "0")}
                      </span>
                    </div>
                    <p className="deck-card-desc">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Floating Controls Bar (Dots Only) */}
          <div className="deck-controls">
            <div className="deck-dots">
              {filteredItems.map((_, i) => (
                <button
                  key={i}
                  className={`deck-dot ${currentIndex === i ? "active" : ""}`}
                  onClick={() => setCurrentIndex(i)}
                  aria-label={`Go to item ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HumanSide;
