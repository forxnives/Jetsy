import React from 'react';



import flagblanket from '../../img/flagblanket.jpg';
import goodvibesmenshirt from '../../img/goodvibesmenshirt.png';
import rastahatdreadlocks from '../../img/rastahatdreadlocks.png';
import blackdreadextension from '../../img/blackdreadextension.jpg';
import thickflag from '../../img/thickflag.jpg';
import kingstonparadise from '../../img/kingstonparadise.jpg';

const CategoryDisplay = () => {



    return (
        <section className='category'>


            <div className='category-item item-1'  >


                <div className='item-inner' style={{'backgroundImage': `url(${flagblanket})`}}>  
                    {/* <h1>
                        HOME 
                    </h1>
                 */}
                </div>




            </div>

            <div className='category-item item-2'>
                <div className='item-inner' style={{'backgroundImage': `url(${rastahatdreadlocks})`}}>  
                    {/* <h1>
                        HATS & SCARFS
                    </h1> */}
                
                </div>
            </div>

            <div className='category-item item-3'>
                <div className='item-inner' style={{'backgroundImage': `url(${blackdreadextension})`}}>  
                    {/* <h1>
                        HAIR  PRODUCTS   
                    </h1> */}
                
                </div>
            </div>

            <div className='category-item item-4'>
                <div className='item-inner' style={{'backgroundImage': `url(${goodvibesmenshirt})`}}>  
                    {/* <h1>
                        MEN'S CLOTHES 
                    </h1> */}
                
                </div>
            </div>                                    

            <div className='category-item item-5'>
                <div className='item-inner' style={{'backgroundImage': `url(${kingstonparadise})`}}>  
                    {/* <h1>
                        MOVIES 
                    </h1> */}
                
                </div>
            </div>

            <div className='category-item item-6'>
            <div className='item-inner' style={{'backgroundImage': `url(${thickflag})`}}>  
                    {/* <h1>
                        FLAGS
                    </h1> */}
                
                </div>
            </div>                        



            
        </section>
    )
}

export default CategoryDisplay 