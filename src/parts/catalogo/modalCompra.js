import React, { useState, useEffect } from "react";
import "./modal.css";
import Cookies from 'js-cookie';

const ModalCompra = ({ isOpen, onClose, carrinhoItens }) => {
  const [carrinho, setCarrinho] = useState([]);
  const [carrinhoCount, setCarrinhoCount] = useState(0);
  const [formData, setFormData] = useState({
    nome: "",
    endereco: "",
    pontoReferencia: "",
    telefone: "",
    descricao: "",
  });


  useEffect(() => {
    const carrinhoSalvo = Cookies.get("carrinho");

    if (carrinhoSalvo) {
      const carrinhoAtualizado = JSON.parse(carrinhoSalvo);
      setCarrinho(carrinhoAtualizado);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onClose();
        
    Cookies.set("userData", JSON.stringify(formData), { expires: 30 }); 
  };

  useEffect(() => {
    setCarrinhoCount(carrinho.length);
  }, [carrinho]);

  
  const handleFinalizarCompra = () => {
    const userData = Cookies.get("userData");
    const carrinhoSalvo = Cookies.get("carrinho");

    if (userData && carrinhoSalvo) {
      const userDataObj = JSON.parse(userData);
      const carrinhoAtualizado = JSON.parse(carrinhoSalvo);

      const metodoPagamento = userDataObj.metodoPagamento;

      let mensagemWhatsApp = `Olá! Gostaria de fazer um pedido.\n`;
      if (userDataObj.nome) mensagemWhatsApp += `Nome: ${userDataObj.nome}\n`;
      if (userDataObj.endereco) mensagemWhatsApp += `Endereço: ${userDataObj.endereco}\n`;
      if (userDataObj.telefone) mensagemWhatsApp += `Telefone: ${userDataObj.telefone}\n`;
      if (userDataObj.descricao) mensagemWhatsApp += `Descrição: ${userDataObj.descricao}\n`;

      mensagemWhatsApp += `Método de Pagamento: ${metodoPagamento}\n`;

      mensagemWhatsApp += "\nProdutos no Pedido:\n";
      carrinhoAtualizado.forEach((produto, index) => {
        mensagemWhatsApp += `${index + 1}. ${produto.nome || ''} - ${produto.ml || ''}ml - R$ ${produto.preco || ''}\n`;
      });

      window.open(`https://api.whatsapp.com/send?phone=5521971447401&text=${encodeURIComponent(mensagemWhatsApp)}`);

      Cookies.remove("carrinho");
      window.location.reload();
    }
};


  const valorTotal = carrinho.reduce((total, item) => total + item.preco, 0).toFixed(2);

  return (
    isOpen && (
      <div className="modal-compra">
        <div className="modal-content">
          <span className="close" onClick={onClose}>
            &times;
          </span>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="nome">Nome:</label>
              <input
                type="text"
                id="nome"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="metodoPagamento">Método de Pagamento:</label>
              <select id="metodoPagamento" name="metodoPagamento" value={formData.metodoPagamento} onChange={handleChange} required>
                <option value="">Selecione o método de pagamento</option>
                <option value="Cartão de Crédito">Cartão de Crédito</option>
                <option value="Cartão de Débito">Cartão de Débito</option>
                <option value="Dinheiro">Dinheiro</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="endereco">Endereço:</label>
              <input
                type="text"
                id="endereco"
                name="endereco"
                value={formData.endereco}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="PontoReferencia">Ponto de Referencia:</label>
              <input
                type="text"
                id="pontoReferencia"
                name="pontoReferencia"
                value={formData.pontoReferencia}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="telefone">Telefone:</label>
              <input
                type="text"
                id="telefone"
                name="telefone"
                value={formData.telefone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="descricao">Descrição:</label>
              <textarea
                id="descricao"
                name="descricao"
                value={formData.descricao}
                onChange={handleChange}
                placeholder="Preencha troco para quanto deseja"
                required
              />
            </div>
            <h3>Produtos no Carrinho: </h3>
            <div className="carrinho-count">
              <span>Itens no carrinho: {carrinhoCount}</span>
              <span>Valor Total: {valorTotal}</span>
            </div>
            <ul>
              {carrinho.map((produto, index) => (
                <li key={index}>
                  <span>{produto.nome}</span>
                  <span>{produto.ml}</span>
                  <span>{produto.tipo}</span>
                  <span>{produto.preco}</span>
                </li>
              ))}
            </ul>
            <div className="button-group">
            <button type="submit" onClick={handleFinalizarCompra}>Finalizar Compra</button>
              <button onClick={onClose}>Fechar</button>
            </div>
          </form>
        </div>
      </div>
    )
  );
};

export default ModalCompra;
