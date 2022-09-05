import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetListProducts } from '../../redux/actions/products/GetListProducts';

import { CustomButtonNavigate } from '../shared/atoms/CustomButtonNavigate';
import { CardProducts } from '../shared/molecules/CardProducts';

export function Home() {

    const dispatch = useDispatch()


    const { loading, products, error } = useSelector((state) => state.products.list);

    useEffect(() => {
        dispatch(GetListProducts());
    }, [])

    useEffect(() => {
        console.log(products);
    }, [products])

    return (
        <>
            <div className=".container-md row" style={{ backgroundColor: '', margin: '0px 10px 0px 10px', padding: '20px' }}>
                <div className='col-lg-3 col-sm-1'><CustomButtonNavigate label='Mas Vendido' linkTo='h' /></div>
                <div className='col-lg-3 col-sm-1'><CustomButtonNavigate label='Hombre' linkTo='ab' /> </div>
                <div className='col-lg-3 col-sm-1'><CustomButtonNavigate label='Mujer' linkTo='lo' /></div>
                <div className='col-lg-3 col-sm-1 row'>
                    <form className="d-flex" style={{ margin: '0px 8%' }}>
                        <input className="form-control" type="search" placeholder="¿Que estas buscando?..." />
                        <button className="btn" type="submit">Busar</button>
                    </form>
                </div>
            </div>

            <div className=".container-md row" style={{ backgroundColor: '', margin: '0px 10px 0px 10px', padding: '20px' }}>
                <div className='col-lg-3 col-sm-1'><CardProducts /></div>
                <div className='col-lg-3 col-sm-1'>Producto2</div>
                <div className='col-lg-3 col-sm-1'>Producto3</div>
                <div className='col-lg-3 col-sm-1'>Producto4</div>
            </div>
        </>
    )
}
