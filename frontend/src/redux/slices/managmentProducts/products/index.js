import { combineReducers } from "redux";

import { listProductsSlice } from "./listProductsSlice";
import { listInformationProductSlice } from "./listInformationProduct";


export * from './listProductsSlice'

export const ProductsReducer = combineReducers({
    list: listProductsSlice.reducer,
    productInformation: listInformationProductSlice.reducer
});