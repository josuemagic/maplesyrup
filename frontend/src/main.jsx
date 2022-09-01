import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './router/AppRouter';
import 'bootstrap/dist/css/bootstrap.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <div className='vh-100' style={{background: '#fdddca', width: '100%'}}>
      <AppRouter />
    </div>
    </BrowserRouter>
  </React.StrictMode>
)

// linear-gradient(0deg, rgba(213,180,252,1) 0%, rgba(252,208,180,1) 100%)
// linear-gradient(180deg, rgba(161,141,130,1) 0%, rgba(187,164,151,1) 52%, rgba(253,221,202,1) 88% color carne
// linear-gradient(180deg, rgba(118,104,96,1) 0%, rgba(161,141,130,1) 52%, rgba(206,180,165,1) 88% carne

// Top
// linear-gradient(180deg, rgba(78,69,64,1) 0%, rgba(118,104,96,1) 52%, rgba(161,141,130,1) 88%)
// linear-gradient(180deg, rgba(20,25,48,1) 10%, rgba(193,59,92,1) 77%, rgba(231,66,102,1) 92%, rgba(252,70,107,1) // Azul con rojo