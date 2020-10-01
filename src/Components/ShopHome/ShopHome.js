import React from 'react'
import AutoplayHeroSlider from '../AutoplayHeroSlider/AutoplayHeroSlider';

import { connect } from 'react-redux';
import { selectCartHidden } from '../../redux/cart/cart.selectors';

import Gifts from '../Gifts/Gifts';

import Features from '../Features/Features';
import About from '../About'
import CategoryDisplay from '../CategoryDisplay/CategoryDisplay';


import rastabracelet from '../../img/rastabracelet.png';
import basketballjersey from '../../img/basketballjersey.png';
import yardiemovie from '../../img/yardiemovie.jpg';
import lemonpepperspice from '../../img/lemonpepperspice.jpg';


import flagblanket from '../../img/flagblanket.jpg';




const ShopHome = ({cartHidden}) => {



    return (
        <div>
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
                    <div className="heading-primary">
                        <h1>Authentic Jamaican Goods.  Sold by independant Jamaican vendors.  Welcome to Caribbean Hut.</h1>
                    </div>
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

                <Features />


                <h1 style={{'font-size':'24px'}}> Discover Things You'll Love </h1>

                <CategoryDisplay />

            </section>



            <Gifts />

            <About />

        </div>

        






    )
}


const mapStateToProps = state => ({

    cartHidden: selectCartHidden(state),

})

export default connect(mapStateToProps)(ShopHome);