var searchrecipes = require('./RecipeSearch.js');

var recipesbycusine = require('./recipesbycusine.js');
var fs = require('fs');
var promise = require('bluebird');
var recipeWithInstruction = [];
var recipedetailWithInstruction = [];

var recipes;
var count = 0;

console.log("Open ", recipesbycusine.filename);

fs.readFile(__dirname+'/'+ recipesbycusine.filename, 'utf8', 
	function(err,data){
		if(err) throw err;
		else {
		 	recipes = JSON.parse(data);
		 	//console.log(recipes);
				promise.map(recipes, function(recipe){
					var qs = {id: recipe.id}
					var param = "/"+recipe.id + '/information';
					return searchrecipes(qs, param)
					.then(function(data){
						//console.log(data)
						if (data) {
						
							if(data.hasOwnProperty("instructions")) {
								count++;
								console.log("this is "+count+"th return data");
								recipeWithInstruction.push(recipe);
								recipedetailWithInstruction.push(data)

								return data;
						    }
						}
					})
				})
				.then(function(){

					// console.log("recipeWithInstruction",recipeWithInstruction);
					// console.log("recipedetailWithInstruction",recipedetailWithInstruction);
					
					return promise.all([fs.writeFile(__dirname+'/recipeWithInstruction.json', JSON.stringify(recipeWithInstruction), 
										function(){   console.log("recipeWithInstruction saved successfully!")}),
										fs.writeFile(__dirname+'/recipedetailWithInstruction.json', JSON.stringify(recipedetailWithInstruction), 
											function(){console.log("recipedetailWithInstruction saved successfully!")})
								])})
					.then(function(){
		             	console.log("done");
		             }).catch(function(err){
					console.log(err);
				})
	 }
})


  