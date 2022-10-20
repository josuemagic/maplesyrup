import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { ShoppingCart } from "./ShoppingCart";
import { fetchShoppingCart } from '../../../redux/slices/managmentProducts/shoppingCart/listShpppingCart';
import loginMapleSyrup from '../../../../public/pictures/loginMapleSyrup.gif';
import logoMapleSyrup from '../../../../public/pictures/logoMapleSyrup.png';


export function NavBar() {

    const dispatch = useDispatch();

    const { loading } = useSelector((state) => state.shopping_cart.list);

    useEffect(() => {
        if (loading) {
            setTimeout(() => {
                dispatch(fetchShoppingCart(false));
            }, 2000);

        }
    }, [loading])

    return (<>
        <nav className="navbar navbar-expand-lg" style={{ background: '', margin: '2px 10px 2em 10px', padding: '0.6%' }} >
            <div className="container-fluid row">
                <a className="navbar-brand col-lg-4" href="#">Miel de Maple</a>
                <button className="navbar-toggler mb-5" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse col-lg-6 row" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item col-lg-2">
                            <Link className="nav-link" to="home"><strong style={{ fontSize: '20px', margin: '20px' }}>Home</strong></Link>
                        </li>
                        <li className="nav-item col-lg-2">
                            <Link className="nav-link" to="about"><strong style={{ fontSize: '20px', margin: '20px' }}>About</strong></Link>
                        </li>
                        <li className="nav-item col-lg-2">
                            <Link className="nav-link" to="login"><strong style={{ fontSize: '20px', margin: '20px' }}>Login</strong></Link>
                        </li>
                    </ul>
                </div>
                <div className="col-lg-4">
                    {loading ?
                        <img width={100} height={10} src={loginMapleSyrup} alt="" />
                        :
                        <ShoppingCart />
                    }
                </div>
            </div>
        </nav>
    </>);
}
