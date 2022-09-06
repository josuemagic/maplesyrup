import React from 'react';
import { Link } from "react-router-dom";

import '../../../styles/customButtons.css';

export function CustomButtonNavigate({ label = "", linkTo = "home" }) {
    return (
        <>
            <div className="middle">
                <Link className="btnCustom btn1" to={linkTo}>{label}</Link>
            </div>
        </>
    )
}
