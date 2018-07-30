
exports.up = function(knex, Promise) {
  return knex.schema.createTable('authors', (table) => {
    table.increments('id').unsigned().primary();
    table.string('firstname').notNull();
    table.string('lastname').notNull();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('authors');
};
