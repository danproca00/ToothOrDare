<?php
include "./connectToDB.php"
$nume_prenume=$_POST['nume_prenume'];
$varsta=$_POST['varsta'];
$email=$_POST['email'];
$proced=$_POST['proced'];
$data=$_POST['data'];
$doctor=$_POST['doctor'];


$sql = "insert into PROGRAMARE(ID, NUME_SI_PRENUME, VARSTA, ADRESA_EMAIL, PROCEDURA, DATA_SI_ORA, DOCTOR)
values($nume_prenume, $varsta, $email, $proced, $data, $doctor) " or die(nu a mers);
echo(a mers);

?>
