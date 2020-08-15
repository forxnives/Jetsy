import { cartActionTypes } from './cart.types';


const INITIAL_STATE = {hidden:true}

const cartReducer = (state = INITIAL_STATE, action) => {

    console.log('thing')

    switch (action.type){
        case cartActionTypes.TOGGLE_CART_HIDDEN:
            console.log('catch')
            return {
                ...state,
                hidden: !state.hidden
            }
        default: 


            return state

    }
}

export default cartReducer;