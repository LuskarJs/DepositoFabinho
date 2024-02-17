import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import Login from './parts/login/loginPage';
import Perfil from './parts/perfil/perfil';
import Caixa from './parts/caixa/caixaPage';
import Catalogo from './parts/catalogo/catalogo';
import Header from './parts/header/header';
import Footer from './parts/footer/footer';

const root = ReactDOM.createRoot(document.getElementById('root'));

const AppRouter = () => {
  const [contadorItens, setContadorItens] = useState(0);

  return (
    <React.StrictMode>
      <BrowserRouter>
        <Header contadorItens={contadorItens} /> 
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/Login" element={< Login />} />
          <Route path="/Perfil" element={< Perfil />} />
          <Route path="/Caixa" element={< Caixa />} />
          <Route path="/Catalogo" element={<Catalogo contadorItens={contadorItens} setContadorItens={setContadorItens} />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </React.StrictMode>
  );
};

root.render(<AppRouter />);
