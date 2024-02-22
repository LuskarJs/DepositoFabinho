import "./gerenciadorContato.css";
import { useState } from "react";
import interrogacao from "../img/sinal-de-interrogacao.png";
import { motion } from 'framer-motion';

const GerenciarContato = () => {
    const [contatos, setContatos] = useState({
        email: '',
        telefone: '',
        whatsapp: '',
        facebook: '',
        instagram: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setContatos({ ...contatos, [name]: value });
    };

    const handleSalvarContatos = async (e) => {
        e.preventDefault();
    
        try {
            const token = localStorage.getItem('authToken'); // Obtém o token armazenado localmente
            const response = await fetch('http://localhost:5000/adicionarContatos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}` // Inclui o token no cabeçalho da requisição
                },
                body: JSON.stringify(contatos)
            });
    
            if (!response.ok) {
                throw new Error('Erro ao salvar contatos. Por favor, tente novamente mais tarde.');
            }
    
            console.log('Contatos salvos com sucesso!');
        } catch (error) {
            console.error('Erro ao salvar contatos:', error);
        }
    };
    
    return (
        <motion.section
        transition={{
            duration: .35,
        }}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0 }}
        className="gerenciarContato">
            <div className='help'>
                <figure>
                    <img src={interrogacao} alt='icone de interrogação para tirar duvida' />
                </figure>
            </div>
            <form onSubmit={handleSalvarContatos}>
                <div className="input-form">
                    <div className="input-div">
                        <label>Email</label>
                        <input type="email" name="email" placeholder='exemplo@gmail.com' value={contatos.email} onChange={handleChange} />
                    </div>
                </div>
                <div className="input-form">
                    <div className="input-div">
                        <label>Telefone</label>
                        <input type="phone" name="telefone" placeholder='(21) 2615-1234' value={contatos.telefone} onChange={handleChange} />
                    </div>
                </div>
                <div className="input-form">
                    <div className="input-div">
                        <label>Whatsapp</label>
                        <input type="number" name="whatsapp" placeholder='(21) 91234-5678' value={contatos.whatsapp} onChange={handleChange} />
                    </div>
                </div>
                <div className="input-form">
                    <div className="input-div">
                        <label>Facebook</label>
                        <input type="text" name="facebook" placeholder='exemplo@gmail.com' value={contatos.facebook} onChange={handleChange} />
                    </div>
                </div>
                <div className="input-form">
                    <div className="input-div">
                        <label>Instagram</label>
                        <input type="text" name="instagram" placeholder='@Exemplor' value={contatos.instagram} onChange={handleChange} />
                    </div>
                </div>
                <div className="button-container">
                    <button type="submit">Salvar Contatos</button>
                </div>
            </form>
        </motion.section>
    )
}

export default GerenciarContato;
