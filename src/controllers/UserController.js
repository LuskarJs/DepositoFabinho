const bcrypt = require('bcrypt');
const conectarAoCluster = require('../config/dbConfig');
const jwt = require('jsonwebtoken');

module.exports = {
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

            if (!passwordMatch || !user.isAdmin) {
                return res.status(401).json({ error: 'Credenciais inválidas' });
            }

            const token = jwt.sign({ username: user.username, isAdmin: user.isAdmin }, 'suaChaveSecreta', { expiresIn: '2h' });

            return res.status(200).json({ token });
        } catch (error) {
            console.error('Erro ao autenticar usuário:', error);
            res.status(500).json({ error: 'Erro ao autenticar usuário' });
        }
    }
};
