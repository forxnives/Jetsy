import React, { useMemo } from "react";


import {
  useStripe,
  useElements,
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement
} from '@stripe/react-stripe-js';
 
import useResponsiveFontSize from "./useResponsiveFontSize";





// const CARD_OPTIONS = {
//     iconStyle: 'solid',
//     style: {
//       base: {
//         iconColor: '#c4f0ff',
//         color: '#fff',
//         fontWeight: 500,
//         fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
//         fontSize: '16px',
//         fontSmoothing: 'antialiased',
//         ':-webkit-autofill': {color: '#fce883'},
//         '::placeholder': {color: '#87bbfd'},
//       },
//       invalid: {
//         iconColor: '#ffc7ee',
//         color: '#ffc7ee',
//       },
//     },
//   };

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





const StripeCheckout = ({onChange}) => {


  const stripe = useStripe();
  const elements = useElements();
  const options = useOptions();



  
 
  const handleSubmit = async (event) => {
    event.preventDefault();

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


    // const {error, paymentMethod} = await stripe.createPaymentMethod({
    //   type: 'card',
    //   card: elements.getElement(CardElement),
    // });

    if (error) {
        console.log('[error]', error);
      } else {
        console.log('[PaymentMethod]', paymentMethod);
      }



  };




  
 
  return (
    // <form onSubmit={handleSubmit}>
    //   <CardElement options={ CARD_OPTIONS } />
    //   <button type="submit" disabled={!stripe}>
    //     Pay
    //   </button>
    // </form>


    // <fieldset className="FormGroup">
    //     <div className="FormRow">
    //         <CardElement options={CARD_OPTIONS} onChange={onChange} />
    //     </div>
    // </fieldset>

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
        Pay
        </button>
    </form>


  );
};

export default StripeCheckout 
 

 
