import axios from 'axios';
import {
    fetchProducts,
    fetchProductsFailure,
    fetchProductsSuccess,
    fetchProductsAsync
} from "../../slices/managmentProducts/products/listProductsSlice";

// Function for get all products
// The function will have a param for get product for parts

const object = [
    {
        id_product: 15,
        name: "Collar de llave",
        count: 1,
        date_created: "2022-10-12T05:00:00.000Z",
        path_image: "https://res.cloudinary.com/dfcowl76a/image/upload/v1665578360/v4bamtmwn1qywtvhkshk.jpg",
        price: 35,
        typeProduct: "collar"
    },
    {
        id_product: 16,
        name: "Collar de llave",
        count: 2,
        date_created: "2022-10-12T05:00:00.000Z",
        path_image: "https://res.cloudinary.com/dfcowl76a/image/upload/v1665578360/v4bamtmwn1qywtvhkshk.jpg",
        price: 35,
        typeProduct: "collar"
    },
    {
        id_product: 17,
        name: "Collar de llave",
        count: 1,
        date_created: "2022-10-12T05:00:00.000Z",
        path_image: "https://res.cloudinary.com/dfcowl76a/image/upload/v1665578360/v4bamtmwn1qywtvhkshk.jpg",
        price: 35,
        typeProduct: "collar"
    },
    {
        id_product: 18,
        name: "Collar de llave",
        count: 2,
        date_created: "2022-10-12T05:00:00.000Z",
        path_image: "https://res.cloudinary.com/dfcowl76a/image/upload/v1665578360/v4bamtmwn1qywtvhkshk.jpg",
        price: 35,
        typeProduct: "collar"
    },
]


export const GetListNewProducts = () => async (dispatch) => {

    try {
        dispatch(fetchProducts());
        // const { data } = await axios.post('/api/Projects/AreasAttention');
        // const { data } = await axios.get('http://localhost:3001/api/products');
        // console.log(data.data);
        dispatch(fetchProductsSuccess(object));

        // let array = [].concat(data.data, object , object, object)
        // dispatch(fetchProductsAsync());

        // setTimeout(() => {
        //     dispatch(fetchProductsSuccess(array))
        // }, 5000);

        // let array2 = [].concat(array, object, object, object)
        // setTimeout(() => {
        //     dispatch(fetchProductsSuccess(array2))
        // }, 10000);

        // let array3 = [].concat(array2, object, object, object)
        // setTimeout(() => {
        //     dispatch(fetchProductsSuccess(array3))
        // }, 15000);
        // console.log(array);

    } catch (error) {
        dispatch(fetchProductsFailure(error));
    }


}