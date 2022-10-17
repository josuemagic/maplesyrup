import React, { useState } from "react";
import { useEffect } from "react";
import { FaShoppingCart } from 'react-icons/fa';


export function ShoppingCart() {

    const [dataShoppingCart, setData] = useState({});



    // Obtenemos la lista del carrito cada vez
    // que cambie la propiedad listShopping 
    // en el slice
    useEffect(() => {
        const carrito = JSON.parse(localStorage.getItem('shopping_car'));

    }, [localStorage])


    return (<>

        <div class="dropdown me-5">
            <button class="btn dropdown-toggle" type="button" id="dropdownmenu" data-bs-toggle="dropdown" aria-expanded="false">
                <FaShoppingCart size={20} color="black" />
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownmenu">
                <a class="dropdown-item" href="#">Dropdown One</a>
                <a class="dropdown-item" href="#">Dropdown Two</a>
                <a class="dropdown-item" href="#">Dropdown Three</a>
            </div>
        </div>

    </>);
}
