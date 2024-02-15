import './contato.css';
import './mediaquery.css';
import seta from "../img/seta-direitaG.png";
import mapa from "../img/mapa.png";
import vector from "../img/Vector1.svg";
import moto from "../img/entrega-rapida.png";
import { useState, useEffect } from 'react';

const Contact = () => {

    const [endereco, setEndereco] = useState('');
    const [pontoReferencia, setPontoReferencia] = useState('');
    const [statusLoja, setStatusLoja] = useState('');

    useEffect(() => {
        const getStatusLojaFromCookie = () => {
            const cookieData = document.cookie.split(';').map(cookie => cookie.trim());
            cookieData.forEach(cookie => {
                const [key, value] = cookie.split('=');
                if (key === 'statusLoja') {
                    setStatusLoja(value);
                }
            });
        };
    
        getStatusLojaFromCookie();
    }, []);

    useEffect(() => {
        const getEnderecoPontoReferenciaFromCookie = () => {
            const cookieData = document.cookie.split(';').map(cookie => cookie.trim());
            cookieData.forEach(cookie => {
                const [key, value] = cookie.split('=');
                if (key === 'enderecoReferencia') {
                    setEndereco(value);
                } else if (key === 'pontoReferencia') {
                    setPontoReferencia(value);
                }
            });
        };

        getEnderecoPontoReferenciaFromCookie();
    }, []);

    return (
        <section id="contato-page">
            <div className="bg-top">
                <figure>
                    <img src={vector} alt="um vetor em forma de ondas abstratas pontudas em azul escuro" />
                </figure>
            </div>
            <div className="container-contato">
                <div className="container-info-map">
                    <figure>
                        <img src={mapa} alt="mapa visto no google maps" />
                    </figure>
                    <div className='text-info-map'>
                    <h3>Endereço: <p>{endereco}</p></h3>
                        <h4>Ponto de referencia: <span>{pontoReferencia}</span></h4>
                        <button>
                            Conferir no Mapa
                            <img src={seta} alt="icone de seta apontando para direita" />
                        </button>
                    </div>
                </div>
                <div className="funcionamento-hora">
                    <h3>Horario de funcionamento</h3>
                    <ul>
                        <li>Segunda-feira <p>(10hrs a 20hrs)</p></li>
                        <li>Terça-feira <p>(10hrs a 20hrs)</p></li>
                        <li>Quarta-feira <p>(10hrs a 20hrs)</p></li>
                        <li>Quinta-feira <p>(10hrs a 20hrs)</p></li>
                        <li>Sexta-feira <p>(10hrs a 20hrs)</p></li>
                        <li>Sábado <p>(10hrs a 16hrs)</p></li>
                        <li>Domingo <p>(Fechado)</p></li>
                    </ul>
                </div>
            </div>
            <div className="alert-open">
                <p><span>{statusLoja}</span> Agora</p>
                <div className="circle"></div>
            </div>
            <div className="entrega">
                <figure>
                    <img src={moto} alt="icone de uma moto andando em preto e branco com linhas pretas" />
                </figure>
                <p>Entrega Por Todo Marambaia até o Apollo</p>
            </div>
        </section>
    )
}

export default Contact;