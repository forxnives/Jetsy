import React from 'react';
import InfiniteCarousel from 'react-leaf-carousel';
import { selectSellerItems } from '../../redux/directory/directory.selectors';
import { connect } from 'react-redux';
import ItemCard from '../Popular/ItemCard/ItemCard';


const SellerItemsCarousel = ({seller, sellerItems, itemName}) => {

    console.log(seller)
    console.log(sellerItems)

const sellerItemList = sellerItems.map(item => {
    
    if (itemName !== item.title){
        return (<ItemCard item={item}/>)
    }

})



    return (

        <div className='carousel'>
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

                {sellerItemList}

            </InfiniteCarousel>


        </div>


    )
}

const mapStateToProps = (state, ownProps) => ({
    sellerItems: selectSellerItems(ownProps.seller)(state)
})

export default connect(mapStateToProps)(SellerItemsCarousel)