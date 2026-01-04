import { FaArrowRight, FaWhatsapp } from 'react-icons/fa';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-bg-glow"></div>
      <div className="container hero-container">
        <div className="hero-content">
          <span className="hero-badge">Jasa Pembuatan Website Profesional</span>
          <h1>
            Bangun Kredibilitas <br />
            Bisnis dengan <span className="text-gradient">Website Premium</span>
          </h1>
          <p>
            Solusi digital terbaik untuk UMKM, Startups, dan Profesional. 
            Desain modern, cepat, dan mobile-friendly untuk meningkatkan penjualan Anda.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary">
              Mulai Project <FaArrowRight />
            </a>
            <a href="#services" className="btn btn-outline">
              Lihat Layanan
            </a>
          </div>
          
          <div className="hero-stats">
            <div className="stat-item">
              <h3>100+</h3>
              <p>Project Selesai</p>
            </div>
            <div className="stat-item">
              <h3>98%</h3>
              <p>Client Puas</p>
            </div>
            <div className="stat-item">
              <h3>24/7</h3>
              <p>Support</p>
            </div>
          </div>
        </div>
        
        <div className="hero-image">
          {/* Placeholder for hero image/illustration */}
          <div className="hero-card glass">
            <div className="card-header">
              <div className="dot red"></div>
              <div className="dot yellow"></div>
              <div className="dot green"></div>
            </div>
            <div className="card-body">
              <div className="code-block">
                <span className="code-line">{'<website>'}</span>
                <span className="code-line indent">{'<design>Premium</design>'}</span>
                <span className="code-line indent">{'<speed>Fast</speed>'}</span>
                <span className="code-line indent">{'<seo>Optimized</seo>'}</span>
                <span className="code-line">{'</website>'}</span>
              </div>
            </div>
            <div className="floating-badge glass">
              <FaWhatsapp className="badge-icon" />
              <span>Fast Response</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
