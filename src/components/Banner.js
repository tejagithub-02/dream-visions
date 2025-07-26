import React, { useState, useEffect } from 'react';
import './Banner.css';
import logo from '../assets/logo.png';
import desktopBanner1 from '../assets/b-1.jpg';
import desktopBanner2 from '../assets/b-4.jpg';
import mobileBanner1 from '../assets/small-2.jpg';
import mobileBanner2 from '../assets/small.jpg';
import { FiPhoneCall, FiMenu, FiX } from 'react-icons/fi';
import { color } from 'framer-motion';

const fallbackImage = 'https://via.placeholder.com/1920x1080?text=Banner';

const Banner = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Detect screen size changes
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Banners for mobile and desktop
  const mobileBanners = [
    { image: mobileBanner1 || fallbackImage },
    { image: mobileBanner2 || fallbackImage },
  ];
  const desktopBanners = [

    { image: desktopBanner1 || fallbackImage },
  ];

  const banners = isMobile ? mobileBanners : desktopBanners;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [banners]);

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

  const { image } = banners[currentImageIndex];

  return (
    <section
      className="hero-banner"
      style={{ backgroundImage: `url(${image || fallbackImage})` }}
    >
      <header className="header">
        <div className="logo-section">
          <img src={logo} alt="Vision Dreams" className="logo" />
          <span className="brand-name">Vision Dreams</span>
        </div>

        <nav className={`nav-menu ${isOpen ? 'open' : ''}`}>
          <a href="/" onClick={() => isOpen && toggleMenu()}>HOME</a>
          <a href="#about" onClick={() => isOpen && toggleMenu()}>ABOUT US</a>
          <a href="#products" onClick={() => isOpen && toggleMenu()}>PRODUCTS</a>
          <a href="#contact" onClick={() => isOpen && toggleMenu()}>CONTACT US</a>
          <a href="#enquiry" onClick={() => isOpen && toggleMenu()}>ENQUIRY</a>
        </nav>

        <div className="menu-toggle" onClick={toggleMenu}>
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </div>
      </header>

      <div className={`hero-text animate-slide-up ${isMobile ? 'center-align' : 'left-align' }`}>
        <h1>Welcome to Vision Dreams</h1>
        <p className="tagline">Your trusted destination for electronics and innovation.</p>
      </div>
    </section>
  );
};

export default Banner;
