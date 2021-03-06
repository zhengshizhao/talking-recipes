app.config(function ($stateProvider) {

    $stateProvider.state('recipes', {
        url: '/:cusine/recipes',
        controller: 'RecipeCtl',
        templateUrl: 'js/recipes/recipes.html',
        resolve: {
        	recipes: function(getRecipeFactory){
        		return getRecipeFactory.getRecipes();
        	}
        }
    });

});

app.controller('RecipeCtl', function ($scope,$state,recipes,ttsFactory,searchService){
    $scope.mainrecipe = recipes[0];
    if(recipes.length > 1) $scope.otherrecipes= recipes.slice(1);
	$scope.cusine = searchService.getcusine();
	console.log("recipes",recipes);

	$scope.recipedetail = function(NumID){
		// ttsFactory.speak('move to detail', function(){
			$state.go("recipedetails",{recipeNum: NumID});
		// });
		
	}
});

app.factory('getRecipeFactory', function($http){
	return {
		getRecipes: function(){
			return $http.get('/api/recipes')
			.then(function(res){
				var recipes = angular.copy(res.data);
				if (recipes.length >= 6) return recipes.slice(0,6)
				else return recipes;
			})
		}
	}
})