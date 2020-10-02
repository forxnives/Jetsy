import React from 'react'
// JSX
import HeroSlider, {
  Slide,
  Nav,
  AutoplayButton
} from 'hero-slider'

import { Link } from 'react-router-dom';

import femaleclothinghero from '../../img/rastashirtherocropped.jpg';
import maleclothinghero from '../../img/menclothesherocropped.jpg';
import coffeehero from '../../img/coffeeherocropped.jpg';
import jewellryhero from '../../img/jewellryherocropped.jpg';




const app = () => {
  return (
    <HeroSlider
      slidingAnimation='left_to_right'
      orientation='horizontal'
      set
      initialSlide={1}
      style={{
        backgroundColor: '#000'
      }}
      settings={{
        slidingDuration: 500,
        slidingDelay: 100,
        shouldAutoplay: true,
        shouldDisplayButtons: false,
        autoplayDuration: 2000,
        height: '70vh',
        width: '75vw'
      }}>

      <AutoplayButton />

      <Slide
        // shouldRenderMask
        background={{
          backgroundColor: '#8A8A8A',
          maskBackgroundBlendMode: 'luminosity',
          backgroundImage: femaleclothinghero,
          backgroundAnimation: 'fade'
        }} >



        <Link to='/shop/clothing&apparel/women' className='hero-container'>
          <h1>Own Your Colors</h1>

          <h2> Shop Female Clothing and Apparel 
            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><path d="M10,17a1,1,0,0,1-.707-1.707L12.586,12,9.293,8.707a1,1,0,0,1,1.414-1.414L15.414,12l-4.707,4.707A1,1,0,0,1,10,17Z"></path></svg>

          </h2>

          

        </Link>

        <div className='hero-container-bg'>

        </div>

      </Slide>

      <Slide
        // shouldRenderMask
        background={{
          backgroundColor: '#8A8A8A',
          maskBackgroundBlendMode: 'luminosity',
          backgroundImage: maleclothinghero,
          backgroundAnimation: 'fade'
        }} >

        <Link to='/shop/clothing&apparel/accessories' className='hero-container'>
          <h1>Add Some Spice</h1>

          <h2> Shop for Accessories 
            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><path d="M10,17a1,1,0,0,1-.707-1.707L12.586,12,9.293,8.707a1,1,0,0,1,1.414-1.414L15.414,12l-4.707,4.707A1,1,0,0,1,10,17Z"></path></svg>

          </h2>

          </Link>

          <div className='hero-container-bg'>

          </div>

      </Slide>

      <Slide
        // shouldRenderMask
        background={{
          backgroundColor: '#8A8A8A',
          maskBackgroundBlendMode: 'luminosity',
          backgroundImage: coffeehero,
          backgroundAnimation: 'fade'
        }} > 

        <Link to='/shop/food&drink/coffee' className='hero-container'>
          <h1>Treat Yourself</h1>

          <h2> Shop for Blue Mountain Coffee 
            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><path d="M10,17a1,1,0,0,1-.707-1.707L12.586,12,9.293,8.707a1,1,0,0,1,1.414-1.414L15.414,12l-4.707,4.707A1,1,0,0,1,10,17Z"></path></svg>

          </h2>

          
        </Link>

        <div className='hero-container-bg'>

        </div>
          


      </Slide>

      <Slide
        // shouldRenderMask
        background={{
          backgroundColor: '#8A8A8A',
          maskBackgroundBlendMode: 'luminosity',
          backgroundImage: jewellryhero,
          backgroundAnimation: 'fade'
        }} >

        <Link to='/shop/arts&crafts/jewellery' className='hero-container'>
          <h1>Add Some Sparkle</h1>

          <h2> Shop for Jewellry 
            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><path d="M10,17a1,1,0,0,1-.707-1.707L12.586,12,9.293,8.707a1,1,0,0,1,1.414-1.414L15.414,12l-4.707,4.707A1,1,0,0,1,10,17Z"></path></svg>

          </h2>
        </Link>

        <div className='hero-container-bg'>

        </div>

      </Slide>

      <Nav />
    </HeroSlider>
  )
}

export default app
