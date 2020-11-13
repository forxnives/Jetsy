import React, { useEffect } from 'react';
import ProductData from '../ProductData';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';
import { selectCartItems } from '../redux/cart/cart.selectors';

import CartItem from '../Components/CartItem/CartItem';


const CartPage = ({cartList}) => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);



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


const mapStateToProps = createStructuredSelector({
    cartList : selectCartItems
})



export default connect(mapStateToProps)(CartPage);