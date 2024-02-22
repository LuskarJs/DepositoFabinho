// PerfilController.js
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const conectarAoCluster = require('../config/dbConfig');

const SECRET = process.env.SECRET;

const PerfilController = {
    async read(req, res) {
        const { username, password } = req.body;

        try {
            const db = await conectarAoCluster();

            const userCursor = await db.collection('usuarios').find({ username });
            const users = await userCursor.toArray();

            if (users.length === 0) {
                return res.status(401).json({ error: 'Usuário não encontrado' });
            }

            const user = users[0];

            const passwordMatch = await bcrypt.compare(password, user.password);

            if (!passwordMatch) {
                return res.status(401).json({ error: 'Credenciais inválidas' });
            }

            const isAdmin = user.isAdmin;

            const token = jwt.sign({ 
                username: user.username, 
                isAdmin 
            }, SECRET, { expiresIn: '2h' });

            return res.status(200).json({ 
                token,
                username: user.username,
                isAdmin,
                nomeCompleto: user.nomeCompleto, 
                cargo: isAdmin ? 'Administrador' : 'Funcionário',
                fotoPerfil: user.fotoPerfil 
            });
        } catch (error) {
            console.error('Erro ao autenticar usuário:', error);
            res.status(500).json({ error: 'Erro ao autenticar usuário' });
        }
    }
};

module.exports = PerfilController;
