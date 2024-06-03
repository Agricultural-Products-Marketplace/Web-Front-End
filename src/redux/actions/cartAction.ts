//cartAction.ts

import { ADD_TO_CART, REMOVE_FROM_CART } from "./cartActionTypes";
import ProductModel from "../../model/product";

// Existing addToCart action
export const addToCart = (product: ProductModel) => ({
    type: ADD_TO_CART as typeof ADD_TO_CART,
    payload: product,
});

// New removeFromCart action
export const removeFromCart = (productId: number) => ({
    type: REMOVE_FROM_CART as typeof REMOVE_FROM_CART,
    payload: productId,
});
