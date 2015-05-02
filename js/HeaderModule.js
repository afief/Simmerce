var headerModule = angular.module("HeaderModule", []);

headerModule.directive('headerDir', function(){
	return {
		restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
		replace: true,
		controller: "headerCtrl",
		templateUrl: 'html/header.html'
	};
});

headerModule.controller('headerCtrl', ['$scope', "user", function($scope, user){
	lg("Header");
}]);