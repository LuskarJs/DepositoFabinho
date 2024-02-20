import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [erro, setErro] = useState('');
    const navigate = useNavigate(); 

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("funcionou");

        try {
            const response = await fetch('/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password }) // Enviando username e password para o servidor
            });

            if (!response.ok) {
                throw new Error('Erro ao fazer login');
            }

            const data = await response.json();

            if (data.autenticado) {
                // Redirecionar para a página de perfil com base nas informações recebidas do servidor
                navigate(`/perfil?username=${data.username}&isAdmin=${data.isAdmin}`);
            } else {
                setErro('Credenciais inválidas');
            }
        } catch (error) {
            console.error('Erro ao fazer login:', error);
            setErro('Erro ao fazer login. Por favor, tente novamente mais tarde.');
        }
    };

    return (
        <section id="Login">
            <form onSubmit={handleSubmit}>
                <div className="input-form">
                    <label>Login</label>
                    <input type="text" id="username" name='username' placeholder="Digite seu Login" value={username} onChange={(e) => setUsername(e.target.value)} />
                    <small>Preencha os campos</small>
                </div>
                <div className="input-form">
                    <label>Senha</label>
                    <input type="password" id="password" name="password" placeholder="Digite sua senha" value={password} onChange={(e) => setPassword(e.target.value)} />
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
                <button type='submit'>Fazer Login</button>
            </form>
        </section>
    );
};

export default Login;
