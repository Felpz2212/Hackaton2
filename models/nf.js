const { DataTypes } = require("sequelize");
const sequelize = require('../db')

const NF = sequelize.define('nf',{
    id: {
        type: DataTypes.INTEGER,
    },
    documento: {
        type: DataTypes.STRING
    },
    data_estimada: {
        type: DataTypes.DATE
    },
    data_criacao: {
        type: DataTypes.DATE
    }
})
module.exports(NF);