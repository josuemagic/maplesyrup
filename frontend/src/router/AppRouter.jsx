import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LoginRoute } from "./login/LoginRoute";

export function AppRouter() {
  return (<>
  <BrowserRouter>
    <Routes>
      {/* <Route index element={<h1>index</h1>}></Route> */}
      {/* <Route path='*' element={<NotFound/>}/> */}
      <Route path='/login' element={<LoginRoute/>}/>
    </Routes>
    </BrowserRouter>
  </>);
}
