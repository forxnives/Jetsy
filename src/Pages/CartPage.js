import React from 'react';
import ProductData from '../ProductData';
import { connect } from 'react-redux'

import CartItem from '../Components/CartItem/CartItem';


const CartPage = ({cartList}) => {

    console.log(ProductData)

    const cartJSX = cartList.map(
        item => (
            <CartItem item={item} />
        )
    )






    return (
        <div>

            {cartJSX}

        </div>
    )
}


const mapStateToProps = state => ({
    cartList : state.cart.cartItems
})



export default connect(mapStateToProps)(CartPage);