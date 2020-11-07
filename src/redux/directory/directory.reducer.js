import { directoryActionTypes } from './directory.types';
import productJSON from '../../productJSON';




// const INITIAL_STATE = productJSON

const INITIAL_STATE = {
    data: productJSON,
    searchQuery: ''
}

const directoryReducer = (state=INITIAL_STATE, action) => {
    switch (action.type){


        case (directoryActionTypes.SET_SEARCH_QUERY):

            console.log(action.payload)
        
            return {
                ...state,
                searchQuery: action.payload
            }


        default:
            return state


        
    }
    
}


export default directoryReducer;