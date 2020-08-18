import React from 'react';
import { connect } from 'react-redux';
import CartItem from '../CartItem/CartItem';
import { selectCartItems } from '../../redux/cart/cart.selectors';




const CartDropdown = ({cartItems}) => {

    const cartJSX = cartItems.map(
        item => (
            <CartItem item={item} />
        )
    )


    const totalPriceCalc = (cartItems) => {

        const priceSum = cartItems.map(itemObj => (
            itemObj.cartquantity * itemObj.price
            )  
        ).reduce((a, b) => a + b, 0)


        return <h1>Total: USD ${priceSum.toFixed(2)}</h1>


    }


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

                            {totalPriceCalc(cartItems)}
                    {/* 
                            <h1>{cartItems.length} items</h1> */}

                        </div>
                        <div className="button">
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


const mapStateToProps = state => ({
    cartItems: selectCartItems(state)
})

export default connect(mapStateToProps)(CartDropdown);