import React from 'react';
import { CustomButtonNavigate } from '../shared/atoms/CustomButtonNavigate';
// import { CustomButtonNavigate } from '../shared/atoms/CustomButtonNavigate';

export function Home() {
    return (
        <>
            <div className=".container-md row" style={{ margin: '20px 10px 20px 10px', padding: '20px' }}>
                <div className='col-lg-3 col-sm-1'><CustomButtonNavigate label='Mas Vendido' /></div>
                <div className='col-lg-3 col-sm-1'><CustomButtonNavigate label='Hombre' /> </div>
                <div className='col-lg-3 col-sm-1'><CustomButtonNavigate label='Mujer' /></div>
                <div className='col-lg-3 col-sm-1 row'>
                    <form className="d-flex" style={{ margin: '0px 8%' }}>
                        <input className="form-control me-4" type="search" placeholder="¿Que estas buscando?..." />
                        <button className="btn" type="submit">Busar</button>
                    </form>
                </div>
            </div>
            <div className=".container-md row" style={{ backgroundColor: 'transparent', margin: '0px 10px 0px 10px', padding: '20px' }}>
                <div className='col-lg-3 col-sm-1'>Producto1</div>
                <div className='col-lg-3 col-sm-1'>Producto2</div>
                <div className='col-lg-3 col-sm-1'>Producto3</div>
                <div className='col-lg-3 col-sm-1'>Producto4</div>
            </div>
        </>
    )
}
