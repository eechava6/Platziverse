'use strict'

const Sequelize = require('sequelize');
const setUpDatabase = require('../lib/db');

module.exports = function setUpMetricModel(conf){
    const sequelize = setUpDatabase(conf);

    return sequelize.define('metric', {
        type: {
            type: Sequelize.STRING,
            allowNull: false
        },
        value: {
            type: Sequelize.TEXT,
            allowNull: false
        }
    });
}
