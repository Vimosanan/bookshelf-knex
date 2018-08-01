var modelAuthor = require ('../models/Author');


//get all the authors with the book they wrote
var getAllAuthors = function(req, res) {
  new modelAuthor.Author()
    .fetchAll()
    .then((author) => {
      res.json(author);
    })
    .catch((err) => {
      res.send("An error Occured");
    });
};

module.exports = {
  getAllAuthors:getAllAuthors
};
