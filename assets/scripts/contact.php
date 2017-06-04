<?php
$response;
if(isset($_POST['name']) && isset($_POST['email']) && isset($_POST['phone']) && isset($_POST['message'])){
	$name = $_POST['name'];
	$email = $_POST['email'];
	$phone = $_POST['phone'];
	$message = $_POST['message'];

	$body = "<br><hr><br>Name: $name <br>Email: $email <br>	Phone: $phone <br>	Message: $message <br>";
		
	$headers = "From: kelleycodelabs@gmail.com\r\n";
	$headers .= "Content-type: text/html\r\n";
	
	$success = mail("kelleycodelabs@gmail.com", "!!Message from the KCL website!!", $body, $headers);
	$response = array('success'=>$success);
}else{
	$response = array('success'=>false);
}

echo json_encode($response);
