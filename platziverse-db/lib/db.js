'use strict'

const Sequelize = require('sequelize');
let sequelize = null;

module.exports = function setUpDatabase (conf) {
    //Singleton pattern 
    if (!sequelize) {
        sequelize = new Sequelize(conf);
    }
    return sequelize;
}
