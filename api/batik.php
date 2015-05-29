<?php

$app->get("/batik/:parent", function($parent) {

	global $db;

	$result = new stdClass();
	$result->status = false;

	$res = $db->select("tik_batiks", "*", ['OR' => ["parent" => $parent, 'id' => $parent]]);
	if ($res) {
		$result->status = true;
		$result->data = $res;
	}

	echo json_encode($result);
});
$app->get("/batiks", function() {

	global $db;

	$result = new stdClass();
	$result->status = false;

	$res = $db->select("tik_batiks", "*", ["ORDER" => "timestamp DESC"]);
	if ($res) {
		for ($i = 0; $i < count($res); $i++) {
			$res[$i]["harga_dewasa"] = intval($res[$i]["harga_dewasa"]);
			$res[$i]["harga_anak"] = intval($res[$i]["harga_anak"]);
		}
		$result->status = true;
		$result->data = $res;
	}

	echo json_encode($result);
});
$app->post("/batiks", function() {

	global $db;

	$result = new stdClass();
	$result->status = true;

	$data = getPosts();
	if (isset($data["batiks"])) {
		$batiks = $data["batiks"];
		for ($i = 0; $i < count($batiks); $i++) {
			$db->update("tik_batiks", [
				"nama" => $batiks[$i]["nama"],
				"keterangan" => $batiks[$i]["keterangan"],
				"harga_dewasa" => $batiks[$i]["harga_dewasa"],
				"harga_anak" => $batiks[$i]["harga_anak"]],
				["id" => $batiks[$i]["id"]]);
		}
	}

	echo json_encode($result);
});


$app->get("/pesanan", function() {
	global $db;

	$result = new stdClass();
	$result->status = false;

	$id_user = getUserIdByKey(getHeaders("key"));
	$res = $db->select("tik_pesanan", "*", ["id_user" => $id_user]);
	if ($res) {
		$result->status = true;
		$result->data = $res;		
	}

	echo json_encode($result);
});

$app->get("/ongkir", function() {
	global $db;

	$result = new stdClass();
	$result->status = false;

	$res = $db->select("tik_options", ["name", "value"], ["name" => ["pulau_jawa", "luar_jawa"]]);
	if ($res) {
		$result->status = true;
		$result->data = new stdClass();
		$result->data->pulau_jawa = intval($res[0]["value"]);
		$result->data->luar_jawa = intval($res[1]["value"]);
	}

	echo json_encode($result);
});
$app->post("/ongkir", function() {
	global $db;

	$result = new stdClass();
	$result->status = false;

	$pulau_jawa = getPosts("pulau_jawa");
	$luar_jawa = getPosts("luar_jawa");

	$ujawa = $db->update("tik_options", ["value" => $pulau_jawa], ["name" => "pulau_jawa"]);
	$uluar = $db->update("tik_options", ["value" => $luar_jawa], ["name" => "luar_jawa"]);
	if ($ujawa || $uluar) {
		$result->status = true;
	}

	echo json_encode($result);
});

$app->get("/semua_pesanan", function() {
	global $db;

	$result = new stdClass();
	$result->status = false;

	$res = $db->select("tik_pesanan", ["[>]me_users" => ["id_user" => "id"]], 
		["me_users.username", "me_users.email", "me_users.nama", "tik_pesanan.id", "tik_pesanan.jumlah", "tik_pesanan.ukuran", "tik_pesanan.alamat", "tik_pesanan.kota",
		"tik_pesanan.kodepos", "tik_pesanan.provinsi", "tik_pesanan.image", "tik_pesanan.status"],
		["tik_pesanan.status" => "belum lunas"]);
	if ($res) {
		$result->status = true;
		$result->data = $res;		
	}

	echo json_encode($result);
});
$app->get("/semua_pesanan_lunas", function() {
	global $db;

	$result = new stdClass();
	$result->status = false;

	$res = $db->select("tik_pesanan", ["[>]me_users" => ["id_user" => "id"]], 
		["me_users.username", "me_users.email", "me_users.nama", "tik_pesanan.id", "tik_pesanan.jumlah", "tik_pesanan.ukuran", "tik_pesanan.alamat", "tik_pesanan.kota",
		"tik_pesanan.kodepos", "tik_pesanan.provinsi", "tik_pesanan.image", "tik_pesanan.status"],
		["tik_pesanan.status" => "lunas"]);
	if ($res) {
		$result->status = true;
		$result->data = $res;		
	}

	echo json_encode($result);
});

$app->post("/lunas_pesanan", function() {
	global $db;

	$result = new stdClass();
	$result->status = false;

	$ids = getPosts("ids");

	$res = $db->update("tik_pesanan", ["status" => "lunas"], ["id" => $ids]);
	if ($res) {
		$result->status = true;
	}

	echo json_encode($result);
});

$app->post("/belumlunas_pesanan", function() {
	global $db;

	$result = new stdClass();
	$result->status = false;

	$ids = getPosts("ids");

	$res = $db->update("tik_pesanan", ["status" => "belum lunas"], ["id" => $ids]);
	if ($res) {
		$result->status = true;
	}

	echo json_encode($result);
});

$app->post("/updateprofile", function() {
	global $db;

	$result = new stdClass();
	$result->status = false;

	$id_user = getUserIdByKey(getHeaders("key"));
	$data = getPosts();
	$update = $db->update("me_users", $data, ["id" => $id_user]);
	if ($update) {
		$result->status = true;
	}

	echo json_encode($result);
});

$app->post("/pesan", function() {
	global $db;

	$result = new stdClass();
	$result->status = false;

	$id_user = getUserIdByKey(getHeaders("key"));
	$data = getPosts();

	$imageurl = "";
	if (isset($data["image"])) {
		$image = $data["image"];
		$imageurl = "../uploads/" . uniqid() . $id_user . ".jpg";
		base64_to_jpeg($image, $imageurl);
	}
	
	$baris = $db->insert("tik_pesanan", [
			"id_user" => $id_user,
			"ref" => makeUniqueId(5),
			"pesanan" => $data["pesanan"],
			"ukuran" => $data["ukuran"],
			"jumlah" => $data["jumlah"],
			"alamat" => $data["alamat"],
			"kota" => $data["kota"],
			"kodepos" => $data["kodepos"],
			"provinsi" => $data["provinsi"],
			"ongkir" => $data["ongkir"],
			"image" => $imageurl,
			"status" => $data["status"],
		]);
	if ($baris) {
		$result->status = true;
	} else {
		$result->message = "gagal";
	}

	echo json_encode($result);
});

function base64_to_jpeg($base64_string, $output_file) {
    $ifp = fopen($output_file, "wb");

    fwrite($ifp, base64_decode($base64_string)); 
    fclose($ifp); 

    return $output_file; 
}