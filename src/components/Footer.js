import React from 'react';
import './Footer.css';
import logo from '../assets/logo.png';
import { FaPhoneAlt, FaEnvelope, FaInstagram, FaFacebookF, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // ✅ Import Link from react-router-dom

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content container">
        <div className="footer-section brand brand-flex">
          <img src={logo} alt="Logo" className="footer-logo" />
          <h3 className="footer-brand-name">Vision Dreams</h3>
        </div>

        <div className="footer-section">
          <h4 className="footer-heading">Quick Links</h4>
          <ul className="footer-links">
           
            <li><a href="#about">About Us</a></li>
            <li><a href="#products">Products</a></li>
            <li><a href="#enquiry">Enquiry</a></li>           
            <li><Link to="/terms-and-conditions">Terms and Conditions</Link></li>
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4 className="footer-heading">Contact</h4>
          <address>
            Head Office: 
            #34 Srigandanagara, 2nd Cross,<br />
            Hegganahalli, Bangalore - 560091.
          </address>
          <a href="mailto:visiondreams2025@gmail.com" className="footer-contact-link">
            <FaEnvelope aria-hidden="true" /> visiondreams2025@gmail.com
          </a>
          <a href="tel:+918310099843" className="footer-contact-link">
            <FaPhoneAlt aria-hidden="true" /> +91 8310099843
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Designed by <strong>Bloom IT Solutions</strong></p>
        <div className="footer-socials">
          <a href="#" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="#" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
          <a href="https://www.youtube.com/watch?v=OPKwfneJjus" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
