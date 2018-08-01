// var modelBooks = require ('../models/Book');
//
//
// var getAllBooksWithAuthors = function(req, res) {
//   new modelBooks.Book.query(function(q){
//                   q.innerJoin('Users', function(){
//                       this.on('authors.id','=','books.author_id').andOn('authors.disabled','=',knex.raw('false'));
//                   });
//               })
//               .fetchAll({withRelated: ['authors']})
//               .then(function(books){
//                   return res.json(books);
//               });
// };
//
// module.exports = {
//   getAllBooksWithAuthors: getAllBooksWithAuthors
// }
