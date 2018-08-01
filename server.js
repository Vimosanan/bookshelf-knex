

var express = require('express');
var app = express();
var bodyParser = require('body-parser');


app.use(bodyParser.json());
app.use(express.json());
require('./router')(app);

app.listen(3000, () => {
  console.log('Server Started on 3000');
});
