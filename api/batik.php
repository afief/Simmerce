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

$app->post("/pesan", function() {
	global $db;

	$id_user = getUserIdByKey(getHeaders("key"));
	$data = getPosts();
	
});