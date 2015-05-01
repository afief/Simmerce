var pageModule = angular.module("PageModule", []);

pageModule.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.
		when('/', {
			templateUrl: 'html/home.html',
			controller: 'HomeController',
			authenticate: false
		}).
		when('/cart', {
			templateUrl: 'html/cart.html',
			controller: "CartController",
			authenticate: false
		}).
		otherwise({
			redirectTo: '/'
		});
	}
	]);

pageModule.run(["$rootScope", function($root) {
	$root.purchaseItem = {}
}
]);

pageModule.controller('HomeController', ['$scope', '$rootScope', 'user', '$location', function($scope, $root, user, location){

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

	$root.purchaseItem = {};
	$scope.buyItem = function(selectedItem) {
		console.log(selectedItem);
		$root.purchaseItem.item = selectedItem;
		location.path("/cart");
	}

	$scope.numberWithCommas = numberWithCommas;

}]);

pageModule.controller('CartController', ['$scope', '$rootScope', 'user', '$location', function($scope, $root, user, $location) {
	console.log($root.purchaseItem.item);
	if ($root.purchaseItem.item) {
		$scope.hargaTotal = $root.purchaseItem.jumlah * $root.purchaseItem.item.harga;
		console.log($root.purchaseItem.item.jumlah, $root.purchaseItem.item.harga);
	} else {
		$location.path("/");
	}

	$scope.selectedItem = $root.purchaseItem.item;
	$scope.numberWithCommas = numberWithCommas;

}]);