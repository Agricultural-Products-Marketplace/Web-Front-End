//cartAction.ts

import { CartModel } from "../../model/cart";
import { ADD_TO_CART, REMOVE_FROM_CART } from "./ActionTypes";


// Existing addToCart action
export const addToCart = (product: CartModel) => ({
    type: ADD_TO_CART as typeof ADD_TO_CART,
    payload: product,
});

// New removeFromCart action
export const removeFromCart = (productId: number) => ({
    type: REMOVE_FROM_CART as typeof REMOVE_FROM_CART,
    payload: productId,
});
