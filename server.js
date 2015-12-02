var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer({ dest: './uploads/'});

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.post('/file', upload.single('cosito'), function(req, res){
  console.log("llega");
  res.send();
});

app.use('/node_modules', express.static(__dirname + '/node_modules'));
app.use('/app.js', express.static(__dirname + '/app.js'));

var server = app.listen(3000, 'localhost', function () {
   var port = server.address().port;
   console.log('App running on http:// ' + server.address().address +':' + port)
});
