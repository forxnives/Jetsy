import React from 'react'
import ItemCard from './ItemCard/ItemCard';



import InfiniteCarousel from 'react-leaf-carousel';
import { connect } from 'react-redux';
import { selectPopularItems } from '../../redux/directory/directory.selectors';
import { createStructuredSelector } from 'reselect';
import { directoryPopular } from '../../redux/directory/directory.utils';


    



const Popular = ({ popularItems }) => {

    // const popularItems = directoryPopular(directory);




    const popularList = popularItems.map( item => (

        <ItemCard item={item} />
    
    ))



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

                    {popularList}

                </InfiniteCarousel>
            </div>

        </section>
    )
    
}


const mapStateToProps = createStructuredSelector({
    popularItems: selectPopularItems
})


export default connect(mapStateToProps)(Popular);