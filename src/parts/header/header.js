import Phone from "../img/phone-call.png";
import logo from "../img/logoFabio-removebg-preview.png";
import Perfil from "../img/perfil.png";
import Carrinho from '../img/carrinho.png';
import Menu from '../img/menu.png';
import {motion} from "framer-motion";
import Cookies from 'js-cookie';
import CarrinhoCompra from "../header/carrinho";
import { useState, useEffect } from "react";
import "./header.css";
import { Link } from "react-router-dom";

function Header({ contadorItens}) {
    const [menuopen,setmenuopen] = useState(true);
    const [carrinhoAberto, setCarrinhoAberto] = useState(false);
    const [carrinhoLista, setCarrinho] = useState([]);

    useEffect(() => {
      const carrinhoSalvo = Cookies.get("carrinho");
  
      if (carrinhoSalvo) {
        const carrinhoAtualizado = JSON.parse(carrinhoSalvo);
        setCarrinho(carrinhoAtualizado);
      }
    }, []);

    const toggleCarrinho = () => {
        setCarrinhoAberto(!carrinhoAberto);
    };

    return (
        <header className="App-header">
          <nav>
            <figure>
              <img src={logo} className="Logo" alt="logo" />
            </figure>
            <motion.ul
            transition={{
              duration: .35,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
             className={menuopen ? "" : "show"}>
              <li>
                <Link to="/" href="#home">
                  Inicio
                </Link>
              </li>
              <li>
              <Link to="/Catalogo">
                 Catalogo
              </Link>
              </li>
              <li>
              <a href="#promo-page">
              Promoções
                </a>  
              </li>
              <li>
              <a href="#contato-page">
              Contatos
                </a>        
              </li>
            </motion.ul>
          </nav>
          <div className="option-header">
            <Link to="/Login">
              <img src={Perfil} className="Logo" alt="icone de perfil" />
            </Link>
            <div className="carrinho-pedido"  onClick={toggleCarrinho}>
                <figure>
                  <img src={Carrinho} alt="carrinho de compra" />
                </figure>
                <div className="count-pedidos">
                  <span>{contadorItens}</span>
                </div>
            </div>
            
            <div className="menu-bar"
              onClick={() => setmenuopen(!menuopen)}
            >
              <img src={Menu} alt='icone menu' />
            </div>
            <button>
              Pedir Agora
              <img src={Phone} alt='icone telefone' />
            </button>
          </div>
          {carrinhoAberto && (
              <div className="carrinho-overlay" onClick={toggleCarrinho}>
                  <div className="carrinho-modal">
                  <CarrinhoCompra carrinhoItens={carrinhoLista} />
                  </div>
              </div>
          )}
      </header>
    )
}

export default Header;