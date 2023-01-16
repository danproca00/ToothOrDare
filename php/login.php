<?php
header('Access-Control-Allow-Origin: *');

header('Access-Control-Allow-Methods: GET, POST');

header("Access-Control-Allow-Headers: X-Requested-With");
include "./connectToDB.php";
$emailLog= $_POST['emailLog'];
$parolaLog= $_POST['parolaLog'];
$hashed_password = password_hash($parolaLog, PASSWORD_DEFAULT);

$sql = "INSERT INTO LOG_IN(EMAIL, PAROLA)
VALUES ('$emailLog', '$parolaLog')";

if ($dbh->query($sql) === TRUE) {
  echo "New record created successfully";
} else {
  echo "Error: " . $sql ;
}

?>

