import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: {
    items: [],
    total: 0,
  },
  wishlist: {
    items: [],
  },
};

const cartWishlistSlice = createSlice({
  name: 'cartWishlist',
  initialState,
  reducers: {
    // Cart actions
    addToCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.cart.items.find((i) => i.id === item.id);
      
      if (existingItem) {
        existingItem.quantity += item.quantity;
      } else {
        state.cart.items.push({ ...item });
      }
      state.cart.total = state.cart.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    },
    removeFromCart: (state, action) => {
      const item = action.payload;
      state.cart.items = state.cart.items.filter((i) => i.id !== item.id);
      state.cart.total = state.cart.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.cart.items.find((i) => i.id === id);
      
      if (item && quantity > 0) {
        item.quantity = quantity;
        state.cart.total = state.cart.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
      }
    },
    clearCart: (state) => {
      state.cart.items = [];
      state.cart.total = 0;
    },
    
    // Wishlist actions
    addToWishlist: (state, action) => {
      const item = action.payload;
      const existingItem = state.wishlist.items.find((i) => i.id === item.id);
      
      if (!existingItem) {
        state.wishlist.items.push(item);
      }
    },
    removeFromWishlist: (state, action) => {
      const item = action.payload;
      state.wishlist.items = state.wishlist.items.filter((i) => i.id !== item.id);
    },
    clearWishlist: (state) => {
      state.wishlist.items = [];
    },
  },
});

export const { 
  addToCart, 
  removeFromCart, 
  updateQuantity, 
  clearCart,
  addToWishlist,
  removeFromWishlist,
  clearWishlist 
} = cartWishlistSlice.actions;

export default cartWishlistSlice.reducer;
