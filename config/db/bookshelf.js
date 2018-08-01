var knex = require('knex')({
  client: 'mysql',
  connection: {
      host: 'localhost',
      user: 'root',
      password: 'root',
      database: 'mybooks',
      charset: 'utf8'
  }
});


var bookshelf = require('bookshelf')(knex);
bookshelf.plugin('registry');

module.exports.bookshelf = bookshelf;
