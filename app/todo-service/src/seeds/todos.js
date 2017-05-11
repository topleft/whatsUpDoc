'use-strict';

const knex = require('../server/db/connection');

const todos = [
  {
    user_id: 1,
    name: 'play ball',
    is_complete: false
  },
  {
    user_id: 2,
    name: 'read book',
    is_complete: false
  },
  {
    user_id: 2,
    name: 'take nap',
    is_complete: true
  }
]

knex('todos').del()
  .then(() => {
    return knex('todos').insert(todos);
  })
  .catch(console.err)
