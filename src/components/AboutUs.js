import React from 'react';
import './AboutUs.css';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 10,
    },
  },
};

const listItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
};

const AboutUs = () => {
  return (
    <section className="about-section" id="about">
      <motion.div
        className="about-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* === ABOUT US === */}
        <motion.div className="about-header" variants={itemVariants}>
          <h1 className="section-title">ABOUT US</h1>
          <p className="section-description">
            Welcome to Vision Dream Electrical and Electronic. At Vision Dream, we're passionate about harnessing the power of electricity and electronics to transform lives. Our team of experts is dedicated to providing innovative, reliable, and high-quality solutions that meet the evolving needs of our customers.
            <br /><br />
            Whether you're looking for a reliable partner for your electrical and electronic needs or a career opportunity with a dynamic team, we'd love to hear from you. Let's work together to create a brighter future!
          </p>
        </motion.div>

        {/* Two-column blocks: Vision, Mission, What We Do */}
        <div className="about-grid">
          <motion.div className="about-block" variants={itemVariants}>
            <h2 className="section-subtitle">VISION</h2>
            <p className="section-description">
              Our vision is to be a leading provider of electrical and electronic solutions, recognized for our technical expertise, customer-centric approach, and commitment to innovation, quality, and sustainability, empowering a brighter future for our customers, employees, and community.
            </p>
          </motion.div>

          <motion.div className="about-block" variants={itemVariants}>
            <h2 className="section-subtitle">MISSION</h2>
            <p className="section-description">
              At Vision Dream Electrical and Electronic, our mission is to provide innovative, reliable, and high-quality electrical and electronic solutions that exceed customer expectations, while fostering a culture of excellence, sustainability, and continuous improvement.
            </p>
          </motion.div>

          <motion.div className="about-block" variants={itemVariants}>
  <h2 className="section-subtitle">WHAT WE DO</h2>
  <p className="section-description">
    At Vision Dream Electrical and Electronic, we provide innovative and reliable electrical and electronic solutions tailored to empower individuals and organizations, helping them achieve their goals through expert consulting, strategic planning, and creative problem solving.
  </p>
</motion.div>

        </div>
      </motion.div>

      {/* BG shapes */}
      <div className="bg-shapes">
        <div className="shape-1"></div>
        <div className="shape-2"></div>
        <div className="shape-3"></div>
      </div>
    </section>
  );
};

export default AboutUs;
