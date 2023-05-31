import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    loading: false,
    products: [],
    error: '',
};

const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    try {
        const res = await axios.get('https://api.escuelajs.co/api/v1/products');
        return res.data;
    } catch (err) {
        console.error('Error in fetchProducts', err);
        throw err;
    }
});

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.loading = false;
            state.products = action.payload;
            state.error = '';
        });
        builder.addCase(fetchProducts.rejected, (state, action) => {
            state.loading = false;
            state.products = [];
            state.error = action.error.message;
        });
    },
});

export { fetchProducts };
export default productsSlice.reducer;
