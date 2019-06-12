<?php

if (isset($_POST['submit')) {
	$name = $_POST['yourname'];
	$email = $_POST['youremail'];
	$message = $_POST['message'];
	
	$mailTo = "memieosuga@gmail.com";
	$headers = "From: ".$email;
	$txt = "You have received a new message from".name.".\n\n".$message;

	mail($mailTo, $txt, $headers);
	header("Location: index.php?mailsend");
}

?>