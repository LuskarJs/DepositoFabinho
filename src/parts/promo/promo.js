import img from '../img/coca125.png';
import carrinho from '../img/carrinho.png';
import notification from "../img/notificacao.png";
import "./promo.css";
import "./mediaquery.css";

const PromoPage = () => {

    return (
        <div id="promo-page">
            <div className='notification'>
                <img src={notification} alt="icone de notificação" />
            </div>
            <div className="title-promo">
                <h2>Promoções da Semana</h2>
            </div>
            <ul className="promo-product">
                <li className="card-product">
                    <figure>
                        <img src={img} alt="imagem meramente ilustrativa" />
                    </figure>
                    <div className="text-card">
                        <h3>Coca Cola </h3>
                        <h4>Bebida não alcoolica</h4>
                        <h5>TIPO: <span>Garrafa</span></h5>
                    </div>
                    <div className="price-product">
                        <p>De R$:<span> 8,99</span></p>
                        <p>Por R$:<span> 6,99</span></p>
                    </div>
                    <div className="action-button">
                        <button>
                            <img src={carrinho} alt="icone carrinho de compras" />
                        </button>
                        <button>Comprar</button>
                    </div>
                </li>
                <li className="card-product">
                    <figure>
                        <img src={img} alt="imagem meramente ilustrativa" />
                    </figure>
                    <div className="text-card">
                        <h3>Coca Cola </h3>
                        <h4>Bebida não alcoolica</h4>
                        <h5>TIPO: <span>Garrafa </span></h5>
                    </div>
                    <div className="price-product">
                        <p>De R$:<span> 8,99</span></p>
                        <p>Por R$:<span> 6,99</span></p>
                    </div>
                    <div className="action-button">
                        <button>
                            <img src={carrinho} alt="icone carrinho de compras" />
                        </button>
                        <button>Comprar</button>
                    </div>
                </li>
                <li className="card-product">
                    <figure>
                        <img src={img} alt="imagem meramente ilustrativa" />
                    </figure>
                    <div className="text-card">
                        <h3>Coca Cola </h3>
                        <h4>Bebida não alcoolica</h4>
                        <h5>TIPO: <span>Garrafa </span></h5>
                    </div>
                    <div className="price-product">
                        <p>De R$:<span> 8,99</span></p>
                        <p>Por R$:<span> 6,99</span></p>
                    </div>
                    <div className="action-button">
                        <button>
                            <img src={carrinho} alt="icone carrinho de compras" />
                        </button>
                        <button>Comprar</button>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default PromoPage;