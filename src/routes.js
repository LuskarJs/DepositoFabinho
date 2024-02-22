const express = require("express");
const routes = express.Router();
const PerfilController = require('./controllers/PerfilController');
const ContatoController = require('./controllers/ContatoController');
const UserData = require('./controllers/UserController');

routes.post('/login', UserData.read) 
routes.post('/perfil', PerfilController.read);
routes.post('/Perfil/adicionar-contatos', ContatoController.adicionarContatos); 

module.exports = routes;