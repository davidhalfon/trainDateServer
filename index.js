var express = require ('express');
var url = require('url');
var app = express();
var books = require('./worstSellers.js');
var func = require('./functions.js');
var PORT = process.env.PORT || 3000;
app.set ('port' , PORT);

app.listen(app.get('port'), function(){
	console.log('Connection Strated');
});

app.get('/getAllWorstSellersBooks', function(req, res){
	app.set('json spaces', 4);
	res.json(func.getAllWorstSellersBooks());

});

app.get('/getBookByName', function(req, res){
	var urlPart = url.parse(req.url, true);
	var query = urlPart.query;
	app.set('json spaces', 4);
	res.json(func.getBookByName(query.name));
});

app.get('/getWSForMonth', function(req, res){
	var urlPart = url.parse(req.url, true);
	var query = urlPart.query;
	app.set('json spaces', 4);
	res.json(func.getWSForMonth(query.month));
});
















