'use strict'

var bookshelf = require('./../config/db/bookshelf').bookshelf;
var Book = require('./Genre');
var Author = require('./Author');


var Book =bookshelf.Model.extend({
  tableName: 'books',
  genres: function(){
    return this.hasMany(Genre)
  },
  authors: function(){
    return this.hasOne(Author)
  }
});




module.exports = {
  Book: Book
}
