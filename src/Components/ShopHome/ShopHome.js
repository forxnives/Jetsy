import React from 'react'
import AutoplayHeroSlider from '../AutoplayHeroSlider/AutoplayHeroSlider';

import { connect } from 'react-redux';
import { selectCartHidden } from '../../redux/cart/cart.selectors';

import Gifts from '../Gifts/Gifts';

import About from '../About'


import rastabracelet from '../../img/rastabracelet.png';
import basketballjersey from '../../img/basketballjersey.png';
import yardiemovie from '../../img/yardiemovie.jpg';
import lemonpepperspice from '../../img/lemonpepperspice.jpg';


import flagblanket from '../../img/flagblanket.jpg';




const ShopHome = ({cartHidden}) => {

    console.log(cartHidden)



    return (
        <section className='shopHome'>

            <div className={`hero ${

                cartHidden ?
                null :
                ('cartHidden')

            }`}
                style={{
                    color: "#FFF",
                    'textAlign':'center'
                }}
                >

                <AutoplayHeroSlider />
            </div>

            <div className='heronav'>

                <div className='heronav-cat'>

                    <h1>
                        Arts & Crafts
                    </h1>

                    <div style={{'backgroundImage': `url(${rastabracelet})`  }} className='heronav-cat-img'>

                    </div>

                </div>

                <div className='heronav-cat'>

                    <h1>
                        Clothing & Apparel
                    </h1>

                    <div style={{'backgroundImage': `url(${basketballjersey})`  }} className='heronav-cat-img'>

                    </div>
                    
                </div>

                <div className='heronav-cat'>

                    <h1>
                        Books & Entertainment
                    </h1>

                    <div style={{'backgroundImage': `url(${yardiemovie})`  }} className='heronav-cat-img'>

                    </div>
                    
                </div>

                <div className='heronav-cat'>

                    <h1>
                        Food & Drink
                    </h1>

                    <div style={{'backgroundImage': `url(${lemonpepperspice})`  }} className='heronav-cat-img'>

                    </div>
                    
                </div>

                <div className='heronav-cat'>

                    <h1>
                        Miscellaneous
                    </h1>

                    <div style={{'backgroundImage': `url(${flagblanket})`  }} className='heronav-cat-img'>

                    </div>
                    
                </div>

            </div>

            <Gifts />
            <About />










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


const mapStateToProps = state => ({

    cartHidden: selectCartHidden(state),

})

export default connect(mapStateToProps)(ShopHome);