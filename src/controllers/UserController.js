const conectarAoCluster = require('../config/dbConfig');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const SECRET = process.env.SECRET

module.exports = {
    async login(req, res) {
        const { username, password } = req.body;

        try {
            const db = await conectarAoCluster();

            // Buscar o usuário pelo nome de usuário fornecido
            const user = await db.collection('usuarios').findOne({ username });

            if (!user) {
                return res.status(401).json({ error: 'Usuário não encontrado' });
            }

            // Verificar se a senha fornecida corresponde à senha armazenada no banco de dados
            const passwordMatch = await bcrypt.compare(password, user.password);

            if (!passwordMatch) {
                return res.status(401).json({ error: 'Credenciais inválidas' });
            }

            const token = jwt.sign({ username: user.username, isAdmin: user.isAdmin }, process.env.SECRET, { expiresIn: '2h' });

            return res.status(200).json({ token });
        } catch (error) {
            console.error('Erro ao autenticar usuário:', error);
            res.status(500).json({ error: 'Erro ao autenticar usuário' });
        }
    }
};
