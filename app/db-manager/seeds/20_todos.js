'use-strict';

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

exports.seed = (knex, Promise) => {
  return knex('Todos').del()
    .then(() => {
      return knex('Todos').insert(todos);
    })
}
