import { combineReducers } from "redux";

import { listProductsSlice } from "./listProductsSlice";
import { listInformationProductSlice } from "./listInformationProduct";
import { paymentProductsSlice } from "./paymentProductsSlice";


export * from './listProductsSlice'
export * from './paymentProductsSlice'

export const ProductsReducer = combineReducers({
    list: listProductsSlice.reducer,
    productInformation: listInformationProductSlice.reducer,
    paymentProduct: paymentProductsSlice.reducer
});