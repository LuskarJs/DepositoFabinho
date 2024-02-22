import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './perfil.css';
import trocaFoto from '../img/trocar-camera.png';
import fotoPerfil from '../img/perfilDefault.jpg';
import menu from '../img/menu.png';
import CaixaIcon from '../img/caixa-eletronico.png';
import home from '../img/botao-home.png';
import GerenciarContato from './gerenciadorContato';
import ControleEstoque from './controleEstoque';
import FuncionarioPage from './funcionarioPage';
import ControlPromo from './promocontrol';
import Validate from './validade/validate';
import Configuracao from './configuracao';
import ModalDesconectar from "./modalSair";

const Perfil = () => {
    const [showValidation, setShowValidation] = useState(false);
    const [showModalDesconectar, setShowModalDesconectar] = useState(false);
    const [optionDash, SetoptionDash] = useState("Estoque");
    const [OpenMenu, SetOpenMenu] = useState(false);
    const [nomeCompleto, setNomeCompleto] = useState("");
    const [isAdmin, setIsAdmin] = useState(false);
    const navigate = useNavigate();
  
    useEffect(() => {
      const token = localStorage.getItem('authToken');
      if (!token) {
          navigate('/login'); 
      } else {
          const decodedToken = parseJwt(token);
          setNomeCompleto(decodedToken.username);
          setIsAdmin(decodedToken.isAdmin);
      }
  }, [navigate]);

  const parseJwt = (token) => {
      try {
          return JSON.parse(atob(token.split('.')[1]));
      } catch (e) {
          return null;
      }
  };

  const handleOptionClick = (option) => {
      SetoptionDash(option);
  };

  const handleLogout = () => {
      localStorage.removeItem('authToken');
      navigate('/login');
  };

  const openModalDesconectar = () => {
    setShowModalDesconectar(true);
  };

  const closeModalDesconectar = () => {
    setShowModalDesconectar(false);
  };

  const ChooseOption = () => {
    switch (optionDash) {
      case "Contato":
        return <GerenciarContato />;
      case "Estoque":
        return <ControleEstoque />;
      case "Funcionario":
        return <FuncionarioPage />;
      case "ControlPromo":
        return <ControlPromo />;
      case "Configuracao":
        return <Configuracao />;
      default:
        return null;
    }
  };

  const HandleOpen = () => {
    SetOpenMenu(!OpenMenu);
  };


    return (
        <section id="Perfil">

            <div className="option-conta">
                <Link to="/Caixa" className="Caixar" >
                    <figure>
                        <img src={CaixaIcon} alt="icone de caixa" />
                    </figure>
                </Link>
                <Link to="/" className="Inicio" >
                    <figure>
                        <img src={home} alt="icone de inicio" />
                    </figure>
                </Link>
            </div>

            <div className={OpenMenu === true ? "Dash show" : "Dash hidden"} onClick={() => HandleOpen()}>
                <div className="menu-bar">
                    <figure >
                        <img src={menu} alt="foto de perfil do proprietario da conta" />
                    </figure>
                </div>
                <div className={OpenMenu === true ? "img-container show" : "img-container hidden"} onClick={() => HandleOpen()}>
                    <figure>
                        <img src={trocaFoto} alt="icone de uma camera simbolizando a troca de foto" />
                    </figure>
                    <figure>
                        <img src={fotoPerfil} alt="foto de perfil do proprietario da conta" />
                    </figure>

                </div>
                <div className={OpenMenu === true ? "info-container show" : "info-container hidden"} onClick={() => HandleOpen()}>
                    <h3>{nomeCompleto}</h3>
                    <h4>Cargo: <span> Administradora</span></h4>
                </div>
                <nav className={OpenMenu === true ? "option-dash show" : "option-dash hidden"} onClick={() => HandleOpen()}>
                    <ul>
                        <li className={optionDash === "Configuracao" ? "active" : ""} onClick={() => handleOptionClick("Configuracao")}>Configuração do Site</li>
                        <li className={optionDash === "ControlPromo" ? "active" : ""} onClick={() => handleOptionClick("ControlPromo")}>Administrar  Promoções</li>
                        <li className={optionDash === "Funcionario" ? "active" : ""} onClick={() => handleOptionClick("Funcionario")}>gerenciar  Funcionario</li>
                        <li className={optionDash === "Contato" ? "active" : ""}
                            onClick={() => handleOptionClick("Contato")}
                        >Gerenciar Contatos</li>
                        <li className={optionDash === "Estoque" ? "active" : ""} onClick={() => handleOptionClick("Estoque")}>Controle de Estoque</li>
                        <li >painel de Estatisticas</li>
                        <li onClick={openModalDesconectar}>Sair da Conta</li>
                    </ul>
                </nav>
            </div>
            {showValidation && <Validate />}
            {showModalDesconectar && <ModalDesconectar onClose={closeModalDesconectar} onLogout={handleLogout} />}
            {ChooseOption()}
        </section>
    )
}

export default Perfil;
