import "./gerenciadorContato.css";
import interrogacao from "../img/sinal-de-interrogacao.png";

const GerenciarContato = () => {

    return (
        <section className="gerenciarContato">
            <div className='help'>
                <figure>
                    <img src={interrogacao} alt='icone de interrogação para tirar duvida' />
                </figure>
            </div>
            <form>
                <div className="input-form">
                    <div className="input-div">
                        <label>Email</label>
                        <input type="email" placeholder='exemplo@gmail.com' />
                    </div>
                    <div className="check-input">
                        <input type="checkbox" />
                        <label>Mostrar</label>
                    </div>
                </div>
                <div className="input-form">
                    <div className="input-div">
                        <label>Telefone</label>
                        <input type="phone" placeholder='(21) 2615-1234' />
                    </div>
                    <div className="check-input">
                        <input type="checkbox" />
                        <label>Mostrar</label>
                    </div>
                </div>
                <div className="input-form">
                    <div className="input-div">
                        <label>Whatsapp</label>
                        <input type="number" placeholder='(21) 91234-5678' />
                    </div>
                    <div className="check-input">
                        <input type="checkbox" />
                        <label>Mostrar</label>
                    </div>
                </div>
                <div className="input-form">
                    <div className="input-div">
                        <label>Facebook</label>
                        <input type="text" placeholder='exemplo@gmail.com' />
                    </div>
                    <div className="check-input">
                        <input type="checkbox" />
                        <label>Mostrar</label>
                    </div>
                </div>
                <div className="input-form">
                    <div className="input-div">
                        <label>Instagram</label>
                        <input type="text" placeholder='@Exemplor' />
                    </div>
                    <div className="check-input">
                        <input type="checkbox" />
                        <label>Mostrar</label>
                    </div>
                </div>
                <div className="button-container">
                    <button>Salvar Contatos</button>
                </div>
            </form>
        </section>
    )
}

export default GerenciarContato;