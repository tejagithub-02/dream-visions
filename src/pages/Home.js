// src/pages/Home.js
import React from 'react';

// Import components
import Banner from '../components/Banner';
import CategoryCarousel from '../components/CategoryCarousel';
import Products from '../components/Products';
import FutureProducts from '../components/FutureProducts';
import AboutUs from '../components/AboutUs';
import ContactUs from '../components/ContactUs';
import EnquiryForm from '../components/EnquiryForm';
import Testimonial from '../components/Testimonial';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Banner />
      <CategoryCarousel />
      <Products />
      <FutureProducts />
      <AboutUs />
      <ContactUs />
      <EnquiryForm />
      <Testimonial />
      <Footer />
    </>
  );
};

export default Home;
