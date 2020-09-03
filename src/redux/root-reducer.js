import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer.jsx';
import directoryReducer from './directory/directory.reducer';
import sortModeReducer from './sort/sort.reducer';
// import filtersReducer from './filter/filters.reducer';


const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}


const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    sortMode: sortModeReducer
    // filters: filtersReducer
});



export default persistReducer(persistConfig, rootReducer);

    