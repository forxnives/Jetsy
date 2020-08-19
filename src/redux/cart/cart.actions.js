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

export const clearFromCart = (item) => ({
    type: cartActionTypes.CLEAR_FROM_CART,
    payload: item
})


// export const quantityIncrement = (item) => ({
//     type: cartActionTypes.QUANTITY_INCREMENT,
//     payload: item
// })


export const removeFromCart = (item) => ({
    type: cartActionTypes.REMOVE_FROM_CART,
    payload: item
})


