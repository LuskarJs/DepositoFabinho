import Phone from "../img/phone-call.png";
import "./header.css";

function Header() {

    return (
        <header className="App-header">
          <img src="" className="Logo" alt="logo" />
          <nav>
            <ul>
              <li>Inicio</li>
              <li>Catalogo</li>
              <li>Promoções</li>
              <li>Contatos</li>
              <li>Sobre nós</li>
            </ul>
          </nav>
          <button>
            Pedir Agora
            <img src={Phone} alt='icone telefone' />
          </button>
      </header>
    )
}

export default Header;