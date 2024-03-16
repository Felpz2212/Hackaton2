const Sequelize = require('sequelize')


const sequelize = new Sequelize('dbhackaton_vs6u', 'deploy', 'E8AasENMyCvyjLaPNjKw52Hwi0NnmKvq', {
    host: 'dpg-cnqpunen7f5s7388smlg-a.oregon-postgres.render.com',
    dialect: 'postgres',
    port: 5432, // Porta padrão do PostgreSQL
  });


async function teste(){
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

teste()