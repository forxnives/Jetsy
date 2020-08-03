import React from 'react';
import hero from '../img/hero_couple.jpg';
import maskgirl from '../img/maskgirl_hero.png';



const Hero = () => {
    return (

        <section className="hero">

        <div className="heading-primary">
          <h1>Authentic Jamaican Goods.  Sold by independant Jamaican vendors.  Welcome to Caribbean Hut.</h1>
        </div>

        <div className="hero-grid">

          <div className="hero-grid-left">

            <a href="#" className="hero-grid-left__txt">

              <div className="txt">
                <span className="title">Our Biggest Export is</span>
                {/* <div className="br"></div>                 */}
                <span className="title2">Good Vibes</span>
                <div className="br"></div>

                <span className="sub-heading">Shop all ready-to-ship items</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="-1 -7 24 24" aria-hidden="true" focusable="false"><path d="M10,17a1,1,0,0,1-.707-1.707L12.586,12,9.293,8.707a1,1,0,0,1,1.414-1.414L15.414,12l-4.707,4.707A1,1,0,0,1,10,17Z"></path></svg>
                
              </div>

            </a>

            <a href="#"><img src={hero} alt="baskets"/></a>

          </div>

          <div className="hero-grid-right">

              <a href="#"><img src={maskgirl} alt="" className="hero-grid-right-img__hide"/></a>
              
              <a href="#" className="hero-grid-right__txt">

                <div>
                  <h2 className="">Stay Safe with our Mask Collection
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-1 -7 24 24" aria-hidden="true" focusable="false"><path d="M10,17a1,1,0,0,1-.707-1.707L12.586,12,9.293,8.707a1,1,0,0,1,1.414-1.414L15.414,12l-4.707,4.707A1,1,0,0,1,10,17Z"></path></svg>
                  </h2>
                </div>

              </a>

          </div>

        </div>

      </section>

    )

}

export default Hero
