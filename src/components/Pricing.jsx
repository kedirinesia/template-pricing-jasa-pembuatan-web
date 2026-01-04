import { FaCheck, FaPlus } from 'react-icons/fa';
import '../styles/Pricing.css';

const Pricing = () => {
  const plans = [
    {
      name: 'Paket Basic',
      subtitle: 'Landing Page',
      price: 'Rp 1.500.000',
      features: [
        'Single Page (Landing Page)',
        'Desain Responsif Mobile/Desktop',
        'Free Domain .com (1 Tahun)',
        'Hosting 1 GB (1 Tahun)',
        'Free SSL Security',
        '1 Email Bisnis',
        'Revisi 1x'
      ],
      recommended: false
    },
    {
      name: 'Paket Pro',
      subtitle: 'Company Profile',
      price: 'Rp 3.500.000',
      features: [
        '5 Halaman (Home, About, dll)',
        'Desain Premium & Animasi',
        'Free Domain .com (1 Tahun)',
        'Hosting 3 GB (1 Tahun)',
        'Free SSL Security',
        '3 Email Bisnis',
        'WhatsApp Chat Widget',
        'Revisi 3x'
      ],
      recommended: true
    },
    {
      name: 'Paket Business',
      subtitle: 'Toko Online',
      price: 'Rp 5.500.000',
      features: [
        'Hingga 20 Produk',
        'Sistem Keranjang & Checkout',
        'Integrasi Payment Gateway',
        'Laporan Penjualan',
        'Hosting 5 GB (1 Tahun)',
        '5 Email Bisnis',
        'Optimasi SEO Basic',
        'Revisi 5x'
      ],
      recommended: false
    },
    {
      name: 'Paket Enterprise',
      subtitle: 'Custom Web App',
      price: 'Call Us',
      features: [
        'Fitur Custom Sesuai Request',
        'Database & Backend System',
        'Dashboard Admin',
        'High Performance Server',
        'API Integration',
        'Prioritas Support 24/7',
        'Full Maintenance',
        'Unlimited Revisi'
      ],
      recommended: false
    }
  ];

  const addons = [
    { title: 'SEO Optimization', price: 'Mulai Rp 1.000.000', desc: 'Rank 1 Google untuk kata kunci bisnis Anda.' },
    { title: 'Maintenance & Update', price: 'Rp 500.000 / bln', desc: 'Update konten, backup rutin, dan monitoring security.' },
    { title: 'Upgrade Hosting', price: 'Mulai Rp 300.000 / thn', desc: 'Space dan bandwidth lebih besar untuk performa maksimal.' }
  ];

  return (
    <section id="pricing" className="pricing">
      <div className="container">
        <div className="pricing-header">
          <h2>Pilihan <span className="text-gradient">Paket</span></h2>
          <p className="section-desc">Pilih solusi digital yang paling pas untuk skala bisnis Anda.</p>
        </div>
        
        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <div key={index} className={`pricing-card glass ${plan.recommended ? 'recommended' : ''}`}>
              {plan.recommended && <div className="badge">Best Seller</div>}
              <div className="card-header-content">
                <h3>{plan.name}</h3>
                <span className="subtitle">{plan.subtitle}</span>
              </div>
              <div className="price">{plan.price}</div>
              <ul className="features">
                {plan.features.map((feature, idx) => (
                  <li key={idx}><FaCheck className="check-icon" /> {feature}</li>
                ))}
              </ul>
              <a href="#contact" className={`btn ${plan.recommended ? 'btn-primary' : 'btn-outline'}`}>
                Pilih Paket
              </a>
              <a href="#" className="btn-link" onClick={(e) => { e.preventDefault(); alert("Contoh website akan ditampilkan di sini (Modal/Link)"); }}>
                Lihat Contoh Website
              </a>
            </div>
          ))}
        </div>

        <div className="addons-section">
          <h3><FaPlus className="icon-plus" /> Add-ons & Layanan Tambahan</h3>
          <div className="addons-grid">
            {addons.map((addon, index) => (
              <div key={index} className="addon-card glass">
                <h4>{addon.title}</h4>
                <p className="addon-price">{addon.price}</p>
                <p className="addon-desc">{addon.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
