import React from "react";
import '../../../styles/customCardProduct.css'

export function CardProducts() {
    return (<>
        <div className="card">
            <div className="card__side card__side--front card__side--front-1">
                <div className="card__description">Aqui va la imagen</div>
            </div>
            <div className="card__side card__side--back card__side--back-1">
                <div className="card__description">
                    Aqui va la descripcion y el boton
                </div>
            </div>
        </div>
    </>)
}
