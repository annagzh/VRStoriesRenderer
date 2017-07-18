var express = require('express');
var bodyParser = require('body-parser');

var app = express();

// UNCOMMENT FOR REACT
app.use(express.static(__dirname + '/../react-client/dist'));

app.listen(5000, function() {
  console.log(`listening on port 5000!`);
});

