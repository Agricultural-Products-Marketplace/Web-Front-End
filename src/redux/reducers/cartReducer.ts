// cartReducer.ts

import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/ActionTypes";
import { cartState, cartAction } from '../types';

// Function to load the initial state from localStorage
const loadInitialState = (): cartState => {
    const savedCart = localStorage.getItem("UserCartData");
    if (savedCart) {
        return JSON.parse(savedCart);
    }
    return { cart: [] };
};

const initialState: cartState = loadInitialState();

const cartReducer = (state = initialState, action: cartAction): cartState => {
    switch (action.type) {
        case ADD_TO_CART:
            // Filter out any existing product with the same ID before adding the new one
            const updatedCartAfterAdd = state.cart.filter(cartItem => cartItem.product.id !== action.payload.product.id);
            const newStateAfterAdd = {
                ...state,
                cart: [...updatedCartAfterAdd, action.payload],
            };
            localStorage.setItem("UserCartData", JSON.stringify(newStateAfterAdd));
            return newStateAfterAdd;

        case REMOVE_FROM_CART:
            const newStateAfterRemove = {
                ...state,
                cart: state.cart.filter(cartItem => cartItem.product.id !== action.payload),
            };
            localStorage.setItem("UserCartData", JSON.stringify(newStateAfterRemove));
            return newStateAfterRemove;

        default:
            return state;
    }
};

export default cartReducer;
