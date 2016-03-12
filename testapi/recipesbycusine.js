var searchrecipes = require('./RecipeSearch.js');
var fs = require('fs');

var qs = {cuisine:"japanese", number: 100, offset:0, query:'all',type: "main course"}; 

var allrecipe = {};
//allrecipe[qs.cuisine] = undefined;
var filename = qs.cuisine + 'recipes.json';
searchrecipes(qs, '/search')
.then(function(data){
	// allrecipe[qs.cuisine] = data.results;
	//console.log("this is all recipe: ", allrecipe);
	fs.writeFile(__dirname+'/'+filename, JSON.stringify(data.results), function(){
		console.log(filename + " saved successfully!");
	}
	)
})


module.exports = {filename: filename}

