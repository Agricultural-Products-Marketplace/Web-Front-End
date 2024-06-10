// src/store/wishlistActions.ts
import { createAsyncThunk } from '@reduxjs/toolkit';
import { WishlistData } from '../types';
import { addWishlistItem, deleteWishlistItem, getWishlistById } from '../../services/wishlist/getwishlist';

export const fetchWishlist = createAsyncThunk(
  'wishlist/fetchWishlist',
  async (userId: number) => {
    const data = await getWishlistById(userId);

    return data;
  }
);

export const addWishlist = createAsyncThunk(
  'wishlist/addWishlist',
  async ({ userId, item,ProductId }: { userId: number, ProductId: number ,item: WishlistData }) => {
    await addWishlistItem(userId, ProductId);
    return item;
  }
);

export const deleteWishlist = createAsyncThunk(
  'wishlist/deleteWishlist',
  async ({ userId, itemId }: { userId: number, itemId: number }) => {
    await deleteWishlistItem(userId, itemId);
    return itemId;
  }
);
