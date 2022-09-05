import React from "react";
import { Link } from "react-router-dom";

export function NavBar() {
    return (<>
        <nav className="navbar navbar-expand-lg" style={{ background: '', margin: '2px 10px 0px 10px', padding: '0.6%' }} >
            <div className="container-fluid row">
                <a className="navbar-brand col-lg-4" href="#">Miel de Maple</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse col-lg-8 row" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item col-lg-2">
                            <Link className="nav-link" to="home"><strong style={{ fontSize: '20px', margin: '20px', color: 'white' }}>Home</strong></Link>
                        </li>
                        <li className="nav-item col-lg-2">
                            <Link className="nav-link" to="about"><strong style={{ fontSize: '20px', margin: '20px', color: 'white' }}>About</strong></Link>
                        </li>
                        <li className="nav-item col-lg-2">
                            <Link className="nav-link" to="login"><strong style={{ fontSize: '20px', margin: '20px', color: 'white' }}>Login</strong></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </>);
}
