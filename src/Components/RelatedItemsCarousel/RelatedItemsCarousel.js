import React from 'react';
import InfiniteCarousel from 'react-leaf-carousel';
import { selectRelatedItems } from '../../redux/directory/directory.selectors';
import { connect } from 'react-redux';
import ItemCard from '../Popular/ItemCard/ItemCard';


const RelatedItemsCarousel = ({categories, relatedItems, itemName}) => {



    const relatedItemList = relatedItems.reduce((accumulator, item) => {

        if (item.title !== itemName){
            accumulator.push(<ItemCard item={item}/>)
        }

        return accumulator;
    }, [])

    console.log(relatedItemList.length)



    return (

        <div className='carousel'>

            {
            relatedItemList.length > 0 ?
            <h1>You May Also Like</h1> :
            null
            }

            <InfiniteCarousel

                breakpoints={[
                    {
                    breakpoint: 1,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                    },
                    },
                    {
                    breakpoint: 1,
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

                {relatedItemList ?
                relatedItemList :
                null}

            </InfiniteCarousel>


        </div>


    )
}

const mapStateToProps = (state, ownProps) => ({
    relatedItems: selectRelatedItems(ownProps.categories)(state)
})

export default connect(mapStateToProps)(RelatedItemsCarousel)