const Sequelize = require('sequelize')


const sequelize = new Sequelize('dbhackaton_vs6u', 'deploy', 'E8AasENMyCvyjLaPNjKw52Hwi0NnmKvq', {
    host: 'dpg-cnqpunen7f5s7388smlg-a.oregon-postgres.render.com',
    dialect: 'postgres',
    port: 5432, // Porta padrão do PostgreSQL
    SSL
  });


module.exports(sequelize)