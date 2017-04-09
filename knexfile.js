const databaseName = 'whats_up_doc';

console.log('do we have a db url????????',process.env.WUD_DATABASE_URL_DEV);
module.exports = {
  development: {
    client: 'postgresql',
    connection: process.env.WUD_DATABASE_URL_DEV,
    migrations: {
      directory: __dirname + '/src/db/migrations'
    },
    seeds: {
      directory: __dirname + '/src/db/seeds'
    }
  },
  test: {
    client: 'postgresql',
    connection: process.env.WUD_DATABASE_URL_TEST,
    migrations: {
      directory: __dirname + '/src/db/migrations'
    },
    seeds: {
      directory: __dirname + '/src/db/seeds'
    }
  }
};
