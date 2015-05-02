var lg = console.log.bind(console);
var lgi = console.info.bind(console);
var lge = console.error.bind(console);
var lgw = console.warn.bind(console);

var __page = function(val) {
	lg("%c" + val, "background-color:blue; padding: 2px 8px; color: white");
};

var baseUrl = "";
var apiUrl = "api/";
(function() {

	var batikOL = angular.module("BatikOL", ["ngRoute", "PageModule", "HeaderModule", "UserModule"]);

	batikOL.run(['$rootScope', '$location', 'user', '$route', 'loadingSrv', function($root, $location, user, $route, loadingSrv) {
		$root.$on('$routeChangeStart', function(e, curr, prev) {
			//lg("change route start", e);
			if (!curr.$$route) {
				e.preventDefault();
				return;
			}

			var authenticate = curr.$$route.authenticate || false;

			/* Kalau yang dibuka BUKAN page login, dan user tidak login, masuk ke page login */
			if (authenticate && !user.isLogin()) {

				e.preventDefault();
				user.cek().then(function(res) {

					if (prev && (curr.$$route.originalPath != prev.$$route.originalPath))
						$location.path(curr.$$route.originalPath);
					else
						$route.reload();

					loadingSrv.isShow = false;
				}, function() {
					lg("masuk");
					$location.path("/login");
					loadingSrv.isShow = false;
				});

				/* Kalau yang dibuka page login, dan user login, kembali ke page sebelumnya */
			}

			loadingSrv.isShow = true;
		});

		$root.$on('$routeChangeSuccess', function(e, curr, prev) {
			//lg("change route end", e);

			$root.headerShow = curr.$$route.headerShow;

			if (((curr.$$route.originalPath == "/login") || (curr.$$route.originalPath == "/register"))&& user.isLogin()) {

				if (prev && prev.$$route && (prev.$$route.originalPath != curr.$$route.originalPath)) {
					lg(prev.$$route.originalPath);
					$location.path(prev.$$route.originalPath);
				}
				else {
					$location.path("/");
				}
			}

			loadingSrv.isShow = false;
		});
	}]);

})();

function numberWithCommas(x) {
	if (x)
		return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
	return "";
}