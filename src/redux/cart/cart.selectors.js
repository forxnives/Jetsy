import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
)


export const selectCartItems = createSelector(

    [selectCart],
    cart => cart.cartItems

)

export const selectCartItemsCount = createSelector(

    [selectCartItems],
    cartItems => cartItems.reduce((accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.cartquantity , 0)

)


export const selectCartTotalPrice = createSelector(

    [selectCartItems],
    cartItems => {

        const priceSum = cartItems.map(itemObj => (
            itemObj.cartquantity * itemObj.price
            )  
        ).reduce((a, b) => a + b, 0)


        return priceSum.toFixed(2)


    }

)