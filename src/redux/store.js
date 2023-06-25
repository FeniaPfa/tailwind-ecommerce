import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import productDetailReducer from './productDetailSlice';
import ordersReducer from './ordersSlice';
import productsReducer from './productsSlice';
import userReducer from './userSlice';
export const store = configureStore({
    reducer: {
        cart: cartReducer,
        productDetail: productDetailReducer,
        orders: ordersReducer,
        products: productsReducer,
        user: userReducer,
    },
});
