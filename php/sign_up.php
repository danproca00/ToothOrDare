<?php
header('Access-Control-Allow-Origin: *');

header('Access-Control-Allow-Methods: GET, POST');

header("Access-Control-Allow-Headers: X-Requested-With");
include "./connectToDB.php";
$email= $_POST['email'];
$parolaS= $_POST['parolaS'];
$nume = $_POST['nume'];
$tip = $_POST['tip'];
$hashed_password = password_hash($parolaS, PASSWORD_DEFAULT);

$sql = "INSERT INTO SIGN_IN(NUME, ADRESA_EMAIL, PAROLA, TIP)
VALUES ('$nume','$email', '$parolaS', '$tip')";

if ($conn->query($sql) === TRUE) {
  echo "New record created successfully";
} else {
  echo "Error: " . $sql ;
}

?>

