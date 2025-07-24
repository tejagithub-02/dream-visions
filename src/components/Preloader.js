// src/components/Preloader.js
import React, { useEffect, useState } from 'react';
import './Preloader.css';

const Preloader = () => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFadeOut(true), 3000); // show for 3 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`preloader-container ${fadeOut ? 'fade-out' : ''}`}>
      <div className="circuit-loader">
        <div className="logo-text">Dream Vision</div>
        <div className="lines">
          <span className="line l1"></span>
          <span className="line l2"></span>
          <span className="line l3"></span>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
