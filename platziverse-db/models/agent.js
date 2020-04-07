'use strict'

const Sequelize = require('sequelize');
const setUpDatabase = require('../lib/db');

module.exports = function setUpAgentModel(conf){
    
    const sequelize = setUpDatabase(conf);

    return sequelize.define('agent', {
        uuid:{
            type: Sequelize.STRING,
            allowNull: false
        },
        username: {
            type: Sequelize.STRING,
            allowNull: false
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        hostname: {
            type: Sequelize.STRING,
            allowNull: false
        },
        pid: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        connected: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
            defaultvalue: false
        }
    });
}
