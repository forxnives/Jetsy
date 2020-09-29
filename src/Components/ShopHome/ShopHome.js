import React from 'react'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import shophero from '../../img/rastashirtherocropped.jpg'



const ShopHome = () => {

    const settings = {
        dots: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    return (
        <section className='shopHome'>
            {/* <div className='hero-container'>

                <div className='shopHome-hero'>

                    <div className='shopHome-hero-left'>

                    </div>

                    <div className='shopHome-hero-right'>


                    </div>


                </div>

                <div className='hero-header'>

                    <h2>Find Your</h2>

                    <h1> Colors </h1>



                </div>

            </div> */}


            <Slider  >
                <div>
                    <h1> test1 </h1>
                </div>
                <div>
                    <h1>test2</h1>
                </div>
            </Slider>


        </section>






    )
}

export default ShopHome;