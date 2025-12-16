import React from "react";
import "./DreamHomeCTA.css";

const DreamHomeCTA = () => {
  return (
    <section className="dream-cta">
      <div className="dream-cta-container">
        {/* LEFT CONTENT */}
        <div className="dream-cta-content">
          <h2>Looking for a dream home?</h2>
          <p>
            We help you turn your vision into reality with exclusive properties
            and expert guidance.
          </p>
        </div>

        {/* RIGHT ACTION */}
        <div className="dream-cta-action">
          <button className="dream-cta-btn">
            Explore Properties →
          </button>
        </div>
      </div>
    </section>
  );
};

export default DreamHomeCTA;
