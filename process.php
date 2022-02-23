<?php
	$uname = $_POST['user'];
	$pwd = $_POST['pass'];

	$mysqli = new mysqli("localhost", "root", "", "login");

	$uname = stripcslashes($uname);
	$pwd = stripcslashes($pwd);
	$uname = $mysqli->real_escape_string($uname);
	$pwd = $mysqli->real_escape_string($pwd);


	$result = mysqli_query($mysqli, "SELECT * FROM `users` WHERE username = '".$uname."' AND password = '".$pwd."'");

	$num_rows = mysqli_num_rows($result);

	if($num_rows>0)
		header('Location: Page1.html');
	else
		echo "Failed";

?>