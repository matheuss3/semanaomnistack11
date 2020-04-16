const express = require('express');

// Importar os controllers
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')

// Desacoplando as funçoes de Router do express e armazenando em routes
const routes = express.Router();

// Método para listar todas as ongs do banco de dados
routes.get('/ongs', OngController.index);

// Método post para criar uma ong
routes.post('/ongs', OngController.create);

// Método para criar um caso
routes.post('/incidents', IncidentController.create);

// Método para listar os casos
routes.get('/incidents', IncidentController.index);

// Listagem de casos específicos de uma ong
routes.get('/profile', ProfileController.index);

// Método para deletar os casos
routes.delete('/incidents/:id', IncidentController.delete)

// Login método post pois o  usuario está criando uma nova sessao
routes.post('/session', SessionController.create);
module.exports = routes;