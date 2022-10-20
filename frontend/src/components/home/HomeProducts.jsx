import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetListProducts } from '../../redux/actions/products/GetListProducts';

import CardProductsv2 from '../shared/molecules/CardProductsv2';
import loginMapleSyrup from '../../../public/pictures/loginMapleSyrup.gif';

import '../../styles/homeStyles/customProductsHome.css'

export function HomeProducts() {

    const dispatch = useDispatch()

    const { loading, products, error } = useSelector((state) => state.products.list);

    useEffect(() => {
        dispatch(GetListProducts());
    }, [])

    return (
        <>
            {
                loading
                    ? <div className="w-100 justify-content-center align-content-center row">
                        <img src={loginMapleSyrup} width={50} height={900} alt="" />
                    </div>
                    :
                    <div id='containerProducts'>

                        {products.map((product, index) => {
                            return <div key={index} className='col-lg-3 col-sm-1 productCard'>
                                <CardProductsv2
                                    id_product={product.id_product}
                                    title={product.name}
                                    price={product.price}
                                    image={product.path_image}
                                /></div>
                        })}

                    </div>

            }
        </>
    )
}

