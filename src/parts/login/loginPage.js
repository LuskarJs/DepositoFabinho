import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';

const Conta = [
    {
        Login: "Admin",
        Senha: "Admin123"
    }
];

const Login = () => {
    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');
    const [erro, setErro] = useState('');
    const navigate = useNavigate(); 

    const handleSubmit = (e) => {
        e.preventDefault();

        const usuario = Conta.find(conta => conta.Login === login && conta.Senha === senha);

        if (usuario) {
            // Credenciais corretas, navegar para o perfil
            navigate('/Perfil');
        } else {
            setErro('Credenciais inválidas');
        }
    };

    return (
        <section id="Login">
            <form>
                <div className="input-form">
                    <label>Login</label>
                    <input type="text" placeholder="Digite seu Login" value={login} onChange={(e) => setLogin(e.target.value)} />
                    <small>Preencha os campos</small>
                </div>
                <div className="input-form">
                    <label>Senha</label>
                    <input type="password" placeholder="Digite sua senha" value={senha} onChange={(e) => setSenha(e.target.value)} />
                    <small>Preencha os campos</small>
                </div>
                <div className="or-container">
                    <span></span>
                    <p>ou</p>
                    <span></span>
                </div>
                <div className="Forget">
                    <p>Esqueci a senha</p>
                </div>
                {erro && <div className="erro">{erro}</div>}
                <button type='submit' onClick={handleSubmit}>Fazer Login</button>
            </form>
        </section>
    );
};

export default Login;
