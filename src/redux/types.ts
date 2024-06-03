//types.ts

import ProductModel from "../model/product";
import { ADD_TO_CART, REMOVE_FROM_CART } from "./actions/cartActionTypes";

export interface cartState {
    cart: ProductModel[];
}

export interface AppState {
    cart: cartState;
}

export interface AddToCartAction {
    type: typeof ADD_TO_CART;
    payload: ProductModel;
}

export interface RemoveFromCartAction {
    type: typeof REMOVE_FROM_CART;
    payload: number;
}

export type cartAction = AddToCartAction | RemoveFromCartAction; // Update this line
