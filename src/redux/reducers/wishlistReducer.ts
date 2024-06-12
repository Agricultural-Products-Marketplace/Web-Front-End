// wishlistReducer.ts
import {
    FETCH_WISHLISTS_REQUEST,
    FETCH_WISHLISTS_SUCCESS,
    FETCH_WISHLISTS_FAILURE,
    ADD_WISHLIST_REQUEST,
    ADD_WISHLIST_SUCCESS,
    ADD_WISHLIST_FAILURE,
  } from './../actions/ActionTypes';
  import { ProductDetailModel, ProductModelMain } from '../../model/productDetail';
import { useState } from 'react';
  
  interface WishlistState {
    wishlists: ProductDetailModel[] | null;
    loading: boolean;
    error: string | null;
  }

  const persistedWishlistData = localStorage.getItem('wishlistData');
  let initialProfile: ProductDetailModel[] | null = null;

if (persistedWishlistData) {
    try {
      initialProfile = JSON.parse(persistedWishlistData) as ProductDetailModel[];
    } catch (e) {
        console.error("Failed to parse user data from localStorage", e);
    }
}
  
  const initialState: WishlistState = {
    wishlists: initialProfile,
    loading: false,
    error: null,
  };
  
  const wishlistReducer = (state = initialState, action: any): WishlistState => {
    switch (action.type) {
      case FETCH_WISHLISTS_REQUEST:
      case ADD_WISHLIST_REQUEST:
        return { ...state, loading: true, error: null };
  
      case FETCH_WISHLISTS_SUCCESS:
        return { ...state, loading: false, wishlists: action.payload };
  
      case ADD_WISHLIST_SUCCESS:
        return { ...state, loading: false };
  
      case FETCH_WISHLISTS_FAILURE:
      case ADD_WISHLIST_FAILURE:
        return { ...state, loading: false, error: action.payload };
  
      default:
        return state;
    }
  };
  
  export default wishlistReducer;
  