import "./footer.css";
import elo from "../img/elo.png";
import hipercard from "../img/hipercard.png";
import mastercard from "../img/mastercard.png";
import pix from "../img/pix.png";
import visa from "../img/visa.png";



const Footer = () => {

    return (
        <footer>
            <figure>
                <img src="" alt="" />
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
            <nav className="container-menu">
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
            <nav className="container-notification">
                <h3>Receba Noticias no seu Whatsapp</h3>
                <div className='container-noticias'>
                    <input type="numer" placeholder="(21) 91234-5678" />
                    <button type="submit">Recebe Promoções</button>
                </div>
            </nav>
        </footer>
    )
}

export default Footer;