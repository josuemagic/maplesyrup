import React from 'react';
import { HomeRoute } from '../../router/home/HomeRouter';
import { CustomButtonNavigate } from '../shared/atoms/CustomButtonNavigate';
import { CustomInput } from '../shared/atoms/customInput';


export function Home() {
    return (
        <>
            <div className='containerTopNavBar'>
                <CustomButtonNavigate label='Mas Vendido' linkTo='SellTop' />
                <CustomButtonNavigate label='Nuevos' linkTo='NewsProducts' />
                <CustomButtonNavigate label='En Oferta' linkTo='OfferProducts' />
                <div id='containerForm'>
                    <form className="d-flex">
                        <CustomInput />
                        <button className="btn btnFormSearch" type="submit">Buscar</button>
                    </form>
                </div>
            </div>
            <HomeRoute />
        </>
    )
}
