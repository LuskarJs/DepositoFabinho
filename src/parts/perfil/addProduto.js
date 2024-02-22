import { motion } from "framer-motion";
import { useState } from "react";

function AddProduto({ onClose }) {
    const [formData, setFormData] = useState({
        nomeProduto: "",
        categoria: "",
        subCategoria: "",
        tipo: "",
        unidadeProduto: "",
        mlGramProduto: "",
        precoProduto: "",
        imagemProduto: "" 
    });

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

    const adicionarProduto = async () => {
        const formDataToSend = new FormData();
        formDataToSend.append("nome", formData.nomeProduto);
        formDataToSend.append("categoria", formData.categoria);
        formDataToSend.append("subCategoria", formData.subCategoria);
        formDataToSend.append("tipo", formData.tipo);
        formDataToSend.append("unidade", formData.unidadeProduto);
        formDataToSend.append("quantidade", formData.mlGramProduto);
        formDataToSend.append("preco", formData.precoProduto);
        formDataToSend.append("imagem", formData.imagemProduto);

        try {
            const response = await fetch('https://localhost:5000/perfil/adicionarProduto', {
                method: 'POST',
                body: formDataToSend
            });
            if (response.ok) {
                // Produto adicionado com sucesso
                onClose();
            } else {
                console.error('Erro ao adicionar produto:', response.statusText);
            }
        } catch (error) {
            console.error('Erro ao adicionar produto:', error);
        }
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
                            <input type="text" name="nomeProduto" placeholder="Brahman" onChange={handleChange} />
                        </div>
                        <div className="input-container">
                            <label>Categoria</label>
                            <input type="text" name="categoria" placeholder="Ex: Bebida" onChange={handleChange} />
                        </div>
                        <div className="input-container">
                            <label>SubCategoria</label>
                            <input type="text" name="subCategoria" placeholder="Ex: bebida não alcoolica" onChange={handleChange} />
                        </div>
                        <div className="input-container">
                            <label>Tipo</label>
                            <input type="text" name="tipo" placeholder="Ex: Garrafa" onChange={handleChange} />
                        </div>
                        <div className="input-container">
                            <label>Unidade do Produto</label>
                            <input type="number" name="unidadeProduto" placeholder="Ex: 15" onChange={handleChange} />
                        </div>
                        <div className="input-container">
                            <label>Ml ou Grama do Produto</label>
                            <input type="text" name="mlGramProduto" placeholder="Ex: 15" onChange={handleChange} />
                        </div>
                        <div className="input-container">
                            <label>Preço do Produto</label>
                            <input type="text" name="precoProduto" placeholder="Ex: 15,49" onChange={handleChange} />
                        </div>
                    </div>
                </div>
                <div className="button-action">
                    <button onClick={adicionarProduto}>Adicionar Produto</button>
                    <button onClick={() => onClose()}>Fechar</button>
                </div>
            </form>
        </motion.div>
    );
}

export default AddProduto;
