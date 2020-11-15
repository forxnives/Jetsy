import React from 'react';
import { Link } from 'react-router-dom';


import flagblanket from '../../img/flagblanket.jpg';
import goodvibesmenshirt from '../../img/goodvibesmenshirt.png';
import rastahatdreadlocks from '../../img/rastahatdreadlocks.png';
import blackdreadextension from '../../img/blackdreadextension.jpg';
import thickflag from '../../img/thickflag.jpg';
import kingstonparadise from '../../img/kingstonparadise.jpg';

const CategoryDisplay = () => {



    return (
        <section className='category'>


            <Link to='/Jetsy/shop/miscellaneous/home' className='category-item item-1'  >


                <div className='item-inner' style={{'backgroundImage': `url(${flagblanket})`}}>  

                </div>

                <div className='overlay'>

                    <h1> Home </h1>


                </div>


            </Link>

            <Link to='/Jetsy/shop/clothing&apparel/hats&scarfs' className='category-item item-2'>
                <div className='item-inner' style={{'backgroundImage': `url(${rastahatdreadlocks})`}}>  

                
                </div>

                <div className='overlay'>

                    <h1> Hats & Scarfs </h1>


                </div>


            </Link>

            <Link to='/Jetsy/shop/miscellaneous/hair' className='category-item item-3'>
                <div className='item-inner' style={{'backgroundImage': `url(${blackdreadextension})`}}>  

                
                </div>

                <div className='overlay'>

                    <h1> Hair Products </h1>

                </div>


            </Link>

            <Link to='/Jetsy/shop/clothing&apparel/men' className='category-item item-4'>
                <div className='item-inner' style={{'backgroundImage': `url(${goodvibesmenshirt})`}}>  

                
                </div>
                <div className='overlay'>

                    <h1> Men's Clothes </h1>


                </div>



            </Link>                                    

            <Link to='/Jetsy/shop/books&entertainment/movies' className='category-item item-5'>
                <div className='item-inner' style={{'backgroundImage': `url(${kingstonparadise})`}}>  

                
                </div>

                <div className='overlay'>

                    <h1> Movies </h1>


                </div>


            </Link>

            <Link to='/Jetsy/shop/miscellaneous/flags' className='category-item item-6'>
                <div className='item-inner' style={{'backgroundImage': `url(${thickflag})`}}>  

                
                </div>


                <div className='overlay'>

                    <h1> Flags </h1>


                </div>

                
            </Link>                        

            
        </section>
    )
}

export default CategoryDisplay 