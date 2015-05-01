var baseUrl = "";
var apiUrl = "api/";
(function() {
	var batikOL = angular.module("BatikOL", ["ngRoute", "PageModule", "UserModule"]);
})();

function numberWithCommas(x) {
	if (x)
		return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
	return "";
}