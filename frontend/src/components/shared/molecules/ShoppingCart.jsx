import React, { useState } from "react";
import { useEffect } from "react";
import { FaShoppingCart } from 'react-icons/fa';


export function ShoppingCart() {

    const [dataShoppingCart, setDataShoppingCart] = useState({});


    // Obtenemos la lista del carrito cada vez
    // que cambie la propiedad listShopping 
    // en el slice

    useEffect(() => {
        // Convertir el dato que obtenemos en un arreglo
        setDataShoppingCart(localStorage.getItem("shopping_car")) || [];
    }, [localStorage])

    useEffect(() => {
        console.log(dataShoppingCart);
    }, [dataShoppingCart])

    const array = [1,2,3,4,5];


    return (<>

        <div class="dropdown me-5">
            <button class="btn dropdown-toggle" type="button" id="dropdownmenu" data-bs-toggle="dropdown" aria-expanded="false">
                <FaShoppingCart size={20} color="black" />
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownmenu">

                {array.map((product, index) => {
                    return <div class="dropdown-item" href="#"><a>{product}</a></div>
                })}
            </div>
        </div>

    </>);
    // <a class="dropdown-item" href="#">{product}</a>
}
