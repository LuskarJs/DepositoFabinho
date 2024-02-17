import React, { useState, useEffect } from "react";
import "./promocontrol.css";
import interrogacao from "../img/sinal-de-interrogacao.png";
import upload from "../img/upload-na-nuvem.png";
import { motion } from 'framer-motion';
import Cookies from 'js-cookie';

const ControlPromo = () => {
    const [modalAberta, setModalAberta] = useState(false);
    const [promocoes, setPromocoes] = useState([]);
    const [tituloSelecionado, setTituloSelecionado] = useState(""); 
    const [titulo, setTitulo] = useState("");
    const [quantidadeProdutos, setQuantidadeProdutos] = useState(1);
    const [dataInicio, setDataInicio] = useState("");
    const [dataTermino, setDataTermino] = useState("");
    const [regra, setRegra] = useState("");
    const [imagemCarregada, setImagemCarregada] = useState(null); 
    const [produtosPromocao, setProdutosPromocao] = useState([]); // Estado para armazenar produtos da promoção selecionada
    
    useEffect(() => {
        const promocoesSalvas = Cookies.get("promocoes");
        if (promocoesSalvas) {
            setPromocoes(JSON.parse(promocoesSalvas));
        }
    }, []);

    const salvarPromocoes = () => {
        Cookies.set("promocoes", JSON.stringify(promocoes));
    };

    const handleAbrirModal = () => {
        setModalAberta(true);
    };

    const handleAdicionarPromocao = () => {
        const novaPromocao = {
            titulo,
            duracao: {
                dataInicio,
                dataTermino
            },
            regra,
            produtos: [] // Inicializa produtos como uma array vazia
        };
    
        for (let i = 0; i < quantidadeProdutos; i++) {
            novaPromocao.produtos.push({
                imagem: imagemCarregada, 
                nome: "", 
                precoOriginal: "", 
                precoPromocional: ""
            });
        }
    
        setPromocoes([...promocoes, novaPromocao]);
    
        setModalAberta(false);
        salvarPromocoes();
    };

    const handleProdutoChange = (index, key, value) => {
        const novosProdutos = [...produtosPromocao];
        novosProdutos[index][key] = value;
        setProdutosPromocao(novosProdutos);
    };

    // Função para filtrar os produtos da promoção com base no título selecionado
    useEffect(() => {
        if (tituloSelecionado) {
            const promocaoFiltrada = promocoes.find(promocao => promocao.titulo === tituloSelecionado);
            if (promocaoFiltrada) {
                setProdutosPromocao(promocaoFiltrada.produtos);
            }
        } else {
            setProdutosPromocao([]); // Limpa os produtos da promoção se nenhum título estiver selecionado
        }
    }, [tituloSelecionado, promocoes]);

    return (
        <motion.section
            transition={{
                duration: .35,
            }}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0 }}
            className='Control-container'
        >
            <div className="container-Promo">
                <div className='button-action'>
                    <button onClick={handleAbrirModal}>Promoção</button>
                    <label htmlFor="input-imagem">
                        <p>Promoção Img </p>
                        <span>
                            <figure>
                                <img src={upload} alt="icone de upload" />
                            </figure>
                        </span>
                    </label>
                    <input id="input-imagem" type="file" accept="image/*" onChange={(e) => setImagemCarregada(e.target.files[0])} style={{ display: 'none' }} />
                </div>
                <div className='quest'>
                    <figure>
                        <img src={interrogacao} alt="icone de interrogacao" />
                    </figure>
                </div>
            </div>
            <div className="container-promo">
                <ul className="filter-promo">
                    {promocoes.map((promocao, index) => (
                        <li key={index} onClick={() => setTituloSelecionado(promocao.titulo)}>{promocao.titulo}</li>
                    ))}
                </ul>
                {tituloSelecionado && produtosPromocao.length > 0 && (
                    <ul className="listPromos">
                        {produtosPromocao.map((produto, index) => (
                            <li key={index} className="card-promo">
                                <div className="img-produto">
                                    <figure>
                                        <img src={produto.imagem} alt="Produto" />
                                    </figure>
                                </div>
                                <div className="info-produto">
                                    <div className="info-put">
                                        <label>Nome do Produto</label>
                                        <input type="text" value={produto.nome} onChange={(e) => handleProdutoChange(index, 'nome', e.target.value)} />
                                    </div>
                                    <div className="info-put">
                                        <label>Preço Original</label>
                                        <input type="text" value={produto.precoOriginal} onChange={(e) => handleProdutoChange(index, 'precoOriginal', e.target.value)} />
                                    </div>
                                    <div className="info-put">
                                        <label>Preço de Promoção</label>
                                        <input type="text" value={produto.precoPromocional} onChange={(e) => handleProdutoChange(index, 'precoPromocional', e.target.value)} />
                                    </div>
                                </div>
                                <div className="action-buttons">
                                    <button>Salvar</button>
                                    <button>Remover</button>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            {modalAberta && (
                <div className="modal-promo">
                    <div className="modal-content">
                        <span className="close" onClick={() => setModalAberta(false)}>&times;</span>
                        <h2>Definir Promoção</h2>
                        <div className="form-group">
                            <label>Título da Promoção:</label>
                            <input type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label>Quantidade de Produtos na Promoção:</label>
                            <input type="number" value={quantidadeProdutos} onChange={(e) => setQuantidadeProdutos(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label>Data de Início:</label>
                            <input type="date" value={dataInicio} onChange={(e) => setDataInicio(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label>Data de Término:</label>
                            <input type="date" value={dataTermino} onChange={(e) => setDataTermino(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label>Regra da Promoção:</label>
                            <textarea value={regra} onChange={(e) => setRegra(e.target.value)}></textarea>
                        </div>
                        <button onClick={handleAdicionarPromocao}>Salvar Promoção</button>
                    </div>
                </div>
            )}
        </motion.section>
    )
}

export default ControlPromo;
