import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetListProducts } from '../../redux/actions/products/GetListProducts';

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
            <div id='containerProducts'>

                {products.map((product) => {
                    return <div className='col-lg-3 col-sm-1 productCard'>
                        <CardProductsv2
                            title={product.name}
                            price={product.price}
                            image={product.path_image}
                        /></div>
                })}

                {loading ? <h1>Cargando</h1> : ''}
            </div>

        </>
    )
}

