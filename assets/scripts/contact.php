<?php
$response;
if(isset($_POST['name']) && isset($_POST['email']) && isset($_POST['message'])){
	$KCLemail = "kelleycodelabs@gmail.com";
	$name = $_POST['name'];
	$email = $_POST['email'];
	$message = $_POST['message'];
	$phone = 'No phone number supplied.';
	$ip = 'none';
	if(isset($_SERVER['REMOTE_ADDR'])){
		$ip = $_SERVER['REMOTE_ADDR'];
	}
	if(isset($_POST['phone'])){
		$phone = $_POST['phone'];
	}

	$body = "<br><hr><br>Name: $name <br>Email: $email <br>Phone: $phone <br>Message: $message <br>IP: $ip";
		
	$headers = "From: $KCLemail\r\n";
	$headers .= "Content-type: text/html\r\n";
	
	$success = mail($KCLemail, "!!Message from the KCL website!!", $body, $headers);
	$response = array('success'=>$success);
}else{
	$response = array('success'=>false);
}

echo json_encode($response);
