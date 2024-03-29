import img from '../img/coca125.png';
import menuicon from '../img/folheto.png';
import "./menu.css";
import "./mediaquery.css";
import MarcaSlider from './sliderjs';
import { Link } from 'react-router-dom';

const Menu = () => {

    return (
        <section id='menu-page'>
            <div className="text-menu">
                <h3>marcas que você encontra aqui perto de você</h3>
            </div>
            <MarcaSlider />
            <div className="container-slider">
                <div className="text-slide-menu">
                    <h3>Mais Alguns Produtos que vOcê encontra por aqui</h3>
                </div>
                <ul className="slide-card">
                    <li className="Card-product">
                        <figure>
                            <img src={img} alt="" />
                        </figure>
                        <div className="info-product">
                            <h3>Sprite</h3>
                        </div>
                        <div className="action-button">
                            <div className="text-price">
                                <p>Preço R$: <span>9,99</span></p>
                            </div>
                            <button>
                                Comprar
                            </button>
                        </div>
                    </li>
                    <li className="Card-product">
                        <figure>
                            <img src={img} alt="" />
                        </figure>
                        <div className="info-product">
                            <h3>Sprite</h3>
                        </div>
                        <div className="action-button">
                            <div className="text-price">
                                <p>Preço R$: <span>9,99</span></p>
                            </div>
                            <button>
                                Comprar
                            </button>
                        </div>
                    </li>
                    <li className="Card-product">
                        <figure>
                            <img src={img} alt="" />
                        </figure>
                        <div className="info-product">
                            <h3>Sprite</h3>
                        </div>
                        <div className="action-button">
                            <div className="text-price">
                                <p>Preço R$: <span>9,99</span></p>
                            </div>
                            <button>
                                Comprar
                            </button>
                        </div>
                    </li>
                    <li className="Card-product">
                        <figure>
                            <img src={img} alt="" />
                        </figure>
                        <div className="info-product">
                            <h3>Sprite</h3>
                        </div>
                        <div className="action-button">
                            <div className="text-price">
                                <p>Preço R$: <span>9,99</span></p>
                            </div>
                            <button>
                                Comprar
                            </button>
                        </div>
                    </li>
                    <li className="Card-product">
                        <figure>
                            <img src={img} alt="" />
                        </figure>
                        <div className="info-product">
                            <h3>Sprite</h3>
                        </div>
                        <div className="action-button">
                            <div className="text-price">
                                <p>Preço R$: <span>9,99</span></p>
                            </div>
                            <button>
                                Comprar
                            </button>
                        </div>
                    </li>
                </ul>
            </div>
            <Link to="/Catalogo" className="button-menu">
                <button>
                    Ver Catalogo 
                    <img src={menuicon} alt="icone do menu" /> 
                </button>
            </Link>
        </section>
    )

}

export default Menu;