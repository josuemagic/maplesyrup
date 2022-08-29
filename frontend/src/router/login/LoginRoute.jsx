import React from "react";
import { Routes, Route } from 'react-router-dom';

export function LoginRoute() {
  return (
    <>
      <Routes>
        <Route path="/prueba" element={<h2>Login Route</h2>} />
      </Routes>
    </>
  );
}
