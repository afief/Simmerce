var pageModule = angular.module("PageModule", []);

pageModule.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.
		when('/', {
			templateUrl: 'html/home.html',
			controller: 'HomeController',
			authenticate: false
		}).
		otherwise({
			redirectTo: '/'
		});
	}
	]);

pageModule.controller('HomeController', ['$scope', 'user', function($scope, user){

	$scope.items = [];
	$scope.selectedItem = {};
	user.getData().then(function(res) {
		console.info(res);
		if (res.status) {
			$scope.items = res.data;
			$scope.selectedItem = $scope.items[0];
		}
	});
	$scope.thumbClick = function(item) {
		$scope.selectedItem = item;
	}

}])
