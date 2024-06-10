// src/redux/reducers/rootReducer.ts

import { combineReducers } from 'redux';
import cartReducer from './cartReducer';
import loginReducer from './loginReducer';
import userReducer from './userReducer';
import wishlistReducer from './wishlistReducer';
import showpopReducer from './showpopReducer';



const rootReducer = combineReducers({
    cart: cartReducer,
    login: loginReducer,
    user: userReducer,
    wishlist: wishlistReducer,
    showpopup:showpopReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
