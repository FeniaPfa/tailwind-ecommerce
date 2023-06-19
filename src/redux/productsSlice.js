import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { api } from '../constants/api';

const initialState = {
    loading: false,
    products: [],
    error: '',
};

const fetchProducts = createAsyncThunk('products/fetchProducts', async (slug = '') => {
    try {
        const res = await axios.get(`${api}${slug}`);
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
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload;
                state.error = '';
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.loading = false;
                state.products = [];
                state.error = action.error.message;
            });
    },
});

export { fetchProducts };
export default productsSlice.reducer;
