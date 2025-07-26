import React, { useState } from 'react';
import './Testimonial.css';
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Testimonial = () => {
  const testimonials = [
    {
      name: 'Anitha shetty',
      role: 'Koramangala, Bangalore',
      image: require('../assets/testimonial1.jpeg'),
      rating: 4.9,
      maxRating: 5,
      text: `I purchased a MacBook Pro from this store, and the delivery was super fast. They also helped me with setup and warranty registration. Very professional and responsive team.`,
      reviewDate: '06/2025',
      totalReviews: 820,
    },
    {
      name: 'Sneha Reddy',
      role: 'Indiranagar, Bangalore',
      image: require('../assets/testimonial2.jpeg'),
      rating: 4.8,
      maxRating: 5,
      text: `Bought a Sony 55" 4K TV — great pricing and even better support! Installation was done within hours and the quality is top-notch. I’ll definitely be back for more electronics.`,
      reviewDate: '05/2025',
      totalReviews: 940,
    },
    {
      name: 'Rajeev Kumar Gowda',
      role: 'Whitefield, Bangalore',
      image: require('../assets/testimonial3.jpeg'),
      rating: 4.7,
      maxRating: 5,
      text: `Ordered a gaming PC setup. The team customized everything as per my request, and the performance is amazing. Highly recommended for tech enthusiasts!`,
      reviewDate: '04/2025',
      totalReviews: 1110,
    },
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating) => {
    return Array.from({ length: Math.floor(rating) }, (_, i) => (
      <FaStar key={i} className="star-icon" />
    ));
  };

  const testimonial = testimonials[currentTestimonial];

  return (
    <section className="testimonial-section">
      <div className="testimonial-container">
        <div className="testimonial-left">
          <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
          <div className="testimonial-nav-mobile">
            <button onClick={prevTestimonial} className="nav-arrow">
              <FaChevronLeft />
            </button>
            <button onClick={nextTestimonial} className="nav-arrow">
              <FaChevronRight />
            </button>
          </div>
        </div>

        <div className="testimonial-right">
          <p className="testimonial-subtitle">Testimonials</p>
          <h2 className="testimonial-title">What Our Customers Say</h2>

          <div className="testimonial-box">
            <FaQuoteLeft className="quote-icon" />
            <p className="testimonial-text">{testimonial.text}</p>

            <div className="testimonial-footer">
              <div className="testimonial-author">
                <strong>{testimonial.name}</strong>
                <span>{testimonial.role}</span>
              </div>

              <div className="testimonial-meta">
                <div className="stars">
                  {renderStars(testimonial.rating)}
                  <span className="rating-text">
                    {testimonial.rating.toFixed(1)} / {testimonial.maxRating}
                  </span>
                </div>
                <p className="review-count">
                  Reviewed on {testimonial.reviewDate} • {testimonial.totalReviews.toLocaleString()} reviews
                </p>
              </div>
            </div>
          </div>

          <div className="testimonial-controls">
            <button onClick={prevTestimonial} className="arrow-btn">
              <FaChevronLeft />
            </button>
            <button onClick={nextTestimonial} className="arrow-btn light">
              <FaChevronRight />
            </button>
          </div>

          <div className="testimonial-indicators">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === currentTestimonial ? 'active' : ''}`}
                onClick={() => setCurrentTestimonial(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
