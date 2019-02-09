const mysql = require('mysql');
const knexConfig = require('../knexfile.js');
const env = 'development';
const knex = require('knex')(knexConfig[env]);

const connection = mysql.createConnection(knex.connection);

connection.connect();


module.exports = {

}