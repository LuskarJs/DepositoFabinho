import React, { useState, useEffect } from "react";
import search from "../img/big-search-len.png";
import { Link } from "react-router-dom"; 
import Dinheiro from "../img/dinheiro.png";
import Credito from "../img/cartao-de-credito.png";
import Sair from "../img/sair.png";
import "./caixapage.css";

const Caixa = () => {
    const [carrinho, setCarrinho] = useState([]);
    const [valorInicial, setValorInicial] = useState(113.00); // Defina o valor inicial do caixa aqui
    const [vendasFeitas, setVendasFeitas] = useState(5); // Defina o número de vendas feitas aqui
    const [modalVisible, setModalVisible] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [vendaIniciada, setVendaIniciada] = useState(false);
    const [metodoPagamento, setMetodoPagamento] = useState("");
    const [troco, setTroco] = useState(0);
    const [produtosPesquisados, setProdutosPesquisados] = useState([]);
    const [horaInicioVenda, setHoraInicioVenda] = useState("");
    const [horaFimVenda, setHoraFimVenda] = useState("");

    useEffect(() => {
        // Atualiza o valor do caixa ao carregar a página ou ao mudar o número de vendas
        calcularCaixaAtual();
    }, [vendasFeitas]);

    const adicionarAoCarrinho = (produto) => {
        setCarrinho([...carrinho, produto]);
        if (!vendaIniciada) {
            setVendaIniciada(true);
            setHoraInicioVenda(new Date().toLocaleTimeString());
        }
    };

    const removerDoCarrinho = (index) => {
        const novoCarrinho = [...carrinho];
        novoCarrinho.splice(index, 1);
        setCarrinho(novoCarrinho);
    };

    const handleMetodoPagamentoChange = (e) => {
        setMetodoPagamento(e.target.value);
    };

    const handleFinalizarVenda = () => {
        // Calcular troco se o método de pagamento for dinheiro
        if (metodoPagamento === "dinheiro") {
            // Calcular o total da compra
            const totalCompra = carrinho.reduce((total, produto) => total + produto.preco * produto.quantidade, 0);
            // Troco = valor pago - total da compra
            const valorPago = Number(document.getElementById("valorPago").value);
            setTroco(valorPago - totalCompra);
        }
        // Implementar lógica para finalizar a venda
        // Reiniciar os estados relevantes
        setCarrinho([]);
        setVendaIniciada(false);
        setMetodoPagamento("");
        setTroco(0);
        setHoraFimVenda(new Date().toLocaleTimeString());
        // Incrementar o número de vendas feitas
        setVendasFeitas(vendasFeitas + 1);
    };

    const handleCancelarVenda = () => {
        // Limpar carrinho e resetar estados relevantes
        setCarrinho([]);
        setVendaIniciada(false);
        setMetodoPagamento("");
        setTroco(0);
        setHoraInicioVenda("");
        setHoraFimVenda("");
    };

    const calcularCaixaAtual = () => {
        // Calcular o total das vendas feitas desde que o caixa foi aberto
        const totalVendas = carrinho.reduce((total, produto) => total + produto.preco * produto.quantidade, 0);
        // Calcular o caixa atual somando o valor inicial com o total das vendas
        const caixaAtual = valorInicial + totalVendas;
        console.log("Caixa Atual: ", caixaAtual);
    };

    return (
        <section className="container-Caixa">
            <div className="CaixaPainel">
                <div className="info-user">
                    <h3>Caixa: <span>Fabio liuz</span></h3>
                    <h4>Inicio Caixa R$: <span>{valorInicial}</span></h4>
                    <h4>Caixa Atual R$: <span>{valorInicial + (carrinho.length > 0 ? carrinho.reduce((total, produto) => total + produto.preco * produto.quantidade, 0) : 0)}</span></h4>
                </div>
                <div className="time-user">
                    <p>Inicio :<span>14:30</span></p>
                    <p>Encerramento :<span>14:30</span></p>
                </div>
                <div className="time-user">
                    <p>Caixa Aberto<span className="circle"></span></p>
                    <p>Vendas Feitas: <span>{vendasFeitas}</span></p>
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
                                {carrinho.map((produto, index) => (
                                    <tr key={index}>
                                        <td>{produto.codigo}</td>
                                        <td>{produto.nome}</td>
                                        <td>{produto.quantidade}</td>
                                        <td>{produto.preco}</td>
                                        <td>{produto.categoria}</td>
                                        <td>{produto.subcategoria}</td>
                                        <td>
                                            <button onClick={() => removerDoCarrinho(index)}>Remover</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="resultadoCompra">
                    <div className="search-bar">
                        <input type="text" placeholder="Ex:maço de cigarro" />
                        <button type="Submit">
                            <figure>
                                <img src={search} alt="icone do search" />
                            </figure>
                        </button>
                    </div>
                    <div className="info-compras">
                        <h4>Total de Itens: <span>{carrinho.length}</span></h4>
                        <h4>Total da Compra: <span>{carrinho.reduce((total, produto) => total + produto.preco * produto.quantidade, 0)}</span></h4>
                        <h4>Valor do Pagamento: 
                            <span>
                                <input id="valorPago" type="number" placeholder="Valor a Receber" />
                            </span>
                        </h4>
                        {metodoPagamento === "dinheiro" && (
                            <h4>Troco: <span>{troco}</span></h4>
                        )}
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
                                <p>Débito</p>
                                <figure>
                                    <img src={Credito} alt="cartão de débito icone" />
                                </figure>
                            </li>
                            <li>
                                <input type="radio" />
                                <p>Crédito</p>
                                <figure>
                                    <img src={Credito} alt="icone de cartao de credito" />
                                </figure>
                            </li>
                        </ul>     
                    </div>
                    <div className="time-user">
                        <p>Hora Início Venda: <span>{horaInicioVenda}</span></p>
                        <p>Hora Finalização Venda: <span>{horaFimVenda}</span></p>
                    </div>
                    <div className="action-buttons">
                        <button onClick={handleFinalizarVenda}>Finalizar Venda</button>
                        <button onClick={handleCancelarVenda}>Cancelar Venda</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Caixa;
