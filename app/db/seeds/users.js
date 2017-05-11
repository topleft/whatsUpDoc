'use-strict';

const knex = require('../server/db/connection');
const authHepers = require('../server/helpers/auth')

const users = [
  {
    username: 'seedUserOne',
    password: 'seedPasswordOne'
  }
  , {
    username: 'seedUserTwo',
    password: 'seedPasswordTwo'
  }
]

knex('users').del()
  .then(() => {
    const userCreates = users.map((user) => {
      return authHelpers.createUser(user);
    });
    return Promise.all(userCreates);
  })
  .catch(console.err);
