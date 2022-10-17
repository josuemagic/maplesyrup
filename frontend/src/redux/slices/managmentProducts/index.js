import { combineReducers } from "redux";

import { ProductsReducer } from "./products/index";
import { ShoppingCartSliceReducer } from "./shoppingCart/index";


export * from './listShpppingCart'

export const ProductsManagmentReducer = combineReducers({
    products: ProductsReducer.reducer,
    shopping_cart: ShoppingCartSliceReducer.reducer
});