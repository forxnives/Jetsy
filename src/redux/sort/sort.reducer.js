import { sortActionTypes } from './sort.types';

const INITIAL_STATE = {sortType:'relevance'}

const sortReducer = (state = INITIAL_STATE, action) => {
    switch (action.type){
        case (sortActionTypes.SET_SORT_MODE):
            return {
                ...state,
                sortType: action.payload
            } 
        default:
            return state;


    }
}

export default sortReducer;