import React from 'react'
import AutoplayHeroSlider from '../AutoplayHeroSlider/AutoplayHeroSlider';

// import HeroSlider, {
//     Slide,
//     Nav,
//     SideNav,
//     MenuNav,
//     ButtonsNav,
//     AutoplayButton,
//     OverlayContent,
//   } from 'hero-slider'




import shophero from '../../img/rastashirtherocropped.jpg'



const ShopHome = () => {



    return (
        <section className='shopHome'>

            <div className='shopHome-hero'
                style={{
                    color: "#FFF",
                    'textAlign':'center'
                }}
                >

                <AutoplayHeroSlider />
            </div>






























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




        </section>






    )
}

export default ShopHome;