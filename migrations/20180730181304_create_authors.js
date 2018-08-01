
exports.up = function(knex, Promise) {
  return knex.schema.createTable('authors', (table) => {
    table.increments('id').unsigned().primary();
    table.string('firstname').notNullable();
    table.string('lastname').notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('authors');
};
