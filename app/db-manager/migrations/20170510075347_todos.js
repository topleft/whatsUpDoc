
exports.up = function(knex, Promise) {
  return knex.schema.createTable('Todos', (table) => {
    table.increments('id').primary().unique().index();
    table.string('name').unique().notNullable();
    table.integer('user_id').notNullable().references('Users.id');
    table.boolean('is_complete').defaultTo(false);
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('Todos');
};
