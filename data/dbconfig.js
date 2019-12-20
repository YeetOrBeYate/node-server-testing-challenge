const knex = require('knex');
const knexfile = require('../knexfile.js');

const environment = process.env.DB_ENV || 'development';
console.log("environment", environment)

module.exports = knex(knexfile[environment]);