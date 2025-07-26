import React from "react";
import "./Products.css";

const products = [
  {
    title: "iPhone 14 Pro",
    image: "/images/e1.jpeg",
    price: "₹1,19,999",
    message: "Hi, I'm interested in the iPhone 14 Pro",
    category: "Smartphones"
  },
  {
    title: "Dell Inspiron 15",
    image: "/images/e2.jpeg",
    price: "₹62,499",
    message: "Hi, I'm interested in the Dell Inspiron 15 Laptop",
    category: "Laptops"
  },
  {
    title: "Samsung 55\" QLED TV",
    image: "/images/e3.jpeg",
    price: "₹45,999",
    message: "Hi, I'm interested in the Samsung 55\" Smart TV",
    category: "Televisions"
  },
  {
    title: "LG Smart Refrigerator",
    image: "/images/e4.jpeg",
    price: "₹32,750",
    message: "Hi, I'm interested in the LG Refrigerator",
    category: "Appliances"
  },
  {
    title: "Bosch Washing Machine",
    image: "/images/e5.jpeg",
    price: "₹28,399",
    message: "Hi, I'm interested in the Bosch Washing Machine",
    category: "Appliances"
  },
  {
    title: "Voltas Inverter AC",
    image: "/images/e6.jpeg",
    price: "₹39,990",
    message: "Hi, I'm interested in the Voltas AC",
    category: "Appliances"
  },
  {
    title: "Sony WH-1000XM4",
    image: "/images/e7.jpeg",
    price: "₹24,990",
    message: "Hi, I'm interested in the Sony WH-1000XM4 Headphones",
    category: "Audio"
  },
  {
    title: "Apple Watch Series 8",
    image: "/images/e8.jpeg",
    price: "₹41,900",
    message: "Hi, I'm interested in the Apple Watch Series 8",
    category: "Wearables"
  },
  {
    title: "Canon EOS R5",
    image: "/images/e9.jpeg",
    price: "₹2,49,999",
    message: "Hi, I'm interested in the Canon EOS R5 Camera",
    category: "Cameras"
  },
  {
    title: "PlayStation 5",
    image: "/images/e10.jpeg",
    price: "₹54,990",
    message: "Hi, I'm interested in the PlayStation 5",
    category: "Gaming"
  },
  {
    title: "UPS",
    image: "/images/e11.jpeg",
    price: "₹40,900",
    message: "Hi, I'm interested in the UPS",
    category: "UPS"
  },
  {
    title: "Kindle Paperwhite",
    image: "/images/e12.jpeg",
    price: "₹13,999",
    message: "Hi, I'm interested in the Kindle Paperwhite",
    category: "E-Readers"
  }
];

const whatsappNumber = "918310099843"; // Replace with your WhatsApp number

const Products = () => {
  return (
    <div className="products-page" id='products'>
      <h2 className="products-heading">Premium Electronic Products</h2>
      <p className="products-subheading">Discover the latest in technology and home appliances</p>
      
      <div className="products-grid">
        {products.map((product, index) => (
          <div className="product-card" key={index}>
            <div className="product-image-container">
              <img 
                src={product.image} 
                alt={product.title} 
                className="product-image"
                loading="lazy"
              />
              <span className="product-category">{product.category}</span>
            </div>
            <div className="product-details">
              <h3>{product.title}</h3>
              <p className="product-price">{product.price}</p>
              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(product.message)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="shop-now-btn"
              >
                <span>Shop Now</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;