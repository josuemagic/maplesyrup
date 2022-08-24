import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from "../../components/login/Login";


export function LoginRoute() {
  return (
  <>
  <BrowserRouter>
    <Routes>
      <Route path='/login' element={<Login/>}/>
    </Routes>
    </BrowserRouter>
  </>
  );
}
