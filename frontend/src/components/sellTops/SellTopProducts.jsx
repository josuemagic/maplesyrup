import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import CardProductsv2 from '../shared/molecules/CardProductsv2';
import { GetListSellTopsProducts } from '../../redux/actions/sellTops/GetListSellTopsProducts';

export function SellTopProducts() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(GetListSellTopsProducts());
    }, [])

    const { loading, products, error } = useSelector((state) => state.products.list);

    return <>
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

    </>;
}





