import "./perfil.css";
import React, { useState } from "react";
import trocaFoto from "../img/trocar-camera.png";
import fotoPerfil from "../img/perfilDefault.jpg";
import menu from "../img/menu.png";
import CaixaIcon from "../img/caixa-eletronico.png";
import GerenciarContato from "./gerenciadorContato";
import ControleEstoque from "./controleEstoque";
import FuncionarioPage from "./funcionarioPage";
import ControlPromo from "./promocontrol";
import Configuracao from "./configuracao";
import { Link } from "react-router-dom";


const Perfil = () => {
    const [optionDash,SetoptionDash] = useState("ControlPromo");
    const [OpenMenu,SetOpenMenu] = useState(false);

    const handleOptionClick = (option) => {
        SetoptionDash(option);
    };

    const ChooseOption = () => {
        switch (optionDash) {
            case "Contato":
                return < GerenciarContato />;
            case "Estoque":
                return < ControleEstoque />;
            case "Funcionario":
                return < FuncionarioPage />
            case "ControlPromo":
                return < ControlPromo />
            case "Configuracao":
                return < Configuracao />
        }
    }

    const HandleOpen = () => {
        SetOpenMenu(!OpenMenu)
    }

    return (
        <section id="Perfil">     
            <Link to="/Caixa" className="Caixar" >
                <figure>
                    <img src={CaixaIcon} alt="icone de caixa" />
                </figure>
            </Link>
            <div className={ OpenMenu === true ? "Dash show" : "Dash hidden"} onClick={() => HandleOpen()}>
                <div className="menu-bar">
                    <figure >
                        <img src={menu} alt="foto de perfil do proprietario da conta" />
                    </figure>
                </div>
                <div className={ OpenMenu === true ? "img-container show" : "img-container hidden"} onClick={() => HandleOpen()}>
                    <figure>
                        <img src={trocaFoto} alt="icone de uma camera simbolizando a troca de foto" />
                    </figure>
                    <figure>
                        <img src={fotoPerfil} alt="foto de perfil do proprietario da conta" />
                    </figure>
                    
                </div>
                <div className={ OpenMenu === true ? "info-container show" : "info-container hidden"} onClick={() => HandleOpen()}>
                    <h3>Fabio de Oliveira Antoniano</h3>
                    <h4>Cargo: <span> Administradora</span></h4>
                </div>
                <nav className={ OpenMenu === true ? "option-dash show" : "option-dash hidden"} onClick={() => HandleOpen()}>
                    <ul>
                        <li className={optionDash === "Configuracao" ? "active" : ""} onClick={() => handleOptionClick("Configuracao")}>Configuração do Site</li>
                        <li className={optionDash === "ControlPromo" ? "active" : ""} onClick={() => handleOptionClick("ControlPromo")}>Administrar  Promoções</li>
                        <li className={optionDash === "Funcionario" ? "active" : ""} onClick={() => handleOptionClick("Funcionario")}>gerenciar  Funcionario</li>
                        <li className={optionDash === "Contato" ? "active" : ""} 
                            onClick={() => handleOptionClick("Contato")}
                        >Gerenciar Contatos</li>
                        <li className={optionDash === "Estoque" ? "active" : ""} onClick={() => handleOptionClick("Estoque")}>Controle de Estoque</li>
                        <li >painel de Estatisticas</li>
                        <li >Sair da Conta</li>
                    </ul>
                </nav>
            </div>
            {ChooseOption()}
        </section>
    )
}

export default Perfil;