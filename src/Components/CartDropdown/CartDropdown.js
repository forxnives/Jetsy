import React from 'react';
import { connect } from 'react-redux';
import CartItem from '../CartItem/CartItem';



const CartDropdown = ({cartItems}) => {

    const cartJSX = cartItems.map(
        item => (
            <CartItem item={item} />
        )
    )


    return(
        <div className="fade-in">

            <div className="cart-dropdown-triangle"></div>
            <div className="cart-dropdown-container">

                <div className="cart-dropdown">
                    {cartJSX}

                </div>
                <div className="checkout-button">
                    <div className="itemcount">
                        <h1>{cartItems.length} items</h1>

                    </div>
                    <div className="button">
                        CHECKOUT
                    </div>
                </div>
            </div>

        </div>

    )
}


const mapStateToProps = state => ({
    cartItems: state.cart.cartItems
})

export default connect(mapStateToProps)(CartDropdown);