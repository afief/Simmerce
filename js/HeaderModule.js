var headerModule = angular.module("HeaderModule", []);

headerModule.directive('headerDir', function(){
	return {
		restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
		replace: true,
		controller: "headerCtrl",
		templateUrl: 'html/header.html'
	};
});
headerModule.directive('footerDir', function(){
	return {
		restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
		replace: true,
		controller: "footerCtrl",
		templateUrl: 'html/footer.html'
	};
});


headerModule.controller('headerCtrl', ['$scope', "user", function($scope, user){
	lg("Header");
}]);
headerModule.controller('footerCtrl', ['$scope', "user", function($scope, user){
	lg("Header");
}]);