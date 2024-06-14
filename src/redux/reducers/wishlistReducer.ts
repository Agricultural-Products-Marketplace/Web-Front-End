import { ProductModel } from "../../model/product";
import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST } from "../actions/ActionTypes";
import { AddToWishlistAction, RemoveFromWishlistAction } from "../actions/wishlistAction";

type WishlistActionTypes = AddToWishlistAction | RemoveFromWishlistAction;

interface WishlistState {
  items: ProductModel[];
}

const loadState = (): WishlistState => {
  try {
    const serializedState = localStorage.getItem("WishlistData");
    if (serializedState === null) {
      return { items: [] }; // If no data, return default initial state
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return { items: [] }; // If error, return default initial state
  }
};

const saveState = (state: WishlistState) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("WishlistData", serializedState);
  } catch (err) {
    // Handle write errors if needed
  }
};

const initialState: WishlistState = loadState();

export const wishlistReducer = (state = initialState, action: WishlistActionTypes): WishlistState => {
  let newState: WishlistState;
  switch (action.type) {
    case ADD_TO_WISHLIST:
      newState = {
        ...state,
        items: [...state.items, action.payload]
      };
      saveState(newState);
      return newState;
    case REMOVE_FROM_WISHLIST:
      newState = {
        ...state,
        items: state.items.filter(item => item.id !== action.payload)
      };
      saveState(newState);
      return newState;
    default:
      return state;
  }
};
