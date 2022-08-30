import React from "react";
import { Routes, Route } from "react-router-dom";
import { LoginRoute } from "../../router/login/LoginRoute";
import { CustomButton } from "../shared/atoms/CustomButton";

export function Login() {
  return (<>
    <h2>Login</h2>
    <h3>
      Aqui va el cuadro donde se renderizaran
      Todos los elementos del LoginRoute
      <LoginRoute />
    </h3>
    <CustomButton />

    <div className="row gx-5">
      <div className="col">
        <div className="p-3 border" style={{ background: '#D0F3F8', border: 'none' }}>Custom column padding</div>
      </div>
    </div>
    <hr />
    <div className="row gx-5">
      <div className="col">
        <div className="p-3 border" style={{ background: '#CD8DD5', border: 'none' }}>Custom column padding</div>
      </div>
    </div>
    <hr />
    <div className="row gx-5">
      <div className="col">
        <div className="p-3 border" style={{ background: '#D58DAB', border: 'none' }}>Custom column padding</div>
      </div>
    </div>
  </>);
}
