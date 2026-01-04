import { FaExternalLinkAlt } from 'react-icons/fa';
import '../styles/Portfolio.css';

const Portfolio = () => {
  const projects = [
    { id: 1, title: 'E-Commerce Fashion', category: 'Online Store', image: 'linear-gradient(45deg, #1e293b, #4f46e5)' },
    { id: 2, title: 'Tech Startup LP', category: 'Landing Page', image: 'linear-gradient(45deg, #0f172a, #ec4899)' },
    { id: 3, title: 'Coffee Shop Brand', category: 'Company Profile', image: 'linear-gradient(45deg, #334155, #f59e0b)' },
    { id: 4, title: 'Travel Agent Booking', category: 'Web App', image: 'linear-gradient(45deg, #1e293b, #10b981)' },
    { id: 5, title: 'Personal Portfolio', category: 'Portfolio', image: 'linear-gradient(45deg, #0f172a, #8b5cf6)' },
    { id: 6, title: 'Real Estate Listing', category: 'Catalog', image: 'linear-gradient(45deg, #334155, #06b6d4)' },
  ];

  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <h2>Project <span className="text-gradient">Showcase</span></h2>
        <p className="section-desc">Beberapa hasil karya terbaik kami untuk klien.</p>
        
        <div className="portfolio-grid">
          {projects.map((project) => (
            <div key={project.id} className="portfolio-item glass">
              <div className="portfolio-thumb" style={{ background: project.image }}>
                <div className="portfolio-overlay">
                  <button className="btn btn-primary"><FaExternalLinkAlt /> Visit</button>
                </div>
              </div>
              <div className="portfolio-info">
                <h3>{project.title}</h3>
                <span className="category">{project.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
