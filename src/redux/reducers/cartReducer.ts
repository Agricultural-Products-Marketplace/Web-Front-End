//cartReducer.ts

import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/ActionTypes";
import { cartState, cartAction } from '../types';

const initialState: cartState = {
    cart: []
};

const cartReducer = (state = initialState, action: cartAction): cartState => {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                cart: [...state.cart, action.payload],
            };
        case REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter(product => product.id !== action.payload),
            };
        default:
            return state;
    }
};

export default cartReducer;
