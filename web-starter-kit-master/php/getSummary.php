<?php
require_once "../database_config.php";
$db = new mysqli($servername, $username, $password, $database_name);
if ($db->connect_errno){ // are we connected properly?
	exit("Failed to connect to MySQL: (" . $db->connect_errno . ") " . $db->connect_error);
}

$cmd = $_POST['cmd'];
$output = array();

if ($cmd == 'register') {
	$email = $_POST['email'];
	$sql = "SELECT * FROM users WHERE email = '" . $db->escape_string($email) . "'";
	$result = $db->query($sql);
	if ( $result->num_rows > 0 ) {
		$output['status'] = "error";
		$output['message'] = "Already registered";
	} else {
			$sql = "INSERT INTO users(email) VALUES('" . $db->escape_string($email) . "')";
			$db->query($sql);
			$output['status'] = "success";
			$output['message'] = "User registerd";
	}
} else if ($cmd == 'login') {
	$email = $_POST['email'];
	$sql = "SELECT * FROM users WHERE email = '" . $db->escape_string($email) . "'";
	$result = $db->query($sql);
	if ( $result->num_rows > 0 ) {
		$output['status'] = "success";

	} else {
		$output['status'] = "error";
	}
} else if ($cmd == 'retrieve') {
	$email = $_POST['email'];
	$sql = "SELECT * FROM users WHERE email = '" . $db->escape_string($email) . "'";
	$result = $db->query($sql);
	if ( $result->num_rows > 0 ) {
		$user = $result->fetch_assoc();
		$sql = "SELECT u1.email user1, u2.email user2, records.amount FROM records, users u1, users u2 WHERE records.user1 = u1.id AND records.user2 = u2.id AND records.user1 = " . intval($user['ID']) . " OR records.user2 = " . intval($user['ID']) . "";
		$result = $db->query($sql);
		while ( $row = $result->fetch_assoc() ) {
			$output['record'][] = $row;
		}
	} else {
		$output['status'] = "error";
		$output['message'] = "no such user";
	}
} else if ($cmd == 'add') {
	$user1 = $_POST['email1'];
	$user2 = $_POST['email2'];
	$amount = $_POST['amount'];
	$uid1 = 0
	$uid2 = 0;

	$sql = "SELECT * FROM users WHERE email = '" . $db->escape_string($email1) . "'";
	$result = $db->query($sql);
	if ( $result->num_rows > 0 ) {
		$user = $result->fetch_assoc();
		$uid1 = $user["ID"];
	}

	$sql = "SELECT * FROM users WHERE email = '" . $db->escape_string($email2) . "'";
	$result = $db->query($sql);
	if ( $result->num_rows > 0 ) {
		$user = $result->fetch_assoc();
		$uid2 = $user["ID"];
	}

	$sql = "INSERT INTO records(user1, user2, amount) VALUES(" . $uid1 . ", " . $uid2 . ", " . $amount . ")";
	$db->query($sql);
}

echo json_encode($output);

?>
