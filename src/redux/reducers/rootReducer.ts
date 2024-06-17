// src/redux/reducers/rootReducer.ts

import { combineReducers } from 'redux';
import cartReducer from './cartReducer';
import loginReducer from './loginReducer';
import userReducer from './userReducer';
import showpopReducer from './showpopReducer';
import numberListReducer from './numberlistReducer';
import wishlistReducer from './wishlistReducer';



const rootReducer = combineReducers({
    cart: cartReducer,
    login: loginReducer,
    user: userReducer,
    showpopup:showpopReducer,
    wishlist:wishlistReducer,
    numberlist:numberListReducer
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
