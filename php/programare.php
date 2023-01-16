<?php
header('Access-Control-Allow-Origin: *');

header('Access-Control-Allow-Methods: GET, POST');

header("Access-Control-Allow-Headers: X-Requested-With");
include "./connectToDB.php";

$nume_prenume=$_POST['nume_prenume'];
$varsta=$_POST['varsta'];
$email=$_POST['email'];
$proced=$_POST['proced'];
$data=$_POST['data'];
$doctor=$_POST['doctor'];

$sql = "INSERT INTO PROGRAMARE_CLINICA(NUME_SI_PRENUME,VARSTA,ADRESA_EMAIL,PROCEDURA,DATA_SI_ORA,DOCTOR)
VALUES ('$nume_prenume', '$varsta', '$email', '$proced','$data', '$doctor')";

if ($conn->query($sql) === TRUE) {
  echo "New record created successfully";
} else {
  echo "Error: " . $sql ;
}

?>
