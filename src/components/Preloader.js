// src/components/Preloader.js
import React, { useEffect, useState } from 'react';
import './Preloader.css';

const Preloader = () => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFadeOut(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`preloader-container ${fadeOut ? 'fade-out' : ''}`}>
      <div className="circuit-loader">
        <div className="logo-text">
          <span className="letter">V</span>
          <span className="letter">I</span>
          <span className="letter">S</span>
          <span className="letter">I</span>
          <span className="letter">O</span>
          <span className="letter">N</span>
          <span className="letter-spacer"></span>
          <span className="letter">D</span>
          <span className="letter">R</span>
          <span className="letter">E</span>
          <span className="letter">A</span>
          <span className="letter">M</span>
          <span className="letter">S</span>
        </div>
        <div className="circuit-board">
          <div className="circuit-line horizontal top"></div>
          <div className="circuit-line vertical left"></div>
          <div className="circuit-line vertical right"></div>
          <div className="circuit-line horizontal bottom"></div>
          <div className="circuit-node node-1"></div>
          <div className="circuit-node node-2"></div>
          <div className="circuit-node node-3"></div>
          <div className="circuit-node node-4"></div>
          <div className="circuit-spark spark-1"></div>
          <div className="circuit-spark spark-2"></div>
          <div className="circuit-spark spark-3"></div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;