import "./perfil.css";
import trocaFoto from "../img/trocar-camera.png";
import fotoPerfil from "../img/perfilDefault.jpg";
import GerenciarContato from "./gerenciadorContato";

const Perfil = () => {

    return (
        <section id="Perfil">
            <div className="Dash">
                <div className="img-container">
                    <figure>
                        <img src={trocaFoto} alt="icone de uma camera simbolizando a troca de foto" />
                    </figure>
                    <figure>
                        <img src={fotoPerfil} alt="foto de perfil do proprietario da conta" />
                    </figure>
                </div>
                <div className="info-container">
                    <h3>Fabio de Oliveira Antoniano</h3>
                    <h4>Cargo: <span> Administradora</span></h4>
                </div>
                <nav className="option-dash">
                    <ul>
                        <li >Administrar  Promoções</li>
                        <li className="active">gerenciar  Funcionario</li>
                        <li>Gerenciar Contatos</li>
                        <li>Controle de Estoque</li>
                        <li>painel de Estatisticas</li>
                        <li>Sair da Conta</li>
                    </ul>
                </nav>
            </div>
            <GerenciarContato />
        </section>
    )
}

export default Perfil;