// index.js

const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');
const routes = require('./routes');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());

// Rotas da API
app.use('/api', routes);

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
