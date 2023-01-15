<?php
include "./connectToDB.php"
$adresa_email=$_POST['adresa_email'];
$parola=$_POST['parola'];



$sql = "insert into LogIn(ID, EMAIL, PAROLA)
values($adresa_email, $parola) " or die(nu a mers);
echo(a mers);

?>
