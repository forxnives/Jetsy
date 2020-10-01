import React from 'react'
// JSX
import HeroSlider, {
  Slide,
  Nav,
  AutoplayButton
} from 'hero-slider'
import Wrapper from './Wrapper/Wrapper'
import Title from './Title/Title'
import femaleclothinghero from '../../img/rastashirtherocropped.jpg';
import maleclothinghero from '../../img/menclothesherocropped.jpg';
import coffeehero from '../../img/coffeeherocropped.jpg';
import jewellryhero from '../../img/jewellryherocropped.jpg';

// Images
const kyoto = 'https://i.imgur.com/xw5Abku.jpg'
const tenryuJiTemple = 'https://i.imgur.com/g5JNdYL.jpg'
const hakone = 'https://i.imgur.com/Iq6XtFR.jpg'
const byodoInTemple = 'https://i.imgur.com/le9OeEC.jpg'



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
      {/* <Wrapper> */}
        {/* <Title>
          Autoplay Button Slider
        </Title> */}
      {/* </Wrapper> */}
      <AutoplayButton />

      <Slide
        // shouldRenderMask
        background={{
          backgroundColor: '#8A8A8A',
          maskBackgroundBlendMode: 'luminosity',
          backgroundImage: femaleclothinghero,
          backgroundAnimation: 'fade'
        }} >



        <div className='hero-container'>
          <h1>Wear Your Colors</h1>

          <h2> Shop Female Clothing and Apparel </h2>
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

        <div className='hero-container'>
          <h1>Wear Your Colors</h1>

          <h2> Shop Female Clothing and Apparel </h2>
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

        <div className='hero-container'>
          <h1>Wear Your Colors</h1>

          <h2> Shop Female Clothing and Apparel </h2>
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

        <div className='hero-container'>
          <h1>Wear Your Colors</h1>

          <h2> Shop Female Clothing and Apparel </h2>
        </div>

      </Slide>

      <Nav />
    </HeroSlider>
  )
}

export default app
