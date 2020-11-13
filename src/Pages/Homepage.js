import React, { useEffect } from 'react';


import Hero from '../Components/Hero/Hero';
import Features from '../Components/Features/Features';
import Popular from '../Components/Popular/Popular';
import Gifts from '../Components/Gifts/Gifts';
import About from '../Components/About';



function HomePage() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (

    <div>



      <Hero />

      <Features />

      <Popular />

      <Gifts />

      <About />



    </div>

  );
}

export default HomePage;
