import React, { useState } from "react";
import "./PremiumExperience.css";

import premiumPoster from "../assets/premium-poster.jpg";
import premiumVideo from "../assets/premium-video.mp4";

const PremiumExperience = () => {
  const [open, setOpen] = useState(false);

  const closeModal = () => {
    setOpen(false);
  };

  return (
    <>
      {/* SECTION */}
      <section className="premium">
        <div className="premium-container">
          {/* LEFT CONTENT */}
          <div className="premium-content">
            <span className="premium-label">VIRTUAL EXPERIENCE</span>

            <h1 className="premium-title">
              Experience <span>Luxury Living</span>
              <br /> Reimagined
            </h1>

            <p className="premium-text">
              Step inside Dubai’s most exclusive residences through immersive
              virtual experiences. Discover architecture, interiors, and lifestyle
              details from anywhere in the world.
            </p>

            <div className="premium-actions">
              <button className="primary-btn" onClick={() => setOpen(true)}>
                ▶ Watch Virtual Tour
              </button>
              {/* <button className="secondary-btn">
                Schedule Private Viewing
              </button> */}
            </div>
          </div>

          {/* RIGHT THUMBNAIL */}
          <div className="premium-media">
            <div
              className="media-wrapper"
              onClick={() => setOpen(true)}
            >
              <img src={premiumPoster} alt="Virtual Tour" />
              <div className="play-overlay" />
            </div>
          </div>
        </div>
      </section>

      {/* VIDEO MODAL */}
      {open && (
        <div className="video-modal" onClick={closeModal}>
          <div
            className="video-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="close-btn" onClick={closeModal}>
              ✕
            </button>

            <video src={premiumVideo} controls autoPlay />
          </div>
        </div>
      )}
    </>
  );
};

export default PremiumExperience;
