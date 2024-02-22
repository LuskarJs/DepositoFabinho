const conectarAoCluster = require('../config/dbConfig');

const adicionarContatos = async (req, res) => {
    const { email, telefone, whatsapp, facebook, instagram } = req.body;
    const username = req.user.username; 

    try {
        const db = await conectarAoCluster();

        if (!req.user) {
            return res.status(401).json({ error: 'Usuário não autenticado' });
        }

        await db.collection('usuarios').updateOne(
            { username : username },
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
};

module.exports = { adicionarContatos };
