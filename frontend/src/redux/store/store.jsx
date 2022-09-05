import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { ProductsReducer } from '../slices/products';

const combineReducer = combineReducers({
    products: ProductsReducer
});

const rootReducer = (state, action) => {
    return combineReducer(state, action);
}

export const store = configureStore({
    reducer: rootReducer,
})