import { FaLaptopCode, FaMobileAlt, FaRocket, FaSearch } from 'react-icons/fa';
import '../styles/Services.css';

const Services = () => {
  const services = [
    {
      icon: <FaLaptopCode />,
      title: 'Web Development',
      description: 'Website profesional dengan kode bersih, performa cepat, etalase bisnis online Anda.'
    },
    {
      icon: <FaMobileAlt />,
      title: 'Responsive Design',
      description: 'Tampilan sempurna di semua perangkat: Desktop, Tablet, dan Mobile.'
    },
    {
      icon: <FaSearch />,
      title: 'SEO Optimization',
      description: 'Optimasi mesin pencari agar website Anda mudah ditemukan di Google.'
    },
    {
      icon: <FaRocket />,
      title: 'Performance',
      description: 'Loading website super cepat untuk pengalaman pengguna terbaik.'
    }
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <h2>Layanan <span className="text-gradient">Kami</span></h2>
        <p className="section-desc">
          Kami menyediakan solusi digital lengkap untuk membantu bisnis Anda berkembang lebih cepat.
        </p>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card glass">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
