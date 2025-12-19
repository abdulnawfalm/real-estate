import React, { useEffect, useState } from "react";
import "./HeroSection.css";

import heroBg from "../assets/hero-bg-1.jpg";
import locationIcon from "../assets/icon-location.png";
import propertyIcon from "../assets/icon-property.png";
import priceIcon from "../assets/icon-price.png";

const words = ["Luxury Home", "Apartment", "Villa", "Penthouse", "Townhouse"];

const HeroSection = ({ onSearch }) => {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  const [filters, setFilters] = useState({
    location: "",
    type: "",
    price: "",
  });

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

  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleSearch = () => {
    onSearch(filters);
  };

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
            <select name="location" onChange={handleChange}>
              <option value="">Location</option>
              <option>Palm Jumeirah</option>
              <option>Downtown Dubai</option>
              <option>Dubai Marina</option>
            </select>
          </div>

          <div className="select-wrapper">
            <img src={propertyIcon} alt="Property Type" />
            <select name="type" onChange={handleChange}>
              <option value="">Property Type</option>
              <option>Apartment</option>
              <option>Villa</option>
              <option>Penthouse</option>
              <option>Townhouse</option>
            </select>
          </div>

          <div className="select-wrapper">
            <img src={priceIcon} alt="Price" />
            <select name="price" onChange={handleChange}>
              <option value="">Price (AED)</option>
              <option value="1950000">AED 1,950,000</option>
              <option value="2150000">AED 2,150,000</option>
              <option value="2400000">AED 2,400,000</option>
              <option value="3100000">AED 3,100,000</option>
              <option value="8500000">AED 8,500,000</option>
              <option value="9300000">AED 9,300,000</option>
              <option value="12000000">AED 12,000,000</option>
              <option value="14500000">AED 14,500,000</option>
              <option value="25000000">AED 25,000,000</option>
            </select>
          </div>

          <button className="search-btn" onClick={handleSearch}>
            Search
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
