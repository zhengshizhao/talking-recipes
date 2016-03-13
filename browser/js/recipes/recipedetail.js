app.config(function ($stateProvider) {
    $stateProvider.state('recipedetails', {
        url: '/:recipeNum/recipedetail',
        controller: 'RecipedetailCtl',
        templateUrl: 'js/recipes/recipedetail.html',
        resolve:{
        	getRecipeDetail: function(getDetailFactory, $stateParams){ 
        		//console.log("$stateParams",$stateParams);
        		return getDetailFactory.getdetial($stateParams.recipeNum);
        	},
        	instruction: function(getDetailFactory){
        		return getDetailFactory.getInstruction;

        	}
        }
    });
});

app.controller('RecipedetailCtl', function ($scope,getRecipeDetail,instruction,ttsFactory) {
	$scope.recipeDetail = getRecipeDetail;
	$scope.instructions = instruction(getRecipeDetail.instructions)
	$scope.count = 0;

	$scope.speakstep = function(playcontrl){
		console.log("playcontrl",playcontrl);
		if(playcontrl==='back') {
			if($scope.count !== 0) $scope.count--;
			else ttsFactory.speak("We are on the first step");
		}

		if(playcontrl==='next') {
			if($scope.count < $scope.instructions.length) $scope.count++;
			else ttsFactory.speak("We are on the last step");
		}
		if(playcontrl==='play') {
			$scope.count = 0;
		}
		if (!$scope.instructions[$scope.count] && $scope.count !== 0){
			ttsFactory.speak("Enjoy your"+$scope.recipeDetail.title);
		}
		else {ttsFactory.speak($scope.instructions[$scope.count]); }
		//$scope.count++;
	}

});

