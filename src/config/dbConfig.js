const { MongoClient } = require('mongodb');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken'); 

const username = "LuskarJs";
const password = "xK8Tf8hWDKX7emAs";
const uri = `mongodb+srv://${username}:${password}@cluster0.oesip.mongodb.net/?retryWrites=true&w=majority`;

async function conectarAoCluster() {
    try {
        const client = new MongoClient(uri);
        await client.connect();
        console.log('Conectado ao cluster MongoDB');
        return client.db();
    } catch (error) {
        console.error('Erro ao conectar ao cluster MongoDB:', error);
        throw error;
    }
}

async function CriarCollection() {
    try {
        const db = await conectarAoCluster();

        const username = "FabinhoAndrade";
        const password = "Deposito";
        const hashedPassword = await bcrypt.hash(password, 10); 
        const isAdmin = true;

        const perfil = {
            nomeCompleto: '',
            endereco: '',
            telefone: '',
            whatsapp: '',
            dataNascimento: '',
            avisoEstoqueBaixo: false,
            horarioFuncionamento: {
                diasSemana: '',
                finalSemana: '',
                feriado: ''
            },
            lojaAberta: false,
            enderecoLoja: '',
            pontoReferencia: '',
            redesSociais: {
                instagram: '',
                facebook: ''
            },
            funcionarios: []
        };

        const obj = { 
            username, 
            password: hashedPassword, 
            isAdmin, 
            perfil 
        };

        // Gerar um token de autenticação para o usuário
        const token = jwt.sign({ username: obj.username, isAdmin: obj.isAdmin }, jwtSecret, jwtOptions);

        // Atualizar o objeto do usuário para incluir o token
        obj.token = token;

        // Nome da coleção
        const colecao = 'usuarios';

        // Inserir o usuário na coleção
        await db.collection(colecao).insertOne(obj);

        console.log("Usuário adicionado com sucesso:", obj);
    } catch (error) {
        console.error('Erro ao criar coleção ou adicionar usuário:', error);
    }
}

module.exports = conectarAoCluster;
