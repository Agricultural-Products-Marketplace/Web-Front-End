import { ProductModel } from "../../model/product";
import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST } from "./ActionTypes";

export interface AddToWishlistAction{
  type : typeof ADD_TO_WISHLIST;
  payload: ProductModel;
}

export interface RemoveFromWishlistAction{
  type: typeof REMOVE_FROM_WISHLIST;
  payload : number;
}

// export const addToWishlist = (product:ProductModel): AddToWishlistAction => ({
//   type: ADD_TO_WISHLIST,
//   payload: product,
// });

// export const removeFromWishlist = (productId:number): RemoveFromWishlistAction =>({
//   type:REMOVE_FROM_WISHLIST,
//   payload:productId,
// });
/////////////////////////////////////////////
export const addToWishlist = (product: ProductModel) => ({
  type: ADD_TO_WISHLIST as typeof ADD_TO_WISHLIST,
  payload: product,
});

// New removeFromCart action
export const removeFromWishlist = (productId: number) => ({
  type: REMOVE_FROM_WISHLIST as typeof REMOVE_FROM_WISHLIST,
  payload: productId,
});