var author = require('./routes/authors');
// var book = require('./routes/books');

module.exports = function(app) {
    app.get('/authors', author.getAllAuthors)

    // app.get('/booksAuthors', book.getAllBooksWithAuthors)
};
