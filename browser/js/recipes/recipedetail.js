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

app.controller('RecipedetailCtl', function ($scope,getRecipeDetail,instruction,ttsFactory,$window) {
	$scope.recipeDetail = getRecipeDetail;
	$scope.instructions = instruction(getRecipeDetail.instructions)
	$scope.count = 0;
     var cb = function(){
			recognition.start();
	}
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
		if(playcontrl==='start') {
			$scope.count = 0;
		}
		if (!$scope.instructions[$scope.count] && $scope.count !== 0){	
			ttsFactory.speak("Enjoy your"+$scope.recipeDetail.title);
		}
		else {
			
			ttsFactory.speak($scope.instructions[$scope.count]);
			$scope.toggleStartStop();
		}
	}
	var recognition = new $window.webkitSpeechRecognition();
	recognition.continuous = true;
	//recognition.interimResults = true;
	
	recognition.onend = function(event){
		if(event) $scope.reset();
	};
	recognition.onresult = function (event) {
		
          for (var i = event.resultIndex; i < event.results.length; ++i) {
            if (!event.results.final) {
            	$scope.keyword = event.results[i][0].transcript;
            }
            if (['back','start','next'].indexOf($scope.keyword) !== -1) {
            	$scope.toggleStartStop();
            	$scope.speakstep($scope.keyword);
            }
        }
    };
    $scope.reset = function () {
        $scope.isSpeaking = false; 
    }
	$scope.isSpeaking = false;
	$scope.toggleStartStop = function(){
		if($scope.isSpeaking){
			recognition.stop();
			$scope.isSpeaking = !$scope.isSpeaking;
			console.log("when stop keyword", $scope.keyword);

		}
		else {
			$scope.reset();
			$scope.keyword = "";
			$scope.isSpeaking = !$scope.isSpeaking;
			recognition.start();
			console.log("when start keyword", $scope.keyword);
		}
	}

	
});

