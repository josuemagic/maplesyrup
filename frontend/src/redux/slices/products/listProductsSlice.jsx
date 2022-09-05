import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    error: null,
    products: []
};

export const listProductsSlice = createSlice({
    name: 'listProducts',
    initialState,
    reducers: {
        fetchProducts: (state, action) => {
            state.loading = true,
                state.error = false
        },
        fetchProductsFailure: (state, action) => {
            state.loading = false,
                state.error = true
        },
        fetchProductsSuccess: (state, action) => {
            state.loading = false,
                state.error = null,
                state.products = action.payload
        },
    }
});

export const {
    fetchProducts,
    fetchProductsFailure,
    fetchProductsSuccess
} = listProductsSlice.actions;


