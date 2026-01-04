import { useState, useEffect } from "react";
import { FaBars, FaTimes, FaCode } from "react-icons/fa";
import "../styles/Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Pricing", href: "#pricing" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className={`navbar ${scrolled ? "scrolled glass" : ""}`}>
      <div className="container navbar-container">
        <a href="#" className="logo">
          <FaCode className="logo-icon" />
          <span className="text-gradient">WebCraft</span>
        </a>

        <div className={`nav-links ${isOpen ? "active" : ""}`}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="btn btn-primary mobile-cta"
            onClick={() => setIsOpen(false)}
          >
            Konsultasi Gratis
          </a>
        </div>

        <div className="nav-actions">
          <a href="#contact" className="btn btn-primary desktop-cta">
            Konsultasi Gratis
          </a>
          <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
