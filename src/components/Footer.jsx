import "./Footer.css";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope
} from "react-icons/fa";

export default function Footer() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer id="footer" className="footer">
      {/* Newsletter */}
      <div className="newsletter">
        <div>
          <h3>Subscribe Newsletter</h3>
          <p>financial transactions remotely using a mobile</p>
        </div>

        <form>
          <input type="email" placeholder="Enter your email." />
          <button type="submit">SEND</button>
        </form>
      </div>

      {/* Footer Content */}
      <div className="footer-content">
        {/* Brand */}
        <div className="footer-col brand">
          <p>
            We are creators of transformative spaces that inspire,
            innovate, and endure.
          </p>

          <div className="socials">
            <FaFacebookF />
            <FaInstagram />
            <FaLinkedinIn />
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li onClick={() => scrollToSection("hero")}>Home</li>
            <li onClick={() => scrollToSection("properties")}>Properties</li>
            <li onClick={() => scrollToSection("communities")}>Communities</li>
            <li onClick={() => scrollToSection("about")}>About</li>
            <li onClick={() => scrollToSection("why-choose")}>Why Choose</li>
            <li onClick={() => scrollToSection("footer")}>Contact</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-col">
          <h4>Contact</h4>

          <div className="contact-item">
            <FaMapMarkerAlt />
            <span>22 Baker Street, Texas, USA</span>
          </div>

          <div className="contact-item">
            <FaPhoneAlt />
            <span>+971 58 984 2522</span>
          </div>

          <div className="contact-item">
            <FaEnvelope />
            <span>info@yourdomain.com</span>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        © 2025 Your Company. All Rights Reserved.
      </div>
    </footer>
  );
}
