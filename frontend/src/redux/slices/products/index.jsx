import { combineReducers } from "redux";

import { listProductsSlice } from "./listProductsSlice";


export * from './listProductsSlice'

export const ProductsReducer = combineReducers({
    list: listProductsSlice.reducer
});