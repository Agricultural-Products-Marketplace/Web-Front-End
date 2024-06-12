// wishlistActions.ts
import { Dispatch } from 'redux';
import { fetchWishlists, addWishlists } from './../../services/wishlist/getwishlist';
import {
  FETCH_WISHLISTS_REQUEST,
  FETCH_WISHLISTS_SUCCESS,
  FETCH_WISHLISTS_FAILURE,
} from './ActionTypes';

export const fetchWishlistsAction = (userId: number, accessToken: string) => async (dispatch: Dispatch) => {
  dispatch({ type: FETCH_WISHLISTS_REQUEST });

  try {
    const response = await fetchWishlists(userId, accessToken);
    if (response.status === 200) {
      dispatch({ type: FETCH_WISHLISTS_SUCCESS, payload: response.data });
    } else {
      dispatch({ type: FETCH_WISHLISTS_FAILURE, payload: 'Failed to fetch wishlists' });
    }
  } catch (error:any) {
    dispatch({ type: FETCH_WISHLISTS_FAILURE, payload: error.message });
  }
};

// export const addWishlistAction = (userId: number, productId: number, accessToken: string) => async (dispatch: Dispatch) => {
//   dispatch({ type: ADD_WISHLIST_REQUEST });

//   try {
//     const status = await addWishlists(userId, productId, accessToken);
//     if (status === 201) {
//       dispatch({ type: ADD_WISHLIST_SUCCESS });
//       dispatch(fetchWishlistsAction(userId, accessToken)); // Refetch the wishlist after adding
//     } else {
//       dispatch({ type: ADD_WISHLIST_FAILURE, payload: 'Failed to add wishlist' });
//     }
//   } catch (error:any) {
//     dispatch({ type: ADD_WISHLIST_FAILURE, payload: error.message });
//   }
// };
