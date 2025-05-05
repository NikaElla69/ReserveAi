require('dotenv').config();
console.log('Tentando conectar com:', process.env.MONGODB_URI); // Debug

const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Rota de teste
app.get('/api/test', (req, res) => {
  res.json({ message: "Backend do ReserveAí está rodando!" });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));

// Conectando ao MongoDB
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("Conectado ao MongoDB!"))
  .catch(err => console.error("Erro na conexão:", err));

// Importando rotas
const reservationRoutes = require('./routes/reservationRoutes');
app.use('/api/reservations', reservationRoutes);