import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { capitalize, shopStringFormat, urlToCatArray, categoryPathParse, ratingHelper } from '../generalutils';
import { connect } from 'react-redux';
import stripelogo from '../img/stripe-secure.png'
import { selectItem } from '../redux/directory/directory.selectors';
import { selectCurrentUser } from '../redux/user/user.selectors';

import { addToCart } from '../redux/cart/cart.actions';

import SellerItemsCarousel from '../Components/SellerItemsCarousel/SellerItemsCarousel';
import RelatedItemsCarousel from '../Components/RelatedItemsCarousel/RelatedItemsCarousel';

import Gifts from '../Components/About';




const ProductPage = ({item, location, addToCart, currentUser}) => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [item]);

    // console.log(currentUser)
    const rating = 4;

    const [ userCountry, setUserCountry ] = useState(null)

    const ratingDisplay = (rating) => {

        let ratingArray = [];

        for (rating; rating > 0; rating--){
            ratingArray.push(<span>&#9733;</span>)
        }

        return ratingArray
    }


    const bestSellerDisplay = (itemSold) => (
        itemSold > 500 ?
        <div className="product-info-bestseller">
            <span>Best Seller</span>
        </div> :
        null
    )

    const arrivalDate = () => {
        const myDate = new Date();
        myDate.setDate(myDate.getDate() + 7);
        const dateString = myDate.toString()

        const year = new Date()
        year.getFullYear()

        const dateConcat = dateString.substring(0, dateString.indexOf(year.getFullYear().toString()));

        
        return `${dateConcat}`
    }



    async function lookupCountry() {

        const response = await fetch('https://extreme-ip-lookup.com/json/')
        const json = await response.json();
        const country = await json.country;
        setUserCountry(`${country}`)
        // return country;

    };

    lookupCountry()

    // console.log(item.categories)

    const handleAddToCart = (item) => {

        if (currentUser){
            addToCart(item)
        }else{
            alert('Sign in to add items to cart')
        }

    }

    return (
    
        <section>


            <div className="shop-header">   

                {categoryPathParse(location.pathname, 'product', item.categories)}

                {}

                <div className="shop-header-lower">



                </div>

                <div className="product-section">

                    <div className="product-image">
                        <img src={item.img} alt=""/>
                    </div>

                    <div className="product-info">

                        <div className="product-info-seller">
                            <h2>{item.seller}</h2>
                            <div className="product-info-seller__lower">
                                <span>{item.itemsold} sales </span>
                                <span>&#x7C; </span>
                                {ratingDisplay(rating)}

                            </div>

                        </div>

                        <h1>{item.title}</h1>

                        <div className="product-info-rating">

                            <ul className="rating">
                                {ratingHelper(item.rating)}
                            </ul>
                            <span> ({item.ratings}) </span>
                        </div>

                        {bestSellerDisplay(item.itemsold)}

                        <div className="product-info-price">
                            <h1>USD ${item.price}</h1>



                            {
                                item.instock > 0 ?
                                <span className='stock in'> &#10003; In Stock  </span> :
                                <span className='stock out'> &#10007; Ouf of Stock! </span>
                            }



                        </div>



                        <div className="product-info-shipsto">

                            <span className='truck'>&#9951;</span>
                            <h3>Ships to {userCountry}  </h3>


                        </div>

                        <span>Local taxes included (where applicable)</span>

                        <div className="product-info-availability">

                            {
                                item.instock > 0 ?
                                <div className='availability-container'><span> &#10003; Arrives as soon as {arrivalDate()} if you order today  </span></div>  :
                                null
                            }

                        </div>

                        <div className="product-info-addcartbtn">
                            <div className="product-info-addcartbtn__inner">

                                <div className="btn" onClick={() => handleAddToCart(item)} >
                                    <span>Add To Cart</span>
                                </div>


                            </div>
                        </div>

                        <div className="product-info-secure">
                        
                            <div className="stripe-logo">
                                <img src={stripelogo} alt=""/>
                            </div>

                        </div>


                        {/* <div className="product-info-addcartbtn">

                        </div> */}

                    </div>


                </div>


                <div className="product-lower">


                    <RelatedItemsCarousel itemName={item.title} categories={item.categories}/>

                    <h1>More From {item.seller}</h1>

                    <SellerItemsCarousel itemName={item.title} seller={item.seller}/>


                </div>

            </div>

            <Gifts />

        </section>


    )
}


const mapStateToProps = (state, ownProps) => ({
    item: selectItem(ownProps.location.pathname)(state),
    currentUser: selectCurrentUser(state)

})

const mapDispatchToProps = dispatch => ({
    addToCart: item => dispatch(addToCart(item))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProductPage));