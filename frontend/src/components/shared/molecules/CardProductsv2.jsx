import React from 'react'
import '../../../styles/shared/molecules/customCard/customCardProductv2.css';
import whitNot_Image from '../../../../public/pictures/whitNot_Image.png';

export default function CardProductsv2({ title = "Titulo", price = "precio", idProduct = "", image = whitNot_Image }) {
    return (
        <>
            <div className="contenedor-card-item">
                <div className="contenedor-card-item-wrapper">
                    <img src={image} alt="" />
                    <div className="contenedor-info">
                        <div className="info">
                            <p className="titulo">{title}</p>
                            <p className="titulo">{price}</p>
                            <span className="categoria">
                                <span className="categoria2">
                                    <button className='buttonBuy'>Comprar</button>
                                    <button className='buttonBuy'>Carro</button>
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
