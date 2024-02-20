const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000;
const mongoURI = "mongodb+srv://LuskarJS:XOgNkkrOZoa3Y0qD@cluster0.oesip.mongodb.net/Login";

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  isAdmin: Boolean 
});

const User = mongoose.model('Users', userSchema);

app.use(express.json());
app.use(cors());

app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    console.log('Tentativa de login:', { username, password }); 

    // Procurar um usuário com o nome de usuário fornecido
    const user = await User.findOne({ username }); 

    // Verificar se o usuário foi encontrado e se a senha corresponde
    if (user && user.password === password) {
      console.log('Login bem-sucedido:', username); 
      // Se as credenciais forem válidas, enviar dados do usuário para o cliente
      res.json({ username: user.username, isAdmin: user.isAdmin });
    } else {
      // Se as credenciais não forem válidas, enviar uma resposta de erro
      console.log('Credenciais inválidas para:', username); 
      res.status(401).json({ error: 'Credenciais inválidas' }); 
    }
  } catch (error) {
    // Se ocorrer algum erro durante o processo de autenticação, enviar uma resposta de erro
    console.error('Erro ao autenticar usuário:', error);
    res.status(500).json({ error: 'Erro ao autenticar usuário' });
  }
});

app.get('/perfil', (req, res) => {
  const autenticado = req.query.autenticado === 'true';
  if (autenticado) {
    const { username, isAdmin } = req.query;
    res.send(`Bem-vindo ao seu perfil, ${username}! Você é ${isAdmin ? 'um administrador' : 'um usuário'}.`);
  } else {
    res.redirect('/login');
  }
});

mongoose.connect(mongoURI)
.then(() => console.log('Conectado ao MongoDB Atlas'))
.catch(err => console.error('Erro ao conectar ao MongoDB Atlas:', err));

app.use(express.static(path.join(__dirname, 'build')));

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
