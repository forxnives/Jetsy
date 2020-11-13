import React, { useState, useEffect } from 'react';
import CheckoutItem from '../Components/Checkout/CheckoutItem/CheckoutItem';
import StripeCheckout from '../Components/StripeCheckout/StripeCheckout';
import {loadStripe} from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import stripelogo from '../img/stripe-secure.png';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {  selectCartItems, selectCartTotalPrice } from '../redux/cart/cart.selectors';





const CheckoutPage = ({cartItems, cartTotalPrice, history}) => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [ payToggled, setPayToggled ] = useState(false);

    const stripePromise = loadStripe('pk_test_6pRNASCoBOKtIshFeQd4XMUh');

    const checkoutItems = cartItems.map(item => 

            <CheckoutItem item={item} { ...item } />

        )


    const handlePayClick = () => {
        setPayToggled(!payToggled)
    }

    const taxCalculate = cartTotalPrice * .15;

    const shippingCalculate = cartTotalPrice * .10;

    const totalPriceCalc = taxCalculate + shippingCalculate + Number(cartTotalPrice);

    // console.log(cartTotalPrice)


    if (!cartItems.length){
        history.push('/shop')
    }
    

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



            <div className="payment">

                <div className="payment-info">

                    <div className="payment-info-logo">

                        <img src={stripelogo} alt=""/>


                    </div>

                    <div className="payment-info-legal">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis rerum alias sapiente, saepe dolorum nihil quasi consectetur eligendi quo atque dolores cumque reiciendis molestias repudiandae necessitatibus autem? Veniam, dolorem mollitia?

                    </div>

                </div>




                <div className="payment-submit">

                    <div className="payment-submit-container">

                        <div className="payment-submit-price payment-submit-tax">
                            <h3 className='payment-submit-tax'> Subtotal: </h3>
                            <h3 className='payment-submit-tax'> { cartTotalPrice } </h3>
                        </div>

                        <div className="payment-submit-price payment-submit-tax">
                            <h3 className='payment-submit-tax'> &nbsp; + Taxes: </h3>
                            <h3 className='payment-submit-tax'> { taxCalculate.toFixed(2) } </h3>
                        </div>


                        <div className="payment-submit-price payment-submit-shipping">
                            <h3 className='payment-submit-tax'> &nbsp; + Shipping: </h3>
                            <h3 className='payment-submit-tax'> { shippingCalculate.toFixed(2) } </h3>
                        </div>

                        <div className="payment-submit-price payment-submit-total">
                            <h1 className='payment-submit-total__txt'>Total:</h1>
                            <h1 className="payment-submit-total__price">USD ${totalPriceCalc.toFixed(2)}</h1>
                        </div>


                    </div>



                    <div className="payment-submit-button">
                        
                        {/* <button label='Pay Now' onClick={() => handlePayClick()}>PAY MEH</button> */}

                        <div className='button' onClick={() => handlePayClick()}><span>PAY NOW</span></div>

                    </div>


                    
                </div>


            </div>


            {
                payToggled ?
                (
                    <div className="stripe-container">
                        
                        <div className="stripe-popup">

                            <div className='stripe-cancel'>
                                <img onClick={() => setPayToggled(!payToggled)} src='http://www.pngall.com/wp-content/uploads/5/Black-X-Letter-PNG-Free-Image.png' alt='' />

                            </div>

                            <h2> Enter credit card details </h2>


                            <Elements stripe={stripePromise}>
                                <StripeCheckout cartItems={cartItems} togglePayment={setPayToggled} history={history} />
                            </Elements>


                        </div>

                    </div>
                ):
                null
            }

            
        </section>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    cartTotalPrice: selectCartTotalPrice
})

export default connect(mapStateToProps)(CheckoutPage)