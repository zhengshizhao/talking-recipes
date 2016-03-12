app.config(function ($stateProvider) {

    // Register our *about* state.
    $stateProvider.state('recipes', {
        url: '/recipes',
        controller: 'RecipeCtl',
        templateUrl: 'js/recipes/recipes.html'
    });

});

app.controller('RecipeCtl', function ($scope) {
	$scope.recipedetail = function(){
		$state.go("recipedetail");
	}
});