var newApp = angular.module("myApp");

newApp.controller("mainController", function($scope, mainService) {
	$scope.getUsers = function() {
		$scope.users = mainService.getUsers();
	}
	$scope.getUsers();
})