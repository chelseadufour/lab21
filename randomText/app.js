
var ex = require('./lyrics.js'); /* . indicates we're in the current directory, specifying that that file is in the same directory */
var http = require('http'); /* use module to create the server */

// var selection = Math.floor(Math.random() * ex.length); /* saving random lyric into variable called selection. the random lyric is determined by applying math floor/random and multiplying that by the length of the array that is stored in 'ex' */
//
// console.log(ex[selection]);
//
// http.createServer(function(request, response){
//   var selection = Math.floor(Math.random() * ex.length);
//   response.writeHead(200, {'Content-type': 'text/plain'});
//   response.write(ex[selection]);
//   response.end();
// }).listen(8888);

var express = require('express');
var app = express();

app.get('/api/lyrics', function (request, response){
  response.send('hello world');
});

var server = app.listen(3000, function(){
  var port = server.address().port;

  console.log('example app listening at port', port);
});
