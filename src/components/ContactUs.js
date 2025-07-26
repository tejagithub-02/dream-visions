import React, { useEffect, useRef, useState } from 'react';
import './ContactUs.css';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

const ContactUs = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // IntersectionObserver for fade-in
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className={`contact-section ${isVisible ? 'fade-in' : ''}`}
      ref={sectionRef}
      id='contact'
    >
      <div className="contact-container">
        {/* Map */}
        <div className="contact-map">
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.083408062729!2d78.45145101487722!3d17.44775370598507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91561bb2ef8d%3A0xa10886bcfcb1c7!2sAmeerpet%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1629970454094!5m2!1sen!2sin"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        {/* Contact Info */}
        <div className="contact-info">
          <h2>Get in Touch</h2>

          <div className="info-card">
            <div className="info-icon"><FaMapMarkerAlt /></div>
            <div>
              <h3>Address</h3>
              <p>Ameerpet, Hyderabad, Telangana</p>
            </div>
          </div>

          <div className="info-card">
            <div className="info-icon"><FaPhoneAlt /></div>
            <div>
              <h3>Mobile</h3>
              <p>+91 96185 91044</p>
            </div>
          </div>

          <div className="info-card">
            <div className="info-icon"><FaEnvelope /></div>
            <div>
              <h3>Email</h3>
              <p>tmaruthiteja2013@gmail.com</p>
            </div>
          </div>

          <a
            href="https://wa.me/918310099843"
            className="whatsapp-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="whatsapp-icon" />
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
