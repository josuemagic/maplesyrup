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
            <div id='containerProducts'>

                {products.map((product) => {
                    return <div className='col-lg-3 col-sm-1 productCard'><CardProductsv2
                        title="Titulo"
                        price='Precio'
                        image="https://res.cloudinary.com/dbi5rhmrs/image/upload/v1665253742/cld-sample-3.jpg"
                    /></div>
                })}

                {loading ? <h1>Cargando</h1> : ''}
            </div>

        </>
    )
}

