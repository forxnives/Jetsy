import React from 'react';
import { removeFromCart, addToCart, clearFromCart } from '../../../redux/cart/cart.actions';
import { connect } from 'react-redux';





const CheckoutItem = ( item ) => {

    console.log(item)

    const {img, title, seller, cartquantity, price, removeFromCart, addToCart, clearFromCart} = item

    return(

        <div className="checkout-item">
            <div className="checkout-item__cat checkout-item__image">
                <img src={img} alt={title}/>
            </div>
            <div className="checkout-item__cat checkout-item__description">
                <span>{title}</span>
                <span className="sellertxt">
                    {seller}
                </span>
            </div>
            <div className="checkout-item__cat checkout-item__quantity">
                <span onClick={()=> addToCart(item)}>&#9206;</span>
                <span className='quantity'>{cartquantity}</span>
                <span onClick={() => removeFromCart(item)}>&#9207;</span>
            </div>
            <div className="checkout-item__cat checkout-item__price">
                <span>${price}</span>
            </div>
            <div className="checkout-item__cat checkout-item__remove">
                <span onClick={()=>clearFromCart(item)} >&#10005;</span>
            </div>
        </div>
    )

}

const mapDispatchToProps = dispatch => ({
    clearFromCart: item => dispatch(clearFromCart(item)),
    addToCart: item => dispatch(addToCart(item)),
    removeFromCart: item => dispatch(removeFromCart(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);