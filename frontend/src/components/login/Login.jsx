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
      El login y el registro
    </h3>
    <LoginRoute />
  </>);
}
