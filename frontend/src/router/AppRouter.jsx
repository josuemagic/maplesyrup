import React from "react";
import { Routes, Route } from 'react-router-dom';
import { Login } from "../components/login/Login";
import NotFound from "./not-found/NotFound";
import { NavBar } from "../components/shared/molecules/NavBar";
import { Home } from "../components/home/Home";


export function AppRouter() {
  return (<>

    <NavBar />

    <Routes>
      <Route path='*' element={<NotFound />} />
      <Route path="/" element={<Home />} />
      <Route path="/home/*" element={<Home />} />
      <Route path="/sellTop" element={<h2>Mas Vendido AppRouter</h2>} />
      <Route path="/login/*" element={<Login />} />

    </Routes>
  </>);
}
