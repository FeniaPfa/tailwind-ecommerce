import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    count: 0,
    cartProducts: [],
    isCheckoutOpen: false,
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        toggleMenu: (state) => {
            state.isCheckoutOpen = !state.isCheckoutOpen;
        },
        addProduct: (state, action) => {
            state.isCheckoutOpen = true;
            state.count += 1;
            const isInCart = state.cartProducts.some((item) => item.id === action.payload.id);
            if (!isInCart) {
                state.cartProducts = [...state.cartProducts, { ...action.payload, quantity: 1 }];
            } else {
                const index = state.cartProducts.findIndex((item) => item.id === action.payload.id);
                const currentQuantity = state.cartProducts[index].quantity;
                state.cartProducts[index] = {
                    ...action.payload,
                    quantity: currentQuantity + 1,
                };
            }
        },
        deleteProduct: (state, action) => {
            const itemQuantity = action.payload.quantity;
            state.count = state.count - itemQuantity;
            state.cartProducts = state.cartProducts.filter((item) => item.id !== action.payload.id);
        },
        resetCart: (state) => {
            state.count = 0;
            state.cartProducts = [];
        },
        addOne: (state, action) => {
            state.count += 1;
            const index = state.cartProducts.findIndex((item) => item.id === action.payload);
            const currentQuantity = state.cartProducts[index].quantity;
            state.cartProducts[index].quantity = currentQuantity + 1;
        },
        removeOne: (state, action) => {
            state.count -= 1;
            const index = state.cartProducts.findIndex((item) => item.id === action.payload);
            const currentQuantity = state.cartProducts[index].quantity;
            if (currentQuantity > 1) {
                state.cartProducts[index].quantity = currentQuantity - 1;
            }
            if (currentQuantity === 1) {
                state.cartProducts = state.cartProducts.filter((item) => item.id !== action.payload);
            }
        },
    },
});

export const { addProduct, deleteProduct, toggleMenu, resetCart, addOne, removeOne } = cartSlice.actions;
export default cartSlice.reducer;
