import "./catalogo.css"
import Cookies from 'js-cookie';
import coca from "../img/coca125.png";
import { useState, useEffect } from "react";
import carrinho from '../img/carrinho.png';
import ModalCompra from './modalCompra';
import search from '../img/big-search-len.png';

const Catalogo = ({ contadorItens, setContadorItens }) => {

    const AllProdutos = [
        {
          nome: "Coca Cola",
          preco: 3.50,
          ml: 125,
          tipo: "lata",
          categoria: "bebida",
          subcategoria: "bebida não alcoólica",
          imagem: coca
        },
        {
          nome: "Coca Cola",
          preco: 5.99,
          ml: 250,
          tipo: "lata",
          categoria: "bebida",
          subcategoria: "bebida não alcoólica",
          imagem: coca
        },
        {
          nome: "Coca Cola",
          preco: 8.99,
          ml: 500,
          tipo: "lata",
          categoria: "bebida",
          subcategoria: "bebida não alcoólica",
          imagem: coca
        },
        {
          nome: "Coca Cola",
          preco: 10.99,
          ml: 1000,
          tipo: "garrafa",
          categoria: "bebida",
          subcategoria: "bebida não alcoólica",
          imagem: coca
        },
        {
          nome: "Coca Cola",
          preco: 15.99,
          ml: 1500,
          tipo: "garrafa",
          categoria: "bebida",
          subcategoria: "bebida não alcoólica",
          imagem: coca
        },
        {
          nome: "Coca Cola",
          preco: 20.99,
          ml: 2000,
          tipo: "garrafa",
          categoria: "bebida",
          subcategoria: "bebida não alcoólica",
          imagem: coca
        },
        {
          nome: "Cigarros",
          preco: 8.99,
          tipo: "caixa",
          categoria: "tabaco",
          subcategoria: "cigarro",
          imagem: coca

        },
        {
          nome: "Alimento",
          preco: 4.99,
          categoria: "alimento",
          subcategoria: "não perecível",
          imagem: coca

        },
        {
          nome: "Arroz",
          preco: 5.99,
          tipo: "pacote",
          categoria: "alimento",
          subcategoria: "não perecível",
          imagem: coca

        },
        {
          nome: "Carvão",
          preco: 10.99,
          tipo: "saco",
          categoria: "churrasco",
          subcategoria: "carvão",
          imagem: coca

        },
        {
          nome: "Bala Halls",
          preco: 1.50,
          tipo: "pacote",
          categoria: "doce",
          subcategoria: "balas",
          imagem: coca

        },
        {
          nome: "Chuveiro",
          preco: 18.99,
          tipo: "unidade",
          categoria: "banho",
          subcategoria: "acessórios",
          imagem: coca

        },
        {
          nome: "Pilha",
          preco: 3.99,
          tipo: "pacote",
          categoria: "eletrônicos",
          subcategoria: "pilhas",
          imagem: coca
        }
      ];
      const [carrinhoItens, setCarrinhoItens] = useState([]);
      const [modalAberto, setModalAberto] = useState(false);
      const [searchTerm, setSearchTerm] = useState('');
      const [subcategoriasVisiveis, setSubcategoriasVisiveis] = useState([]);
      const [produtosFiltrados, setProdutosFiltrados] = useState(AllProdutos);
      const categoriasUnicas = [...new Set(AllProdutos.map(produto => produto.categoria))];
    
      useEffect(() => {
        const carrinhoSalvo = Cookies.get("carrinho");
    
        if (carrinhoSalvo) {
          const carrinhoAtualizado = JSON.parse(carrinhoSalvo);
          setCarrinhoItens(carrinhoAtualizado);
          setContadorItens(carrinhoAtualizado.length);
        }
      }, []);
    
      const handleAdicionarAoCarrinho = (produto) => {
        const carrinhoAtualizado = [...carrinhoItens, produto];
        setCarrinhoItens(carrinhoAtualizado);
        setContadorItens(carrinhoAtualizado.length);
        Cookies.set("carrinho", JSON.stringify(carrinhoAtualizado));
      };
    
      const handleComprar = () => {
        setModalAberto(true);
      };

      const handleCategoriaClick = (categoria) => {
        setSubcategoriasVisiveis(prevState => ({
            ...prevState,
            [categoria]: !prevState[categoria]
        }));
    };
  
    const handleSearch = () => {
      const filteredProducts = AllProdutos.filter(produto => produto.nome.toLowerCase().includes(searchTerm.toLowerCase()));
      setProdutosFiltrados(filteredProducts);
  };

  const handleSubcategoriaClick = (subcategoria) => {
    const produtosFiltrados = AllProdutos.filter(produto => produto.subcategoria === subcategoria);
    setProdutosFiltrados(produtosFiltrados);
};

    return (
        <section className="catalogo-container">
             <div className="filter-container">
                <ul>
                {categoriasUnicas.map((categoria, index) => (
                        <li key={index} onClick={() => handleCategoriaClick(categoria)}>
                            {categoria}
                            <ul style={{ display: subcategoriasVisiveis[categoria] ? 'block' : 'none' }}>
                                {Array.from(new Set(AllProdutos.filter(produto => produto.categoria === categoria).map(produto => produto.subcategoria))).map((subcategoria, subIndex) => (
                                    <li key={subIndex} onClick={() => handleSubcategoriaClick(subcategoria)}>
                                        {subcategoria}
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <div className="searchBar">
                    <input
                        type="text"
                        placeholder="Pesquise aqui"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <button onClick={handleSearch}>
                      <figure>
                        <img src={search} alt="icone de lupa para pesquisa" />
                      </figure>
                    </button>
                </div>
                <div className="lista-catalogo">
                    <ul>
                        {produtosFiltrados.map((produto, index) => (
                            <li key={index} className="Card-catalogo">
                                <div className="card-img">
                                    <figure>
                                        <img src={coca} alt="foto da coca" />
                                    </figure>
                                </div>
                                <div className="info-card">
                                    <h3>{produto.nome} 
                                        <span>
                                            {produto.ml}
                                        </span>
                                    </h3>
                                    <h4>{produto.tipo}</h4>
                                </div>
                                <div className="price-card">
                                    <h5>R$: {produto.preco}</h5>
                                </div>
                                <div className="action-buttons">
                                <button onClick={() => handleAdicionarAoCarrinho(produto)}>
                                      <figure>
                                          <img src={carrinho} alt="icone do carrinho" />
                                      </figure>
                                    </button>
                                    <button onClick={() => handleComprar(produto)}>Comprar</button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>                    
            </div>
            {modalAberto && (
            <ModalCompra
              isOpen={modalAberto}
              onClose={() => setModalAberto(false)}
              carrinhoItens={carrinhoItens}
            />
          )}
        </section>
    )
}

export default Catalogo;