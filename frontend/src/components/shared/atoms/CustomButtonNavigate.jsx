import React from 'react';
import '../../../styles/customButtons.css';

export function CustomButtonNavigate({label = ""}) {
    return (
        <>
            <div class="middle">
                <a href="" className="btnCustom btn1">{label}</a>
                {/* <a href="" class="btn btn3">Hover Me</a> */}
            </div>
        </>
    )
}
