// store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlices';
import cartReducer from './slices/cartSlice'
import productReducer from './slices/productSlice'

const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
    products: productReducer,
  },
  devTools: process.env.NODE_ENV !== 'production', // Enable Redux DevTools only in development
});

export default store;