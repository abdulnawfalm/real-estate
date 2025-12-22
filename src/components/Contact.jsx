import "./Contact.css";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

export default function Contact() {
  return (
    <section id="contact" className="contact-wrapper">
      <div className="contact-container">

        {/* Left Info */}
        <div className="contact-info">
          <h4>CONTACT INFO</h4>

          <div className="info-item">
            <MdEmail className="icon" />
            <div className="info-text">
              <p>info@bluebase.com</p>
            </div>
          </div>

          <div className="info-item">
            <MdPhone className="icon" />
            <div className="info-text">
              <p>+971 58 984 2522</p>
            </div>
          </div>

          <div className="info-item">
            <MdLocationOn className="icon" />
            <div className="info-text">
              <p>22 Baker Street, Texas</p>
              <span>United Arab Emirates</span>
            </div>
          </div>
        </div>

        {/* Right Form */}
        <div className="contact-form">
          <h2>
            Let’s work <span>together.</span>
          </h2>

          <form>
            <input type="text" placeholder="Name *" />
            <input type="email" placeholder="Email *" />
            <input type="text" placeholder="Your Subject *" />
            <textarea placeholder="Type your message here" rows="5"></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}
