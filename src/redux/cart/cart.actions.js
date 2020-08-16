import { cartActionTypes } from './cart.types';


export const toggleCartHidden = () => {
    console.log(cartActionTypes.TOGGLE_CART_HIDDEN);
    
    return ({


        type: cartActionTypes.TOGGLE_CART_HIDDEN

})}

export const addToCart = (item) => ({
    type: cartActionTypes.ADD_TO_CART,
    payload: item
})


