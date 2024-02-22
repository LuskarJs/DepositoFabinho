// addCollection/CriarCollection.js
const conectarAoCluster = require('../config/dbConfig');

async function adicionarProduto(req, res) {
    try {
        const db = await conectarAoCluster();

        const {
            nome,
            categoria,
            subCategoria,
            tipo,
            unidade,
            quantidade,
            preco,
            imagem
        } = req.body;

        const colecao = 'Estoque';

        const collections = await db.collections();
        const colecaoExiste = collections.some(col => col.collectionName === colecao);

        if (!colecaoExiste) {
            await db.createCollection(colecao);
            console.log(`Coleção "${colecao}" criada com sucesso`);
        }

        const produto = {
            nome,
            categoria,
            subCategoria,
            tipo,
            unidade,
            quantidade,
            preco,
            imagem
        };

        // Inserir o produto na coleção "Estoque"
        await db.collection(colecao).insertOne(produto);
        console.log("Produto adicionado com sucesso ao estoque:", produto);

        res.status(200).json({ message: 'Produto adicionado com sucesso' });
    } catch (error) {
        console.error('Erro ao adicionar produto:', error);
        res.status(500).json({ error: 'Erro ao adicionar produto' });
    }
}

module.exports = {
    adicionarProduto
};
