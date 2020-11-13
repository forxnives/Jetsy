import React, { useMemo } from "react";
import { connect } from 'react-redux';
import { clearFromCart } from '../../redux/cart/cart.actions';

import {
  useStripe,
  useElements,
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement
} from '@stripe/react-stripe-js';
 
import useResponsiveFontSize from "./useResponsiveFontSize";



const useOptions = () => {
    const fontSize = useResponsiveFontSize();
    const options = useMemo(
      () => ({
        style: {
          base: {
            fontSize,
            color: "#424770",
            letterSpacing: "0.025em",
            fontFamily: "Source Code Pro, monospace",
            "::placeholder": {
              color: "#aab7c4"
            }
          },
          invalid: {
            color: "#9e2146"
          }
        }
      }),
      [fontSize]
    );
  
    return options;
  };




const StripeCheckout = ({onChange, togglePayment, history, cartItems, clearItemFromCart}) => {

  const stripe = useStripe();
  const elements = useElements();
  const options = useOptions();

  
 
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('submitted')

    if (!stripe || !elements) {
        // Stripe.js has not loaded yet. Make sure to disable
        // form submission until Stripe.js has loaded.
        return;
      }

      
    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const cardElement = elements.getElement(CardNumberElement);


    const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card: cardElement,
      });


    if (error) {
        alert(error.message);
      } else {
        togglePayment(false)
        alert('Payment Successful!')
        // console.log(cartItems)
        cartItems.forEach(item => {
          clearItemFromCart(item)
        })

      }

  };



  return (


    <form onSubmit={handleSubmit} >
        <label>
        Card number
        <CardNumberElement
            options={options}
            onReady={() => {
            console.log("CardNumberElement [ready]");
            }}
            onChange={event => {
            console.log("CardNumberElement [change]", event);
            }}
            onBlur={() => {
            console.log("CardNumberElement [blur]");
            }}
            onFocus={() => {
            console.log("CardNumberElement [focus]");
            }}
        />
        </label>
        <label>
        Expiration date
        <CardExpiryElement
            options={options}
            onReady={() => {
            console.log("CardNumberElement [ready]");
            }}
            onChange={event => {
            console.log("CardNumberElement [change]", event);
            }}
            onBlur={() => {
            console.log("CardNumberElement [blur]");
            }}
            onFocus={() => {
            console.log("CardNumberElement [focus]");
            }}
        />
        </label>
        <label>
        CVC
        <CardCvcElement
            options={options}
            onReady={() => {
            console.log("CardNumberElement [ready]");
            }}
            onChange={event => {
            console.log("CardNumberElement [change]", event);
            }}
            onBlur={() => {
            console.log("CardNumberElement [blur]");
            }}
            onFocus={() => {
            console.log("CardNumberElement [focus]");
            }}
        />
        </label>
        <button type="submit" disabled={!stripe}>
        Purchase
        </button>
    </form>


  );
};


const mapDispatchToProps = dispatch => ({
  clearItemFromCart: item => dispatch(clearFromCart(item))
})



export default connect(null, mapDispatchToProps)(StripeCheckout);