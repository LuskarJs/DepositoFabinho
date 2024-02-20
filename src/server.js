const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000;
const mongoURI = process.env.MONGODB_URI; // Usando a variável de ambiente

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  isAdmin: Boolean 
});

const User = mongoose.model('Users', userSchema);

console.log(User)

app.use(express.json());
app.use(cors());

app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    console.log('Tentativa de login:', { username, password }); 

    const user = await User.findOne({ username }); 

    if (user && user.password === password) {
      console.log('Login bem-sucedido:', username); 
      res.json({ autenticado: true, username: user.username, isAdmin: user.isAdmin });
    } else {
      console.log('Credenciais inválidas para:', username); 
      res.json({ autenticado: false });
    }
  } catch (error) {
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

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
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
