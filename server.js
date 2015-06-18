var express = require ('express');
var url = require('url');
var app = express();
var func = require('./functions.js');
var PORT = process.env.PORT || 3000;
app.set ('port' , PORT);

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

var mail;
var a;

app.listen(app.get('port'), function(){
	console.log('Connection Strated');
});

/*app.get('/login', function(req, res) {
  	var urlObj = url.parse(req.url, true, false);
  	mail = urlObj.query.mail;
	a = func.loginVal(mail);	
	app.set('json spaces', 4);
	res.json(a);
});
*/

app.get('/getAllUsers', function(req, res){
	
	app.set('json spaces', 4);
	res.json(func.getAllUsers());


});























