app.config(function ($stateProvider) {

    $stateProvider.state('recipedetail', {
        url: '/recipedetail',
        controller: 'RecipedetailCtl',
        templateUrl: 'js/recipes/recipedetail.html'
    });
});

app.controller('RecipedetailCtl', function ($scope) {
	
});
