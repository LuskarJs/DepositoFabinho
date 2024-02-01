import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import Login from './parts/login/loginPage';
import Perfil from './parts/perfil/perfil';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Login" element={< Login />}/>
        <Route path="/Perfil" element={< Perfil />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
