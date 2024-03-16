const { Op } = require('sequelize');
const User = require('./models/user');

(async () => {
    try {
        // Consulta para encontrar todos os usuários cujo nome começa com "John"
        const usuarios = await User.findAll({
            where: {
                documento: "Documento 1"
            },
        });
    } catch (err) {
        console.log(err)
    }
});
