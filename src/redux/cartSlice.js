import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    count: 0,
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProduct: (state, action) => {
            const count = action.payload;
            state.count = state.count + count;
            console.log(state.count);
        },
        deleteProduct: (state, action) => {
            const { count } = action.payload;
            if (state.count === 0) return;
            state.count = state.count - count;
        },
    },
});

export const { addProduct, deleteProduct } = cartSlice.actions;
export default cartSlice.reducer;
