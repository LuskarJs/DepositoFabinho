import React, { useState } from "react";
import { motion } from "framer-motion";
import iconAdd from "../img/carteira-de-identidade.png";
import iconSearch from "../img/big-search-len.png";
import telaCheia from "../img/tela-cheia.png";
import "./funcionario.css";

const FuncionarioPage = () => {
    const [modalAdd, setModalAdd] = useState(false);
    const [funcionarios, setFuncionarios] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [formData, setFormData] = useState({
        nome: "",
        telefone: "",
        email: "",
        cargo: "",
        entrada: "",
        saida: ""
    });
    const [emptyFields, setEmptyFields] = useState({
        nome: false,
        telefone: false,
        email: false,
        cargo: false,
        entrada: false,
        saida: false
    });

    // Função para adicionar um novo funcionário à lista
    const adicionarFuncionario = () => {
        const camposVazios = Object.entries(formData).filter(([key, value]) => value === "");
        if (camposVazios.length > 0) {
            const emptyFieldsObj = {};
            camposVazios.forEach(([key, value]) => {
                emptyFieldsObj[key] = true;
            });
            setEmptyFields(emptyFieldsObj);
            return;
        }

        setFuncionarios([...funcionarios, formData]);
        setModalAdd(false); // Fechar modal após adicionar funcionário
        // Limpar o formulário
        setFormData({
            nome: "",
            telefone: "",
            email: "",
            cargo: "",
            entrada: "",
            saida: ""
        });
        // Limpar os campos vazios
        setEmptyFields({
            nome: false,
            telefone: false,
            email: false,
            cargo: false,
            entrada: false,
            saida: false
        });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setEmptyFields({ ...emptyFields, [name]: value === "" });
    };

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const filteredFuncionarios = funcionarios.filter(funcionario => {
        const { nome, telefone, email, cargo, entrada, saida } = funcionario;
        const normalizedSearchTerm = searchTerm.toLowerCase();
        return (
            nome.toLowerCase().includes(normalizedSearchTerm) ||
            telefone.toLowerCase().includes(normalizedSearchTerm) ||
            email.toLowerCase().includes(normalizedSearchTerm) ||
            cargo.toLowerCase().includes(normalizedSearchTerm) ||
            entrada.toLowerCase().includes(normalizedSearchTerm) ||
            saida.toLowerCase().includes(normalizedSearchTerm)
        );
    });

    return (
        <motion.section
            transition={{ duration: 0.35 }}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0 }}
            className="gerenciar-funcionario"
        >
            <div className="add-Search">
                <div className="addFuncionario" onClick={() => setModalAdd(!modalAdd)}>
                    <button>
                        Adicionar funcionário
                        <figure>
                            <img src={iconAdd} alt="icone de identidade para adicionar personagem" />
                        </figure>
                    </button>
                </div>
                <div className="search-bar">
                    <input type="text" value={searchTerm} onChange={handleSearch} placeholder="Pesquisar funcionário..." />
                    <button>
                        <figure>
                            <img src={iconSearch} alt="icone de procurar" />
                        </figure>
                    </button>
                </div>
            </div>
            <div className="title-table">
                <h4>Lista de Funcionários</h4>
                <div className="title-table-scroll">
                    <thead>
                        <tr>
                            <th>Código</th>
                            <th>Nome</th>
                            <th>Cargo</th>
                            <th>Telefone</th>
                            <th>Email</th>
                            <th>Entrada</th>
                            <th>Saída</th>
                        </tr>
                    </thead>
                </div>
            </div>
            <table>
                <tbody>
                    {filteredFuncionarios.map((funcionario, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{funcionario.nome}</td>
                            <td>{funcionario.cargo}</td>
                            <td>{funcionario.telefone}</td>
                            <td>{funcionario.email}</td>
                            <td>{funcionario.entrada}</td>
                            <td>{funcionario.saida}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="telacheia">
                <figure>
                    <img src={telaCheia} alt="icone de tela cheia" />
                </figure>
            </div>
            {modalAdd && (
                <div className="AddFuncionario">
                    <form onSubmit={(e) => { e.preventDefault(); adicionarFuncionario(); }}>
                        <div className="input-container">
                            <h4>Nome</h4>
                            <input type="text" name="nome" value={formData.nome} onChange={handleChange} />
                            {emptyFields.nome && <small className="show">Preencha o Campo Obrigatório</small>}
                        </div>
                        <div className="input-container">
                            <h4>Telefone</h4>
                            <input type="tel" name="telefone" value={formData.telefone} onChange={handleChange}/>
                            {emptyFields.telefone && <small className="show">Preencha o Campo Obrigatório</small>}
                        </div>
                        <div className="input-container">
                            <h4>Email</h4>
                            <input type="email" name="email" value={formData.email} onChange={handleChange}/>
                            {emptyFields.email && <small className="show">Preencha o Campo Obrigatório</small>}
                        </div>
                        <div className="input-container">
                            <h4>Cargo</h4>
                            <input type="text" name="cargo" value={formData.cargo} onChange={handleChange}/>
                            {emptyFields.cargo && <small className="show">Preencha o Campo Obrigatório</small>}
                        </div>
                        <div className="input-container">
                            <h4>Entrada</h4>
                            <input type="hour" name="entrada" value={formData.entrada} onChange={handleChange}/>
                            {emptyFields.entrada && <small className="show">Preencha o Campo Obrigatório</small>}
                        </div>
                        <div className="input-container">
                            <h4>Saida</h4>
                            <input type="hour" name="saida" value={formData.saida} onChange={handleChange}/>
                            {emptyFields.saida && <small className="show">Preencha o Campo Obrigatório</small>}
                        </div>

                        <div className="action-buttons">
                            <button type="submit">Adicionar Funcionário</button>
                            <button onClick={() => setModalAdd(false)}>Cancelar</button>
                        </div>
                    </form>
                </div>
            )}
        </motion.section>
    );
};

export default FuncionarioPage;
