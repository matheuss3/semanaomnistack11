const crypto = require('crypto');

// Importando conexão com o banco
const connection = require('../database/connection')

module.exports = {
    async index(request, response) {
        return response.json(await connection('ongs').select('*'));
    },
    
    async create(request, response) {
        // Pegando os dados enviados no body da requisição
        const { name, email, whatsapp, city, uf } = request.body;
        
        // Gerando id para a ong
        const id = crypto.randomBytes(4).toString('HEX');
        
        // Inserindo dados no banco
        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf
        });

        return response.json({ id }); 
    }
}