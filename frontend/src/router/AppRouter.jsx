import React from "react";
import { Routes, Route } from 'react-router-dom';
import { Login } from "../components/login/Login";
import { LoginRoute } from "./login/LoginRoute";
import NotFound from "./not-found/NotFound";
import 'bootstrap/dist/css/bootstrap.css';
import { NavBar } from "../components/shared/molecules/NavBar";


export function AppRouter() {
  return (<>

    <NavBar />

    <Routes>
      <Route path='*' element={<NotFound />} />
      <Route path="/" element={<h1>Home</h1>} />
      <Route path="/home" element={<h1>Home</h1>} />

      <Route path="/login/*" element={<Login />} />

    </Routes>
  </>);
}
