import React, { useState, useEffect } from "react";
import "./PropertiesSection.css";

// demo images
import p1 from "../assets/property-1.jpg";
import p2 from "../assets/property-2.jpg";
import p3 from "../assets/property-3.jpg";
import p4 from "../assets/property-4.jpg";
import p5 from "../assets/property-5.jpg";
import p6 from "../assets/property-6.jpg";
import p7 from "../assets/property-7.jpg";
import p8 from "../assets/property-8.jpg";
import p9 from "../assets/property-9.jpg";

const allProperties = [
  {
    id: 1,
    name: "Palm Jumeirah Villa",
    image: p1,
    badge: "Featured",
    price: "AED 8,500,000",
    beds: 5,
    baths: 6,
    size: "6,200 sq ft",
    location: "Palm Jumeirah, Dubai",
  },
  {
    id: 2,
    name: "Downtown Luxury Apartment",
    image: p2,
    badge: "New",
    price: "AED 2,400,000",
    beds: 2,
    baths: 2,
    size: "1,450 sq ft",
    location: "Downtown Dubai",
  },
  {
    id: 3,
    name: "Marina Penthouse",
    image: p3,
    badge: "Exclusive",
    price: "AED 12,000,000",
    beds: 4,
    baths: 5,
    size: "4,800 sq ft",
    location: "Dubai Marina",
  },
  {
    id: 4,
    name: "Beachfront Villa",
    image: p4,
    badge: "Featured",
    price: "AED 9,300,000",
    beds: 5,
    baths: 6,
    size: "5,900 sq ft",
    location: "Jumeirah",
  },
  {
    id: 5,
    name: "Modern Townhouse",
    image: p5,
    badge: "New",
    price: "AED 3,100,000",
    beds: 3,
    baths: 3,
    size: "2,300 sq ft",
    location: "Dubai Hills",
  },
  {
    id: 6,
    name: "Skyline View Apartment",
    image: p6,
    badge: "Exclusive",
    price: "AED 1,950,000",
    beds: 2,
    baths: 2,
    size: "1,300 sq ft",
    location: "Business Bay",
  },
  {
    id: 7,
    name: "Ultra Luxury Mansion",
    image: p7,
    badge: "Featured",
    price: "AED 25,000,000",
    beds: 7,
    baths: 8,
    size: "12,000 sq ft",
    location: "Emirates Hills",
  },
  {
    id: 8,
    name: "Canal View Apartment",
    image: p8,
    badge: "New",
    price: "AED 2,150,000",
    beds: 2,
    baths: 2,
    size: "1,400 sq ft",
    location: "Dubai Canal",
  },
  {
    id: 9,
    name: "Signature Villa",
    image: p9,
    badge: "Exclusive",
    price: "AED 14,500,000",
    beds: 6,
    baths: 7,
    size: "7,200 sq ft",
    location: "Palm Jumeirah",
  },
];

const PropertiesSection = () => {
  const [visibleCount, setVisibleCount] = useState(6);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.2 }
    );

    const section = document.querySelector("#properties");
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="properties"
      className={`properties ${isVisible ? "show" : ""}`}
    >
      <div className="properties-container">
        <h2 className="properties-title">Featured Properties</h2>
        <p className="properties-subtitle">
          Explore premium properties across the UAE
        </p>

        <div className="properties-grid">
          {allProperties.slice(0, visibleCount).map((item) => (
            <div key={item.id} className="property-card">
              <div className="property-image">
                <img src={item.image} alt={item.name} />
                <span className={`badge ${item.badge.toLowerCase()}`}>
                  {item.badge}
                </span>
              </div>

              <div className="property-content">
                <h3>{item.name}</h3>
                <p className="location">{item.location}</p>

                <div className="meta">
                  <span>{item.size}</span>
                  <span>{item.beds} Beds</span>
                  <span>{item.baths} Baths</span>
                </div>

                <div className="card-footer">
                  <span className="price">{item.price}</span>
                  <button className="cta">More Info</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {visibleCount < allProperties.length && (
          <div className="view-all">
            <button onClick={() => setVisibleCount(visibleCount + 3)}>
              View All Properties
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default PropertiesSection;
