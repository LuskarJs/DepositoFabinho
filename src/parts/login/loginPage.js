import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import addTokenToHeaders from '../perfil/validade/token'; 
import './login.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [erro, setErro] = useState('');
    const navigate = useNavigate(); 

    addTokenToHeaders()

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            const response = await fetch('http://depositodofabinho.com/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password })
            });

            if (!response.ok) {
                throw new Error('Erro ao fazer login. Por favor, tente novamente mais tarde.');
            }
    
            const data = await response.json();
    
            if (data && data.token) {
                // Armazenar o token JWT no localStorage
                localStorage.setItem('authToken', data.token);
                // Chamar a função para adicionar o token ao cabeçalho
                addTokenToHeaders();
                // Redirecionar para a página de perfil
                navigate('/perfil');
            } else {
                setErro('Credenciais inválidas');
            }
        } catch (error) {
            console.error('Erro ao fazer login:', error);
            setErro(error.message);
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
