import React from 'react'
import '../../../styles/shared/molecules/customCard/customCardProductv2.css';


export default function CardProductsv2() {
    return (
        <>
            <div className="contenedor-card-item">
                <div className="contenedor-card-item-wrapper">
                    <img src="https://images.unsplash.com/photo-1448932223592-d1fc686e76ea" alt="" />
                    <div className="contenedor-info">
                        <div className="info">
                            <p className="titulo">Titulo</p>
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
