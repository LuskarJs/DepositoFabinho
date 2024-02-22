const conectarAoCluster = require('../config/dbConfig');
const jwt = require('jsonwebtoken');

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

            // Verifica se o usuário é um administrador
            const isAdmin = user.isAdmin;

            // Gera o token com informações adicionais
            const token = jwt.sign({ 
                username: user.username, 
                isAdmin 
            }, 'suaChaveSecreta', { expiresIn: '2h' });

            // Retorna os dados do perfil junto com o token
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
