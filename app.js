var express = require('express');
var app = express();


app.set ('view engine', 'ejs');

//app.set ( 'views', __dirname + '/views' );

app.get('/', function (req, res) {
  res.render('default', { title: 'Home'});
});

app.get('/sea', function (req, res) {
  res.send('Hello SEA');
});

app.get('/space', function (req, res) {
  res.send('HelloSPACE');
});

app.get('/sky', function (req, res) {
  res.send('Hello SKY');
});
var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});