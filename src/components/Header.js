// src/components/Header.jsx
import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    setTimeout(() => setLoaded(true), 100);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <header className={`custom-header ${scrolled ? 'scrolled' : ''} ${loaded ? 'loaded' : ''}`}>
      <div className="header-container">
        <div className="logo-box" onClick={() => handleLinkClick('top')}>
          <img src="/images/logo.png" alt="Dream Vision Logo" className={`logo ${loaded ? 'loaded' : ''}`} />
          <span className={`brand-name ${loaded ? 'loaded' : ''}`}>
            Dream Vision
          </span>
        </div>

        <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {['Home', 'About Us', 'Products', 'Contact Us', 'Enquiry'].map((label, idx) => (
            <button
              key={label}
              className={`nav-link ${loaded ? 'loaded' : ''}`}
              onClick={() => handleLinkClick(label.toLowerCase().replace(/\s+/g, '-'))}
            >
              <span className="nav-text">{label}</span><span className="nav-hover" />
            </button>
          ))}
        </nav>

        <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? (
            <span className="close-icon">✕</span>
          ) : (
            <>
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
