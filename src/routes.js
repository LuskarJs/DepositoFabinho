const express = require("express");
const routes = express.Router(); 
const PerfilController = require('./controllers/PerfilController');
const ContatoController = require('./controllers/ContatoController');
const UserController = require('./controllers/UserController');
const CriarCollection = require('./addCollection/CriarCollection');

routes.post('/perfil/adicionarProduto', CriarCollection.adicionarProduto);
routes.post('/perfil', PerfilController.read);
routes.post('/perfil/adicionar-contatos', ContatoController.adicionarContatos); 
routes.post('/login', UserController.login);

module.exports = routes;
