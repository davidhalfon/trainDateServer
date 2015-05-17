var books = require('./worstSellers.js');



var books = require('./worstSellers.js');

exports.getAllWorstSellersBooks = function (){

   console.log("\nRequest fot all worst sellers books\n" + 
   books.obj().worstSellers.length + " books found");

   return books.obj().worstSellers;

};

exports.getBookByName = function (name){
    console.log("\nRequest fot a book by name");

   var check = 0;
   var i = 0;

   while(i < books.obj().worstSellers.length){

   		if(books.obj().worstSellers[i].book == name){
   	
   			check = 1;
   			break;
   		}
   		i++;
   		
   }


   if (check == 1){
   		console.log("Sucssessfully found");

 	    return books.obj().worstSellers[i];
	}

	else{
		console.log("No match");
		return null;
	}
};


exports.getWSForMonth = function (month){
   console.log("\nRequest fot books by months");
   var check = 0;
   var i = 0;
   jsonObj = [];

   while(i < books.obj().worstSellers.length){

   		item = {}	// build a new json
   		if(books.obj().worstSellers[i].month == month){
   	
   			item ["book"] = books.obj().worstSellers[i].book;
   			item ["author"] = books.obj().worstSellers[i].author;
   			item ["month"] = books.obj().worstSellers[i].month;

   			jsonObj.push(item);
   			
   		}
   		i++;
   		
   }

   
  if (jsonObj == ''){ // if json is empty
  	console.log("No match");
   	return null;
   }
  console.log(jsonObj.length + " books found");
  return jsonObj;
	
};











