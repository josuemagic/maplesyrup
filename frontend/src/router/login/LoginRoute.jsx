import React from "react";
import { Routes, Route } from 'react-router-dom';
import LoginUser from "./LoginUser";

export function LoginRoute() {
  return (
    <>
      <Routes>
        <Route path="/LoginUser" element={<LoginUser />} />
        <Route path="/LoginRegister" element={<LoginUser />} />
      </Routes>
    </>
  );
}
