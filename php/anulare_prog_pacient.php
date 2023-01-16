<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: X-Requested-With");

include "./connectToDB.php";

$nume_pacient= $_POST['nume_pacient'];

$sql = "DELETE FROM PROGRAMARE_CLINICA WHERE NUME_SI_PRENUME='$nume_pacient'";



if ($conn->query($sql) === TRUE) {
    echo "Deleted successfully";
  } else {
    echo "Error: " . $sql ;
  }

$conn->close();

?>
