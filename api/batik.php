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
			"pesanan" => $data["pesanan"],
			"jumlah" => $data["jumlah"],
			"alamat" => $data["alamat"],
			"kota" => $data["kota"],
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