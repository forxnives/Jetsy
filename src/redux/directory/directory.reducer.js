// import { directoryActionTypes } from './directory.types';
import productJSON from '../../productJSON';
import { directorySearchResults } from './directory.utils';



// const INITIAL_STATE = productJSON

const INITIAL_STATE = {
    data: productJSON,
    searchResults: []
}

const directoryReducer = (state=INITIAL_STATE, action) => {


    switch (action.type){


        // case (directoryActionTypes.SET_SEARCH_QUERY):

        
        //     return {
        //         ...state,
        //         searchResults: directorySearchResults(state.data, action.payload)
        //     }


        default:
            return state

        
    }
    
}


export default directoryReducer;