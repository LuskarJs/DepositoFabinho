import seta from "../img/seta-direita.png";
import vetor from "../img/Vector1.svg";
import "./home.css";

const Home = () => {

    return (
        <div id="home">
            <div className="home-text">
                <h1>Bem-vindo ao Deposito do Fábio</h1>
                <h2>O Seu Destino para Soluções Incríveis</h2>
            </div>
            <div className="bottom-home">
                <img src={seta} alt='icone seta' />
                <img src={vetor} alt='icone svg formas' />
            </div>
        </div>
    )
}

export default Home;    