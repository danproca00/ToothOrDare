<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: X-Requested-With");

include "./connectToDB.php";

$emailLog= $_POST['emailLog'];

$sql = "DELETE FROM PROGRAMARE_CLINICA WHERE ADRESA_EMAIL='$emailLog'";



if ($conn->query($sql) === TRUE) {
    echo "Deleted successfully";
  } else {
    echo "Error: " . $sql ;
  }

$conn->close();

?>
