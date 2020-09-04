import { filterActionTypes } from './filters.types';

const INITIAL_STATE = {filters: []}

const filtersReducer = (state = INITIAL_STATE, action) => {
    switch (action.type){
        case (filterActionTypes.SET_ITEM_FILTERS):

         
            return {
                ...state,
                filters: action.payload
            }


        default:
            return state;

    }
}

export default filtersReducer;