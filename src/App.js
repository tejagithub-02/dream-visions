import React from 'react';
import Preloader from './components/Preloader';

import Banner from './components/Banner';
import CategoryCarousel from './components/CategoryCarousel';
import Products from './components/Products';
import FutureProducts from './components/FutureProducts';
import AboutUs from './components/AboutUs';

function App() {
  return (
   <>
   <Preloader/>

   <Banner/>
   <CategoryCarousel/>
   <Products/>
  <FutureProducts/>
  <AboutUs/>
   </>
  );
}

export default App;
