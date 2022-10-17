import React from "react";
import { Routes, Route } from 'react-router-dom';
import { Login } from "../components/login/Login";
import NotFound from "./not-found/NotFound";
import { NavBar } from "../components/shared/molecules/NavBar";
import { Home } from "../components/home/Home";

import { SellTopProducts } from "../components/sellTops/SellTopProducts";
import { ListNewProducts } from "../components/ListNewProducts/ListNewProducts";
import { SalesProducts } from "../components/SalesProducts/SalesProducts";


export function AppRouter() {
  return (<>

    <NavBar />

    <Routes>
      <Route path='*' element={<NotFound />} />
      <Route path="/" element={<Home />} />
      <Route path="/home/*" element={<Home />} />
      <Route path="/SellTop" element={<SellTopProducts />} />
      <Route path="/NewsProducts" element={<ListNewProducts />} />
      <Route path="/OfferProducts" element={<SalesProducts />} />
      <Route path="/login/*" element={<Login />} />

    </Routes>
  </>);
}
