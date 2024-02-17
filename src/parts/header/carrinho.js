import { useState } from "react";
import "./carrinho.css";
import ModalCompra from "../catalogo/modalCompra";

const CarrinhoCompra = ({ carrinhoItens, handleRemoverProduto, handleAdicionarMais }) => {
    const totalItens = carrinhoItens.length;

    const valorTotal = carrinhoItens.reduce((total, item) => total + item.preco, 0).toFixed(2);
    const [modalCompraAberto, setModalCompraAberto] = useState(false);

    const handleAbrirModalCompra = () => {
        setModalCompraAberto(true);
    };

    return (
        <div className="CarrinhoProduto">
            <div className="carrinho-container">
                <div className="container-carrinho">
                    <div className="title-carrinho">
                        <h3>Lista de Compras</h3>
                    </div>
                    <div className="listaCarrinho">
                        <ul>
                            {carrinhoItens && carrinhoItens.map((item, index) => (
                                <li key={index}>
                                    <span>{item.nome}</span>
                                    <span>{item.ml} ml</span>
                                    <span>R$ {item.preco.toFixed(2)}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="total-info">
                    <p>Total de Itens: {totalItens}</p>
                    <p>Valor Total: R$ {valorTotal}</p>
                </div>
                <div className="button-group">
                    <button onClick={() => handleAbrirModalCompra}>Finalizar</button>
                    <button onClick={() => onclose}>Fechar</button>
                </div>
            </div>
            {modalCompraAberto && (
                <ModalCompra
                    isOpen={modalCompraAberto}
                    onClose={() => setModalCompraAberto(false)}
                    carrinhoItens={carrinhoItens}
                />
            )}
        </div>
    );
}

export default CarrinhoCompra;
