'use strict'

const db = require('./');
const debug = require('debug')('platziverse:db:setup');

async function setUp () {    
    const conf = {
        database: process.env.DB_NAME || 'platziverse',
        username: process.env.DB_NAME || 'eechava',
        password: process.env.DB_PASS || '123',
        host: process.env.DB_HOST || 'localhost',
        dialect: process.env.DIALECT || 'postgres',
        logging: s => debug(s),
        setup: true,
    }

    await db(conf).catch(handleFatalError);
    console.log('Sucess!')
    process.exit(0);
}

function handleFatalError (err) {
    console.error(err.message);
    console.error(err.stack);
    process.exit(1);
}

setUp();
