import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaUser, FaHome, FaBox, FaComment } from "react-icons/fa";
import "./EnquiryForm.css";

const EnquiryForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    product: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const { name, address, product, message } = formData;
    const whatsappMessage = `Hi, I have an enquiry:\nName: ${name}\nAddress: ${address}\nProduct: ${product}\nMessage: ${message}`;
    const phoneNumber = "918310099843";
    
    // Small delay for animation
    setTimeout(() => {
      window.open(
        `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`,
        "_blank"
      );
      setIsSubmitting(false);
    }, 800);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const inputVariants = {
    focus: {
      scale: 1.02,
      boxShadow: "0 0 0 2px rgba(67, 97, 238, 0.3)"
    }
    
  };

  const buttonVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.03 },
    tap: { scale: 0.98 },
    loading: { scale: 0.95 }
  };

  return (
    <motion.div 
    id='enquiry'
      className="enquiry-container"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
     
    >
      <motion.form 
        className="enquiry-form"
        onSubmit={handleSubmit}
        whileHover={{ y: -5 }}
      >
        <h2>Product Enquiry</h2>
        <p className="form-subtitle">Fill the form and we'll contact you via WhatsApp</p>

        <div className="input-group">
          <FaUser className="input-icon" />
          <motion.input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={handleChange}
            variants={inputVariants}
            whileFocus="focus"
          />
        </div>

        <div className="input-group">
          <FaHome className="input-icon" />
          <motion.input
            type="text"
            name="address"
            placeholder="Your Address"
            required
            value={formData.address}
            onChange={handleChange}
            variants={inputVariants}
            whileFocus="focus"
          />
        </div>

        <div className="input-group">
          <FaBox className="input-icon" />
          <motion.input
            type="text"
            name="product"
            placeholder="Product Name"
            required
            value={formData.product}
            onChange={handleChange}
            variants={inputVariants}
            whileFocus="focus"
          />
        </div>

        <div className="input-group">
          <FaComment className="input-icon textarea-icon" />
          <motion.textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            required
            value={formData.message}
            onChange={handleChange}
            variants={inputVariants}
            whileFocus="focus"
          ></motion.textarea>
        </div>

        <motion.button
          type="submit"
          variants={buttonVariants}
          initial="initial"
          whileHover="hover"
          whileTap="tap"
          animate={isSubmitting ? "loading" : "initial"}
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <span className="loading-dots">
              <span>.</span><span>.</span><span>.</span>
            </span>
          ) : (
            <>
              
             Submit
            </>
          )}
        </motion.button>
      </motion.form>
    </motion.div>
  );
};

export default EnquiryForm;