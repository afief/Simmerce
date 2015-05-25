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
		when('/admin', {
			templateUrl: 'html/admin.html',
			controller: 'AdminController',
			headerShow: true,
			authenticate: true
		}).
		when('/admin/lunas', {
			templateUrl: 'html/admin.html',
			controller: 'AdminLunasController',
			headerShow: true,
			authenticate: true
		}).

		when('/profile', {
			templateUrl: 'html/profile.html',
			controller: 'ProfileController',
			headerShow: true,
			authenticate: true
		}).
		when('/model', {
			templateUrl: 'html/model.html',
			controller: 'ModelController',
			headerShow: true,
			authenticate: true
		}).
		when('/editor/:ke', {
			templateUrl: 'html/editor.html',
			controller: 'EditController',
			headerShow: true,
			authenticate: true
		}).
		when('/order', {
			templateUrl: 'html/order.html',
			controller: 'OrderController',
			headerShow: true,
			authenticate: true
		}).
		when('/alamat', {
			templateUrl: 'html/alamat.html',
			controller: 'AlamatController',
			headerShow: true,
			authenticate: true
		}).
		when('/kostum/:parent', {
			templateUrl: 'html/kostumisasi.html',
			controller: 'KostumisasiController',
			headerShow: true,
			authenticate: true
		}).
		when('/cart', {
			templateUrl: 'html/cart.html',
			controller: "CartController",
			headerShow: true,
			authenticate: true
		}).
		when('/sk', {
			templateUrl: 'html/sk.html',
			headerShow: true,
			authenticate: false
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
pageModule.service("pesanan", function() {
	this.pilihan = {};
	this.jumlah = {};
	this.alamat = "";
	this.kota = "";
	this.kodepos = "";
	this.provinsi = "";
	this.status = "belum lunas";
	this.sudahDesain = false;
	this.image64 = "";
	this.reset = function() {
		this.sudahDesain = false;
		this.pilihan = {};
		this.jumlah = {};
		this.alamat = "";
		this.kota = "";
		this.kodepos = "";
		this.provinsi = "";
		this.image64 = "";
		this.status = "belum lunas";
	}
	this.compile = function() {
		return {
			image: this.image64,
			pesanan: JSON.stringify(this.pilihan),
			jumlah : JSON.stringify(this.jumlah),
			alamat : this.alamat,
			kota : this.kota,
			kodepos: this.kodepos,
			provinsi: this.provinsi,
			status : this.status
		}
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
	$root.numberWithCommas = numberWithCommas;
	$root.parseInt = parseInt;


	$root.keranjang = JSON.parse(localStorage.getItem('keranjang')) || [];
	$root.harga_dewasa = 117500;
	$root.harga_anak = 67500;
	$root.numCart = 0;
}
]);

pageModule.controller('IndexController', ['$scope', '$rootScope', 'user', '$location', function($scope, $root, user, $location){

}]);

pageModule.controller('ModelController', ['$scope', '$rootScope', 'user', '$location', function($scope, $root, user, $location){
	// $root.loadingSrv.show();
	// $scope.modelData = [];
	// user.getBatiks(-1).then(function(res) {
	// 	if (res.status) {
	// 		lgi(res.data);
	// 		$scope.modelData = res.data;
	// 	} else {
	// 		alert("Data batik kosong");
	// 	}
	// 	$root.loadingSrv.hide();
	// }, function() {
	// 	$root.loadingSrv.hide();
	// 	alert("Gagal mengambil data batik");
	// });
}])

pageModule.controller('KostumisasiController', ['$scope', '$rootScope', 'user', '$location', '$routeParams', function($scope, $root, user, $location, $routeParams){
	// $scope.jumlahBeli = 0;
	// $root.loadingSrv.show();
	// $scope.modelData = [];
	// user.getBatiks($routeParams.parent).then(function(res) {
	// 	if (res.status) {
	// 		lgi(res.data);
	// 		$scope.modelData = res.data;
	// 		$scope.currentModel = res.data[0];
	// 	} else {
	// 		alert("Data batik kosong");
	// 	}
	// 	$root.loadingSrv.hide();
	// }, function() {
	// 	$root.loadingSrv.hide();
	// 	alert("Gagal mengambil data batik");
	// });

	// $scope.changeModel = function(model) {
	// 	$scope.currentModel = model;
	// }

	// $scope.buyItem = function(model) {
	// 	if ($scope.jumlahBeli > 0) {
	// 		$root.keranjang.push({
	// 			model: model,
	// 			jumlah: $scope.jumlahBeli,
	// 			status: "belum lunas"
	// 		});
	// 		localStorage.setItem('keranjang', JSON.stringify($root.keranjang)); 
	// 		lg($root.keranjang[$root.keranjang.length-1]);
	// 		$location.path("/cart");
	// 	} else {
	// 		alert("Jumlah Pembelian harus lebih dari 0");
	// 	}
	// }
}]);

pageModule.controller('EditController', ['$scope', '$rootScope', 'user', '$location', "$routeParams", "pesanan",
	function($scope, $root, user, $location, $routeParams, pesanan){
		$scope.buyItem = function() {
			var str = "";
			try {
				str = window["main"].GetBitmap();
			} catch(er) {}
			try {
				str = window["main2"].GetBitmap();
			} catch(er) {}
			pesanan.image64 = str;

			pesanan.sudahDesain = true;
			window.dats = {};
			$location.path("/order");
		}

		if (isNaN($routeParams.ke) || ($routeParams.ke < 1) || ($routeParams.ke > 3)) {
			$location.path("/home");
			return;
		}

		$root.swf = "model" + $routeParams.ke;
		$root.modelke = $routeParams.ke;
		pesanan.reset();

		window.removeEventListener("desainDipilih", updateDesain);
		window.addEventListener("desainDipilih", updateDesain);
		function updateDesain() {
			pesanan.pilihan = window.dats;
			lg(window.dats);
		}
	}]);

pageModule.controller('OrderController', ['$scope', '$rootScope', 'user', '$location', "pesanan",
	function($scope, $root, user, $location, pesanan){

		if (!pesanan.sudahDesain) {
			$location.path("/model");
			return;
		}

	//lg(pesanan.image64);
	$scope.previewImage = pesanan.image64;

	user.getData().then(function(res) {
		if (res.status) {
			lg(res.data);
			$scope.currentModel = res.data[$root.modelke-1];

			pesanan.jumlah = {
				ayah: 1, ibu: 1, laki: 1, perempuan: 1
			}
			$scope.harga = {
				ayah: $scope.currentModel.harga_dewasa, 
				ibu: $scope.currentModel.harga_dewasa,
				laki: $scope.currentModel.harga_anak,
				perempuan: $scope.currentModel.harga_anak
			}
		}
	});
	$scope.totalHarga = function() {
		total = 0;
		for (var k in pesanan.jumlah) {
			if (pesanan.jumlah[k] < 0)
				pesanan.jumlah[k] = 0;
			pesanan.jumlah[k] = parseInt(pesanan.jumlah[k]);
			total += pesanan.jumlah[k] * $scope.harga[k];
		}
		$scope.jumlah = pesanan.jumlah;
		return total;
	}
	$scope.buyItem = function() {
		lgc();
		$location.path("/alamat");
	}

}]);

pageModule.controller('AlamatController', ['$scope', '$rootScope', 'user', '$location', "pesanan",
	function($scope, $root, user, $location, pesanan){

		if (!pesanan.sudahDesain) {
			$location.path("/model");
			return;
		}

		$scope.previewImage = pesanan.image64;
		$scope.ongkir = 10000;
		$scope.kota = "";
		$scope.alamat = "";
		$scope.kodepos = "";
		$scope.provinsi = "";

		$scope.buyItem = function() {
			pesanan.kota = $scope.kota;
			pesanan.alamat = $scope.alamat;
			pesanan.kodepos = $scope.kodepos;
			pesanan.provinsi = $scope.provinsi;

			$root.loadingSrv.show();
			user.setPesanan(pesanan.compile()).then(function(res) {
				$location.path("/cart");
				$root.loadingSrv.hide();
			}, function() {
				$root.loadingSrv.hide();
				alert("Gagal tersambung ke internet");
			});
		}
	}]);

pageModule.controller('ProfileController', ['$scope', '$rootScope', 'user', '$location', function($scope, $root, user, $location){

	$scope.profile = user.profile;
	$scope.simpanProfil = function() {
		$root.loadingSrv.show();
		user.updateProfil($scope.profile).then(function(res) {
			$root.loadingSrv.hide();
		}, function() {
			$root.loadingSrv.hide();
			alert("Simpan profil gagal");
		});
	}

}]);
pageModule.controller('HomeController', ['$scope', '$rootScope', 'user', '$location', function($scope, $root, user, $location){


}]);

pageModule.controller('AdminLunasController', ['$scope', '$rootScope', 'user', '$location', function($scope, $root, user, $location){
	$scope.title = "Pesanan Pelanggan Lunas"
	$scope.pesanan = [];
	user.getAllPesananLunas().then(function(res) {
		if (res.status) {
			$scope.pesanan = res.data;

			for (var i = 0; i < $scope.pesanan.length; i++) {
				$scope.pesanan[i].jumlah = JSON.parse($scope.pesanan[i].jumlah);
			}
			lgi($scope.pesanan);
		}
	});

	$scope.saveData = function() {
		var ids = [];
		for (var i = 0; i < $scope.pesanan.length; i++) {
			if ($scope.pesanan[i].status == "belum lunas")
				ids.push($scope.pesanan[i].id);
		}
		lgi("IDS", ids);

		$root.loadingSrv.show();
		user.belumLunasPesanan(ids).then(function(res) {
			if (res.status) {
				var i = 0;
				while (i < $scope.pesanan.length) {
					if (ids.indexOf($scope.pesanan[i].id) >= 0)
						$scope.pesanan.splice(i, 1);
					else
						i++;
				}
			}
			$root.loadingSrv.hide();
		}, function() {
			$root.loadingSrv.hide();
		});
	}
}]);
pageModule.controller('AdminController', ['$scope', '$rootScope', 'user', '$location', function($scope, $root, user, $location){
	$scope.title = "Pesanan Pelanggan Belum Lunas"
	$scope.pesanan = [];
	user.getAllPesanan().then(function(res) {
		if (res.status) {
			$scope.pesanan = res.data;

			for (var i = 0; i < $scope.pesanan.length; i++) {
				$scope.pesanan[i].jumlah = JSON.parse($scope.pesanan[i].jumlah);
			}
			lgi($scope.pesanan);
		}
	});

	$scope.saveData = function() {
		var ids = [];
		for (var i = 0; i < $scope.pesanan.length; i++) {
			if ($scope.pesanan[i].status == "lunas")
				ids.push($scope.pesanan[i].id);
		}
		lgi("IDS", ids);

		$root.loadingSrv.show();
		user.lunasPesanan(ids).then(function(res) {
			if (res.status) {
				var i = 0;
				while (i < $scope.pesanan.length) {
					if (ids.indexOf($scope.pesanan[i].id) >= 0)
						$scope.pesanan.splice(i, 1);
					else
						i++;
				}
			}
			$root.loadingSrv.hide();
		}, function() {
			$root.loadingSrv.hide();
		});
	}

}]);


pageModule.controller('CartController', ['$scope', '$rootScope', 'user', '$location', function($scope, $root, user, $location) {

	lgc();
	$scope.pesanan = [];
	$root.loadingSrv.show();
	user.getPesanan().then(function(res) {
		if (res.status) {
			$scope.pesanan = res.data;
			$root.numCart = $scope.pesanan.length;
			for (var i = 0; i < $scope.pesanan.length; i++) {
				$scope.pesanan[i].image = apiUrl + $scope.pesanan[i].image;
				$scope.pesanan[i].jumlah = JSON.parse($scope.pesanan[i].jumlah);
			}
		}
		$root.loadingSrv.hide();
	}, function() {
		$root.loadingSrv.hide();
	});

	$scope.totalHarga = function(jumlah) {
		return	jumlah.ayah * $root.harga_dewasa + jumlah.ibu * $root.harga_dewasa +
		jumlah.laki * $root.harga_anak + jumlah.perempuan * $root.harga_anak;
	}

}]);