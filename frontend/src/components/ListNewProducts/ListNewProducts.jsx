import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import CardProductsv2 from '../shared/molecules/CardProductsv2';
import { GetListNewProducts } from '../../redux/actions/listNewProducts/GetListNewProducts';

export function ListNewProducts() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(GetListNewProducts());
    }, [])

    const { loading, products, error } = useSelector((state) => state.products.list);

    return (<>
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
    </>);
}
