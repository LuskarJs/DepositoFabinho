import "./footer.css";
import elo from "../img/elo.png";
import { useState, useEffect } from "react";
import hipercard from "../img/hipercard.png";
import mastercard from "../img/mastercard.png";
import pix from "../img/pix.png";
import visa from "../img/visa.png";
import logo from "../img/logoFabio-removebg-preview.png";
import email from "../img/o-email.png";
import facebook from "../img/facebook.png";
import zap from "../img/whatsapp.png";
import Phone from "../img/phone-call.png";
import instagram from "../img/instagram.png";

const Footer = () => {
    const [mostrarContatos, setMostrarContatos] = useState(false);
    const [contatos, setContatos] = useState([]);

    useEffect(() => {
        const loadContactsFromCookie = () => {
            const decodedCookie = decodeURIComponent(document.cookie);
            const contactsCookie = decodedCookie.split(';').find(cookie => cookie.trim().startsWith('contatos='));
            if (contactsCookie) {
                const contactsObject = JSON.parse(contactsCookie.split('=')[1]);
                const contatosArray = Object.keys(contactsObject)
                    .filter(chave => contactsObject[chave] !== "") // Filtrar contatos não vazios
                    .map(chave => ({
                        chave: chave,
                        valor: contactsObject[chave]
                    }));
                setContatos(contatosArray);
                setMostrarContatos(true);
            }
        };

        loadContactsFromCookie();
    }, []);


    return (
        <footer>
            <figure>
                <img src={logo} alt="logo da empresa" />
            </figure>
            <nav className="container-menu">
                <h3>Menus</h3>
                <ul>
                    <li>Inicio</li>
                    <li>Catalogo</li>
                    <li>Promoções</li>
                    <li>Sobre nós</li>
                </ul>
            </nav>
            
            <nav className="container-pagamento">
            <h3>Metodos de Pagamento</h3>
                <ul>
                    <li>
                        <figure>
                            <img src={elo} alt="logo da elo" />
                        </figure>
                    </li>
                    <li>
                        <figure>
                            <img src={hipercard} alt="hipercard logo" />
                        </figure>
                    </li>
                    <li>
                        <figure>
                            <img src={mastercard} alt="logo mastercard" />
                        </figure>
                    </li>
                    <li>
                        <figure>
                            <img src={visa} alt="logo visa" />
                        </figure>
                    </li>
                    <li>
                        <figure>
                            <img src={pix} alt="logo pix" />
                        </figure>
                    </li>
                </ul>
            </nav>
            {mostrarContatos && contatos.length > 0 && (
                <nav className="container-notification">
                    <h3>Receba Noticias no seu Whatsapp</h3>
                    <ul>
                        {contatos.map((contato, index) => (
                            <li key={index}>
                                <a href={contato.valor} target="_blank" rel="noopener noreferrer">
                                    <figure>
                                        {contato.chave === "telefone" && <img src={Phone} alt="Telefone" />}
                                        {contato.chave === "whatsapp" && <img src={zap} alt="WhatsApp" />}
                                        {contato.chave === "facebook" && <img src={facebook} alt="Facebook" />}
                                        {contato.chave === "email" && <img src={email} alt="Email" />}
                                        {contato.chave === "instagram" && <img src={instagram} alt="Instagram" />}
                                    </figure>
                                </a>
                            </li>
                        ))}
                    </ul>
                    <div className='container-noticias'>
                        <input type="number" placeholder="(21) 91234-5678" />
                        <button type="submit">Recebe Promoções</button>
                    </div>
                </nav>
            )}

        </footer>
    )
}

export default Footer;