var userModule = angular.module("UserModule", []);

userModule.factory("user", ["$http","$q", function($http, $q) {

	var key = window.localStorage.getItem("key") || "";
	var isLogin = false;

	function changeKey(newKey) {
		key = newKey;
		window.localStorage.setItem("key", key);
		console.log("change key", key);
	}
	serialize = function(obj, prefix) {
		var str = [];
		for(var p in obj) {
			if (obj.hasOwnProperty(p)) {
				var k = prefix ? prefix + "[" + p + "]" : p, v = obj[p];
				str.push(typeof v == "object" ?
					serialize(v, k) :
					encodeURIComponent(k) + "=" + encodeURIComponent(v));
			}
		}
		return str.join("&");
	}

	return {
		profile: {},
		getKey: function() {
			return key;
		},
		isLogin: function() {
			return isLogin;
		},
		login: function(credential) {
			var defer = $q.defer();
			var ini = this;

			$http.post(apiUrl + "login", serialize(credential)).
			success(function(data) {
				if (data.status) {
					changeKey(data.key);
					isLogin = true;		
					ini.cek();
					defer.resolve(data.key);
				} else {
					defer.reject(data.message);
				}
			}).
			catch(function(err) {
				defer.reject(err);
			});

			return defer.promise;
		},
		register: function(credential) {
			var defer = $q.defer();
			var ini = this;

			$http.post(apiUrl + "register", serialize(credential)).
			success(function(data) {
				if (data.status) {
					defer.resolve(true);
				} else {
					defer.reject(false);
				}
			}).
			catch(function(err) {
				defer.reject(err);
			});

			return defer.promise;
		},
		cek: function() {
			console.log("key", key);
			var defer = $q.defer();
			var ini = this;
			
			if (key == "")
				return $q.reject("no_key");

			$http.post(apiUrl + "user", serialize({key: key})).
			success(function(data, status) {
				if (data.status) {
					isLogin = true;
					ini.profile = data.data;
					defer.resolve(data.data);
				} else {
					defer.reject(data.message);
				}
			}).
			catch(function(err) {
				defer.reject(data.message);
			});

			return defer.promise;
		},
		changeKey: changeKey,
		logout: function() {
			var defer  = $q.defer();
			var promise = $http.post(apiUrl + "logout", serialize({key: key})).
			success(function(data) {
				if (data.status) {
					isLogin = false;
				}
				changeKey("");
				defer.resolve(true);
			}).
			catch(function(err) {
				changeKey("");
				defer.resolve(true);
			});

			return defer.promise;
		},

		getData: function() {
			var defer = $q.defer();
			var ini = this;

			$http.get(apiUrl + "data.json").
			success(defer.resolve).
			catch(defer.reject);

			return defer.promise;
		}
	}

}]);

// userModule.run(["user", function(user) {
// 	user.cek();
// }]);
// userModule.run(["$http", "user", function($http, user) {
// 	$http.defaults.headers.common.key = user.getKey();
// }]);

userModule.factory("connectivity", function() {
	return {
		checkStatus: function(hres) {
			if (hres.status <= 0)
				return "Koneksi mati. Mohon periksa kembali jaringan anda.";
			else if (hres <= 199)
				return "Gagal (" + hres.status + "): " + hres.statusText;
			else if (hres <= 299)
				return "Gagal mengambil data melalui akun anda. Cobalah untuk keluar, lalu masuk kembali ke aplikasi";
			else if (hres <= 399)
				return "Terjadi kesalahan koneksi. Koneksi dialihkan";
			else if (hres <= 499)
				return "Terjadi kesalahan ketika mengakses server.";
			else
				return "Terjadi kesalahan pada server. Hubungi administrator";
		}
	}
});