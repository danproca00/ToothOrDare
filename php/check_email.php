<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: X-Requested-With");
include "./connectToDB.php";
$email= $_GET['email'];
$sql = "SELECT ADRESA_EMAIL FROM SIGN_IN WHERE ADRESA_EMAIL='$email'";

$result = mysqli_query($conn, $sql);
    // verificarea rezultatului
    if(mysqli_num_rows($result) > 0){
        echo json_encode(array('exists' => true));
    }else{
        echo json_encode(array('exists' => false));
    }
    mysqli_close($conn);



?>
