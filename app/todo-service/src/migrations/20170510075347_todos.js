
exports.up = function(knex, Promise) {
  return knex.schema.createTable('todos', (table) => {
    table.primary().increments();
    table.string('name').unique().notNullable();
    table.number('user_id').notNullable().references('Users.id');
    table.boolean('is_complete').defaultTo(false);
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('todos');
};
