import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppRouter } from './router/AppRouter';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<h1>Index</h1>}></Route>
        {/* <Route path='/login' element={<AppRouter/>} ></Route> */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)

// Tener un componente base que y de ahi mandarlo 
  // a la carpeta router y de ahi tener las diferentes
  //rutas para servir toda la aplicacion