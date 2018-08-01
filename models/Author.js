'use strict'

var bookshelf = require('./../config/db/bookshelf').bookshelf;
var Book = require('./Book');


var Author = bookshelf.Model.extend({
  tableName: 'authors',
  books: function(){
    return this.belongsToMany(Book)
  }
});



module.exports = {
  Author: Author
}
