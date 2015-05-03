var userModule = angular.module("UserModule", [], ["$httpProvider", function($httpProvider) {
	$httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
}]);

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
					defer.reject(data.message);
				}
			}).
			catch(function(err) {
				defer.reject(err);
			});

			return defer.promise;
		},
		cek: function() {
			lgi("cek", key);
			var defer = $q.defer();
			var ini = this;
			
			if (key == "")
				return $q.when({status: false});

			$http.post(apiUrl + "user", serialize({key: key})).
			success(function(data, status) {
				lgi("cek", data.status);
				if (data.status) {
					isLogin = true;
					ini.profile = data.data;
					defer.resolve(data);
				} else {
					defer.resolve(data);
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
		updateProfil: function(profil) {
			var defer = $q.defer();
			var ini = this;

			$http.post(apiUrl + "updateprofile", serialize(profil)).
			success(defer.resolve).
			catch(defer.reject);

			return defer.promise;
		},

		getData: function() {
			var defer = $q.defer();
			var ini = this;

			$http.get(apiUrl + "data.json").
			success(defer.resolve).
			catch(defer.reject);

			return defer.promise;
		},
		getBatiks: function(parent) {
			lg("getBatiks", parent.toString());
			var defer = $q.defer();
			var ini = this;

			$http.get(apiUrl + "/batik/" + parent.toString()).
			success(defer.resolve).
			catch(defer.reject);

			return defer.promise;
		},
		setPesanan: function(data) {
			lgi("set pesanan", data);
			var defer = $q.defer();
			var ini = this;

			$http.post(apiUrl + "/pesan", serialize(data)).
			success(defer.resolve).
			catch(defer.reject);

			return defer.promise;
		},
		getPesanan: function() {
			var defer = $q.defer();
			var ini = this;

			$http.get(apiUrl + "/pesanan").
			success(defer.resolve).
			catch(defer.reject);

			return defer.promise;
		}
	}

}]);

userModule.run(["user", "$rootScope", function(user, $root) {
	user.cek().then(function() {
		user.getPesanan().then(function(res) {
			if (res.status) {
				$root.numCart = res.data.length;
			}
		});
	});
}]);
userModule.run(["$http", "user", function($http, user) {
	$http.defaults.headers.common.key = user.getKey();
}]);

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