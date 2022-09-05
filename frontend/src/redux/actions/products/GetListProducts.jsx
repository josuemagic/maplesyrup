import {
    fetchProducts,
    fetchProductsFailure,
    fetchProductsSuccess
} from "../../slices/products";

// Function for get all products
// The function will have a param for get product for parts


export const GetListProducts = () => async (dispatch) => {

    dispatch(fetchProducts());

    setTimeout(() => {
        dispatch(fetchProductsSuccess([1, 2, 3, 4, 5]));
    }, 5000);
}