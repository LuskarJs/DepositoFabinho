// models/Contato.js

const mongoose = require('mongoose');

const ContatoSchema = new mongoose.Schema({
    email: { type: String },
    telefone: { type: String },
    whatsapp: { type: String },
    facebook: { type: String },
    instagram: { type: String }
});

const Contato = mongoose.model('Contato', ContatoSchema);

module.exports = Contato;
