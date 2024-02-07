import "./controleestoque.css";
import search from "../img/big-search-len.png";
import filter from "../img/filtro.png";
import troca from "../img/troca.png";
import deletar from "../img/botao-apagar.png";
import upload from "../img/upload-na-nuvem.png";
import imgExemplo from "../img/—Pngtree—beer bottle brown drink beer_6223437.png";
import React, { useState } from "react";

const ControleEstoque = () => {
    const [ExibiAddProduto,SetExibiAdd] = useState(false);

    function AddProduto() {

        return (
            <div className="container-addProduto">
                <form>
                    <div className="container-form">
                        <div className="img-produtoAdd">
                            <figure>
                                <img src={upload} alt="icone para upar a imagem do produto que vai ser exibida nos cards de produtos" />
                            </figure>
                        </div>
                        <div className="info-AddProduto">
                            <div className="input-container">
                                <label>Nome Produto</label>
                                <input type="text" placeholder="Brahman" />
                            </div>
                            <div className="input-container">
                                <label>Categoria</label>
                                <input type="text" placeholder="Ex: Bebida" />
                            </div>
                            <div className="input-container">
                                <label>SubCategoria</label>
                                <input type="text" placeholder="Ex: bebida não alcoolica" />
                            </div>
                            <div className="input-container">
                                <label>Tipo</label>
                                <input type="text" placeholder="Ex: Garrafa" />
                            </div>
                            <div className="input-container">
                                <label>Unidade do Produto</label>
                                <input type="number" placeholder="Ex: 15" />
                            </div>
                            <div className="input-container">
                                <label>Ml ou Grama do Produto</label>
                                <input type="number" placeholder="Ex: 15" />
                            </div>
                            <div className="input-container">
                                <label>Preço do Produto</label>
                                <input type="number" placeholder="Ex: 15,49" />
                            </div>
                        </div>
                    </div>
                    <div className="button-action">
                        <button>Adicionar Produto ao Estoque</button>
                        <button>Fechar</button>
                    </div>
                </form>
            </div>
        )
    }

    return (
        <section className="container-controle-estoque">
            <div className="Filter-container">
                <form>
                    <input type="text" placeholder="Branhma" />
                    <button>
                        <figure>
                        <img src={search} alt="icone de procura" />
                        </figure>
                    </button>
                    <button>
                        <figure>
                        <img src={filter} alt="icone de filtro" />
                        </figure>
                    </button>
                </form>
                <div className="addProduto">
                    <button onClick={() => SetExibiAdd(true)}>Adicionar Produto ao Estoque</button>
                </div>
            </div>
            <div className="container-estoque-controle">
                <ul className="lista-estoque">
                <li className="card-estoque">
                        <div className="img-produto-estoque">
                            <figure>
                                <img src={imgExemplo} alt="" />
                            </figure>
                            <div className="action-buttons">
                                <button>
                                    <figure>
                                        <img src={troca} alt="botao de alterar imagem" />
                                    </figure>
                                </button>
                                <button >
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
                                    Cerveja Brahman   
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Quantia em Estoque 
                                    </p><span></span>
                                </li>
                                <li>
                                    <p>
                                    Vendidos no Hoje 
                                    </p><span></span>
                                </li>
                                <li>
                                    <p>
                                    Vendidos na Semana
                                    </p> <span></span>
                                </li>
                                <li>
                                    <p>
                                    Vendidos no Ultimo Mês
                                    </p> <span></span>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="card-estoque">
                        <div className="img-produto-estoque">
                            <figure>
                                <img src={imgExemplo} alt="" />
                            </figure>
                            <div className="action-buttons">
                                <button>
                                    <figure>
                                        <img src={troca} alt="botao de alterar imagem" />
                                    </figure>
                                </button>
                                <button >
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
                                    Cerveja Brahman   
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Quantia em Estoque 
                                    </p><span></span>
                                </li>
                                <li>
                                    <p>
                                    Vendidos no Hoje 
                                    </p><span></span>
                                </li>
                                <li>
                                    <p>
                                    Vendidos na Semana
                                    </p> <span></span>
                                </li>
                                <li>
                                    <p>
                                    Vendidos no Ultimo Mês
                                    </p> <span></span>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="card-estoque">
                        <div className="img-produto-estoque">
                            <figure>
                                <img src={imgExemplo} alt="" />
                            </figure>
                            <div className="action-buttons">
                                <button>
                                    <figure>
                                        <img src={troca} alt="botao de alterar imagem" />
                                    </figure>
                                </button>
                                <button >
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
                                    Cerveja Brahman   
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Quantia em Estoque 
                                    </p><span></span>
                                </li>
                                <li>
                                    <p>
                                    Vendidos no Hoje 
                                    </p><span></span>
                                </li>
                                <li>
                                    <p>
                                    Vendidos na Semana
                                    </p> <span></span>
                                </li>
                                <li>
                                    <p>
                                    Vendidos no Ultimo Mês
                                    </p> <span></span>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="card-estoque">
                        <div className="img-produto-estoque">
                            <figure>
                                <img src={imgExemplo} alt="" />
                            </figure>
                            <div className="action-buttons">
                                <button>
                                    <figure>
                                        <img src={troca} alt="botao de alterar imagem" />
                                    </figure>
                                </button>
                                <button >
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
                                    Cerveja Brahman   
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Quantia em Estoque 
                                    </p><span></span>
                                </li>
                                <li>
                                    <p>
                                    Vendidos no Hoje 
                                    </p><span></span>
                                </li>
                                <li>
                                    <p>
                                    Vendidos na Semana
                                    </p> <span></span>
                                </li>
                                <li>
                                    <p>
                                    Vendidos no Ultimo Mês
                                    </p> <span></span>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="card-estoque">
                        <div className="img-produto-estoque">
                            <figure>
                                <img src={imgExemplo} alt="" />
                            </figure>
                            <div className="action-buttons">
                                <button>
                                    <figure>
                                        <img src={troca} alt="botao de alterar imagem" />
                                    </figure>
                                </button>
                                <button >
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
                                    Cerveja Brahman   
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Quantia em Estoque 
                                    </p><span></span>
                                </li>
                                <li>
                                    <p>
                                    Vendidos no Hoje 
                                    </p><span></span>
                                </li>
                                <li>
                                    <p>
                                    Vendidos na Semana
                                    </p> <span></span>
                                </li>
                                <li>
                                    <p>
                                    Vendidos no Ultimo Mês
                                    </p> <span></span>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="card-estoque">
                        <div className="img-produto-estoque">
                            <figure>
                                <img src={imgExemplo} alt="" />
                            </figure>
                            <div className="action-buttons">
                                <button>
                                    <figure>
                                        <img src={troca} alt="botao de alterar imagem" />
                                    </figure>
                                </button>
                                <button >
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
                                    Cerveja Brahman   
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Quantia em Estoque 
                                    </p><span></span>
                                </li>
                                <li>
                                    <p>
                                    Vendidos no Hoje 
                                    </p><span></span>
                                </li>
                                <li>
                                    <p>
                                    Vendidos na Semana
                                    </p> <span></span>
                                </li>
                                <li>
                                    <p>
                                    Vendidos no Ultimo Mês
                                    </p> <span></span>
                                </li>
                            </ul>
                        </div>
                    </li><li className="card-estoque">
                        <div className="img-produto-estoque">
                            <figure>
                                <img src={imgExemplo} alt="" />
                            </figure>
                            <div className="action-buttons">
                                <button>
                                    <figure>
                                        <img src={troca} alt="botao de alterar imagem" />
                                    </figure>
                                </button>
                                <button >
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
                                    Cerveja Brahman   
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Quantia em Estoque 
                                    </p><span></span>
                                </li>
                                <li>
                                    <p>
                                    Vendidos no Hoje 
                                    </p><span></span>
                                </li>
                                <li>
                                    <p>
                                    Vendidos na Semana
                                    </p> <span></span>
                                </li>
                                <li>
                                    <p>
                                    Vendidos no Ultimo Mês
                                    </p> <span></span>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="card-estoque">
                        <div className="img-produto-estoque">
                            <figure>
                                <img src={imgExemplo} alt="" />
                            </figure>
                            <div className="action-buttons">
                                <button>
                                    <figure>
                                        <img src={troca} alt="botao de alterar imagem" />
                                    </figure>
                                </button>
                                <button >
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
                                    Cerveja Brahman   
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Quantia em Estoque 
                                    </p><span></span>
                                </li>
                                <li>
                                    <p>
                                    Vendidos no Hoje 
                                    </p><span></span>
                                </li>
                                <li>
                                    <p>
                                    Vendidos na Semana
                                    </p> <span></span>
                                </li>
                                <li>
                                    <p>
                                    Vendidos no Ultimo Mês
                                    </p> <span></span>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="card-estoque">
                        <div className="img-produto-estoque">
                            <figure>
                                <img src={imgExemplo} alt="" />
                            </figure>
                            <div className="action-buttons">
                                <button>
                                    <figure>
                                        <img src={troca} alt="botao de alterar imagem" />
                                    </figure>
                                </button>
                                <button >
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
                                    Cerveja Brahman   
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Quantia em Estoque 
                                    </p><span></span>
                                </li>
                                <li>
                                    <p>
                                    Vendidos no Hoje 
                                    </p><span></span>
                                </li>
                                <li>
                                    <p>
                                    Vendidos na Semana
                                    </p> <span></span>
                                </li>
                                <li>
                                    <p>
                                    Vendidos no Ultimo Mês
                                    </p> <span></span>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="card-estoque">
                        <div className="img-produto-estoque">
                            <figure>
                                <img src={imgExemplo} alt="" />
                            </figure>
                            <div className="action-buttons">
                                <button>
                                    <figure>
                                        <img src={troca} alt="botao de alterar imagem" />
                                    </figure>
                                </button>
                                <button >
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
                                    Cerveja Brahman   
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Quantia em Estoque 
                                    </p><span></span>
                                </li>
                                <li>
                                    <p>
                                    Vendidos no Hoje 
                                    </p><span></span>
                                </li>
                                <li>
                                    <p>
                                    Vendidos na Semana
                                    </p> <span></span>
                                </li>
                                <li>
                                    <p>
                                    Vendidos no Ultimo Mês
                                    </p> <span></span>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="card-estoque">
                        <div className="img-produto-estoque">
                            <figure>
                                <img src={imgExemplo} alt="" />
                            </figure>
                            <div className="action-buttons">
                                <button>
                                    <figure>
                                        <img src={troca} alt="botao de alterar imagem" />
                                    </figure>
                                </button>
                                <button >
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
                                    Cerveja Brahman   
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Quantia em Estoque 
                                    </p><span></span>
                                </li>
                                <li>
                                    <p>
                                    Vendidos no Hoje 
                                    </p><span></span>
                                </li>
                                <li>
                                    <p>
                                    Vendidos na Semana
                                    </p> <span></span>
                                </li>
                                <li>
                                    <p>
                                    Vendidos no Ultimo Mês
                                    </p> <span></span>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="card-estoque">
                        <div className="img-produto-estoque">
                            <figure>
                                <img src={imgExemplo} alt="" />
                            </figure>
                            <div className="action-buttons">
                                <button>
                                    <figure>
                                        <img src={troca} alt="botao de alterar imagem" />
                                    </figure>
                                </button>
                                <button >
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
                                    Cerveja Brahman   
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Quantia em Estoque 
                                    </p><span></span>
                                </li>
                                <li>
                                    <p>
                                    Vendidos no Hoje 
                                    </p><span></span>
                                </li>
                                <li>
                                    <p>
                                    Vendidos na Semana
                                    </p> <span></span>
                                </li>
                                <li>
                                    <p>
                                    Vendidos no Ultimo Mês
                                    </p> <span></span>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="card-estoque">
                        <div className="img-produto-estoque">
                            <figure>
                                <img src={imgExemplo} alt="" />
                            </figure>
                            <div className="action-buttons">
                                <button>
                                    <figure>
                                        <img src={troca} alt="botao de alterar imagem" />
                                    </figure>
                                </button>
                                <button >
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
                                    Cerveja Brahman   
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Quantia em Estoque 
                                    </p><span></span>
                                </li>
                                <li>
                                    <p>
                                    Vendidos no Hoje 
                                    </p><span></span>
                                </li>
                                <li>
                                    <p>
                                    Vendidos na Semana
                                    </p> <span></span>
                                </li>
                                <li>
                                    <p>
                                    Vendidos no Ultimo Mês
                                    </p> <span></span>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="card-estoque">
                        <div className="img-produto-estoque">
                            <figure>
                                <img src={imgExemplo} alt="" />
                            </figure>
                            <div className="action-buttons">
                                <button>
                                    <figure>
                                        <img src={troca} alt="botao de alterar imagem" />
                                    </figure>
                                </button>
                                <button >
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
                                    Cerveja Brahman   
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Quantia em Estoque 
                                    </p><span></span>
                                </li>
                                <li>
                                    <p>
                                    Vendidos no Hoje 
                                    </p><span></span>
                                </li>
                                <li>
                                    <p>
                                    Vendidos na Semana
                                    </p> <span></span>
                                </li>
                                <li>
                                    <p>
                                    Vendidos no Ultimo Mês
                                    </p> <span></span>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="card-estoque">
                        <div className="img-produto-estoque">
                            <figure>
                                <img src={imgExemplo} alt="" />
                            </figure>
                            <div className="action-buttons">
                                <button>
                                    <figure>
                                        <img src={troca} alt="botao de alterar imagem" />
                                    </figure>
                                </button>
                                <button >
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
                                    Cerveja Brahman   
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Quantia em Estoque 
                                    </p><span></span>
                                </li>
                                <li>
                                    <p>
                                    Vendidos no Hoje 
                                    </p><span></span>
                                </li>
                                <li>
                                    <p>
                                    Vendidos na Semana
                                    </p> <span></span>
                                </li>
                                <li>
                                    <p>
                                    Vendidos no Ultimo Mês
                                    </p> <span></span>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
                <div className='container-filter'>

                </div>
            </div>
            {ExibiAddProduto && <AddProduto />}
        </section>
    )
}

export default ControleEstoque;