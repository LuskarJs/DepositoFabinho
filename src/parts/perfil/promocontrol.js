import './promocontrol.css';
import interrogacao from "../img/sinal-de-interrogacao.png";
import upload from "../img/upload-na-nuvem.png";
import { motion } from 'framer-motion';

const ControlPromo = () => {

    return (
        <motion.section
        transition={{
            duration: .35,
        }}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0 }}
        className='Control-container'>
            <div className="container-Promo">
                <div className='button-action'>
                    <button>Promoção</button>
                    <button type="upload">
                        <p>Promoção Img </p>
                        <span> 
                            <figure>
                                <img src={upload} alt="icone de upload" />
                            </figure>
                        </span>
                    </button>
                </div>
                <div className='quest'>
                    <figure>
                        <img src={interrogacao} alt="icone de interrogacao" />
                    </figure>
                </div>
            </div>
            <div className="container-promo">
                <ul className="filter-promo">
                    <li>Promoção Defina de Semana</li>
                    <li>Promoção De Carnaval</li>
                </ul>
                <ul className="listPromos">
                    <li className="card-promo">
                        <div className="img-produto">
                            <figure>
                                <img src={upload} alt="icone de upload" />
                            </figure>
                        </div>
                        <div className="info-produto">
                            <div className="info-put">
                                <label>Nome do Produto</label>
                                <input type="text" />
                            </div>
                            <div className="info-put">
                                <label>Preço Original</label>
                                <input type="text" />
                            </div>
                            <div className="info-put">
                                <label>Preço de Promoção</label>
                                <input type="text" />
                            </div>      
                        </div>
                        <div className="action-buttons">
                            <button>Salva</button>
                            <button>Remover</button>
                        </div>
                    </li>
                    <li className="card-promo">
                        <div className="img-produto">
                            <figure>
                                <img src={upload} alt="icone de upload" />
                            </figure>
                        </div>
                        <div className="info-produto">
                            <div className="info-put">
                                <label>Nome do Produto</label>
                                <input type="text" />
                            </div>
                            <div className="info-put">
                                <label>Preço Original</label>
                                <input type="text" />
                            </div>
                            <div className="info-put">
                                <label>Preço de Promoção</label>
                                <input type="text" />
                            </div>      
                        </div>
                        <div className="action-buttons">
                            <button>Salva</button>
                            <button>Remover</button>
                        </div>
                    </li>
                    <li className="card-promo">
                        <div className="img-produto">
                            <figure>
                                <img src={upload} alt="icone de upload" />
                            </figure>
                        </div>
                        <div className="info-produto">
                            <div className="info-put">
                                <label>Nome do Produto</label>
                                <input type="text" />
                            </div>
                            <div className="info-put">
                                <label>Preço Original</label>
                                <input type="text" />
                            </div>
                            <div className="info-put">
                                <label>Preço de Promoção</label>
                                <input type="text" />
                            </div>      
                        </div>
                        <div className="action-buttons">
                            <button>Salva</button>
                            <button>Remover</button>
                        </div>
                    </li>
                    <li className="card-promo">
                        <div className="img-produto">
                            <figure>
                                <img src={upload} alt="icone de upload" />
                            </figure>
                        </div>
                        <div className="info-produto">
                            <div className="info-put">
                                <label>Nome do Produto</label>
                                <input type="text" />
                            </div>
                            <div className="info-put">
                                <label>Preço Original</label>
                                <input type="text" />
                            </div>
                            <div className="info-put">
                                <label>Preço de Promoção</label>
                                <input type="text" />
                            </div>      
                        </div>
                        <div className="action-buttons">
                            <button>Salva</button>
                            <button>Remover</button>
                        </div>
                    </li>
                </ul>
            </div>
            
        </motion.section>
    )
}

export default ControlPromo;