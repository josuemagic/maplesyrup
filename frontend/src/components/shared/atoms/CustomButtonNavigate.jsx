import React from 'react';
import { Link } from "react-router-dom";

import '../../../styles/customButtons.css';

export function CustomButtonNavigate({ label = "", linkTo = "home" }) {
    return (
        <>
            <div className="middle">
                <Link className="nav-link btnCustom btn1" to={linkTo}><strong className=''>{label}</strong></Link>
                {/* <Link className="nav-link" to={linkTo}><strong style={{ fontSize: '20px', margin: '20px' }}>{label}</strong></Link> */}

            </div>
        </>
    )
}
