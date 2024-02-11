import React, { useState } from "react";
import { motion } from "framer-motion";
import "../validade/validate.css";

const Validate = ({ onSave }) => {
    const [formData, setFormData] = useState({
        fotoPerfil: "", // Aqui está armazenando a URL da imagem, não o arquivo em si
        nomeCompleto: "",
        email: "",
        whatsapp: "",
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (files && files.length > 0) {
            const reader = new FileReader();
            reader.onload = (event) => {
                setFormData({
                    ...formData,
                    [name]: event.target.result, // Aqui estamos salvando a URL da imagem
                });
            };
            reader.readAsDataURL(files[0]);
        } else {
            setFormData({
                ...formData,
                [name]: value,
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(formData); // Aqui enviamos o objeto formData para a função onSave
    };

    return (
        <div 
       
        className="container-validate">
            <motion.form
                transition={{
                    duration: .25,
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
            onSubmit={handleSubmit}>
                <div className="text-validate">
                    <h3>Bem-vindo(a), Vamos começar com o Basico...</h3>
                    <p>Configure Antes de Entrar.</p>
                    <small>essa Configuração Será Feita Apenas no Primeiro Login</small>
                </div>
                <div className="form-put FT">
                    {formData.fotoPerfil && (
                        <img
                            src={formData.fotoPerfil}
                            alt="Foto de Perfil"
                            style={{ maxWidth: "300px" }}
                        />
                    )}
                    <label>Foto Perfil</label>
                    <input
                        type="file"
                        accept="image/*"
                        name="fotoPerfil"
                        onChange={handleChange}
                    />
                </div>
                <div className="form-put">
                    <label>Nome Completo</label>
                    <input
                        type="text"
                        name="nomeCompleto"
                        value={formData.nomeCompleto}
                        onChange={handleChange}
                        placeholder="O nome Pode ser Alterado Quantas vezes quiser"
                    />
                </div>
                <div className="form-put">
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="O Email Pode ser Alterado Quantas vezes quiser"
                    />
                </div>
                <div className="form-put">
                    <label>Whatsapp</label>
                    <input
                        type="number"
                        name="whatsapp"
                        value={formData.whatsapp}
                        onChange={handleChange}
                        placeholder="O nome Pode ser Alterado Quantas vezes quiser"
                    />
                </div>
                <div className="button-action">
                    <button type="submit">Salvar Alterações</button>
                </div>
            </motion.form>
        </div>
    );
};

export default Validate;
