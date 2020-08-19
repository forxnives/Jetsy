import React from 'react';
import CheckoutItem from '../Components/Checkout/CheckoutItem/CheckoutItem';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {  selectCartItems, selectCartTotalPrice } from '../redux/cart/cart.selectors';





const CheckoutPage = ({cartItems, cartTotalPrice}) => {

    const checkoutItems = cartItems.map(item => 

            <CheckoutItem item={item} { ...item } />

        )

    return (

        <section className="checkout">
            <div className="checkout-header">
                <div className="checkout-header__cat product">
                    <h2>Product</h2>
                </div>
                <div className="checkout-header__cat description">
                    <h2>Description</h2>
                </div>
                <div className="checkout-header__cat quantity">
                    <h2>Quantity</h2>
                </div>
                <div className="checkout-header__cat price">
                    <h2>Price</h2>
                </div>
                <div className="checkout-header__cat remove">
                    <h2>Remove</h2>
                </div>
            </div>

            <div className="checkout-items">
                {checkoutItems}
            </div>
            <div className="checkout-total">
                <h1 className='checkout-total__txt'>Total:</h1>
                <h1 className="checkout-total__price">USD ${cartTotalPrice}</h1>
            </div>
        </section>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    cartTotalPrice: selectCartTotalPrice
})

export default connect(mapStateToProps)(CheckoutPage)