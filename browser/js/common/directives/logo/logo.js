app.directive('talkingLogo', function () {
    return {
        restrict: 'E',
        templateUrl: 'js/common/directives/logo/logo.html',
        controller: 'gohome'     
    };
});
app.controller('gohome', function($scope, $state){
        	$scope.goHome = function(){
        		$state.go("home");
        	}
        })