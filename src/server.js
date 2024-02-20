const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000;
const mongoURI = `mongodb+srv://LuskarJS:XOgNkkrOZoa3Y0qD@cluster0.oesip.mongodb.net/?retryWrites=true&w=majority`;

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  isAdmin: Boolean 
});

const User = mongoose.model('Login', userSchema);

app.use(express.json());
app.use(cors());

app.post('/login', async (req, res) => {
  const { username, password, id } = req.body;
  
  try {
    console.log('Tentativa de login:', { username, password }); 

    // Verificando se o id recebido é igual a '65d4370aed069e2eac33ffe0'
    if (id !== '65d4370aed069e2eac33ffe0') {
      console.log('Id inválido'); 
      return res.status(401).json({ error: 'Id inválido' });
    }

    // Procurando um usuário com o username fornecido
    const user = await User.findOne({ username }); 

    // Verificando se o usuário foi encontrado e se a senha e isAdmin correspondem
    if (user && user.password === password && user.isAdmin) {
      console.log('Login bem-sucedido:', username); 
      res.json({ username, isAdmin: user.isAdmin });
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
