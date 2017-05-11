'use-strict';

// const knex = require('../connection');
// const authHepers = require('../server/helpers/auth')

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

exports.seed = (knex, Promise) => {
  return knex('Users').del()
    .then(() => {
      return knex('Users').insert(users)
    })
    // .then(() => {
    //
    //   const userCreates = users.map((user) => {
    //     return authHelpers.createUser(user);
    //   });
    //   return Promise.all(userCreates);
    // })

}
