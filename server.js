var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});
app.get('/jay1',function(req,res){
  res.send('jay1 webpage servered here');
});
app.get('/jay2',function(req,res){
  res.sendFile(path.join(__dirname, 'ui', 'jay 2.html'));
});
app.get('/ui/main.js',function(req,res){
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});
app.get('/ui/main.php',function(req,res){
  res.sendFile(path.join(__dirname, 'ui', 'main.php'));
});
var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
