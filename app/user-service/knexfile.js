const path = require('path');

module.exports = {
  development: {
    client: 'postgresql',
    connection: process.env.WUD_DATABASE_URL_DEV,
  },
  test: {
    client: 'postgresql',
    connection: process.env.WUD_DATABASE_URL_TEST,
  }
};
