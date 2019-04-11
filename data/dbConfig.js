const knex = require('knex');
const config = require('../knexfile.js');

// DB.ENV variable is set with `yarn test`script where the
// "cross-env DB_ENV=testing is set up.
// that means the DB will be set up with TESTING config object
const dbEnv = process.env.DB_ENV || 'development';

module.exports = knex(config[dbEnv]);
