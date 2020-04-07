'use strict'

const setUpDatabase = require('./lib/db');
const setUpAgentModel = require('./models/agent');
const setUpMetricModel = require('./models/metric');

module.exports = async function (conf) {
    const sequelize = setUpDatabase(conf); 
    const AgentModel = setUpAgentModel(conf);
    const MetricModel = setUpMetricModel(conf);

    AgentModel.hasMany(MetricModel);
    MetricModel.belongsTo(AgentModel); 

    await sequelize.authenticate();

    if(conf.setup){
       await sequelize.sync({ force: true});
    }


    const Agent = {};
    const Metric = {};

    return {
        Agent,
        Metric
    };
}
