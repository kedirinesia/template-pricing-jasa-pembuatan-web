import { FaCode, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-col">
          <a href="#" className="logo">
            <FaCode className="logo-icon" />
            <span className="text-gradient">WebCraft</span>
          </a>
          <p>Solusi website profesional untuk bisnis modern.</p>
        </div>
        
        <div className="footer-col">
          <h4>Links</h4>
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#pricing">Pricing</a>
        </div>

        <div className="footer-col">
          <h4>Socials</h4>
          <div className="social-links">
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaLinkedin /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 WebCraft. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
