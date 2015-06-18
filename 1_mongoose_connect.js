var mongoose = require('mongoose');
var userSchema = require('./schema.js');
var db = mongoose.connect('mongodb://db_user:db_pass@ds061371.mongolab.com:61371/db_ringapp');

mongoose.model('UsersM', userSchema);
mongoose.connection.once('open', function() {
 var Users = this.model('UsersM');



	var query = Users.find();
	query.where('status').in(['A', 'B']).count();
	
	query.exec(function(err, count){
		console.log("there are " + count + " user with A or B status");

	});

	query = Users.find();
	query.where('age').gt(21).limit(2).sort('name');
	query.exec(function(err, docs){
		console.log("\n users over 21 years old: ");
		for (var i in docs){
			console.log(JSON.stringify(docs[i]));
		}
		mongoose.disconnect();
	});

});




