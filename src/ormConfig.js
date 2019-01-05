const {EntitySchema} = require('typeorm');

const defaultConnectOptions = {
  type: 'mysql',
  database: 'epione',
  synchronize: true,
  logging: false,
  entities: [new EntitySchema(require('./entities/User'))],
  host: process.env.DB_ENDPOINT || 'localhost',
  port: parseInt(process.env.DB_PORT || '3306'),
  username: process.env.DB_USERNAME || 'root',
  password: 'epione'
};

module.exports = defaultConnectOptions;
