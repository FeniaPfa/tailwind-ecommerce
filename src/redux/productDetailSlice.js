import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isOpen: false,
    detailsData: {},
};

export const productDetailSlice = createSlice({
    name: 'productDetail',
    initialState,
    reducers: {
        toggle: (state) => {
            state.isOpen = !state.isOpen;
        },
        open: (state, action) => {
            state.isOpen = true;
            const data = action.payload;
            state.detailsData = data;
        },
        close: (state) => {
            state.isOpen = false;
        },
    },
});

export const { toggle, open, close } = productDetailSlice.actions;
export default productDetailSlice.reducer;
