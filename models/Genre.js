'use strict'

var bookshelf = require('./../config/db/bookshelf').bookshelf;
var Book = require('./Book');


var Genre = bookshelf.Model.extend({
  tableName: 'genres',
  books: function(){
    return this.hasMany(Book)
  }
});


module.exports = {
  Genre: Genre
}
