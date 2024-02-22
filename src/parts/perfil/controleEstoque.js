import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import "./controleestoque.css";
import search from "../img/big-search-len.png";
import deletar from "../img//botao-apagar.png";
import troca from "../img/troca.png";
import AddProduto from "./addProduto";

const ControleEstoque = () => {
    const [exibirConfirmarExclusao, setExibirConfirmarExclusao] = useState(false);
    const [produtoASerExcluido, setProdutoASerExcluido] = useState(null);
    const [exibirAddProduto, setExibirAddProduto] = useState(false);
    const [produtos, setProdutos] = useState([]);
    
    useEffect(() => {
        const carregarProdutos = async () => {
            try {
                const response = await fetch('https://localhost:5000/perfil/produtos');
                if (response.ok) {
                    const data = await response.json();
                    setProdutos(data);
                } else {
                    console.error('Erro ao buscar os produtos:', response.statusText);
                }
            } catch (error) {
                console.error('Erro ao buscar os produtos:', error);
            }
        };

        carregarProdutos();
    }, []);

    const adicionarProduto = async (produto) => {
        try {
            const response = await fetch('https://localhost:5000/perfil/adicionarProduto', { 
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(produto),
            });
            if (response.ok) {
                const novoProduto = await response.json();
                setProdutos([...produtos, novoProduto]);
                setExibirAddProduto(false);
            } else {
                console.error('Erro ao adicionar produto:', response.statusText);
            }
        } catch (error) {
            console.error('Erro ao adicionar produto:', error);
        }
    };

    const editarProduto = (produto) => {
        setExibirAddProduto(produto);
    };

    const confirmarExclusao = async () => {
        try {
            const response = await fetch(`https://localhost:5000/perfil/excluirProduto/${produtoASerExcluido.id}`, {
                method: 'DELETE'
            });
            if (response.ok) {
                setProdutos(produtos.filter(item => item.id !== produtoASerExcluido.id));
                setExibirConfirmarExclusao(false);
                setProdutoASerExcluido(null);
            } else {
                console.error('Erro ao excluir produto:', response.statusText);
            }
        } catch (error) {
            console.error('Erro ao excluir produto:', error);
        }
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
                                        <p>{produto.nome}</p>
                                        <span>{produto.categoria}</span>
                                        <span>{produto.tipo}</span>
                                    </li>
                                    <li>
                                        <p>Quantia em Estoque</p>
                                        <span>{produto.quantidade}</span>
                                    </li>
                                    <li>
                                        <p>Vendidos no Hoje</p>
                                        <span>0</span>
                                    </li>
                                    <li>
                                        <p>Vendidos na Semana</p>
                                        <span>0</span>
                                    </li>
                                    <li>
                                        <p>Vendidos no Ultimo Mês</p>
                                        <span>0</span>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            {exibirAddProduto && <AddProduto adicionarProduto={adicionarProduto} />}
            {exibirConfirmarExclusao && <ConfirmarExclusaoModal onClose={() => setExibirConfirmarExclusao(false)} />}
        </motion.section>
    )
}

export default ControleEstoque;
