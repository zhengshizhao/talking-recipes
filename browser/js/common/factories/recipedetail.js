app.factory('getDetailFactory',function($http, $window){
	return {
		//get recipedetaill for a given recipe id (here, id is property of recipe, not _id)
		getdetial: function(recipeNum){
			return $http.get('/api/recipedetail/'+ recipeNum)
			.then(function(res){
				console.log(res);
				return res.data;
			})
			.then(null, function(err){console.log("err",err)})
		},
		//get li elements from recipe.instrustions and put them in to an array 
		getInstruction: function(instrustions){
			var count = 0;
		    var instructionArray = [];
		    var indexopenOl = instrustions.indexOf("<ol>");
		    
		    if (indexopenOl !== -1){instrustions = instrustions.slice(indexopenOl+4,instrustions.length-5)}

		    while(instrustions){
		        var indexopenli = instrustions.indexOf("<li>");
		        var indexcloseli = instrustions.indexOf("</li>");
		        var newstep = instrustions.slice(indexopenli+4,indexcloseli);
		        if(newstep.indexOf("Recipe one")!== -1) newstep = newstep.slice(11);
		        if (newstep.indexOf("Recipe two")!== -1) break;
		        instructionArray.push(newstep);
		        instrustions = instrustions.slice(indexcloseli+4);
		        
		    }
		   return instructionArray;
		}
	}
})