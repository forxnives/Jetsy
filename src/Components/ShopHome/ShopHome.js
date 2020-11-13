import React, {useEffect } from 'react'
import AutoplayHeroSlider from '../AutoplayHeroSlider/AutoplayHeroSlider';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

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


    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


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

                        <Link to='/shop/arts&crafts'>
                            <h1 style={{'color':'white'}}>
                                Arts & Crafts 
                            </h1>
                        </Link>

                        <Link to='/shop/arts&crafts' style={{'backgroundImage': `url(${rastabracelet})`  }} className='heronav-cat-img'>

                        </Link>

                    </div>

                    <div className='heronav-cat'>


                        <Link to='/shop/clothing&apparel'>
                            <h1 style={{'color':'white'}}>
                                Clothing & Apparel   
                            </h1>
                        </Link>

                        <Link to='/shop/clothing&apparel' style={{'backgroundImage': `url(${basketballjersey})`  }} className='heronav-cat-img'>

                        </Link>
                        
                    </div>

                    <div className='heronav-cat'>

                        <Link to='/shop/books&entertainment'>
                            <h1 style={{'color':'white'}}>
                                Books & Entertainment   
                            </h1>
                        </Link>

                        <Link to='/shop/books&entertainment' style={{'backgroundImage': `url(${yardiemovie})`  }} className='heronav-cat-img'>

                        </Link>
                        
                    </div>

                    <div className='heronav-cat'>

                        <Link to='/shop/food&drink'>
                            <h1 style={{'color':'white'}}>
                                Food & Drink   
                            </h1>
                        </Link>

                        <Link to='/shop/food&drink' style={{'backgroundImage': `url(${lemonpepperspice})`  }} className='heronav-cat-img'>

                        </Link>
                        
                    </div>

                    <div className='heronav-cat'>

                        <Link to='/shop/miscellaneous'>
                            <h1 style={{'color':'white'}}>
                                Miscellaneous   
                            </h1>
                        </Link>

                        <Link to='/shop/miscellaneous' style={{'backgroundImage': `url(${flagblanket})`  }} className='heronav-cat-img'>

                        </Link>
                        
                    </div>

                </div>

                <Features />


                <h1 style={{'font-size':'24px'}}> Discover </h1>

                <CategoryDisplay />

            </section>


            {/* <Gifts /> */}

            <About />

        </div>

    


    )
}


const mapStateToProps = state => ({

    cartHidden: selectCartHidden(state),

})

export default connect(mapStateToProps)(ShopHome);