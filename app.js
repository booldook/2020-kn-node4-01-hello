var express = require('express');
var	app = express();
var path = require('path');

app.listen(3000, function(){
	console.log('http://127.0.0.1:3000');
});

app.use('/', express.static(path.join(__dirname, './public')));

app.get('/hello', function(req, res){
	res.send('<html><head><title>Hi~</title></head><body><h1>Hello World</h1></body></html>');
});

app.get('/sample', function(req, res) {
	var title = '샘플페이지';
	var content = 'Hello 샘플';
	var html = `
	<!DOCTYPE html>
	<html lang="ko">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title>${title}</title>
	</head>
	<body>
		<h1>${content}</h1>
	</body>
	</html>`;
	res.send(html);
});

app.get('/search', function(req, res) {
	var q = req.query.q;
	res.send(`<h1>당신이 요청한 쿼리는 ${q}입니다.</h1>`);
});