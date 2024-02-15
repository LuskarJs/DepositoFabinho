import { motion } from "framer-motion";
import { setCookie } from "./cookie/cookiHandler"; 
import upload from "../img/upload-na-nuvem.png";
import React, { useState } from "react";

function AddProduto({ onClose }) {
    const [exibirAddProduto, setExibirAddProduto] = useState(false);
    const [produtosAdicionados, setProdutosAdicionados] = useState(0);

    const [formData, setFormData] = useState({
        nomeProduto: "",
        categoria: "",
        subCategoria: "",
        tipo: "",
        unidadeProduto: "",
        mlGramProduto: "",
        precoProduto: "",
        imagemProduto: "" // Adicionando campo para a imagem do produto
    });
    
    const handleInputChange = (e) => {
        e.stopPropagation(); 
    };    
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setFormData(prevState => ({
            ...prevState,
            imagemProduto: file
        }));
    };
    
    const adicionarProduto = () => {
        // Salvar os dados do produto como um objeto JSON
        const produto = JSON.stringify(formData);
        
        // Definir o produto como um cookie dentro da pasta "ProdutosAdicionados"
        setCookie(`ProdutosAdicionados/novoProduto_${produtosAdicionados}`, produto);

        // Incrementar o contador de produtos adicionados
        setProdutosAdicionados(produtosAdicionados + 1);

        // Fechar o modal após adicionar o produto se o número de produtos adicionados for pelo menos 5
        if (produtosAdicionados >= 4) {
            onClose();
        }

        // Limpar o formulário
        setFormData({
            nomeProduto: "",
            categoria: "",
            subCategoria: "",
            tipo: "",
            unidadeProduto: "",
            mlGramProduto: "",
            precoProduto: "",
            imagemProduto: ""
        });
    };

    return (
        <motion.div
        transition={{
            duration: .35,
        }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0 }}
        className="container-addProduto">
            <form>
                <div className="container-form">
                    <div className="img-produtoAdd">
                        <label htmlFor="imagemProduto">Imagem do Produto</label>
                        <input type="file" name="imagemProduto" id="imagemProduto" accept="image/*" onChange={handleImageChange} />
                    </div>
                    <div className="info-AddProduto">
                        <div className="input-container">
                            <label>Nome Produto</label>
                            <input type="text" name="nomeProduto" placeholder="Brahman" onChange={handleChange}  onClick={handleInputChange}/>
                        </div>
                        <div className="input-container">
                            <label>Categoria</label>
                            <input type="text" name="categoria" placeholder="Ex: Bebida" onChange={handleChange}  onClick={handleInputChange}/>
                        </div>
                        <div className="input-container">
                            <label>SubCategoria</label>
                            <input type="text" name="subCategoria" placeholder="Ex: bebida não alcoolica" onChange={handleChange}  onClick={handleInputChange}/>
                        </div>
                        <div className="input-container">
                            <label>Tipo</label>
                            <input type="text" name="tipo" placeholder="Ex: Garrafa" onChange={handleChange}  onClick={handleInputChange}/>
                        </div>
                        <div className="input-container">
                            <label>Unidade do Produto</label>
                            <input type="number" name="unidadeProduto" placeholder="Ex: 15" onChange={handleChange}  onClick={handleInputChange}/>
                        </div>
                        <div className="input-container">
                            <label>Ml ou Grama do Produto</label>
                            <input type="text" name="mlGramProduto" placeholder="Ex: 15" onChange={handleChange}  onClick={handleInputChange}/>
                        </div>
                        <div className="input-container">
                            <label>Preço do Produto</label>
                            <input type="text" name="precoProduto" placeholder="Ex: 15,49" onChange={handleChange}  onClick={handleInputChange}/>
                        </div>
                    </div>
                </div>
                <div className="button-action">
                    <button onClick={adicionarProduto}>Adicionar Produto</button>
                    <button onClick={() => setExibirAddProduto(false)}>Fechar</button>
                </div>
            </form>
        </motion.div>
    );
}

export default AddProduto;