import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isOpen: false,
    checkoutData: {},
};

export const checkoutMenuSlice = createSlice({
    name: 'checkout',
    initialState,
    reducers: {
        toggle: (state) => {
            state.isOpen = !state.isOpen;
            console.log(state.isOpen);
        },
    },
});

export const { toggle } = checkoutMenuSlice.actions;
export default checkoutMenuSlice.reducer;
