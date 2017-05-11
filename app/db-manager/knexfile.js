const path = require('path');

module.exports = {
  development: {
    client: 'postgresql',
    connection: process.env.WUD_DATABASE_URL_DEV,
    migrations: {
      directory: path.join(__dirname, '/migrations')
    },
    seeds: {
      directory: path.join(__dirname, '/seeds')
    }
  },
  test: {
    client: 'postgresql',
    connection: process.env.WUD_DATABASE_URL_TEST,
    migrations: {
      directory: path.join(__dirname, '/migrations')
    },
    seeds: {
      directory: path.join(__dirname, '/seeds')
    }
  }
};
