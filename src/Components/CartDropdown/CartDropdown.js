import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import CartItem from '../CartItem/CartItem';


import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotalPrice } from '../../redux/cart/cart.selectors';




const CartDropdown = ({cartItems, cartTotalPrice, history}) => {

    const cartJSX = cartItems.map(
        item => (
            <CartItem item={item} />
        )
    )


    return(
        <div className="fade-in">

            <div className="cart-dropdown-triangle"></div>

            {
                cartItems.length > 0 ? 
                <div className="cart-dropdown-container">

                    <div className="cart-title">
                        <h1>Cart</h1>
                    </div>

                    <div className="cart-dropdown">
                        {cartJSX}

                    </div>
                    <div className="checkout-button">
                        <div className="itemcount">

                        <h1>Total: USD ${cartTotalPrice}</h1>


                        </div>
                        <div onClick={() => history.push('/checkout')} className="button">
                            CHECKOUT
                        </div>
                    </div>
                </div>

                :

                <div className="cart-dropdown-container-empty">
                    <span>Your cart is empty</span>
                </div>

            }

        </div>

    )
}


const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    cartTotalPrice: selectCartTotalPrice
})

export default withRouter(connect(mapStateToProps)(CartDropdown));