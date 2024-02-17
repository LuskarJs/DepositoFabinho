// server.js

const express = require('express');
const app = express();
const port = process.env.PORT || 3480;

app.get('/', (req, res) => {
  res.send('Bem-vindo ao meu servidor Node.js!');
});

app.listen(port, () => {
  console.log(`Servidor está Online e na porta ${port}`);
});
