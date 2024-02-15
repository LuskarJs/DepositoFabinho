import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { getCookie, deleteCookie } from "./cookie/cookiHandler";
import "./controleestoque.css";
import search from "../img/big-search-len.png";
import deletar from "../img//botao-apagar.png";
import troca from "../img/troca.png";
import AddProduto from "./addProduto";
import imgExemplo from "../img/—Pngtree—beer bottle brown drink beer_6223437.png";

const ControleEstoque = () => {
    const [exibirConfirmarExclusao, setExibirConfirmarExclusao] = useState(false);
    const [produtoASerExcluido, setProdutoASerExcluido] = useState(null);
    const [exibirAddProduto, setExibirAddProduto] = useState(false);
    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        const carregarProdutos = () => {
            const produtosSalvos = [];
            const decodedCookie = decodeURIComponent(document.cookie);
            const cookieArray = decodedCookie.split(';');
            let idCount = 0; // Contador para atribuir IDs únicos aos produtos
            cookieArray.forEach(cookie => {
                const [name, value] = cookie.split('=');
                if (name.trim().startsWith('ProdutosAdicionados/')) {
                    const produto = JSON.parse(value);
                    produtosSalvos.push({ id: idCount++, ...produto }); // Adicione o ID ao objeto do produto
                }
            });
            setProdutos(produtosSalvos);
        };
    
        carregarProdutos();
    }, []);
    

    const editarProduto = (produto) => {
        setExibirAddProduto(produto);
    };

    const confirmarExclusao = () => {
        const novosProdutos = produtos.filter(item => item.id !== produtoASerExcluido.id);
        setProdutos(novosProdutos);
        deleteCookie(`produto_${produtoASerExcluido.id}`);
        setExibirConfirmarExclusao(false);
        setProdutoASerExcluido(null);
    };

    const abrirModalExclusao = (produto) => {
        setExibirConfirmarExclusao(true);
        setProdutoASerExcluido(produto);
    };

    function ConfirmarExclusaoModal({ onClose }) {
        return (
            <div className="confirmar-exclusao-modal">
                <p>Deseja realmente excluir este produto?</p>
                <div className="botoes-opcoes">
                    <button onClick={confirmarExclusao}>Sim, excluir</button>
                    <button onClick={onClose}>Cancelar</button>
                </div>
            </div>
        );
    }

    


    return (
        <motion.section
        transition={{
            duration: .35,
        }}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0 }}
        className="container-controle-estoque">
            <div className="Filter-container">
                <form>
                    <input type="text" placeholder="Branhma" />
                    <button>
                        <figure>
                        <img src={search} alt="icone de procura" />
                        </figure>
                    </button>
                </form>
                <div className="addProduto">
                    <button onClick={() => setExibirAddProduto(true)}>Adicionar Produto</button>
                </div>
            </div>
            <div className="container-estoque-controle">
                <ul className="lista-estoque">
                {produtos.map(produto => (
                        <li key={produto.id} className="card-estoque">
                            <div className="img-produto-estoque">
                                <figure>
                                    <img src={produto.imagem} alt={produto.nome} />
                                </figure>
                                <div className="action-buttons">
                                    <button onClick={() => editarProduto(produto)}>
                                        <figure>
                                            <img src={troca} alt="botao de alterar imagem" />
                                        </figure>
                                    </button>
                                    <button onClick={() => abrirModalExclusao(produto)}>
                                        <figure>
                                            <img src={deletar} alt="botao para deletar produto do Estoque" />
                                        </figure>
                                    </button>
                                </div>
                            </div>
                        <div className="info-produto-estoque">
                            <ul>
                                <li>
                                    <p>
                                    {produto.nomeProduto}  
                                    </p>
                                    <span> {produto.categoria}</span>
                                    <span> {produto.tipo}</span>
                                </li>
                                <li>
                                    <p>
                                        Quantia em Estoque 
                                    </p>
                                    <span>
                                        {produto.unidadeProduto}  
                                    </span>
                                </li>
                                <li>
                                    <p>
                                    Vendidos no Hoje 
                                    </p>
                                    <span>0</span>
                                </li>
                                <li>
                                    <p>
                                    Vendidos na Semana
                                    </p> <span>0</span>
                                </li>
                                <li>
                                    <p>
                                    Vendidos no Ultimo Mês
                                    </p> <span>0</span>
                                </li>
                            </ul>
                        </div>
                    </li>  
                    ))}
                </ul>
            </div>
            {exibirAddProduto && <AddProduto />}
            {exibirConfirmarExclusao && <ConfirmarExclusaoModal onClose={() => setExibirConfirmarExclusao(false)} />}
        </motion.section>
    )
}

export default ControleEstoque;