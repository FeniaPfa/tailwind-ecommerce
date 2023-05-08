import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import productDetailReducer from './productDetailSlice';
import ordersReducer from './ordersSlice';
export const store = configureStore({
    reducer: {
        cart: cartReducer,
        productDetail: productDetailReducer,
        orders: ordersReducer,
    },
});
