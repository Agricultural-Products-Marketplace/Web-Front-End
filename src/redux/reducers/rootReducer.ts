// src/redux/reducers/rootReducer.ts

import { combineReducers } from 'redux';
import cartReducer from './cartReducer';
import loginReducer from './loginReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
    cart: cartReducer,
    login: loginReducer,
    user: userReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
