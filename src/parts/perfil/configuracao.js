import "./configuracao.css";
import React,{useState} from "react";
import { motion } from "framer-motion";

const Configuracao = () => {
    const [activeItem, setActiveItem] = useState(null);

    const handleItemClick = (index) => {
        setActiveItem(index);
    };

    return (
        <motion.section
        transition={{
            duration: .35,
        }}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0 }}
        className="configuracaoSection">
            <ul className="list-configuracao">
                <li className={activeItem === 0 ? "show" : ""}>
                    <p  onClick={() => handleItemClick(0)}>Editar Nome</p>
                    <div className="input-config">
                        <label>Nome de Usuario</label>
                        <input type="text" placeholder="Digite o novo nome selecionado" />
                        <button>Salvar</button>
                    </div>
                </li>
                <li className={activeItem === 1 ? "show" : ""}>
                    <p  onClick={() => handleItemClick(1)}>Editar Data de Nascimento</p>
                    <div className="input-config">
                        <label>Data de Nascimento</label>
                        <input type="date" placeholder="Digite a nova Data de Nascimento" />
                        <button>Salvar</button>
                    </div>
                </li> 
                <li className={activeItem === 2 ? "show" : ""}>
                    <p  onClick={() => handleItemClick(2)}>Notificação De Final de Estoque</p>
                    <div className="input-config">
                        <label>Menos de </label>
                        <input type="number" minLength={2} />
                        <button>Salvar</button>
                    </div>
                </li> 
                <li className={activeItem === 3 ? "horario show" : "horario"}>
                    <p  onClick={() => handleItemClick(3)}>Editar Horario de Funcionamento</p>
                    <div className="input-config">
                        <label>Dia de Semana De:</label>
                        <input type="time" placeholder="Horario de Abertura" />
                        <span>A</span>
                        <input type="time" placeholder="Horario de Fechamento" />
                        <button>Salvar</button>
                    </div>
                    <div className="input-config">
                        <label>Final de Semana De:</label>
                        <input type="time" placeholder="Horario de Abertura" />
                        <span>A</span>
                        <input type="time" placeholder="Horario de Fechamento" />
                        <button>Salvar</button>
                    </div>
                    <div className="input-config">
                        <label>Feriado</label>
                        <input type="time" placeholder="Horario de Abertura" />
                        <span>A</span>
                        <input type="time" placeholder="Horario de Fechamento" />
                        <button>Salvar</button>
                    </div>
                    <div className="input-config">
                        <label>Status da Loja:</label>
                        <input type="range" min={0} max={1} />
                        <button>Salvar</button>
                    </div>
                </li>
                <li className={activeItem === 4 ? "show" : ""}>
                    <p  onClick={() => handleItemClick(4)}>Editar Endereço e Ponto Referencia</p>
                    <div className="input-config">
                        <label>Endereço</label>
                        <input type="text" placeholder="Digite o Endereço" />
                        <button>Salvar</button>
                    </div>
                    <div className="input-config">
                        <label>Ponto de Referencia</label>
                        <input type="text" placeholder="Digite o Ponto de Referencia para Localizar a Loja" />
                        <button>Salvar</button>
                    </div>
                </li>  
            </ul>
        </motion.section>
    )
}

export default Configuracao;