var express = require('express');
var bodyParser = require('body-parser');

var app = express();

// UNCOMMENT FOR REACT
app.use(express.static(__dirname + '/../react-client/dist'));
app.get('/:token', (req, res, next) => {
  console.log(req.params);
});

app.listen(5000, function() {
  console.log(`listening on port 5000!`);
});

