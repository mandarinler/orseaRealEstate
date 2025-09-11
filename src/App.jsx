import { useState, useRef } from "react";
import "./App.css";
import logo from "./assets/logo.jpg";

export default function App() {
  const scrollToDetail = (idx) => {
    const header = document.querySelector(".header");
    const headerHeight = header ? header.offsetHeight : 0;
    const el = detailRefs.current[idx];
    if (el) {
      const y =
        el.getBoundingClientRect().top + window.scrollY - headerHeight - 40;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const [sent, setSent] = useState(false);
  const detailRefs = useRef([]);
  const services = [
    {
      name: "Buying & Selling Brokerage ",
      desc: "Assisting clients in purchasing and selling residential and commercial properties, providing expert guidance at every step.",
      img: logo,
    },
    {
      name: "Leasing Brokerage",
      desc: "Helping landlords find the right tenants and tenants find the right homes or commercial spaces, with transparent and reliable processes.",
      img: logo,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <div className="app">
      <header className="header">
        <div className="container">
          <div className="logo-section">
            <img src={logo} alt="Orsea Logo" className="logo-svg" />
            <h1 className="logo">Orsea</h1>
          </div>
          <div className="phone">📞 +971-XXX-XXXXXXX</div>
        </div>
      </header>

      <section className="services">
        <div className="container">
          <h2>Our Services</h2>
          <div className="services-grid">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="service-card"
                style={{ cursor: "pointer" }}
                onClick={() => scrollToDetail(idx)}
              >
                <h3>{service.name}</h3>
                <p>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="contact">
        <div className="container">
          <h2>Contact Us!</h2>
          <p>Fill the form below and we will contact you!</p>
          {sent && (
            <div
              style={{
                color: "green",
                marginBottom: "20px",
                fontWeight: "bold",
              }}
            >
              Message sent! We will contact you!
            </div>
          )}
          <form className="contact-form" onSubmit={handleSubmit}>
            <input type="text" placeholder="Name and Surname" required />
            <input type="tel" placeholder="Phone" required />
            <select required>
              <option value="">Choose Service</option>
              <option value="buying">Buying & Selling Brokerage</option>
              <option value="leasing">Leasing Brokerage</option>
            </select>
            <textarea placeholder="Message" required></textarea>
            <button type="submit" className="contact-btn">
              Submit
            </button>
          </form>
        </div>
      </section>

      <section className="why-choose-us">
        <div className="container">
          <h2>Why Choose Us</h2>
          <ul
            style={{
              background: "#fff",
              color: "#333",
              fontSize: "18px",
              maxWidth: "700px",
              margin: 0,
              padding: "24px 28px",
              borderRadius: "0 0 14px 14px",
              boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
              lineHeight: "1.7",
              textAlign: "left",
              listStyleType: "disc",
            }}
          >
            <li>Licensed and regulated by Dubai authorities</li>
            <li>Professional brokerage team with market expertise</li>
            <li>Personalized approach to each client’s requirements</li>
            <li>Commitment to transparency, trust, and timely service</li>
          </ul>
        </div>
      </section>

      <section className="services-details">
        <div className="container">
          <h2>Detailed Service Description</h2>
          <div className="services-list">
            {services.map((service, idx) => (
              <div
                key={idx}
                ref={(el) => (detailRefs.current[idx] = el)}
                className={`service-row ${
                  idx % 2 === 0 ? "row-normal" : "row-reverse"
                }`}
              >
                <img
                  src={service.img}
                  alt={service.name}
                  className="service-img"
                />
                <div className="service-desc">
                  <h3>{service.name}</h3>
                  <p>
                    <br />
                    {idx === 0 &&
                      "We assist clients throughout the entire process of purchasing and selling both residential and commercial properties. From conducting in-depth market analysis to determining accurate property valuations, we provide expert guidance that ensures clients make informed decisions. Our brokerage service covers everything from listing and promoting properties with effective marketing strategies to handling negotiations and preparing documentation. Whether you are a first-time buyer, a seasoned investor, or looking to sell your property at the best possible price, we deliver personalized solutions tailored to your goals. Our focus is on making the process smooth, transparent, and stress-free while protecting your financial interests."}
                    {idx === 1 &&
                      "Our leasing brokerage service is designed to connect landlords with the right tenants and tenants with properties that perfectly fit their needs. We manage the full cycle of the leasing process — from property listing and tenant screening to lease agreement preparation and renewal management. For landlords, we ensure that their properties are occupied quickly by reliable tenants, minimizing vacancies and maximizing rental income. For tenants, we provide access to a wide range of residential and commercial options, guiding them toward spaces that align with their lifestyle or business requirements. With a focus on transparency, reliability, and efficiency, we make leasing a straightforward and positive experience for all parties involved."}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-us">
        <div className="container">
          <h2>About Us</h2>
          <p>
            ORSEA Real Estate L.L.C is a Dubai-based real estate brokerage firm
            dedicated to helping clients buy, sell, and lease properties with
            confidence. With a strong understanding of the UAE property market
            and a client-focused approach, we ensure smooth transactions and
            tailored solutions to meet your real estate needs.
          </p>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <p>© 2025 Orsea</p>
          <div className="footer-contact" style={{ display: "flex", flexDirection: "column", alignItems: "center"}}>
            <div>📞 +971-XXX-XXXXXXX&nbsp;</div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <a
                href="https://wa.me/971XXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                  alt="WhatsApp"
                  style={{ width: "22px", verticalAlign: "middle" }}
                />
              </a>
              <span>+971-XXX-XXXXXXX</span>
            </div>
            <div></div>
            <div>✉️ office@orsea.ae</div>
            <div>📍 Business Bay, Dubai, United Arab Emirates</div>
            <div>ORSEA Real Estate – Making property transactions simple, secure, and successful.</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
