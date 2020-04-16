// Importando o express
const express = require('express');
// Importando as rotas
const routes = require('./routes')

// Variável que armazena a aplicação
const app = express();

// Informando ao programa que as requisições serão feitas no formato json
app.use(express.json());

app.use(routes);

// Mandando o app ouvir a porta 3333
app.listen(3333);