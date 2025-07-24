import React from 'react';
import './AboutUs.css';
import { motion } from 'framer-motion';
import { FaTv, FaMobileAlt, FaSnowflake, FaFan, FaWifi } from 'react-icons/fa';

const categories = [
  {
    icon: <FaTv className="category-icon" />,
    name: "Smart TVs",
    count: "50+ Models"
  },
  {
    icon: <FaMobileAlt className="category-icon" />,
    name: "Mobiles",
    count: "100+ Brands"
  },
  {
    icon: <FaSnowflake className="category-icon" />,
    name: "Refrigerators",
    count: "30+ Variants"
  },
  {
    icon: <FaFan className="category-icon" />,
    name: "Air Conditioners",
    count: "40+ Options"
  },
  {
    icon: <FaWifi className="category-icon" />,
    name: "Smart Home",
    count: "IoT Devices"
  }
];

const stats = [
  { value: "10,000+", label: "Happy Customers" },
  { value: "50+", label: "Brand Partnerships" },
  { value: "24/7", label: "Support" }
];

const AboutUs = () => {
  return (
    <section className="about-section">
      {/* Left Content */}
      <div className="about-content">
        <motion.div 
          className="about-header"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h5 className="section-subtitle">About Dream Vision Electronics</h5>
          <h1 className="section-title">
            Your <span>One-Stop Shop</span> for Premium Appliances
          </h1>
          <p className="section-description">
            From cutting-edge 4K TVs to energy-efficient refrigerators and the latest smartphones, 
            we bring you the best in home electronics with unbeatable prices and service.
          </p>
        </motion.div>

        {/* Product Categories */}
        <motion.div 
          className="category-grid"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {categories.map((category, index) => (
            <motion.div 
              key={index}
              className="category-card"
              whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="category-icon-container">
                {category.icon}
              </div>
              <h3>{category.name}</h3>
              <p>{category.count}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <div className="stats-container">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              className="stat-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + index * 0.1 }}
            >
              <h2>{stat.value}</h2>
              <p>{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Right Visuals */}
      <motion.div 
        className="about-visuals"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
      >
        <div className="main-visual">
          <img 
            src="/images/about.jpeg" 
            alt="Electronics Collection" 
            className="visual-image"
          />
          <motion.div 
            className="floating-tv"
            animate={{
              y: [0, -15, 0],
              rotate: [0, 2, -2, 0]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <img src="/images/tv-icon.png" alt="TV" />
          </motion.div>
          <motion.div 
            className="floating-phone"
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, -5, 0]
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.3
            }}
          >
            <img src="/images/phone-icon.png" alt="Phone" />
          </motion.div>
        </div>
      </motion.div>

      {/* Background Elements */}
      <div className="bg-shapes">
        <div className="shape-1"></div>
        <div className="shape-2"></div>
      </div>
    </section>
  );
};

export default AboutUs;