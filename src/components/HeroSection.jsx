import React, { useEffect, useState } from "react";
import "./HeroSection.css";

import heroBg from "../assets/hero-bg-1.jpg";
import locationIcon from "../assets/icon-location.png";
import propertyIcon from "../assets/icon-property.png";
import priceIcon from "../assets/icon-price.png";

const words = ["Luxury Home", "Apartment", "Villa", "Penthouse", "Townhouse"];

const HeroSection = () => {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentWord = words[wordIndex];

    if (charIndex < currentWord.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + currentWord[charIndex]);
        setCharIndex(charIndex + 1);
      }, 80);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setText("");
        setCharIndex(0);
        setWordIndex((prev) => (prev + 1) % words.length);
      }, 1400);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, wordIndex]);

  return (
    <section
      id="hero"
      className="hero"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="hero-overlay" />

      <div className="hero-content">
        <span className="hero-badge">Premium UAE Properties</span>

        <h1 className="hero-title">
          Find Your <span className="highlight">{text}</span>
          <br />
          in the UAE
        </h1>

        <p className="hero-subtitle">
          Discover exclusive properties across Dubai, Abu Dhabi, and beyond.
        </p>

        <div className="search-box">
          <div className="select-wrapper">
            <img src={locationIcon} alt="Location" />
            <select defaultValue="">
              <option value="" disabled>Location</option>
              <option>Downtown Dubai</option>
              <option>Dubai Marina</option>
              <option>Palm Jumeirah</option>
            </select>
          </div>

          <div className="select-wrapper">
            <img src={propertyIcon} alt="Property Type" />
            <select defaultValue="">
              <option value="" disabled>Property Type</option>
              <option>Apartment</option>
              <option>Villa</option>
              <option>Penthouse</option>
            </select>
          </div>

          <div className="select-wrapper">
            <img src={priceIcon} alt="Price Range" />
            <select defaultValue="">
              <option value="" disabled>Price Range</option>
              <option>AED 500K – 1M</option>
              <option>AED 1M – 5M</option>
              <option>AED 5M+</option>
            </select>
          </div>

          <button className="search-btn">Search</button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
