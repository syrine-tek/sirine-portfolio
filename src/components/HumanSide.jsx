import { useState } from "react";
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
    title: "Baccalaureate Degree",
    description:
      "A proud milestone — obtaining my Baccalaureate in Mathematics and taking the first big step towards Computer Engineering.",
    image: BAC,
    bgGradient: "linear-gradient(135deg, #1e1b4b 0%, #311b92 100%)",
  },
  {
    id: "eniso-engineering-day",
    category: "Life",
    title: "Engineering Day at ENISO",
    description:
      "An inspiring day at the National Engineering School of Sousse (ENISO) — connecting with engineering peers, tech companies, and innovation leaders.",
    image: JOUR,
    bgGradient: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
  },
  {
    id: "first-thesis-copy",
    category: "Life",
    title: "First Copy of My Thesis Report",
    description:
      "Holding the very first printed copy of my final graduation thesis report — months of dedication, research, and coding finalized in print.",
    image: rapport,
    bgGradient: "linear-gradient(135deg, #2d124d 0%, #1e1b4b 100%)",
  },
  {
    id: "polytechnique-sousse-ai-comp",
    category: "Hackathons",
    title: "1st Place - AI Competition",
    description:
      "Achieved 1st place in the AI Competition organized at Polytechnique Sousse with Club ARSSI.",
    image: comp,
    bgGradient: "linear-gradient(135deg, #1e1b4b 0%, #4c1d95 100%)",
  },
  {
    id: "ia-night-challenge",
    category: "Hackathons",
    title: "IA Night Challenge",
    description:
      "Participated in the 5th Edition of IA Night Challenge, building AI solutions under intense time pressure.",
    image: ai_night,
    bgGradient: "linear-gradient(135deg, #022c22 0%, #064e3b 100%)",
  },
  {
    id: "info-night",
    category: "Hackathons",
    title: "Info Night - Organizing Team",
    description:
      "Participated in the organization of this hackathon — a rewarding experience taking on responsibility and supporting the tech community.",
    image: nuit_d_info,
    bgGradient: "linear-gradient(135deg, #172554 0%, #1e3a8a 100%)",
  },
  {
    id: "good-times",
    category: "Life",
    title: "Good Times, Good People",
    description:
      "A little collection of moments with friends — laughter, spontaneous memories, and the people who make life more fun.",
    image: friends,
    bgGradient: "linear-gradient(135deg, #161e2e 0%, #0d131f 100%)",
  },
  {
    id: "people-around-me",
    category: "Life",
    title: "The People Around Me",
    description:
      "Precious moments with amazing people who inspire and support me every day.",
    image: pepole,
    bgGradient: "linear-gradient(135deg, #2a1040 0%, #160a24 100%)",
  },
  {
    id: "new-chapter",
    category: "Life",
    title: "A New Chapter",
    description:
      "Celebrating graduation — honoring the hard work, unforgettable memories, and stepping confidently into the future.",
    image: gratude,
    bgGradient: "linear-gradient(135deg, #0f172a 0%, #1e1035 100%)",
  },
];

function HumanSide() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredItems =
    activeTab === "All"
      ? humanItems
      : humanItems.filter((item) => item.category === activeTab);

  return (
    <section id="human-side" className="human-side-section">
      <div className="section-container">
        {/* Section Header matching site design system */}
        <div className="human-side-header">
          <h2 className="code-section-title" style={{ marginBottom: "16px" }}>
            <span className="code-tag">&lt;</span> The human behind the code <span className="code-tag">/&gt;</span>
          </h2>

          <p className="human-side-desc">
            I believe continuous learning, curiosity, and collaboration are
            essential for creating meaningful technology solutions.
          </p>

          {/* Filter Pills */}
          <div className="human-filter-pills">
            {categories.map((category) => (
              <button
                key={category}
                className={`filter-pill ${activeTab === category ? "active" : ""}`}
                onClick={() => setActiveTab(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Human Side Gallery Grid */}
        <div className="human-gallery-grid">
          {filteredItems.map((item) => (
            <div className="human-card" key={item.id}>
              {/* Subtle glowing corner bracket */}
              <div className="corner-bracket top-left" />

              {/* Background photo container */}
              <div
                className="human-card-bg"
                style={{ background: item.bgGradient }}
              >
                {item.image && (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="human-card-img"
                    onError={(e) => {
                      e.target.style.display = "none";
                    }}
                  />
                )}
                <div className="human-card-overlay" />
              </div>

              {/* Card content text overlay */}
              <div className="human-card-content">
                <h3 className="human-card-title">{item.title}</h3>
                <p className="human-card-desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HumanSide;
