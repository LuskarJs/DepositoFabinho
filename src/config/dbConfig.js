const { MongoClient } = require('mongodb');
const bcrypt = require('bcrypt');
require("dotenv").config();

const username = process.env.DB_USER;
const password = process.env.DB_PASS;
const uri = `mongodb+srv://${username}:${password}@cluster0.oesip.mongodb.net/?retryWrites=true&w=majority`;

async function conectarAoCluster() {
    try {
        const client = new MongoClient(uri);
        await client.connect();
        const users = await client.db().collection('usuarios').findOne({ username : "FabinhoAndrade"});
        console.log('Conectado ao cluster MongoDB');
        return client.db();
    } catch (error) {
        console.error('Erro ao conectar ao cluster MongoDB:', error);
        throw error;
    }
}



module.exports = conectarAoCluster;
