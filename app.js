var express = require('express');
var app = express();
app.get('/', function(req, res){
	res.send('Hello fantastical conceits :)');
});

app.get('/login', function(req,res){
	res.send('login plz');
});

app.listen(3000, function(){
	console.log('Connected 3000 port!');
});

