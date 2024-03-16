const { Op } = require('sequelize');
const User = require('./models/nf');

async function findAll(){
    try {
        // Consulta para encontrar todos os usuários cujo nome começa com "John"
        const nf = await nf.findAll({
            where: {
                documento: "Documento 1"
            },
        });

        return nf
    } catch (err) {
        console.log(err)
        
    }
};
