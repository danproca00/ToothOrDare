<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: X-Requested-With");

include "./connectToDB.php";

$name= $_POST['name2'];

$sql = "SELECT NUME_SI_PRENUME FROM PROGRAMARE_CLINICA WHERE DOCTOR='$name'";

$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
    echo json_encode(array($row["NUME_SI_PRENUME"]));
    }
    } else {
    
    }


?>
