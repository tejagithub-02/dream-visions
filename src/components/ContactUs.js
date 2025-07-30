import React, { useEffect, useRef, useState } from 'react';
import './ContactUs.css';
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaGlobe,
} from 'react-icons/fa';

const ContactUs = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

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
      id="contact"
    >
      <div className="contact-container">
        <div className="contact-info">
          <h2 className="contact-title">CONTACT US</h2>

          <div className="info-group">
            <p>
              <FaEnvelope className="icon" />
              <strong>Gmail:</strong>{' '}
              <a
                href="mailto:visiondreams2025@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                visiondreams2025@gmail.com
              </a>
            </p>

            <p>
              <FaPhoneAlt className="icon" />
              <strong>Mobile:</strong>{' '}
              <a href="tel:+918310099843">+91 8310099843</a>
            </p>

            <p>
              <FaGlobe className="icon" />
              <strong>Web:</strong>{' '}
              <a
                href="https://www.visiondreams.in"
                target="_blank"
                rel="noreferrer"
              >
                www.visiondreams.in
              </a>
            </p>
          </div>

          <div className="info-group address">
          <p className="address-block">
  <FaMapMarkerAlt className="icon" />
  <span className="office-label">HEAD OFFICE:</span>
  <span className="address-text">
    #34 Srigandanagara, 2<sup>nd</sup> Cross,<br />
    Hegganahalli, Bangalore - 560091
  </span>
</p>

          </div>
        </div>

        <div className="contact-map">
          <iframe
            title="map"
            src="https://www.google.com/maps?q=34+Srigandanagara,+2nd+Cross+Hegganahalli,+Bangalore+-+560091&output=embed"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
