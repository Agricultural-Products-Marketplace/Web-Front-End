import { addWishlist, deleteWishlist, fetchWishlist } from '../actions/wishlistAction';
import { WishlistData } from './../types';
// src/store/wishlistReducer.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface WishlistState {
    data: WishlistData[];
    loading: boolean;
    error: string | null;
  }

const initialState: WishlistState = {
  data:[],
  loading: false,
  error: null,
};

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWishlist.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchWishlist.fulfilled, (state, { payload }: PayloadAction<WishlistData[]>) => {
        state.loading = false;
        state.data = payload;
      })
      .addCase(fetchWishlist.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch wishlist';
      })
      .addCase(addWishlist.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addWishlist.fulfilled, (state, { payload }: PayloadAction<WishlistData>) => {
        state.loading = false;
        state.data.push(payload);
      })
      .addCase(addWishlist.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to add wishlist item';
      })
      .addCase(deleteWishlist.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteWishlist.fulfilled, (state, { payload }: PayloadAction<number>) => {
        state.loading = false;
        state.data = state.data.filter(item => item.id !== payload);
      })
      .addCase(deleteWishlist.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to delete wishlist item';
      });
  },
});

export default wishlistSlice.reducer;
