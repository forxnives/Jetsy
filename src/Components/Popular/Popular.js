import React from 'react'
import ItemCard from './ItemCard/ItemCard';

import ProductData from '../../ProductData';

import InfiniteCarousel from 'react-leaf-carousel';




//maps popular product data to Item Cards

// const productList = ProductData.map( ({price, ...otherSectionProps}) => (

//     <ItemCard price={'USD ' + price} {...otherSectionProps } />

// ))
    

const productList = ProductData.map( item => (

    <ItemCard item={item} />

))





const Popular = (props) => {



    return (

        <section className="popular">

            <div className="popular-heading">

                <h1>
                    Popular Items
                </h1>

            </div>

            <div className="carousel">

                <InfiniteCarousel

                    breakpoints={[
                        {
                        breakpoint: 500,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2,
                        },
                        },
                        {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 3,
                        },
                        },
                    ]}
                    dots={true}
                    showSides={true}
                    sidesOpacity={.5}
                    sideSize={.1}
                    slidesToScroll={4}
                    slidesToShow={5}
                    scrollOnDevice={true}

                    >


                    {productList}



                </InfiniteCarousel>
            </div>

        </section>
    )
    
}

export default Popular;