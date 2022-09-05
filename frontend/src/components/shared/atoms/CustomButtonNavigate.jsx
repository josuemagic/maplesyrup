import React from 'react';
import { Link } from "react-router-dom";

import '../../../styles/customButtons.css';

export function CustomButtonNavigate({ label = "", linkTo = "home" }) {
    return (
        <>
            <div className="middle">
<<<<<<< HEAD
                <Link className="nav-link btnCustom btn1" to={linkTo}><strong className=''>{label}</strong></Link>
                {/* <Link className="nav-link" to={linkTo}><strong style={{ fontSize: '20px', margin: '20px' }}>{label}</strong></Link> */}

=======
                <a href="" className="btnCustom btn1">{label}</a>
                {/* <a href="" class="btn btn3">Hover Me</a> */}
>>>>>>> 73ca631438907855e8bc47e85190e4f3eaaf789f
            </div>
        </>
    )
}
