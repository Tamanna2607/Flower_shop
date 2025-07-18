import { configureStore } from '@reduxjs/toolkit';
import cartWishlistReducer from './cartWishlistSlice';

export const store = configureStore({
  reducer: {
    cartWishlist: cartWishlistReducer,
  },
});