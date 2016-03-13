app.directive('recipeSearch', function ($state) {
    return {
        restrict: 'E',
        templateUrl: 'js/home/search.html',
        controller: 'searchCrl'
    };
});

app.controller('searchCrl', function($scope,$window,$state){

	var recognition = new $window.webkitSpeechRecognition();
	recognition.continuous = true;
	//recognition.interimResults = true;
	
	var text = $window.document.getElementById('textinput');
	recognition.onend = function(event){
		if(event) $scope.reset();
	};
    
	$scope.submit = function(event){
		console.log("evet",event);
		if(event.keyCode === 13) {
			recognition.stop();
			$state.go("recipes",{cusine: $scope.keyword});
		}
	}
	recognition.onresult = function (event) {
		
			console.log("text", text.value);
          for (var i = event.resultIndex; i < event.results.length; ++i) {
            // if (!event.results.final) {
            // 	text.value += event.results[i][0].transcript;
            //     console.log("text value:", text.value);
            // }
            if (!event.results.final) {
            	text.value = event.results[i][0].transcript;
                console.log("text value:", text.value);
            }

          }
        $scope.keyword = text.value;
        
         // $scope.keyword = event.results[0][0].transcript;
        // $scope.confidence =  event.results[0][0].confidence;
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
			$scope.keyword = 0;
         	text.value = "";
			$scope.isSpeaking = !$scope.isSpeaking;
			recognition.start();
			console.log("when start keyword", $scope.keyword);
		}
	}
	

})