
exports.up = function(knex, Promise) {
  return knex.schema.createTable('books_genres', (table)=>{
    table.increments('id').unsigned().primary();
    table.integer('books_id').unsigned().notNullable().references('books.id');
    table.integer('genres_id').unsigned().notNullable().references('genres.id');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('books_genres');
};
