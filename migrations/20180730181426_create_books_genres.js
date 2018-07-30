
exports.up = function(knex, Promise) {
  return knex.schema.createTable('books_genres', (table)=>{
    table.increments('id').unsigned().primary();
    table.integer('books_id').reference('books.id');
    table.integer('genres_id').reference('genres.id');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('books_genres');
};
