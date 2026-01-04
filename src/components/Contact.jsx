import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-wrapper glass">
          <div className="contact-info">
            <h2>Hubungi <span className="text-gradient">Kami</span></h2>
            <p>Siap membuat website impian Anda? Konsultasikan kebutuhan Anda sekarang.</p>
            
            <div className="info-items">
              <div className="info-item">
                <FaWhatsapp className="icon" />
                <div>
                  <h4>WhatsApp</h4>
                  <p>+62 812 3456 7890</p>
                </div>
              </div>
              <div className="info-item">
                <FaEnvelope className="icon" />
                <div>
                  <h4>Email</h4>
                  <p>hello@webcraft.id</p>
                </div>
              </div>
              <div className="info-item">
                <FaMapMarkerAlt className="icon" />
                <div>
                  <h4>Lokasi</h4>
                  <p>Jakarta, Indonesia</p>
                </div>
              </div>
            </div>
          </div>

          <form className="contact-form">
            <div className="form-group">
              <label>Nama Lengkap</label>
              <input type="text" placeholder="John Doe" />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="john@example.com" />
            </div>
            <div className="form-group">
              <label>Pesan / Kebutuhan</label>
              <textarea rows="4" placeholder="Saya ingin membuat website..."></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Kirim Pesan <FaPaperPlane />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
