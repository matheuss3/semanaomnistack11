const knex = require('knex');
// Importando as configurações do banco de dados
const configuration = require('../../knexfile');

// Criando a conexão de desenvolvimento
const connection = knex(configuration.development);

module.exports = connection;