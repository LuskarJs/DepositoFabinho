import Phone from "../img/phone-call.png";
import logo from "../img/logoFabio-removebg-preview.png";
import Perfil from "../img/perfil.png";
import "./header.css";
import { Link } from "react-router-dom";

function Header() {

    return (
        <header className="App-header">
          <nav>
            <figure>
              <img src={logo} className="Logo" alt="logo" />
            </figure>
            <ul>
              <li>Inicio</li>
              <li>Catalogo</li>
              <li>Promoções</li>
              <li>Contatos</li>
              <li>Sobre nós</li>
            </ul>
          </nav>
          <div className="option-header">
            <Link to="/Login">
              <img src={Perfil} className="Logo" alt="icone de perfil" />
            </Link>
            <button>
              Pedir Agora
              <img src={Phone} alt='icone telefone' />
            </button>
          </div>
          
      </header>
    )
}

export default Header;