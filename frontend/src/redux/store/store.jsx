import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { ProductsReducer } from '../slices/managmentProducts/products';
import { ShoppingCartSliceReducer } from '../slices/managmentProducts/shoppingCart';

// import {ProductsManagmentReducer} from '../slices/managmentProducts/index';

// Te falta acceder al reducer padre te los productos
// El index que esta en products managment

const combineReducer = combineReducers({
    products: ProductsReducer,
    shopping_cart: ShoppingCartSliceReducer
});

const rootReducer = (state, action) => {
    return combineReducer(state, action);
}

export const store = configureStore({
    reducer: rootReducer,
})