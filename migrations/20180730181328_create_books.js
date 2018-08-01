
exports.up = function(knex, Promise) {
  return knex.schema.createTable('books', (table) => {
    table.increments('id').unsigned().primary();
    table.integer('author_id').unsigned().references('authors.id');
    table.string('title').notNullable();
    table.integer('year');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('books');
};
