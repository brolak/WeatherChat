app.controller('mainCtrl', function($scope,weatherService) {
	$scope.cityList = weatherService.data;
	console.log($scope.cityList);
})