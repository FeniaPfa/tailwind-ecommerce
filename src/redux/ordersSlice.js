import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    orders: [],
};

export const ordersSlice = createSlice({
    name: 'orders',
    initialState,
    reducers: {
        addOrder: (state, action) => {
            state.orders = [...state.orders, action.payload];
        },
    },
});

export const { addOrder } = ordersSlice.actions;
export default ordersSlice.reducer;
