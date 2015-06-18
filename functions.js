var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://david:12345@ds047762.mongolab.com:47762/traindating');
var userSchema = require('./schema.js').userSchema;
var usersList;

mongoose.model('UsersM', userSchema);

mongoose.connection.once('open', function() {

    var Users = this.model('UsersM');
 
    Users.find(function(err, docs) {

    usersList = docs;
    mongoose.disconnect();
    return usersList;

   
    });

});

/*exports.loginVal = function (mail){
  
   for (var i=1; i<usersList.length; i++){    //Login validation
     if (usersList[0].email == mail){
      return (1);
     }
  }

  return (0);

 
};
*/

exports.getAllUsers = function (num){
  
    return usersList;

};





