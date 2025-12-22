import React, { useEffect, useState } from "react";
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🔒 lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  return (
    <header
      className={`header ${scrolled ? "scrolled" : ""} ${
        menuOpen ? "menu-open" : ""
      }`}
    >
      <div className="header-container">
        {/* Logo */}
        <div className="logo" onClick={handleLogoClick}>
          <span className="logo-mark"></span>
          <span className="logo-text">RealEstateHome</span>
        </div>

        {/* Navigation */}
        <nav className={`nav ${menuOpen ? "open" : ""}`}>
          <span className="nav-link" onClick={() => scrollToSection("hero")}>
            Home
          </span>
          <span
            className="nav-link"
            onClick={() => scrollToSection("properties")}
          >
            Properties
          </span>
          <span
            className="nav-link"
            onClick={() => scrollToSection("communities")}
          >
            Communities
          </span>
          <span className="nav-link" onClick={() => scrollToSection("about")}>
            About
          </span>
          <span
            className="nav-link"
            onClick={() => scrollToSection("why-choose")}
          >
            Why Choose
          </span>
        </nav>

        {/* Actions */}
        <div className="header-actions">
          <button
            className="contact-btn"
            onClick={() => scrollToSection("contact")}
          >
            Contact Us
          </button>

          <div
            className={`hamburger ${menuOpen ? "active" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span />
            <span />
            <span />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
