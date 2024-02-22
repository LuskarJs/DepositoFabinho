const express = require('express');
const cors = require('cors');
const path = require('path');
const routes = require('./routes');
const conectarAoCluster = require('./config/dbConfig');
const jwt = require('jsonwebtoken');
const Contato = require('./models/Contato');

const app = express();
const PORT = process.env.PORT || 5000;

 const jwtSecret = 'sua_chave_secreta_aqui'; // Substitua pela sua chave secreta JWT

app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, 'build')));

app.use('/perfil', (req, res, next) => {
    const token = req.headers.authorization;
    console.log('Authorization Header:', token);
    if (!token) {
        return res.status(401).json({ error: 'Token não fornecido' });
    }

    try {
        jwt.verify(token, jwtSecret, (err, decoded) => {
            if (err) {
                return res.status(401).json({ error: 'Token inválido' });
            }
            req.user = decoded;
            next();
        });
    } catch (error) {
        console.error('Erro ao verificar o token:', error);
        return res.status(500).json({ error: 'Erro ao verificar o token' });
    }
});

app.use('/', routes);

app.post('/login', (req, res) => {
    const { token } = req.body;

    if (!token) {
        return res.status(400).json({ error: 'Token não fornecido' });
    }

    localStorage.setItem('authToken', token);

    res.status(200).json({ message: 'Login bem-sucedido' });
});

app.post('/adicionarContatos', async (req, res) => {
    try {
        const { email, telefone, whatsapp, facebook, instagram } = req.body;

        // Crie um novo contato com os dados recebidos
        const novoContato = new Contato({
            email,
            telefone,
            whatsapp,
            facebook,
            instagram
        });

        // Salve o novo contato no banco de dados
        await novoContato.save();

        res.status(201).json({ message: 'Contato adicionado com sucesso' });
    } catch (error) {
        console.error('Erro ao adicionar contato:', error);
        res.status(500).json({ error: 'Erro ao adicionar contato' });
    }
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

conectarAoCluster()
    .then(db => {
        app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
    })
    .catch(error => {
        console.error('Erro ao iniciar o servidor:', error);
    });
