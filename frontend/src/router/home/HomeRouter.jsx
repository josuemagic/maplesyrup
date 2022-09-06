import React from "react";
import { Routes, Route } from 'react-router-dom';
import { HomeProducts } from "../../components/home/HomeProducts";
import NotFound from "../not-found/NotFound";

export function HomeRoute() {
    return (
        <>
            <Routes>
                <Route path="/sellTop" element={<h2>Mas Vendido</h2>} />
                <Route path="*" element={<NotFound />}></Route>
                <Route path="/" element={<HomeProducts />}></Route>
            </Routes>
        </>
    );
}
