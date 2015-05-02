var pageModule = angular.module("PageModule", []);

pageModule.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.
		when('/', {
			templateUrl: 'html/index.html',
			controller: 'IndexController',
			headerShow: true,
			authenticate: false,
			resolve: {
				authenticated: ["user", '$q', function(user, $q) {
					return user.cek();
				}]
			}
		}).
		when('/login', {
			templateUrl: 'html/login.html',
			headerShow: false,
			authenticate: false,
			resolve: {
				authenticated: ["user", '$q', function(user, $q) {
					return user.cek();
				}]
			}
		}).
		when('/home', {
			templateUrl: 'html/home.html',
			controller: 'HomeController',
			headerShow: true,
			authenticate: true
		}).
		when('/profile', {
			templateUrl: 'html/profile.html',
			controller: 'ProfileController',
			headerShow: true,
			authenticate: true
		}).
		when('/cart', {
			templateUrl: 'html/cart.html',
			controller: "CartController",
			headerShow: true,
			authenticate: true
		}).
		otherwise({
			redirectTo: '/'
		});
	}
	]);

pageModule.directive('loadingDir', function(){
	return {
		restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
		replace: true,
		templateUrl: 'html/loading.html',
		controller: ["$scope", function($scope) {
		}]
	};
});
pageModule.service("loadingSrv", function() {
	this.isShow = false;
	this.show = function() {
		this.isShow = true;
	}
	this.hide = function() {
		this.isShow = false;
	}
});


pageModule.run(["$rootScope", "user", "$location", 'loadingSrv', function($root, user, $location, loadingSrv) {
	$root.registerData = {};
	$root.registerSubmit = function() {
		$root.loadingSrv.show();
		user.register($root.registerData).then(function() {
			$root.loginData = $root.registerData;
			$root.loginSubmit();
			$root.loadingSrv.hide();
		}, function(err) {
			$root.loadingSrv.hide();
			alert("Register Failed " + err);
		});
	}

	$root.loginData = {};
	$root.loginSubmit = function() {
		$root.loadingSrv.show();
		user.login($root.loginData).then(function(key) {
			$location.path("/home");
			$root.loadingSrv.hide();
		}, function(err) {
			$root.loadingSrv.hide();
			alert("Login Failed " + err);
		});
	}
	$root.changePath = function(path) {
		lgi("changepath", path);
		$location.path(path);
	}

	$root.logoutUser = function() {
		$root.loadingSrv.show();
		user.logout().then(function() {
			$location.path("/");
			$root.loadingSrv.hide();
		});
	}

	$root.user = user;
	$root.loadingSrv = loadingSrv;
}
]);

pageModule.controller('IndexController', ['$scope', '$rootScope', 'user', '$location', function($scope, $root, user, $location){

	// $root.loadingSrv.show(); 
	// user.cek().then(function() {
	// 	$location.path("/home");
	// 	$root.loadingSrv.hide();
	// }, function() {
	// 	$root.loadingSrv.hide();
	// });

}]);

pageModule.controller('ProfileController', ['$scope', '$rootScope', 'user', '$location', function($scope, $root, user, location){


}]);
pageModule.controller('HomeController', ['$scope', '$rootScope', 'user', '$location', function($scope, $root, user, location){


}]);

pageModule.controller('CartController', ['$scope', '$rootScope', 'user', '$location', function($scope, $root, user, $location) {


}]);