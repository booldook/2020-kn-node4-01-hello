var express = require('express');
var app = express();

app.listen(3000, function(){
	console.log("http://127.0.0.1:3000");
});

app.get('/', function(req, res, next) {
	res.send('<h1>Hello World</h1>');
});

app.get('/booldook', function(req, res, next) {
	res.send('<h1>Hello booldook</h1>');
});
