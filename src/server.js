const express = require('express');
const cors = require('cors');
const path = require('path');
const { MongoClient } = require('mongodb');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const routes = require('./routes');
require("dotenv").config();
const conectarAoCluster = require('./config/dbConfig');

const app = express();
const PORT = process.env.PORT || 5000;
const SECRET = process.env.SECRET;
const uri = process.env.MONGO_URI; 

const verificarToken = (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({ error: 'Token não fornecido' });
    }

    try {
        const decoded = jwt.verify(token, SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        console.error('Erro ao verificar o token:', error);
        return res.status(403).json({ error: 'Token inválido ou expirado' });
    }
};


app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, 'build')));
app.use('/', routes);

app.post('/login', async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ error: 'Credenciais não fornecidas' });
    }

    try {
        const db = await conectarAoCluster();

        const user = await db.collection('usuarios').findOne({ username });

        if (!user) {
            return res.status(401).json({ error: 'Usuário não encontrado' });
        }

        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
            return res.status(401).json({ error: 'Credenciais inválidas' });
        }

        const token = jwt.sign({ username }, SECRET, { expiresIn: '1h' });

        return res.status(200).json({ token });
    } catch (error) {
        console.error('Erro ao fazer login:', error);
        return res.status(500).json({ error: 'Erro ao fazer login' });
    }
});

app.post('/adicionarContatos', verificarToken, async (req, res) => {
    try {
        const { email, telefone, whatsapp, facebook, instagram } = req.body;
        const username = req.user ? req.user.username : null;

        if (!username) {
            return res.status(401).json({ error: 'Usuário não autenticado' });
        }

        const db = await conectarAoCluster();
        const user = await db.collection('usuarios').findOne({ username });

        if (!user) {
            return res.status(404).json({ error: 'Usuário não encontrado' });
        }

        await db.collection('usuarios').updateOne(
            { username },
            { $set: { 
                'perfil.redesSociais.email': email,
                'perfil.redesSociais.telefone': telefone,
                'perfil.redesSociais.whatsapp': whatsapp,
                'perfil.redesSociais.facebook': facebook,
                'perfil.redesSociais.instagram': instagram 
            } }
        );

        res.status(200).json({ message: 'Contatos adicionados com sucesso!' });
    } catch (error) {
        console.error('Erro ao adicionar contatos:', error);
        res.status(500).json({ error: 'Erro ao adicionar contatos' });
    }
});

app.post('/perfil/adicionarProduto', async (req, res) => {
    try {
        const { nome, categoria, subCategoria, tipo, unidade, quantidade, preco, imagem } = req.body;
        
        // Validação dos dados do produto
        if (!nome || !categoria || !tipo || !unidade || quantidade === undefined || preco === undefined) {
            return res.status(400).json({ error: 'Todos os campos devem ser preenchidos' });
        }
        if (quantidade < 0 || preco <= 0) {
            return res.status(400).json({ error: 'Quantidade e preço devem ser maiores que zero' });
        }
        
        const result = await db.collection('Estoque').insertOne({ nome, categoria, subCategoria, tipo, unidade, quantidade, preco, imagem });
        
        if (result.insertedCount === 1) {
            return res.status(200).json({ message: 'Produto adicionado com sucesso' });
        } else {
            return res.status(500).json({ error: 'Erro ao adicionar produto' });
        }
    } catch (error) {
        console.error('Erro ao adicionar produto:', error);
        res.status(500).json({ error: 'Erro ao adicionar produto' });
    }
});


app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
