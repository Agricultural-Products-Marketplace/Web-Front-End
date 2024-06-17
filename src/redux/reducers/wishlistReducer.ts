import { ProductModel } from "../../model/product";
import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST } from "../actions/ActionTypes";
import { AddToWishlistAction, RemoveFromWishlistAction } from "../actions/wishlistAction";
import { wishlistAction } from "../types";

// type WishlistActionTypes = AddToWishlistAction | RemoveFromWishlistAction;

interface WishlistState {
  items: ProductModel[];
}

// const loadState = (): WishlistState => {
//   try {
//     const serializedState = localStorage.getItem("WishlistData");
//     if (serializedState === null) {
//       return { items: [] }; // If no data, return default initial state
//     }
//     return JSON.parse(serializedState);
//   } catch (err) {
//     return { items: [] }; // If error, return default initial state
//   }
// };

// const saveState = (state: WishlistState) => {
//   try {
//     const serializedState = JSON.stringify(state);
//     localStorage.setItem("WishlistData", serializedState);
//   } catch (err) {
//     // Handle write errors if needed
//   }
// };

// const initialState: WishlistState = loadState();

// export const wishlistReducer = (state = initialState, action: WishlistActionTypes): WishlistState => {
//   let newState: WishlistState;
//   switch (action.type) {
//     case ADD_TO_WISHLIST:
//       newState = {
//         ...state,
//         items: [...state.items, action.payload]
//       };
//       saveState(newState);
//       return newState;
//     case REMOVE_FROM_WISHLIST:
//       newState = {
//         ...state,
//         items: state.items.filter(item => item.id !== action.payload)
//       };
//       saveState(newState);
//       return newState;
//     default:
//       return state;
//   }
// };



// cartReducer.ts

// import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/ActionTypes";
// import { cartState, cartAction } from '../types';

// Function to load the initial state from localStorage
const loadInitialState = (): WishlistState => {
    const savedCart = localStorage.getItem("WishlistData");
    if (savedCart) {
        return JSON.parse(savedCart);
    }
    return { items: [] };
};

const initialState: WishlistState = loadInitialState();

const wishlistReducer = (state = initialState, action: wishlistAction): WishlistState => {
    switch (action.type) {
        case ADD_TO_WISHLIST:
            // Filter out any existing product with the same ID before adding the new one
            const updatedCartAfterAdd = state.items.filter(wishlistItem => wishlistItem.id !== action.payload.id);
            const newStateAfterAdd = {
                ...state,
                items: [...updatedCartAfterAdd, action.payload],
            };
            localStorage.setItem("WishlistData", JSON.stringify(newStateAfterAdd));
            return newStateAfterAdd;

        case REMOVE_FROM_WISHLIST:
            const newStateAfterRemove = {
                ...state,
                items: state.items.filter(wishlistItem => wishlistItem.id !== action.payload),
            };
            localStorage.setItem("WishlistData", JSON.stringify(newStateAfterRemove));
            return newStateAfterRemove;

        default:
            return state;
    }
};

export default wishlistReducer;
