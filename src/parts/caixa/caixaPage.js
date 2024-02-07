import search from "../img/big-search-len.png";
import Dinheiro from "../img/dinheiro.png";
import Credito from "../img/cartao-de-credito.png";
import Sair from "../img/sair.png";
import { Link } from "react-router-dom";
import "./caixapage.css";

const Caixa = () => {

    return (
        <section className="container-Caixa">
            <div className="CaixaPainel">
                <div className="info-user">
                    <h3>Nome do Caixa: <span>Fabio liuz</span></h3>
                    <h4>Inicio Caixa R$: <span>113,00</span></h4>
                </div>
                <div className="time-user">
                    <p>Inicio<span>14:30</span></p>
                    <p>Encerramento<span>14:30</span></p>
                </div>
                <div className="time-user">
                    <p>Caixa Aberto<span className="circle"></span></p>
                    <p>Vendas Feitas: <span>5</span></p>
                </div>
                <Link to="/Perfil" className="time-user">
                    <p>Sair</p>
                    <figure>
                        <img src={Sair} alt="icone de sair" />
                    </figure>
                </Link>
            </div>
            <div className="DashCaixa">
                <div>
                    <div className="title-caixa">
                        <h4>Lista de Compras</h4>
                    </div>
                    <div className="carrinho-pedidos"> 
                        <table>
                            <thead>
                                <tr>
                                    <th>Código</th>
                                    <th>Nome</th>
                                    <th>Quantia</th>
                                    <th>Preço</th>
                                    <th>Categoria</th>
                                    <th>SubCategoria</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr key="1">
                                    <td>001</td>
                                    <td>Arroz</td>
                                    <td>10</td>
                                    <td>R$ 20,00</td>
                                    <td>Alimentos</td>
                                    <td>Cereais</td>
                            
                                </tr>
                                <tr key="2">
                                    <td>002</td>
                                    <td>Feijão</td>
                                    <td>8</td>
                                    <td>R$ 15,00</td>
                                    <td>Alimentos</td>
                                    <td>Leguminosas</td>
                                    
                                </tr>
                                <tr key="1">
                                    <td>001</td>
                                    <td>Arroz</td>
                                    <td>10</td>
                                    <td>R$ 20,00</td>
                                    <td>Alimentos</td>
                                    <td>Cereais</td>
                                   
                                </tr>
                                <tr key="2">
                                    <td>002</td>
                                    <td>Feijão</td>
                                    <td>8</td>
                                    <td>R$ 15,00</td>
                                    <td>Alimentos</td>
                                    <td>Leguminosas</td>
                                  
                                </tr>
                                <tr key="1">
                                    <td>001</td>
                                    <td>Arroz</td>
                                    <td>10</td>
                                    <td>R$ 20,00</td>
                                    <td>Alimentos</td>
                                    <td>Cereais</td>
                                  
                                </tr>
                                <tr key="2">
                                    <td>002</td>
                                    <td>Feijão</td>
                                    <td>8</td>
                                    <td>R$ 15,00</td>
                                    <td>Alimentos</td>
                                    <td>Leguminosas</td>
                                
                                </tr>
                                <tr key="1">
                                    <td>001</td>
                                    <td>Arroz</td>
                                    <td>10</td>
                                    <td>R$ 20,00</td>
                                    <td>Alimentos</td>
                                    <td>Cereais</td>
                                    
                                </tr>
                                <tr key="2">
                                    <td>002</td>
                                    <td>Feijão</td>
                                    <td>8</td>
                                    <td>R$ 15,00</td>
                                    <td>Alimentos</td>
                                    <td>Leguminosas</td>
                                    
                                </tr>
                                <tr key="1">
                                    <td>001</td>
                                    <td>Arroz</td>
                                    <td>10</td>
                                    <td>R$ 20,00</td>
                                    <td>Alimentos</td>
                                    <td>Cereais</td>
                                    
                                </tr>
                                <tr key="2">
                                    <td>002</td>
                                    <td>Feijão</td>
                                    <td>8</td>
                                    <td>R$ 15,00</td>
                                    <td>Alimentos</td>
                                    <td>Leguminosas</td>
                                  
                                </tr>
                                <tr key="1">
                                    <td>001</td>
                                    <td>Arroz</td>
                                    <td>10</td>
                                    <td>R$ 20,00</td>
                                    <td>Alimentos</td>
                                    <td>Cereais</td>
                                  
                                </tr>
                                <tr key="2">
                                    <td>002</td>
                                    <td>Feijão</td>
                                    <td>8</td>
                                    <td>R$ 15,00</td>
                                    <td>Alimentos</td>
                                    <td>Leguminosas</td>
                                    
                                </tr>
                                <tr key="1">
                                    <td>001</td>
                                    <td>Arroz</td>
                                    <td>10</td>
                                    <td>R$ 20,00</td>
                                    <td>Alimentos</td>
                                    <td>Cereais</td>
                                    
                                </tr>
                                <tr key="2">
                                    <td>002</td>
                                    <td>Feijão</td>
                                    <td>8</td>
                                    <td>R$ 15,00</td>
                                    <td>Alimentos</td>
                                    <td>Leguminosas</td>
                                   
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                    
                <div className="resultadoCompra">
                    <div className="search-bar">
                        <input type="text" placeholder="Ex:maço de cigarro"/>
                        <button type="Submit">
                            <figure>
                                <img src={search} alt="icone do search" />
                            </figure>
                        </button>
                    </div>
                    
                        <div className="info-compras">
                            <h4>Total de Itens: <span>8</span></h4>
                            <h4>Total da Compra: <span>80,00</span></h4>
                            <h4>Valor do Pagamento: 
                                <span>
                                    <input type="number" placeholder="Valor a Receber" />
                                </span>
                            </h4>
                            <h4>Troco: <span>80,00</span></h4>
                        </div>
                        <div className="listaPagamento">
                            <h4>Método de Pagamento</h4>
                            <ul>
                                <li>
                                    <input type="radio" />
                                    <p>Dinheiro</p>
                                    <figure>
                                        <img src={Dinheiro} alt="icone do Dinheiro" />
                                    </figure>
                                </li>
                                <li>
                                    <input type="radio" />
                                    <p>Debito</p>
                                    <figure>
                                        <img src={Credito} alt="cartão de debito icone" />
                                    </figure>
                                </li>
                                <li>
                                    <input type="radio" />
                                    <p>Credito</p>
                                    <figure>
                                        <img src={Credito} alt="icone de cartao de credito" />
                                    </figure>
                                </li>
                            </ul>     
                        </div>
                        <div className="time-venda">
                            <h5>Inicio da Venda: <span>10:45:05</span></h5>
                            <h5>Venda Finalizada: <span>10:45:05</span></h5>
                        </div>
                        <div className="action-buttons">
                            <button>Finalizar Vendar</button>
                            <button>Cancelar Vendar</button>
                        </div>
                    </div>
            </div>
        </section>
    )
}

export default Caixa;