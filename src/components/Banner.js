import React, { useState, useEffect } from 'react';
import './Banner.css';
import logo from '../assets/logo.png';
import banner1 from '../assets/b-2.jpg';
import banner2 from '../assets/b-3.jpg';

import { FiPhoneCall, FiMenu, FiX } from 'react-icons/fi';

const fallbackImage = 'https://via.placeholder.com/1920x1080?text=Travel+Banner';

const banners = [
  { image: banner1 || fallbackImage  },
  { image: banner2 || fallbackImage},
];

const Banner = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('.header');
      if (window.scrollY > 50) {
        header.classList.add('sticky');
      } else {
        header.classList.remove('sticky');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const { image, tagline, headline } = banners[currentImageIndex];

  return (
    <section
      className="hero-banner"
      style={{ backgroundImage: `url(${image || fallbackImage})` }}
    >
      <header className="header">
        <div className="logo-section">
          <img src={logo} alt="vision dreams" className="logo" />
          <span className="brand-name">Vision Dreams</span>
        </div>

        <nav className={`nav-menu ${isOpen ? 'open' : ''}`}>
          <a href="/">HOME</a>
          <a href="#about">ABOUT US</a>
          <a href="#products">PRODUCTS</a>
          <a href="#contact">CONTACT US</a>
          <a href="#enquiry">ENQUIRY</a>
        </nav>

        <div className="menu-toggle" onClick={toggleMenu}>
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </div>
      </header>

      <div
        className={`hero-text animate-slide-up ${
          currentImageIndex === 1 ? 'right-align' : 'left-align'
        }`}
      >
        <p className="tagline animate-fade-in">{tagline}</p>
        <h1>{headline}</h1>
      </div>
    </section>
  );
};

export default Banner;
