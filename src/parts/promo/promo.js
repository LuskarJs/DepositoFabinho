import React from 'react';
import carrinho from '../img/carrinho.png';
import notification from '../img/notificacao.png';
import './promo.css';
import './mediaquery.css';

const PromoPage = ({ produtosPromocao, tituloPromocao }) => {
    return (
        <div id="promo-page">
            <div className="notification">
                <img src={notification} alt="icone de notificação" />
            </div>
            <div className="title-promo">
                <h2>{tituloPromocao}</h2>
            </div>
            {produtosPromocao && produtosPromocao.length > 0 ? (
                <ul className="promo-product">
                    {produtosPromocao.map((produto, index) => (
                        <li key={index} className="card-product">
                            <figure>
                                <img src={produto.imagem} alt="imagem meramente ilustrativa" />
                            </figure>
                            <div className="text-card">
                                <h3>{produto.nome}</h3>
                                <h4>{produto.descricao}</h4>
                                <h5>TIPO: <span>{produto.tipo}</span></h5>
                            </div>
                            <div className="price-product">
                                <p>De R$:<span>{produto.precoOriginal}</span></p>
                                <p>Por R$:<span>{produto.precoPromocional}</span></p>
                            </div>
                            <div className="action-button">
                                <button>
                                    <img src={carrinho} alt="icone carrinho de compras" />
                                </button>
                                <button>Comprar</button>
                            </div>
                        </li>
                    ))}
                </ul>
            ) : (
                <div className="no-promotions-message">
                    <p>Promoções ainda não foram feitas, mas fique ligado que em breve teremos promoções!</p>
                </div>
            )}
        </div>
    );
};

export default PromoPage;
