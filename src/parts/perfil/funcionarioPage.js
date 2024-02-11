import "./funcionario.css";
import iconAdd from "../img/carteira-de-identidade.png";
import iconSearch from "../img/big-search-len.png";
import telaCheia from "../img/tela-cheia.png";
import { motion } from "framer-motion";

const FuncionarioPage = () => {

    return (
        <motion.section
        transition={{
            duration: .35,
        }}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0 }}
        className="gerenciar-funcionario">
            <div className="add-Search">
                <div className="addFuncionario">
                    <button>Adicionar funcionario
                        <figure>
                            <img src={iconAdd} alt="icone de identidade para adicionar personagem" />
                        </figure>
                    </button>
                </div>
                <div className="search-bar">
                    <input type="text" alt="Digite o nome do Produto" />
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
                    <tr>
                        <td>001</td>
                        <td>João Silva</td>
                        <td>Atendente</td>
                        <td>(11) 1234-5678</td>
                        <td>exemplot@gmail.com</td>
                        <td>09:00</td>
                        <td>18:00</td>
                    </tr>
                    <tr>
                        <td>002</td>
                        <td>Maria Oliveira</td>
                        <td>Gerente</td>
                        <td>(11) 9876-5432</td>
                        <td>exemplot@gmail.com</td>
                        <td>08:30</td>
                        <td>17:30</td>
                    </tr>
                    <tr>
                        <td>001</td>
                        <td>João Silva</td>
                        <td>Atendente</td>
                        <td>(11) 1234-5678</td>
                        <td>exemplot@gmail.com</td>
                        <td>09:00</td>
                        <td>18:00</td>
                    </tr>
                    <tr>
                        <td>002</td>
                        <td>Maria Oliveira</td>
                        <td>Gerente</td>
                        <td>(11) 9876-5432</td>
                        <td>exemplot@gmail.com</td>
                        <td>08:30</td>
                        <td>17:30</td>
                    </tr>
                    <tr>
                        <td>001</td>
                        <td>João Silva</td>
                        <td>Atendente</td>
                        <td>(11) 1234-5678</td>
                        <td>exemplot@gmail.com</td>
                        <td>09:00</td>
                        <td>18:00</td>
                    </tr>
                    <tr>
                        <td>002</td>
                        <td>Maria Oliveira</td>
                        <td>Gerente</td>
                        <td>(11) 9876-5432</td>
                        <td>exemplot@gmail.com</td>
                        <td>08:30</td>
                        <td>17:30</td>
                    </tr>
                    <tr>
                        <td>001</td>
                        <td>João Silva</td>
                        <td>Atendente</td>
                        <td>(11) 1234-5678</td>
                        <td>exemplot@gmail.com</td>
                        <td>09:00</td>
                        <td>18:00</td>
                    </tr>
                    <tr>
                        <td>002</td>
                        <td>Maria Oliveira</td>
                        <td>Gerente</td>
                        <td>(11) 9876-5432</td>
                        <td>exemplot@gmail.com</td>
                        <td>08:30</td>
                        <td>17:30</td>
                    </tr>
                </tbody>
            </table>
            <div className='telacheia'>
                <figure>
                    <img src={telaCheia} alt="icone de tela cheia" />
                </figure>
            </div>
        </motion.section>
    )
}

export default FuncionarioPage;