import React from "react";
import "./CategoryCarousel.css";

const categories = [
  { title: "Smartphones", image: "/images/e1.jpeg" },
  { title: "Laptops & Tablets", image: "/images/e2.jpeg" },
  { title: "Smart TVs", image: "/images/e3.jpeg" },
  { title: "Refrigerators", image: "/images/e4.jpeg" },
  { title: "Washing Machines", image: "/images/e5.jpeg" },
  { title: "Air Conditioners", image: "/images/e6.jpeg" },
  { title: "Kitchen Appliances", image: "/images/e7.jpeg" },
];

const CategoryCarousel = () => {
  return (
    <section className="category-carousel">
      <h2 className="carousel-title">Explore Electronic Categories</h2>
      <div className="carousel-wrapper">
        <div className="carousel-track">
          {categories.concat(categories).map((cat, index) => (
            <div className="carousel-item1" key={index}>
              <div className="category-image">
                <img src={cat.image} alt={cat.title} />
              </div>
              <p className="category-title">{cat.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default CategoryCarousel;
