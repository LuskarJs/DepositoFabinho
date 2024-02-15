import "./configuracao.css";
import React, { useState } from "react";
import { motion } from "framer-motion";

const Configuracao = () => {
    const [activeItem, setActiveItem] = useState(null);

    const handleItemClick = (index) => {
        setActiveItem(index);
    };

    const salvarConfiguracoesNoCookie = (e, chave) => {
        e.preventDefault();
        const inputs = e.target.querySelectorAll("input");
        const valores = Array.from(inputs).map(input => input.value.trim());
        const valor = valores.join(" - ");
        if (valor !== "") {
            document.cookie = `${chave}=${valor}; path=/`;
        }
        
    };

    return (
        <motion.section
            transition={{
                duration: 0.35,
            }}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0 }}
            className="configuracaoSection"
        >
            <ul className="list-configuracao">
                <li className={activeItem === 0 ? "show" : ""}>
                    <p onClick={() => handleItemClick(0)}>Editar Nome</p>
                    <form onSubmit={(e) => salvarConfiguracoesNoCookie(e, "nomeUsuario")}>
                        <div className="input-config">
                            <label>Nome de Usuario</label>
                            <input type="text" placeholder="Digite o novo nome selecionado" />
                            <button type="submit">Salvar</button>
                        </div>
                    </form>
                </li>
                <li className={activeItem === 1 ? "show" : ""}>
                    <p onClick={() => handleItemClick(1)}>Editar Senha</p>
                    <form onSubmit={(e) => salvarConfiguracoesNoCookie(e, "novaSenha")}>
                        <div className="input-config">
                            <label>Nova Senha</label>
                            <input type="password" placeholder="Digite a nova senha" />
                            <button type="submit">Salvar</button>
                        </div>
                    </form>
                </li>
                <li className={activeItem === 2 ? "show" : ""}>
                    <p onClick={() => handleItemClick(2)}>Editar Data de Nascimento</p>
                    <form onSubmit={(e) => salvarConfiguracoesNoCookie(e, "dataNascimento")}>
                        <div className="input-config">
                            <label>Data de Nascimento</label>
                            <input type="date" placeholder="Digite a nova Data de Nascimento" />
                            <button type="submit">Salvar</button>
                        </div>
                    </form>
                </li> 
                <li className={activeItem === 3 ? "show" : ""}>
                    <p onClick={() => handleItemClick(3)}>Notificação De Final de Estoque</p>
                    <form onSubmit={(e) => salvarConfiguracoesNoCookie(e, "notificacaoEstoque")}>
                        <div className="input-config">
                            <label>Menos de </label>
                            <input type="number" placeholder="Digite o limite" min="1" />
                            <button type="submit">Salvar</button>
                        </div>
                    </form>
                </li> 
                <li className={activeItem === 4 ? "horario show" : "horario"}>
                    <p onClick={() => handleItemClick(4)}>Editar Horario de Funcionamento</p>
                    <form onSubmit={(e) => salvarConfiguracoesNoCookie(e, "horarioFuncionamento")}>
                        <div className="input-config">
                            <label>Dia de Semana De:</label>
                            <input type="time" placeholder="Horario de Abertura" />
                            <span>A</span>
                            <input type="time" placeholder="Horario de Fechamento" />
                            <button type="submit">Salvar</button>
                        </div>
                        <div className="input-config">
                            <label>Final de Semana De:</label>
                            <input type="time" placeholder="Horario de Abertura" />
                            <span>A</span>
                            <input type="time" placeholder="Horario de Fechamento" />
                            <button type="submit">Salvar</button>
                        </div>
                        <div className="input-config">
                            <label>Feriado</label>
                            <input type="time" placeholder="Horario de Abertura" />
                            <span>A</span>
                            <input type="time" placeholder="Horario de Fechamento" />
                            <button type="submit">Salvar</button>
                        </div>
                        <div className="input-config">
                            <label>Status da Loja:</label>
                            <input type="range" min="0" max="1" />
                            <button type="submit" onClick={(e) => salvarConfiguracoesNoCookie(e, "statusLoja", e.target.previousSibling.value === "0" ? "Aberto" : "Fechado")}>Salvar</button>
                        </div>


                    </form>
                </li>
                <li className={activeItem === 5 ? "show" : ""}>
                    <p onClick={() => handleItemClick(5)}>Editar Endereço e Ponto Referencia</p>
                    <form onSubmit={(e) => salvarConfiguracoesNoCookie(e, "enderecoReferencia")}>
                        <div className="input-config">
                            <label>Endereço</label>
                            <input type="text" placeholder="Digite o Endereço" />
                            <button type="submit">Salvar</button>
                        </div>
                        <div className="input-config">
                            <label>Ponto de Referencia</label>
                            <input type="text" placeholder="Digite o Ponto de Referencia para Localizar a Loja" />
                            <button type="submit">Salvar</button>
                        </div>
                    </form>
                </li>  
            </ul>
        </motion.section>
    );
};

export default Configuracao;
