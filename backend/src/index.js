// Importando o express
const express = require('express');
// Importando as rotas
const routes = require('./routes');
// Importando cors (segurança)
const cors = require('cors');

// Variável que armazena a aplicação
const app = express();

app.use(cors());

// Informando ao programa que as requisições serão feitas no formato json
app.use(express.json());

app.use(routes);

// Mandando o app ouvir a porta 3333
app.listen(3333);