import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetListProducts } from '../../redux/actions/products/GetListProducts';

import { CardProducts } from '../shared/molecules/CardProducts';
import CardProductsv2 from '../shared/molecules/CardProductsv2';

import '../../styles/homeStyles/customProductsHome.css'

export function HomeProducts() {

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
            <div id='containderTopProducts'>
                <div className='rowProducts'>
                    <div className='col-lg-3 col-sm-1 productCard'><CardProductsv2 /></div>
                    <div className='col-lg-3 col-sm-1 productCard'><CardProductsv2 /></div>
                    <div className='col-lg-3 col-sm-1 productCard'><CardProductsv2 /></div>
                    <div className='col-lg-3 col-sm-1 productCard'><CardProductsv2 /></div>
                </div>
                <div className='rowProducts'>
                    <div className='col-lg-3 col-sm-1 productCard'><CardProductsv2 /></div>
                    <div className='col-lg-3 col-sm-1 productCard'><CardProductsv2 /></div>
                    <div className='col-lg-3 col-sm-1 productCard'><CardProductsv2 /></div>
                    <div className='col-lg-3 col-sm-1 productCard'><CardProductsv2 /></div>
                </div>
                

                <div className='rowProducts'>
                    <div className='col-lg-3 col-sm-1 productCard'><CardProducts /></div>
                    <div className='col-lg-3 col-sm-1 productCard'><CardProducts /></div>
                    <div className='col-lg-3 col-sm-1 productCard'><CardProducts /></div>
                    <div className='col-lg-3 col-sm-1 productCard'><CardProducts /></div>
                </div>
                <div className='rowProducts'>
                    <div className='col-lg-3 col-sm-1 productCard'><CardProducts /></div>
                    <div className='col-lg-3 col-sm-1 productCard'><CardProducts /></div>
                    <div className='col-lg-3 col-sm-1 productCard'><CardProducts /></div>
                    <div className='col-lg-3 col-sm-1 productCard'><CardProducts /></div>
                </div>
                

                {/* <div className='rowProducts'>
                    <div className='col-lg-3 col-sm-1 productCard'><CardProducts /></div>
                    <div className='col-lg-3 col-sm-1 productCard'><CardProducts /></div>
                    <div className='col-lg-3 col-sm-1 productCard'><CardProducts /></div>
                    <div className='col-lg-3 col-sm-1 productCard'><CardProducts /></div>
                </div>
                
              
                <div className='rowProducts'>
                    <div className='col-lg-3 col-sm-1 productCard'><CardProducts /></div>
                    <div className='col-lg-3 col-sm-1 productCard'><CardProducts /></div>
                    <div className='col-lg-3 col-sm-1 productCard'><CardProducts /></div>
                    <div className='col-lg-3 col-sm-1 productCard'><CardProducts /></div>
                </div>
                <div className='rowProducts'>
                    <div className='col-lg-3 col-sm-1 productCard'><CardProducts /></div>
                    <div className='col-lg-3 col-sm-1 productCard'><CardProducts /></div>
                    <div className='col-lg-3 col-sm-1 productCard'><CardProducts /></div>
                    <div className='col-lg-3 col-sm-1 productCard'><CardProducts /></div>
                </div>
                <div className='rowProducts'>
                    <div className='col-lg-3 col-sm-1 productCard'><CardProducts /></div>
                    <div className='col-lg-3 col-sm-1 productCard'><CardProducts /></div>
                    <div className='col-lg-3 col-sm-1 productCard'><CardProducts /></div>
                    <div className='col-lg-3 col-sm-1 productCard'><CardProducts /></div>
                </div>
                <div className='rowProducts'>
                    <div className='col-lg-3 col-sm-1 productCard'><CardProducts /></div>
                    <div className='col-lg-3 col-sm-1 productCard'><CardProducts /></div>
                    <div className='col-lg-3 col-sm-1 productCard'><CardProducts /></div>
                    <div className='col-lg-3 col-sm-1 productCard'><CardProducts /></div>
                </div> */}
              
            


                {loading ? <h1>Cargando</h1> : ''}
            </div>
            
        </>
    )
}

