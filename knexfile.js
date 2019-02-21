// Update with your config settings.
var mysqlConfig = require('./keys.js');

module.exports = {

  development: {
    client: 'mysql',
    connection: {
      host: mysqlConfig.rdsConfig.host,
      database: 'antsy_reviews',
      user: mysqlConfig.rdsConfig.username,
      password: mysqlConfig.rdsConfig.password
      // user:     mysqlConfig.localConfig.username,
      // password: mysqlConfig.localConfig.password
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
};
