import React from 'react';
import { HomeRoute } from '../../router/home/HomeRouter';
import '../../styles/customButtons.css';

import { CustomButtonNavigate } from '../shared/atoms/CustomButtonNavigate';

export function Home() {


    return (
        <>
            <div className='containerTopNavBar'>
                <CustomButtonNavigate label='Mas Vendido' linkTo='sellTop' />
                <CustomButtonNavigate label='Mas Vendido' linkTo='sellTop' />
                <CustomButtonNavigate label='Mas Vendido' linkTo='sellTop' />
                <div id='containerForm'>
                    <form className="d-flex">
                        <input className="form-control" type="search" placeholder="¿Que estas buscando?..." />
                        <button className="btn btnFormSearch" type="submit">Busar</button>
                    </form>
                </div>
            </div>
            <HomeRoute />
        </>
    )
}
