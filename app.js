var express = require('express');
var app = express();
var square = require('./square'); // Here we require() the name of the file without the (optional) .js file extension
console.log('The area of a square with a width of 4 is ' + square.area(4));
var area  = square.area(4);

app.get('/', function(req, res) {
  res.send('Hello World! the area of square with a width of 4 is'+ area);
});
setTimeout(function() {
   console.log('First');
   }, 3000);
console.log('Second');

app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
});