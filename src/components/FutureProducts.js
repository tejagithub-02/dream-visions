// src/components/FutureProducts.jsx
import React from 'react';
import './FutureProducts.css';

const products = [
  { name: 'AI Drone', img: '/images/future1.jpg' },
  { name: 'Smart Circuit Board', img: '/images/future2.jpg' },
  { name: 'Advanced Sensor', img: '/images/future3.jpg' },
  { name: 'Neon Chipset', img: '/images/future4.jpg' }
];

const FutureProducts = () => {
  return (
    <section className="future-products1">
      <h2>Future Products</h2>
      <div className="scroll-container1">
        <div className="product-track1">
          {products.concat(products).map((product, index) => (
            <div className="product-card1" key={index}>
              <img src={product.img} alt={product.name} />
              <p>{product.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FutureProducts;
