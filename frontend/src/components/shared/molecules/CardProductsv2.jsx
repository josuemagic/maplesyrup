import React, { useState, useEffect } from 'react';
import '../../../styles/shared/molecules/customCard/customCardProductv2.css';
import whitNot_Image from '../../../../public/pictures/whitNot_Image.png';

export default function CardProductsv2({ id_product = "", title = "Titulo", price = "precio", image = whitNot_Image }) {

    const handleAddProductShoppingCart = (id_product, title, price, image_path) => {

        const objectData = {
            id_product,
            title,
            price,
            image_path
        }
    }

    const prueba = () => {
        // const shopping_car = JSON.parse(localStorage.getItem('shopping_car'));
        // console.log(shopping_car);
        localStorage.clear()
    }


    return (
        <>
            <div className="contenedor-card-item">
                <div className="contenedor-card-item-wrapper">
                    <img src={image} alt="" />
                    <div className="contenedor-info">
                        <div className="info">
                            <p className="titulo">{title}</p>
                            <p className="titulo">Precio: ${price}</p>
                            <span className="categoria">
                                <span className="categoria2">
                                    <button className='buttonBuy'
                                        onClick={() => {
                                            prueba();
                                        }}>Comprar</button>
                                    <button className='buttonBuy' onClick={
                                        () => {
                                            handleAddProductShoppingCart(id_product, title, price, image)
                                        }
                                    }>Carro</button>
                                </span>
                            </span>
                        </div>
                        <div className="fondo"></div>
                    </div>
                </div>
            </div>
        </>
    )
}
