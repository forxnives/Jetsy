import React from 'react';
import ProductData from '../ProductData';
import { connect } from 'react-redux'
import { selectCartItems } from '../redux/cart/cart.selectors';

import CartItem from '../Components/CartItem/CartItem';


const CartPage = ({cartList}) => {



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
    cartList : selectCartItems(state)
})



export default connect(mapStateToProps)(CartPage);