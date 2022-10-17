import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    change: false,
    error: null,
};

export const listShoppingCartSlice = createSlice({
    name: 'listShoppingCart',
    initialState,
    reducers: {
        fetchShoppingCart: (state, action) => {
            state.loading = true,
                state.error = false
        },
        fetchShoppingCartFailure: (state, action) => {
            state.loading = false,
            state.error = action.payload
        },
        fetchShoppingCartSuccess: (state, action) => {
            state.loading = false,
            state.error = null,
            state.change = action.payload;
        },
    }
});

export const {
    fetchShoppingCart,
    fetchShoppingCartFailure,
    fetchShoppingCartSuccess,
} = listShoppingCartSlice.actions;


