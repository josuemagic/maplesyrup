import axios from 'axios';
import {
    fetchProducts,
    fetchProductsFailure,
    fetchProductsSuccess
} from "../../slices/products";

// Function for get all products
// The function will have a param for get product for parts


export const GetListProducts = () => async (dispatch) => {

    const { data } = await axios.post('/api/Projects/AreasAttention');

    dispatch(fetchProducts());

    setTimeout(() => {
        dispatch(fetchProductsSuccess([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]));
    }, 5000);
}